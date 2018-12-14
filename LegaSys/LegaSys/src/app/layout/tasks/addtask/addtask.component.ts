import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { TaskModel } from '../tasks.component';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.scss']
})
export class AddtaskComponent implements OnInit {

  taskForm: FormGroup;
  myclients: any = []
  public files: any[];
  myModel: TaskModel;
 
  constructor(public Formbuilder: FormBuilder, public dataService: TasksService, public router: Router, public toastr: ToastrManager) {
    this.files = [];
    this.myModel = new TaskModel();
  }

  ngOnInit() {
    this.taskForm = this.Formbuilder.group
      ({
        //,Validators.pattern(/^[a-zA-Z0-9]+$/)
        TaskTitle: ['', [Validators.required, Validators.maxLength(25)]],
        Description: [''],
        Project_ID: ['', Validators.required],
        ClientName: ['', Validators.required],

      });

    //calling get client method
    this.GetClientName();
  }

  //tOASTER mETHODS
  showSuccess() {
    this.toastr.successToastr('Task Created Successfully.', 'Success!');
  }

  SaveData() {
    this.myModel.TaskTitle = this.taskForm.value.TaskTitle;
    this.myModel.Description = this.taskForm.value.Description;
    this.myModel.Project_ID = this.taskForm.value.Project_ID;
    this.dataService.CreateProjectTaskDetail(this.myModel).subscribe
      (
      res => {
        debugger;
        //console.log(res);
        this.showSuccess();
        this.router.navigate(['/tasks']);
      },
      err => {
        console.log(err);
      }
      );
  }

  //method for binding drop down Client name
  GetClientName() {

    this.dataService.GetAllProjects().subscribe
      (
      data => {
        //console.log("data from Projects:" + JSON.stringify(data));
        this.myclients = data;		// FILL THE ARRAY WITH DATA.
      },
      (err) => {
        console.log(err);
      }
      );
  }

  //method for file upload
  onFileChanged(event: any) {
    debugger;
    this.files = event.target.files;
    this.myModel.AttachmentType = this.files[0].type;
    this.myModel.AttachmentPath = event.target.value;
  }
}
