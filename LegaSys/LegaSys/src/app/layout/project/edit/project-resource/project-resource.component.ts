import { Component, OnInit, Input, Inject, ViewChild } from '@angular/core';
import { ProjectAll, ProjectResources } from '../../projectModel';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatSort, MatPaginator, MatSnackBar } from '@angular/material';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { SharedService } from '../../../Shared/shared.service';
import { Router, RouterLinkWithHref } from '@angular/router';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpClientModule, HttpResponse, HttpRequest } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ResourceService } from '../../../../layout/resource/resource.service';
import { Resource } from '../../../../layout/resource/resource.model';
import { FormArray, FormControl, FormGroup, FormGroupDirective, FormBuilder, Validators, NgModel, ValidatorFn, AbstractControl } from '@angular/forms';
import { SnackBarComponentExampleComponent } from '../../../project/snack-bar-component-example/snack-bar-component-example.component';

import { RowContext } from '@angular/cdk/table';
import * as $ from 'jquery';
import { DialogComponent } from '../../../../layout/masters/dialog/dialog.component';
import { forEach } from '@angular/router/src/utils/collection';



@Component({
    selector: 'app-project-resource',
    templateUrl: './project-resource.component.html',
    styleUrls: ['./project-resource.component.scss']
})
export class ProjectResourceComponent implements OnInit {
    @Input('resourceDetails') resourcedetails: ProjectAll;
    resourceRow: ProjectResources;
    projectid: any;
    resourcelist: any;
    aResourceList: any;
    //datasource: any;
    datasource: any;
    shift: Resource[];
    shiftid: number;
    resourcename: string;
    projecttitle: string;
    isSelected: boolean;
    isEdit: boolean = false;
    disable: boolean;
    row: ProjectAll;
    newrow: ProjectAll;
    updatedtime: string;
    updatedtimeid: number;
    formType = "Add";
    msid: number;
    amsid: number;
    aShift: string;
    aResource_Id: number;
    isAdd: boolean;
    isSubmit: boolean = false;
    datasourcebackup: any;

    AddResourceInfoForm: FormGroup;
    ResourceInfoForm: FormGroup;
    ResourcesList: any;
    ids: number[] = [];
    //panelOpenState: boolean = false;
    initialresourcecounts: number;
    finalresourcecounts: number;
    project: any;
    datachanged: string = "";
    isDisableAddButton: boolean = true;
    ShowAddbtn: boolean = true;
    //@ViewChild(MatPaginator) paginator: MatPaginator;
    // @ViewChild(MatSort) sort: MatSort;
    displayedColumns = ['ProjectID', 'Resource_ID', 'ResourceName', 'TotalExp', 'ResourceEmailId', 'Shift', 'ReportingHeadName', 'Master_Role', 'actions'];
    // paginator: any;
    // sort: any;
    constructor(private route: ActivatedRoute, private http: HttpClient, @Inject(SESSION_STORAGE) private storage: StorageService,
        private apiService: SharedService, private router: Router, private formBuilder: FormBuilder, public dialog: MatDialog, public dataService: ResourceService, public snackBar: MatSnackBar) {

        const id = this.route.snapshot.paramMap.get('ProjectID');
        this.projectid = id;
        this.RenderDataTable();
        this.isSelected = false;
        //this.isEdit=false;
        this.disable = false;


    }

    ngOnInit() {
        $(document).ready(function () {
            // var shifttime;
            // $(".mat-select-value-text span").change(function(){
            //     shifttime= $(".mat-select-value-text span").html();
            //     alert(shifttime);
            // });

        });
        this.isSubmit = false;
        //console.log("ngoninit resource details"+ JSON.stringify(this.resourcedetails));




        this.ResourceInfoForm = this.formBuilder.group({
            ResourceName: [''],
            shiftName: [''],
            Master_Shift_ID: ['']

        });
        this.AddResourceInfoForm = this.formBuilder.group({
            aResourceName: [''],
            aShiftName: [''],
            aMaster_Shift_ID: ['']

        });

        this.dataService.getShift()
            .subscribe((data: Resource[]) => {
                //debugger;
                this.shift = data;
            });
        this.apiService.getAllProject()
            .subscribe(
                res => {
                    this.project = res;
                    //debugger;
                    // this.dataSource = new MatTableDataSource(this.project);
                    // this.dataSource.paginator = this.paginator;
                    // this.dataSource.sort = this.sort;
                    //console.log("project"+JSON.stringify (this.project));
                },
                error => {
                    console.log('There was an error while retrieving Posts !!!' + error);
                });
        this.projectid = this.resourcedetails.ProjectID;

    }
    selectedRowIndex: number;

