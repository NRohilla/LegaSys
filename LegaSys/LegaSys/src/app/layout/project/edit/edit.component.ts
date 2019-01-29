import { MAT_DIALOG_DATA, MatDialogRef, MatFormField, MatFormFieldControl, MatTabChangeEvent, MatSnackBar } from '@angular/material';
import { Component, Inject, OnInit } from '@angular/core';
import { SharedService } from '../../Shared/shared.service';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
// import { Project,Client,Domain,Resource } from '../project/projectModel';
import { Project} from '../projenctModel';
import { routerTransition } from '../../../router.animations';
import { SnackBarComponentExampleComponent } from '../../project/snack-bar-component-example/snack-bar-component-example.component';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ok } from 'assert';
import {ProjectInfoComponent} from './project-info/project-info.component';
import {ProjectClientComponent} from './project-client/project-client.component';
import {ProjectResourceComponent} from './project-resource/project-resource.component';
import {ProjectTaskComponent} from './project-task/project-task.component'
@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss'],
    animations: [routerTransition()]
})
export class EditComponent implements OnInit {
    projectdetails: any;
    clientdetails: any;
    resourcedetails: any;
    taskdetails: any;
    disable: Boolean = true;
    editvisible: Boolean = false;
    savevisible: Boolean = false;
    Status: any;
    Shift: any;
    Location: any;
    ReportingHead: any;
    Role: any;
    disablediv: Boolean = true;
    disableSummary: Boolean = true;
    date: Date;
    TechnicalDomainList: any;
    Technologylist: any;
    isshown: Boolean = false;
    ishidden: Boolean = false;
    isSave: Boolean = false;
    isCancelVisible: Boolean = false;
    isCancelDisabled = false;
    notfound: Boolean = false;
    projectid: any;
    projectdetailsbackup: Project;

    constructor(private route: ActivatedRoute, public dataService: SharedService,
        private router: Router, public project: Project, public snackBar: MatSnackBar) {
        const id = this.route.snapshot.paramMap.get('ProjectID');
        this.projectid = id;
        debugger;
        this.dataService.GetProjectById(id).subscribe(
            res => {
                //debugger;
                //if (res.message = 'Record Not Found.') {
                //  this.notfound = true;

                // } else {
                //debugger;
                
                this.projectdetails = res;
                this.projectdetailsbackup=JSON.parse(JSON.stringify(res));
                this.clientdetails = res;                
                this.date = new Date('12/11/2018');                
                 //debugger;
                this.resourcedetails = res;
                this.taskdetails = res;
                //console.log("projectdetails: " +JSON.stringify(this.projectdetails) );
                // }
            }, error => {
                alert("Invalid Request!");
                this.router.navigate(['/project']);
                const errorresult = 'No Result';
            }
        );        
        this.GetAllClientStatus();
        this.GetAllShift();
        this.GetAllLocation();
        this.GetAllReportingHead();
        this.GetAllRole();
        this.GetAllTechDomain();



    }
    formControl = new FormControl('', [
        Validators.required
    ]);
    ngOnInit() {}

    getErrorMessage() {
        return this.formControl.hasError('required') ? 'Required field' :
            this.formControl.hasError('email') ? 'Not a valid email' :
                '';
    }
    submit() {

    }

    onLinkClick(event: MatTabChangeEvent) {
        if (event.index == 0) {
            this.isCancelDisabled = false;
            this.dataService.GetProjectById(this.projectid).subscribe(res => { this.projectdetails = res; });
        }

        this.disablediv = true;
    }

    onNoClick(): void {
        this.router.navigate(['project']);
    }
    onCancelClick() {

        this.dataService.GetProjectById(this.projectid).subscribe(res => { this.projectdetails = res; });
        this.isSave = false;
        //this.disableSummary = true;
        this.disable = true;
    }
    edit() {
        //this.disableSummary = true;
        this.disable = false;

        this.isSave = true;

        //this.isCancelVisible= true;

    }
    save(projectdetails:Project) {
        debugger;
        this.dataService.updateProject(this.projectdetails).subscribe(
            res => {
                sessionStorage.setItem('message', 'updated');
                //this.openSnackBar();  
                this.snackBar.open('Project edited successfully', 'ok', { duration: 2500 });
                this.dataService.getAllProject();
                this.disable = true;
                this.isSave = false;
            });


    }
   
    GetPlaceHolder(controlName: string) {
        if (!this.disable) {
            switch (controlName) {
                case 'ProjectDomain_ID': return "Select Technical Domain ";
                case 'ProjectStartDate': return "Select Start Date";
                case 'ProjectEndDate': return "Select End Date";
            }
        }
        else {
            return " ";
        }
    }
    public GetAllClientStatus() {
        this.dataService.getallclientstatus().subscribe(
            res => {
                this.Status = res;
            });
    }
    public GetAllShift() {
        this.dataService.getallshift().subscribe(
            res => {
                this.Shift = res;
            });
    }

    public GetAllLocation() {
        this.dataService.getalllocation().subscribe(
            res => {
                this.Location = res;
            });
    }
    public GetAllReportingHead() {
        this.dataService.getallreportinghead().subscribe(
            res => {
                this.ReportingHead = res;
            });
    }
    public GetAllRole() {
        this.dataService.getallrole().subscribe(
            res => {
                this.Role = res;
            });
    }
    public GetAllTechDomain() {
        this.dataService.getalltechdomains().subscribe(
            res => {
                this.TechnicalDomainList = res;
                //console.log("TechnicalDomainList:"+JSON.stringify(this.TechnicalDomainList) )
            }
        );
    }
    openSnackBar() {
        this.snackBar.openFromComponent(SnackBarComponentExampleComponent, {
            duration: 1000,
        });
    }
    Nav(clientid:any){
        //alert(clientid);
        sessionStorage.setItem("currentClientID", clientid);    
    this.router.navigate(['/client-details']);

    }
    calcDuration(sDate, eDate){
       // debugger;
    
        var startDate = new Date(sDate);
        var endDate;
        if(eDate==undefined){
          endDate = new Date();
        }
        else{
          endDate = new Date(eDate);
        }
        
        var increment;    
        /// new Array<Duraaastion>(); 
    
        var Days = parseInt((endDate.getDate() - startDate.getDate()).toString().replace('-', ''));
        var month;
        if ((startDate.getMonth()) > endDate.getMonth()) {
          month = (endDate.getMonth() + 12) - (startDate.getMonth());
          increment = 1;
        }
        else {
          month = (endDate.getMonth()) - (startDate.getMonth());
          increment = 0
        }
        var Year = endDate.getFullYear() - (startDate.getFullYear() + increment);
    
      //  var tottalExpy=tottalExpy+Year;
      //  var tottalExpm=tottalExpm+month;
      //  if(tottalExpm>12){
      //  tottalExpy+=1;
      //    tottalExpm=tottalExpm-12;
      //  }
      //  var tottalExpd=tottalExpd+Days;
      //  {
      //    if(tottalExpd>30){
      //   tottalExpm+=1;
      //     tottalExpd=tottalExpd-30;
      //    }
      //  }       
        var duration=Year+" Year(s) "+month+" Month(s) "+Days+" Day(s)";
        return duration;
         
      }
}
