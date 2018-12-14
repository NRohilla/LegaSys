import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.scss']
})
export class EdittaskComponent implements OnInit {

  //Declaration
  responce: any;
  Id: any;
  dataSource: any = []
  taskeditForm: FormGroup;
  disable: boolean = true;
  myclients: any = [];
  myprojects: any
  isReadOnly: boolean = true;
  issreadOnly = true;

  constructor(public Formbuilder: FormBuilder, public dataService: TasksService, public router: Router, public toastr: ToastrManager) {

    this.taskeditForm = this.Formbuilder.group
      ({
        //Validators.pattern(/^[a-zA-Z0-9]+$/) if needed will change
        TaskTitle: ['', [Validators.required, Validators.maxLength(25)]],
        Description: [''],
        Project_ID: [0, Validators.required],
        ClientName: ['', Validators.required],
      });
  }

  ngOnInit() {

    //Fetching Id From Session.
    this.Id = sessionStorage.getItem("currentId");
    this.GetTaskByID(this.Id);
    this.GetClientName();
    this.GetProject();
  }

  

  // Method For Fetch Data
  GetTaskByID(ID) {
    debugger;
    this.dataService.GetProjectTaskbyId(ID).subscribe(
      res => {
        this.dataSource = res;
        //console.log("datasource" + JSON.stringify(this.dataSource));
      },
      err => {
        console.log(err);
      }
    );
  }

  //Method For Update data
  UpdateTaskByID() {
    this.taskeditForm.value.ProjectTaskID = this.Id;
    this.dataService.UpdateProjectTaskDetail(this.taskeditForm.value).subscribe(
      res => {
        //console.log(res);
        this.showSuccess();
        this.MakeFieldEditable();
        //this.router.navigate(['/ListTasksPath']); 
      },
      err => {
        console.log(err);
      }
    );
  }

  //method for form Disable on load
  MakeFieldEditable() {
    if (this.disable) {
      this.disable = false;
      this.issreadOnly = false;
      this.isReadOnly = false;
    }
    else {
      this.disable = true;
      this.isReadOnly = true;
      this.issreadOnly = true;
    }
  }

  //method for binding drop down Client name
  GetClientName() {
    debugger;
    this.dataService.GetAllClients().subscribe
      (
      data => {
        //console.log("data from Clients:" + JSON.stringify(data));
        this.myclients = data;		// FILL THE ARRAY WITH DATA.
      },
      (err) => {
        console.log(err);
      }
      );
  }

  GetProject() {
    this.dataService.GetAllProjects().subscribe
      (
      data => {
        //console.log("data from Projects:" + JSON.stringify(data));
        this.myprojects = data;		// FILL THE ARRAY WITH DATA.
      },
      (err) => {
        console.log(err);
      }
      );
  }


  //Toster Notifications
  showSuccess() {
    this.toastr.successToastr('Task Updated Successfully', 'Success!');
  }

  showCancel() {
    this.toastr.infoToastr('Task Cancelled', 'Cancel');
  }
}
  









