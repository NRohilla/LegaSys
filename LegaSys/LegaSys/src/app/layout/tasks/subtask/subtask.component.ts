import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from '../tasks.service';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { ViewChild } from '@angular/core';
import { TaskModel } from '../tasks.component';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { ToastrManager } from 'ng6-toastr-notifications';




@Component({
  selector: 'app-subtask',
  templateUrl: './subtask.component.html',
  styleUrls: ['./subtask.component.scss']
})
export class SubtaskComponent implements OnInit {
  subtaskForm: FormGroup;
  dataSource: any = [];
  isLoading = true;
  public files: any[];
  myModel: TaskModel;
  disable: boolean = true;
  ID:any;
  formType = "Add";
  selectedRowIndex:number = -1;
  isAddItem: boolean = false;
  disableFooter: boolean = true;
  selected: any = 'true';
  globalResponse: any;



  displayedColumns: string[] = ['SubTask_Title', 'SubTask_Description', 'TaskTitle', 'Description', 'Project_Title'];

  constructor(public dataService: TasksService, private router: Router,public Formbuilder: FormBuilder, public toastr: ToastrManager)
   {
    this.subtaskForm = this.Formbuilder.group
      ({
        //for special char validation pattern ,Validators.pattern(/^[a-zA-Z0-9]+$/)
        ProjectSubTaskID:[''],
        SubTask_Title: ['', [Validators.required, Validators.maxLength(25)]],
        SubTask_Description: [''],
      });
    this.files = [];
    this.myModel = new TaskModel();

   }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
         this.Fetch_AllSubTask();

     
  }

   //tOASTER mETHODS
   showSuccess() {
    this.toastr.successToastr( 'Success!');
  }



  //  Method to get data from database
  Fetch_AllSubTask() 
  {
  
debugger;
    this.dataService.GetAllProjectsSubTask().subscribe(
      res => {
        this.dataSource = new MatTableDataSource<TaskModel>();
       
        this.dataSource.data = res;
       // this.ID=this.dataSource.GetProjectSubTaskbyId;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.isLoading = false;
       
      },
      error => {
        this.isLoading = false
        console.log('There was an error while retrieving data !!!' + error);
      });
  }

 
   //  Method For Fetch Data against ID
    GetTaskByID(ID)
     {

       debugger;
        this.dataService.GetProjectSubTaskbyId(ID).subscribe(
         res => {
          this.dataSource = res;
        
      },
        err => {
        console.log(err);
      }
    );
  }

  //Method to save Uploads
  onFileChanged(event: any) 
  {
    debugger;
    this.files = event.target.files;
    this.myModel.AttachmentType = this.files[0].type;
    this.myModel.AttachmentPath = event.target.value;
  }

  highlight(row) {
    debugger;
    this.selectedRowIndex = row.ProjectSubTaskID;
    this.formType = "Update";
    this.subtaskForm.setValue({
       ProjectSubTaskID: row.ProjectSubTaskID,
       SubTask_Title: row.SubTask_Title, 
       SubTask_Description: row.SubTask_Description,
   
    });
  }


  //Method to aad Record In Grid

  addnewSubTaskInGrid(){   
    debugger 
    this.myModel=this.subtaskForm.value;
    this.dataSource.ProjectSubTaskID=0;
    this.myModel.SubTask_Title = this.subtaskForm.value.SubTask_Title;
    this.myModel.SubTask_Description = this.subtaskForm.value.SubTask_Description;
   
  
    if (this.formType == "Add")
      {
      const data = this.dataSource.data;
      data.push(this.myModel);
      this.dataSource.data = data;
      }
      
    else
    {
      debugger;
      this.dataSource.data.forEach(element => 
           {
             debugger;
          if(element.ProjectSubTaskID == this.selectedRowIndex) 
          {
            element.SubTask_Title = this.myModel.SubTask_Title;
            element.SubTask_Description = this.myModel.SubTask_Description;
           
          }
        });
       
            
    }
  }


 

//Method to add record in DB
  SaveTaskInDB() {
    debugger
 
    var id = this.selectedRowIndex;
    this.dataService.CreateProjectSubTask( id,this.dataSource.data)
      .subscribe((result) => {
       // this.globalResponse = result;
        this.showSuccess();
        this.subtaskForm.reset();
        this.discard();
        
      
      },
        error => {
          console.log(error);
               
        },
        () => {
          
          if (this.formType == "Add")
           {
            
            this.isAddItem = false;
            this.disableFooter = true;
          }
         
        
        })
  }

  //method of  edit button to show form.........
  edit() 
  {
    debugger;
   
    if (this.selected == 'true') 
    {
      this.isAddItem = true;
      this.disable=false;
    }
    else {
      this.isAddItem = false;
    }
   
    this.disableFooter = false;
  }


  //method to hide form
  discard() {

    this.isAddItem = false;
    this.disableFooter = true;
    this.disable=true;
    this.subtaskForm.reset();
    this. formType="Add"
    
   
  }
}
