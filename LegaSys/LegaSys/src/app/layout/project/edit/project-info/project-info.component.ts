import { Component, OnInit, Output, EventEmitter ,Input} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatFormField, MatFormFieldControl, MatTabChangeEvent, MatSnackBar } from '@angular/material';

import { SharedService } from '../../../Shared/shared.service';
import { FormControl, Validators,FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
// import { Project,Client,Domain,Resource } from '../project/projectModel';
import { Project } from '../../projenctModel';
import { routerTransition } from '../../../../router.animations';
import { SnackBarComponentExampleComponent } from '../../../project/snack-bar-component-example/snack-bar-component-example.component';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ok } from 'assert';


@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss']
})
export class ProjectInfoComponent implements OnInit {
  @Output('onprojectinformationChange') onprojectinformationChange  = new EventEmitter<any>(); //used  to emit event to parent controller 
  @Input('projectInformation') currentProjectDetails: Project; 
  @Input('currentProjectDetailsBackup') currentProjectDetailsBackup: Project;
projectinfo:FormGroup;
  projectid: any;
  projectdetails: any;
  date: Date;
  TechnicalDomainList: any;
  disable: Boolean = true;
  isSave: boolean;
  constructor(private route: ActivatedRoute, public dataService: SharedService,
    private router: Router, private project: Project, public snackBar: MatSnackBar) {
    const id = this.route.snapshot.paramMap.get('ProjectID');
    this.projectid = id;
    this.dataService.GetProjectById(id).subscribe(
      res => {
        debugger;
        this.projectdetails = res;
        this.date = new Date('12/11/2018'); //demo date
        console.log("project details:" + JSON.stringify(this.projectdetails));
        // }
      }, error => {
        alert("Invalid Request!");
        this.router.navigate(['/project']);
        const errorresult = 'No Result';
      }
    );
    this.GetAllTechDomain();
  }

  ngOnInit() {
debugger;
    console.log("current"+ JSON.stringify(this.currentProjectDetails) );
   
  }
  edit() {
    //this.disableSummary = true;
    this.disable = false;

    this.isSave = true;

    //this.isCancelVisible= true;

}
onCancelClick() {  
  this.isSave = false;
  //this.disableSummary = true;
  this.disable = true;
}
save(){
  // this.currentProjectDetails.ProjectName=this.projectinfo.controls['Title'].value ;
  // this.currentProjectDetails.Description =this.projectinfo.controls['ProjectDescription'].value ;
  // this.currentProjectDetails.ProjectDomain_ID =this.projectinfo.controls['ProjectDomain_ID'].value ;
 this.onprojectinformationChange.emit(this.currentProjectDetails);
 this.onCancelClick();
 
}
  public GetAllTechDomain() {
    this.dataService.getalltechdomains().subscribe(
      res => {
        this.TechnicalDomainList = res;
      }
    );
  }
}
