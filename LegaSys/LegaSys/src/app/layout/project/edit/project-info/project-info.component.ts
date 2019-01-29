import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatFormField, MatFormFieldControl, MatTabChangeEvent, MatSnackBar } from '@angular/material';

import { SharedService } from '../../../Shared/shared.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
// import { Project,Client,Domain,Resource } from '../project/projectModel';
import { Project } from '../../projenctModel';
import { routerTransition } from '../../../../router.animations';
import { SnackBarComponentExampleComponent } from '../../../project/snack-bar-component-example/snack-bar-component-example.component';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ok } from 'assert';
import { ProjectAll } from '../../projectModel';



@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss']
})
export class ProjectInfoComponent implements OnInit {
  @Output('onprojectinformationChange') onprojectinformationChange = new EventEmitter<any>(); //used  to emit event to parent controller 
  @Input('projectInformation') currentProjectDetails: Project;
  @Input('projectInformationbackup') currentProjectDetailsBackup: Project;
  projectinfo: FormGroup;
  projectid: any;
  projectdetails: any;
  date: Date;
  TechnicalDomainList: any;
  disable: Boolean = true;
  isSave: boolean;
  durationtime:string;
  constructor(private route: ActivatedRoute, public dataService: SharedService,
    private router: Router, private project: Project, public snackBar: MatSnackBar) {
    
    this.GetAllTechDomain();
  }

  ngOnInit() {
    debugger;
    console.log("current oninit" + JSON.stringify(this.currentProjectDetails));
    console.log("current backup oninit" + JSON.stringify(this.currentProjectDetailsBackup));

    var model = JSON.parse(JSON.stringify(this.currentProjectDetails));
    this.durationtime= this.calcDuration(model.Start_Date, model.End_Date);
  }
  edit() {
    //this.disableSummary = true;
    this.disable = false;

    this.isSave = true;

    //this.isCancelVisible= true;

  }
  onCancelClick() {
    this.currentProjectDetails=this.currentProjectDetailsBackup;
    this.calcDuration(this.currentProjectDetails.Start_Date,this.currentProjectDetails.End_Date);  
    this.isSave = false;
    //this.disableSummary = true;
    this.disable = true;
    
  }
  onNoClick(): void {
    this.router.navigate(['project']);
  }
  save() {
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

  calcDuration(sDate, eDate) {
    debugger;

    var startDate = new Date(sDate);
    var endDate;
    if (eDate == undefined) {
      endDate = new Date();
    }
    else {
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
    var duration = Year + " Year(s) " + month + " Month(s) " + Days + " Day(s)";
    this.durationtime=duration;
    return duration;

  }

                  
}
