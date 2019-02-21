import { Component, OnInit, Output, EventEmitter, Input, Injectable } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatFormField, MatFormFieldControl, MatTabChangeEvent, MatSnackBar } from '@angular/material';

import { SharedService } from '../../../Shared/shared.service';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
// import { Project,Client,Domain,Resource } from '../project/projectModel';
import { Project } from '../../projenctModel';
import { routerTransition } from '../../../../router.animations';
import { SnackBarComponentExampleComponent } from '../../../project/snack-bar-component-example/snack-bar-component-example.component';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ok } from 'assert';
import { ProjectAll } from '../../projectModel';
import { EditComponent } from '../edit.component';



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
  durationtime: string;
  constructor(private route: ActivatedRoute, public dataService: SharedService,
    private router: Router, private project: Project, public snackBar: MatSnackBar, private summary: EditComponent, private formBuilder: FormBuilder) {

    this.GetAllTechDomain();
  }

  ngOnInit() {
    // debugger;
    // console.log("current oninit" + JSON.stringify(this.currentProjectDetails));
    // console.log("current backup oninit" + JSON.stringify(this.currentProjectDetailsBackup));
    
    var model = JSON.parse(JSON.stringify(this.currentProjectDetails));
    this.durationtime = this.calcDuration(model.Start_Date, model.End_Date);
    this.CreateProjectInfoForm();
    
    this.SetProjectInfo();

  }
  edit() {
    //this.disableSummary = true;
    this.disable = false;

    this.isSave = true;

    //this.isCancelVisible= true;

  }
  onCancelClick() {
    this.currentProjectDetails = this.currentProjectDetailsBackup;
    this.SetProjectInfo();
    this.calcDuration(this.currentProjectDetails.Start_Date, this.currentProjectDetails.End_Date);
    this.isSave = false;
    //this.disableSummary = true;
    this.disable = true;

  }
  onNoClick(): void {
    this.router.navigate(['project']);
  }
  save() {
    debugger;
    
    this.currentProjectDetails.ProjectName=this.projectinfo.controls['Title'].value ;
    this.currentProjectDetails.Description =this.projectinfo.controls['ProjectDescription'].value ;
    this.currentProjectDetails.ProjectDomain_ID =this.projectinfo.controls['ProjectDomain_ID'].value ;
    this.currentProjectDetails.Start_Date =this.projectinfo.controls['Start_Date'].value ;
    this.currentProjectDetails.End_Date =this.projectinfo.controls['End_Date'].value ;    
    this.onprojectinformationChange.emit(this.currentProjectDetails);
    //this.onCancelClick();
     this.isSave = false;
    // //this.disableSummary = true;
     this.disable = true;

  }
  public GetAllTechDomain() {
    this.dataService.getalltechdomains().subscribe(
      res => {
        this.TechnicalDomainList = res;
      }
    );
  }

  calcDuration(sDate, eDate) {
    //debugger;

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
    this.durationtime = duration;
    return duration;

  }

  CompareDates(group: FormGroup) {
    let s_date = new Date( group.controls['Start_Date'].value);
    let e_date = new Date( group.controls['End_Date'].value);
    if (e_date == null) {
      return null;

    }
    else if (e_date > s_date) {
      // alert("done");
      return null;

    }
    else {
      return group.controls['End_Date'].setErrors({ CompareDates: true });

    }
  }
  CreateProjectInfoForm() {
    this.projectinfo = this.formBuilder.group({
      ProjectID: ['', Validators.required],
      Title: ['', Validators.required],
      ProjectDescription: ['',],
      ProjectDomain_ID: ['', Validators.required],
      Start_Date: ['', Validators.required],
      End_Date: [''],
      ProjectDuration: ['']
    }, {
        validator: this.CompareDates // your validation method
      });


  }
  SetProjectInfo() {
    debugger;
    this.projectinfo.controls['ProjectID'].setValue(this.currentProjectDetails.ProjectID);
    this.projectinfo.controls['Title'].setValue(this.currentProjectDetails.Title.trim());
    this.projectinfo.controls['ProjectDescription'].setValue(this.currentProjectDetails.Description.trim());
    this.projectinfo.controls['ProjectDomain_ID'].setValue(this.currentProjectDetails.ProjectDomain_ID);
    this.projectinfo.controls['Start_Date'].setValue(this.currentProjectDetails.Start_Date);
    this.projectinfo.controls['End_Date'].setValue(this.currentProjectDetails.End_Date);
    this.projectinfo.controls['ProjectDuration'].setValue(this.durationtime);
  }
  //white space or empty strting validation
  TrimString(controlname:string){  
    debugger;  
    this.projectinfo.controls[controlname].setValue(this.projectinfo.controls[controlname].value.trim());    
  }
  
}