    Highlight(row) {
        //alert(row.Resource_ID);
        //console.log("highlight" + JSON.stringify(row));
        // this.newrow=row;
        this.formType = "Update";
        this.resourceRow = row;
        this.isAdd = false;
        //alert(JSON.stringify(this.resourceRow));
        //row.Shift="12345" ;
        // row.Master_Shift_ID=;

        this.selectedRowIndex = row.Resource_ID;
        this.isSelected = true;
        //this.isEdit= false;
        //this.projectid = this.resourcedetails.ProjectID;
        //this.shiftid=row.Master_Shift_ID;
        //this.resourcename=row.ResourceName;
        this.ResourceInfoForm.controls['ResourceName'].setValue(row.ResourceName);
        this.ResourceInfoForm.controls['shiftName'].setValue(row.Master_Shift_ID);
        this.msid = row.Master_Shift_ID;

        this.disable = true;
        this.isEdit = false;
        //alert(this.resourcename+' '+this.shiftid+' '+this.projecttitle);
    }

    RenderDataTable() {
        debugger;
        this.apiService.getAllResourceOnProject(this.projectid)
            .subscribe(
                res => {
                    this.resourcelist = res;
                    //this.uresourcelist = this.resourcelist;// this list will be used for saving the edited record without effecting original record
                    //
                    this.datasource = new MatTableDataSource(this.resourcelist);
                    this.initialresourcecounts = this.datasource.data.length;
                    this.datasourcebackup = JSON.parse(JSON.stringify(this.resourcelist)); //for checking the number of resources working on project
                    // this.datasource.paginator = this.paginator;
                    // this.datasource.sort = this.sort;
                    //console.log(" RenderDataTable resource list" + JSON.stringify(this.resourcelist));
                },
                error => {
                    console.log('There was an error while retrieving Posts !!!' + error);
                });


    }
    OnSelectionChange($event: any) {
        this.msid = $event.value;
        //console.log("msid: " + this.msid);

    }
    Edit() {
        //alert();       
        this.disable = false;
        this.isEdit = true;

    }
    UpdateRow() {

        debugger;
        var shifttime = $(".mat-select-value-text span").html();
        //alert(this.msid);
        //var noRecordUpdated = 0;

        //var msid=
        // let abc = this.newrow;
        // console.log(abc);
        //alert(shifttime);
        if (this.formType == "Update") {
            //debugger;
            //var recordexist = false;
            if (this.resourceRow.ResourceName !== "" && this.resourceRow.Master_Shift_ID !== 0) {

                for (var i in this.datasource.data) {
                    if (this.datasource.data[i].Resource_ID == this.resourceRow.Resource_ID) {
                        if (this.datasource.data[i].Master_Shift_ID == this.msid) {
                            //recordexist = true;
                            this.snackBar.open("Record already exists", "Ok", {
                                duration: 5000,

                            });
                            break;
                        }
                        else {
                            this.datasource.data.forEach(element => {
                                if (element.Resource_ID == this.selectedRowIndex) {
                                    if (element.Master_Shift_ID != this.msid) {
                                        element.Shift = shifttime;
                                        element.Master_Shift_ID = this.msid;
                                        //flag = 0;
                                        //noRecordUpdated=1;
                                        element.ReportingHeadName = this.resourceRow.ReportingHeadName;
                                        element.Master_Role = this.resourceRow.Master_Role;
                                        element.ResourceEmailId = this.resourceRow.ResourceEmailId;
                                        element.TotalExp = this.resourceRow.TotalExp;
                                        element.ResourceName = this.resourceRow.ResourceName;
                                        element.ProjectResourceID = this.resourceRow.ProjectResourceID;
                                    }
                                }
                            });
                            this.isSubmit = true;
                            for (var i in this.datasourcebackup) {
                                if (this.datasourcebackup[i].Resource_ID == this.resourceRow.Resource_ID) {
                                    this.datasourcebackup[i].Master_Shift_ID = this.msid;
                                }
                            }
                            break;


                        }
                    }

                }

                // if (recordexist != true) {

                // }

                // else {
                //     this.datasource.data.forEach(element => {
                //         if (element.Resource_ID == this.selectedRowIndex) {
                //             element.ProjectResourceID = this.resourceRow.ProjectResourceID;
                //             element.ResourceName = this.resourceRow.ResourceName;
                //             element.TotalExp = this.resourceRow.TotalExp;
                //             element.ResourceEmailId = this.resourceRow.ResourceEmailId;
                //             //element.Master_Shift_ID = this.resourceRow.Master_Shift_ID;
                //             //element.Shift = this.resourceRow.Shift;
                //             element.ReportingHeadName = this.resourceRow.ReportingHeadName;
                //             element.Master_Role = this.resourceRow.Master_Role;
                //         }
                //     });
                // }
            }

        }
    }
    DiscardRow() {
        this.isSelected = false;
        this.ResetChanges();
        //this.ResetResourceInfoForm();
    }


