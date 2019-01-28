import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { TaskModel } from '../tasks.component';
import { TasksService } from '../tasks.service';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddtaskComponent implements OnInit {

  taskForm: FormGroup;
  myclients: any = [];
  public files: any[];
  myModel: TaskModel;
  taskStatus : any=[];
  taskPriority : any =[];
  taskRisk :any =[];
  taskAssignee: any =[];
  startDate:any;
  targetDate:any;
  taskActivity:any=[];
  ID:any;
 
  taskClassification: any = 
    [
        {value: '1', viewValue: 'Functional'},
        {value: '2', viewValue: 'Business'},
     ];
  
 
  constructor(public Formbuilder: FormBuilder, public dataService: TasksService, public router: Router, public toastr: ToastrManager) {
    this.files = [];
    this.myModel = new TaskModel();
  }

  ngOnInit() {
    
   

    this.taskForm = this.Formbuilder.group
      ({
     
        TaskTitle: ['', [Validators.required, Validators.maxLength(25)]],
        taskDescription: [''],
        Project_ID: ['', Validators.required],
        Status_Id: ['', Validators.required],
        Priority_Id: ['', Validators.required],
        Risk_Id: ['', Validators.required],
        Activity_Id:['', Validators.required],
        Task_AssignTo:[''],
       
        Classification:['', Validators.required ],
        acceptancecriteria:['',Validators.required],
        Original_Estimate:['',Validators.required],
        Remaining:[''],
        Completed:[''],
        Start_Date:['',Validators.required],
        Target_Date:['',Validators.required ],
        },
         {
              validator: this.matchval // your validation method
         });
     

    //calling get client method
    this.GetClientName();
    this.GetTaskStatus();
    this.GetTaskRisk();
    this. GetTaskPriority();
    this.GetAllAssignee();
    this.GetTaskActivity();

  }

  //tOASTER mETHODS
 showSuccess()
  {
    this.toastr.successToastr('Task Created Successfully.', 'Success!');
  }

  SaveData() 
  {
    debugger;
    this.myModel.TaskTitle = this.taskForm.value.TaskTitle;
    this.myModel.Description = this.taskForm.value.taskDescription;
    this.myModel.Project_ID = this.taskForm.value.Project_ID;
    this.myModel.Remaining=this.taskForm.value.Remaining;
    this.myModel.Start_Date=this.taskForm.value.Start_Date;
    this.myModel.Task_AssignTo=this.taskForm.value.Task_AssignTo;
    this.myModel.Priority_Id=this.taskForm.value.Priority_Id;
    this.myModel.Risk_Id=this.taskForm.value.Risk_Id;
    this.myModel.Status_Id=this.taskForm.value.Status_Id;
    this.myModel.Acceptance_Criteria=this.taskForm.value.acceptancecriteria;
    this.myModel.Classification=this.taskForm.value.Classification;
    this.myModel.Target_Date=this.taskForm.value.Target_Date;
    this.myModel.Completed=this.taskForm.value.Completed;
    this.myModel.Original_Estimate=this.taskForm.value.Original_Estimate;
    this.myModel.Remaining=this.taskForm.value.Remaining;
    this.myModel.Activity_Id=this.taskForm.value.Activity_Id;
   
       
    this.dataService.CreateProjectTaskDetail(this.myModel).subscribe
      (
        
     (res:any) => {  
        debugger;  
        this.ID= res.id;
        this.showSuccess();
        sessionStorage.setItem("currentId",this.ID);
        this.router.navigate(['/viewtask']);
      },
      err => {
        console.log(err);
      }
      );
  }

  //method for binding drop down Project name
  GetClientName() 
  {

    this.dataService.GetAllProjects().subscribe
      (
      data =>
       {
     
        this.myclients = data;		// FILL THE ARRAY WITH DATA.
      },
      (err) => {
        console.log(err);
      }
      );
  }



    //method for getting status from db
    GetTaskStatus()
    {
      debugger;
        this.dataService.GetTaskStatus().subscribe
        (
            data =>{

            this.taskStatus= data; // FILL THE ARRAY WITH DATA.
            },
            (err) =>
            
            {
              console.log(err);
            }

        );
    }


 //method for getting risk from db
 GetTaskRisk()
 {
   debugger;
     this.dataService.GetTaskRisk().subscribe
     (
         data =>{

         this.taskRisk= data; // FILL THE ARRAY WITH DATA.
         },
         (err) =>
         
         {
           console.log(err);
         }

     );
 }


  //method for getting risk from db
  GetTaskPriority()
  {
    debugger;
      this.dataService.GetTaskPriority().subscribe
      (
          data =>{
 
          this.taskPriority= data; // FILL THE ARRAY WITH DATA.
          },
          (err) =>
          
          {
            console.log(err);
          }
 
      );
  }
    

  //method for getting risk from db
  GetAllAssignee()
  {
    debugger;
      this.dataService.GetTaskAssignee().subscribe
      (
          data =>{
 
          this.taskAssignee= data; // FILL THE ARRAY WITH DATA.
          },
          (err) =>
          
          {
            console.log(err);
          }
 
      );
  }

  //binding dropdown task activity
  GetTaskActivity()
  {
    debugger;
      this.dataService.GetTaskActivity().subscribe
      (
          data =>{
 
          this.taskActivity= data; // FILL THE ARRAY WITH DATA.
          },
          (err) =>
          
          {
            console.log(err);
          }
 
      );
  }


  matchval(group: FormGroup) {
    debugger
    let startDate = group.controls['Start_Date'].value;
    let targetDate = group.controls['Target_Date'].value;
    if (targetDate > startDate) {
      
      return null;

    }
    else {
      return group.controls['Target_Date'].setErrors({ matchval: true });

    }
  }
  

  ViewTask(ID) {
    sessionStorage.setItem("currentId", ID);
    this.router.navigate(['/viewtask']);
  }

  //method for file upload
  onFileChanged(event: any) {
    debugger;
    this.files = event.target.files;
    this.myModel.AttachmentType = this.files[0].type;
    this.myModel.AttachmentPath = event.target.value;
    
  }
}
