import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { TaskServiceService } from '../taskservice.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})

export class EditTaskComponent implements OnInit {


  //Declaration
  responce: any;
  Id: any;
  dataSource: any = []
  taskeditForm: FormGroup;
  disable: boolean = true;
  myclients: any = [];
  myprojects:any


  constructor(public Formbuilder: FormBuilder, public dataService: TaskServiceService) {

    this.taskeditForm = this.Formbuilder.group
      ({

        TaskTitle: ['', [Validators.required, Validators.maxLength(25), Validators.pattern(/^[a-zA-Z0-9]+$/)]],
        Description: ['', Validators.required],
        Project_ID:[0,Validators.required],
        ClientName:['',Validators.required],
      });

  }
           

  ngOnInit() {
       
        //Fetching Id From Session.
        this.Id = sessionStorage.getItem("currentId");
        debugger;

        //method calling for fetch data.
        this.GetTaskByID(this.Id);
 
        this.taskeditForm.disable();

        this.GetClientName();
        this.GetProject();
        
    
  }
  // Method For Fetch Data
  GetTaskByID(ID) {
  debugger;
        this.dataService.GetProjectTaskbyId(ID).subscribe(
          res => {
            this.dataSource = res;
            // this.taskeditForm.controls['ClientName'].setValue(this.dataSource.ClientName);
            // this.taskeditForm.controls['Project_ID'].setValue(this.dataSource.Project_Title);
            console.log("datasource"+JSON.stringify(this.dataSource) );

          },
       
          err => {
            console.log(err);

      }
    );
   
  }


  //Method For Update data
  UpdateTaskByID() {
    debugger;

    this.taskeditForm.value.ProjectTaskID= this.Id;
          this.dataService.UpdateProjectTaskDetail(this.taskeditForm.value).subscribe(
            res => {
              debugger;
              console.log(res);
              alert(JSON.stringify(res));
              this.taskeditForm.reset();
            },
            err => {
              console.log(err);
            }
      );
    
  }

  //method for form Disable on load

  MakeFieldEditable() 
  {
    if (this.disable) 
    {
      this.disable = false;
      this.taskeditForm.enable();
    }
    else {
      this.disable = true;
      this.taskeditForm.disable();
    }
  }

   //method for binding drop down Client name
 
   GetClientName()
   {
   debugger;
      this.dataService.GetAllClients().subscribe
      (
         data => 
            {
          
              console.log("data from Clients:"+JSON.stringify(data));
               this.myclients = data ;		// FILL THE ARRAY WITH DATA.
            },
         (err) =>
             {
                 console.log (err);
             }
      );
   }

   GetProject()
   {
   debugger;
      this.dataService.GetAllProjects().subscribe
      (
         data => 
            {
          
              console.log("data from Projects:"+JSON.stringify(data));
               this.myprojects = data ;		// FILL THE ARRAY WITH DATA.
            },
         (err) =>
             {
                 console.log (err);
             }
      );
   }
}