    RemoveResource(row) {
        // console.log("remove  " + JSON.stringify(row));       

        const dialogRef = this.dialog.open(DialogComponent, {
            width: '325px',
            data: { status: "Remove", confirm: true }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                //add code here to remove the row from the datasource
                //debugger;
                const data = this.datasource.data.filter(item => item.Resource_ID !== row.Resource_ID);

                this.datasource.data = data;
                this.finalresourcecounts = data.length;
                if (data.length == 0) // if no more data remaining in the datasource
                {
                    this.isSelected = false;
                    this.isSubmit = true;
                }
                for (var i = 0; i < this.datasourcebackup.length; i++) {
                    if (this.datasourcebackup[i].Resource_ID == row.Resource_ID) {
                        this.datasourcebackup[i].ResourceStatus = 0;
                    }
                }

                // this.datasourcebackup.forEach(element => {
                //     if (element.Resource_ID == row.Resource_ID) {
                //         element.Status = 0;
                //     }
                // });
                this.checkCount();

                //this.ResourcesList.push(row);
                //find the unique ids in the 
                var uniq = this.ids.reduce(function (a, b) {
                    if (a.indexOf(b) < 0) a.push(b);
                    return a;
                }, []);
                var u = uniq.filter(x => x != row.Resource_ID);
                this.ids = u;
                //this.ResourceInfoForm.reset();
                //  
                this.isSelected = false;
                // this.isSubmit = false;
                this.ResourceInfoForm.reset();
            }
        });
    }
    AddResourceClick() {
        //debugger;

        this.formType = "Add";
        this.isAdd = true;
        this.isSubmit = true;
        //alert(this.AddResourceInfoForm.controls['aResourceName'].value);

        if (this.AddResourceInfoForm.controls['aResourceName'].value == undefined || this.AddResourceInfoForm.controls['aResourceName'].value == "") {
            this.isDisableAddButton = true;
        }
        //this.panelOpenState = true;

        // this.datasource.forEach(element => {
        //     ids.push(element.Resource_ID);            
        // });
        for (var i in this.datasource.data) {
            if (this.datasource.data[i].ProjectResourceID != 0) {
                this.ids.push(this.datasource.data[i].Resource_ID);
            }
        }
        this.finalresourcecounts = this.datasource.data.length;
        //console.log(this.ids);

        //var u = uniq.filter(x => x != row.Resource_ID);
        //this.ids = u;
        this.BindResourceList(this.ids);
        this.ShowAddbtn = true;

    }

    BindResourceList(ids) {
        //debugger;
        var uniq = this.ids.reduce(function (a, b) {
            if (a.indexOf(b) < 0) a.push(b);
            return a;
        }, []);
        this.ids = uniq;
        this.apiService.getAvailableResourceOnProject(this.ids).subscribe(
            res => {
                this.ResourcesList = res;

                // this.datasource.paginator = this.paginator;
                // this.datasource.sort = this.sort;
                //console.log("ResourceList" + JSON.stringify(this.ResourcesList));
                if (this.ResourcesList.length == 0) {
                    this.isAdd = false;
                    this.ShowAddbtn = false;
                }
            });
        //const data= this.ResourcesList.filter(this.ids);
        //console.log(data);   
        // console.log("ResourceList" + JSON.stringify(this.ResourcesList));
        // if(this.ResourcesList==undefined)
        // {
        //     this.isAdd=false;
        // }
    }

    SetResourceShift($event: any, option: any) {
        debugger;
        //console.log(this.test);
        //console.log(option.ResourceName);
        this.isDisableAddButton = false;
        this.aResourceList = option; //store resource data for saving to datasource using aResourceList,type of single project,selected resource from list
        //console.log("aResourceList: " +JSON.stringify( this.aResourceList));


        this.aResource_Id = option.Resource_ID;
        // console.log("aResourceId: "+this.aResource_Id);
        //this.AddResourceInfoForm.controls['aShiftName'].setValue(this.amsid);
        //debugger;
        for (var i in this.ResourcesList) {
            if (this.ResourcesList[i].Resource_ID == this.aResource_Id) {
                this.amsid = this.ResourcesList[i].Master_Shift_ID;
                break;
            }
        }
        this.AddResourceInfoForm.controls['aShiftName'].setValue(this.amsid);
        //console.log(this.AddResourceInfoForm.controls['aShiftName'].value);
        //var t=$('#txtName').val();
        // alert(t);

    }
    OnAShiftChange($event: any, option: any) {
        //console.log("OnAShiftChange:" +option);
        //debugger;
        //this.amsid = $event.value;
        this.amsid = this.AddResourceInfoForm.controls['aShiftName'].value;
        //get the selected dropdown value and name of the shift        
        for (var i = 0; i < option.length; i++)
            if (option[i].ShiftID == this.amsid) {
                this.aShift = option[i].StartTimeIST + " - " + option[i].EndTimeIST;
                break;
            }

        if (this.aResourceList.Resource_ID == this.aResource_Id) {
            this.aResourceList.Master_Shift_ID = this.amsid;
            this.aResourceList.Shift = this.aShift;
        }
        //console.log("on change after shift change"+JSON.stringify(this.aResourceList));
    }
    PushData() {
        debugger;
        //loop for data in datasource and check if the data already exist or not
        // if (this.datasource.data.length > 0) {
        if (this.datasource.data.length == 0) {
            this.PushD();
        }
        else {
            for (var i in this.datasource.data) {

                if (this.datasource.data[i].Resource_ID == this.aResource_Id && this.datasource.data[i].Master_Shift_ID == this.amsid) {
                    this.snackBar.open("Record already exists", "Ok", {
                        duration: 5000,

                    });
                    return;
                }
                else {
                    this.PushD();
                    break;
                }
            }
        }

    }

    PushD() {
        debugger;
        const data = this.datasource.data;
        //console.log("before pushing to datasource"+JSON.stringify(this.aResourceList));
        if (this.aResourceList.ProjectID == 0 || this.aResourceList.ProjectID == undefined) {
            this.aResourceList.ProjectID = this.projectid;
        }
        data.push(this.aResourceList);

        this.datasource.data = data;

        // if(this.datasourcebackup.data.length==0)
        // {
        //     this.datasourcebackup.push(this.aResourceList);
        // }
        //rebind the select list without the newly inserted resource        
        //console.log("resource details on PUSHD()" + JSON.stringify(this.resourcelist));
        this.ids.push(this.aResourceList.Resource_ID);

        this.ResetAddResourceInfoForm();


    }
    ResetAddResourceInfoForm() {

        // this.isAdd=false;
        debugger;
        this.AddResourceInfoForm.reset();
        this.isDisableAddButton = true;
        this.isSelected = false;
        // this.AddResourceInfoForm.controls['aResourceName'].setValue("");
        //this.AddResourceInfoForm.controls['aShiftName'].setValue("");
        // this.AddResourceInfoForm.controls['aMaster_Shift_ID'].setValue("");
        this.BindResourceList(this.ids);
        //this.AddResourceInfoForm.controls['aResourceName'].markAsUntouched();
    }

    // ResetResourceInfoForm() {
    //     this.isSelected = false;
    //     this.isSubmit=false;
    //     this.ResourceInfoForm.reset();
    //     // this.ResourceInfoForm.controls['ResourceName'].setValue("");
    //     // this.ResourceInfoForm.controls['ShiftName'].setValue("");
    //     // this.ResourceInfoForm.controls['Master_Shift_ID'].setValue(0);

    //     if (this.datachanged.length! > 0) {
    //         this.RenderDataTable();
    //     }

    // }
    ResetChanges() {
        // this.AddResourceClick();

        this.RenderDataTable();
        this.ids = [];
        //  for (var i in this.datasource.data) {
        //     if (this.datasource.data[i].ProjectResourceID != 0) {
        //         this.ids.push(this.datasource.data[i].Resource_ID);
        //     }
        // }
        //alert(this.ids);
        this.BindResourceList(this.ids);
        this.isSubmit = false;
        this.isSelected = false;

    }
    Submit() {
        debugger;
        // if (this.datasource.data.length == 0) {
        //     //remove all the resources from the project
        //     //console.log("submit  " + JSON.stringify(this.datasource.data));
        //     this.datasource.data.ProjectID = this.projectid;
        // }
        //console.log("resource details before submit from backup" + JSON.stringify(this.datasourcebackup));


        const lengthofbackup = this.datasourcebackup.length;
        if (lengthofbackup == 0) {
            //this.datasourcebackup.push(this.datasource.data);
            for (var i = 0; i < this.datasource.data.length; i++) {

                this.datasourcebackup.push(this.datasource.data[i]);
            }
        }
        else {
            for (var i = 0; i < lengthofbackup; i++) {
                for (var j = 0; j < this.datasource.data.length; j++) {
                    //if (this.datasourcebackup[i].Resource_ID !== this.datasource.data[j].Resource_ID && (this.datasource.data[j].ProjectID == 0 ||this.datasource.data[j].ProjectID==undefined ) && this.datasource.data[j].ResourceStatus == null) {
                    if (this.datasourcebackup[i].Resource_ID !== this.datasource.data[j].Resource_ID && (this.datasource.data[j].ResourceStatus == null || this.datasource.data[j].ResourceStatus == 0)) {
                        this.datasource.data[j].ResourceStatus = 1;
                        this.datasourcebackup.push(this.datasource.data[j]);
                    }
                }
            }
        }


        if (this.resourcedetails.projectResources == undefined) {
            this.resourcedetails.projectResources = new Array<ProjectResources>();
        }

        const len = this.datasourcebackup.length;
        for (var i = 0; i < len; i++) {
            this.datasourcebackup.map(item => {
                return {
                    Resource_ID: item.Resource_ID,
                    ResourceName: item.ResourceName,
                    TotalExp: item.TotalExp,
                    ResourceEmailId: item.ResourceEmailId,
                    ResourceMobileNumber: item.ResourceMobileNumber,
                    Resource_IsActive: item.Resource_IsActive,
                    Master_Shift_ID: item.Master_Shift_ID,
                    Shift: item.Shift,
                    Master_Location_ID: item.Master_Location_ID,
                    Location: item.Location,
                    ReportingHead_ID: item.ReportingHead_ID,
                    ReportingHeadName: item.ReportingHeadName,
                    Master_Role_ID: item.Master_Role_ID,
                    Master_Role: item.Master_Role,
                    ProjectResourceID: item.ProjectResourceID,
                    ResourceStatus: item.ResourceStatus,
                }
            });
        }
        this.resourcedetails.projectResources = new Array<ProjectResources>();
        // this.resourcedetails.projectResources.push(this.datasourcebackup);
        for (var i = 0; i < this.datasourcebackup.length; i++) {

            this.resourcedetails.projectResources.push(this.datasourcebackup[i]);
        }




        this.apiService.mapResourceOnProject(this.resourcedetails).subscribe(
            res => {
                console.log(res);
                this.snackBar.open('Resource Updated successfully', 'ok', { duration: 2500 });
                this.RenderDataTable();
                this.isSubmit = false;
                this.isSelected = false;

            });
    }
    checkCount() {
        if (this.initialresourcecounts != this.finalresourcecounts) {
            this.isSubmit = true;
        }
    }

    onNoClick(): void {
        this.router.navigate(['project']);
    }

    applyFilter(filterValue: string) {
        debugger;
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.datasource.filter = filterValue;
    }

}

