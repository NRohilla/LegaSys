import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import {FormBuilder, FormGroup, Validators,FormControl} from "@angular/forms";
import { TaskServiceService } from '../taskservice.service';
import {Taskmodel } from '../taskmodel.model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-my-project',
  templateUrl: './my-project.component.html',
  styleUrls: ['./my-project.component.scss']
})
export class MyProjectComponent implements OnInit {
  
  taskForm: FormGroup;
  myclients: any = []
  public files: any[];
  myModel :Taskmodel;
  localUrl: any[]


  constructor(public Formbuilder:FormBuilder,public dataService:TaskServiceService, public router:Router)
   {
    this.files = [];  
    this.myModel=new Taskmodel();
  
  }

  
  ngOnInit ()
   {
     
     //debugger;
    this.taskForm  = this.Formbuilder.group
    ({

      TaskTitle: ['',[Validators.required,Validators.maxLength(25),Validators.pattern(/^[a-zA-Z0-9]+$/)]],
      Description:['',Validators.required],
      Project_ID:['',Validators.required],
      ClientName:['',Validators.required],
      //file: [null, Validators.required]
    });
    
      //calling get client method
       this.GetClientName();
   

  }

  //method for save data in database
  SaveData()
  {
    debugger;


        this.myModel.TaskTitle=this.taskForm.value.TaskTitle;
        this.myModel.Description=this.taskForm.value.Description;
        this.myModel.Project_ID=this.taskForm.value.Project_ID;
         this.dataService.CreateProjectTaskDetail(this.myModel).subscribe
        (
          res => 
        {
            debugger;
            console.log(res);
            alert(JSON.stringify(res));
            this.router.navigate(['/ListTasksPath']); 
            
           
        },
       err => 
        {
          console.log(err);
        }
       );
  }

  //method for binding drop down Client name
      GetClientName()
          {   
          
           this.dataService.GetAllProjects().subscribe
           (
                 data => 
                     {
                        console.log("data from Projects:"+JSON.stringify(data));
                        this.myclients = data ;		// FILL THE ARRAY WITH DATA.
                     },
                (err) =>
                     {
                       console.log (err);
                      }
           );
          }


      //method for file upload
      
      onFileChanged(event: any) 
         {
          debugger;
          this.files = event.target.files;
          this.myModel.AttachmentType= this.files[0].type;
          this.myModel.AttachmentPath= event.target.value;
        
        }
  
  }
 

