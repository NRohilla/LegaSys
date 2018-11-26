import { MAT_DIALOG_DATA, MatDialogRef, MatFormField, MatFormFieldControl , MatTabChangeEvent} from '@angular/material';
import { Component, Inject, OnInit } from '@angular/core';
import { SharedService } from '../../Shared/shared.service';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
// import { Project,Client,Domain,Resource } from '../project/projectModel';
import {Project,Client,Domain,Resource} from '../projenctModel';
import { routerTransition } from '../../../router.animations';
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
    savevisible: Boolean = true;
    Status: any;
    Shift: any;
    Location: any;
    ReportingHead: any;
    Role: any;
    disablediv: Boolean = true;
    disableSummary: Boolean =  true;
    date:Date;
    TechnicalDomainList:any;
    Technologylist:any;
    
    notfound: Boolean =  false;
    constructor(private route: ActivatedRoute, public dataService: SharedService,
        private router: Router, private project: Project) {
        const id = this.route.snapshot.paramMap.get('ProjectID');
        debugger;
        this.dataService.GetProjectById(id).subscribe(
            res => {
                debugger;
                //if (res.message = 'Record Not Found.') {
                  //  this.notfound = true;

               // } else {
                   debugger;
                   console.log(res);
                this.projectdetails = res;
                this.clientdetails = res;
                this.date=new Date('12/11/2018');
                debugger;
                console.log(this.date);
                this.resourcedetails = res;
                this.taskdetails = res;
           // }
            }, error => {
                alert("Invalid Request!");
               this.router.navigate(['/project']);
        const errorresult = 'No Result';
            }
            );
            this.dataService.GetAllTechnologyByDomain(id).subscribe(
                res=>{
                console.log(res);
                this.Technologylist= res;
                },error => {
                    alert("Invalid Domain!");
                //    this.router.navigate(['/project']);
            const errorresult = 'No Result';
                }
            );
            this.GetAllClientStatus();
            this.GetAllShift();
            this.GetAllLocation();
            this.GetAllReportingHead();
            this.GetAllRole();



    }
    formControl = new FormControl('', [
        Validators.required
    ]);
    ngOnInit() {
    }
    getErrorMessage() {
        return this.formControl.hasError('required') ? 'Required field' :
            this.formControl.hasError('email') ? 'Not a valid email' :
                '';
    }
    submit() {

    }

onLinkClick(event: MatTabChangeEvent) {
if (event.index == 1 || event.index == 2 || event.index == 3) {
this.disablediv = false;
} else {

    this.disablediv = true;
}
            // debugger;
            // console.log('event => ', event);
            // console.log('index => ', event.index);
            // console.log('tab => ', event.tab);
    }
    onNoClick(): void {
        this.router.navigate(['project']);
    }
    edit() {
        this.disableSummary = true;
         this.disable = false;
         this.editvisible = true;
         this.savevisible = false;
    }
    save() {
        this.dataService.updateProject( this.projectdetails).subscribe(
            res => {
                this.dataService.getAllProject();
                this.disable = true;
                this.editvisible = false;
                this.savevisible = true;
            });


    }
    public GetAllClientStatus() {
        this.dataService. getallclientstatus().subscribe(
           res => {
               this.Status = res;
           });
   }
   public GetAllShift() {
    this.dataService. getallshift().subscribe(
       res => {
           this.Shift = res;
       });
   }

   public GetAllLocation() {
    this.dataService. getalllocation().subscribe(
       res => {
           this.Location = res;
       });
   }
   public GetAllReportingHead() {
    this.dataService. getallreportinghead().subscribe(
       res => {
           this.ReportingHead = res;
       });
   }
   public GetAllRole() {
    this.dataService. getallrole().subscribe(
       res => {
           this.Role = res;
       });
   }
   public GetAllTechDomain()
   {
      this.dataService.getalltechdomains().subscribe(
          res=>{
              this.TechnicalDomainList=res;
          }
      ); 
   }
}
