import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';



@Component({
  selector: 'app-viewdetail',
  templateUrl: './viewdetail.component.html',
  styleUrls: ['./viewdetail.component.scss']
})
export class ViewdetailComponent implements OnInit {

  subtaskActivity: any;
  project_Title:any;
  task_Title:any;
  taskAssignTo:any;


  constructor() { }

  ngOnInit() {



  }

  test(event: MatTabChangeEvent)
  {
    debugger;

      this.project_Title = localStorage.getItem("projectTitle");

      this.task_Title = localStorage.getItem("taskTitle");

      this.taskAssignTo = localStorage.getItem("taskAssignTo");

      this.subtaskActivity = localStorage.getItem("subtaskActivity");

     console.log("I am in onload");
  }




}
