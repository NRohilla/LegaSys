import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../projenctModel';
import { AlertPromise } from 'selenium-webdriver';

@Component({
  selector: 'app-project-task',
  templateUrl: './project-task.component.html',

  styleUrls: ['./project-task.component.scss']
})
export class ProjectTaskComponent implements OnInit {

  @Input('taskDetails') taskdetails: Project; 
  constructor() { }
 

  ngOnInit() {
    //alert("tsk : "+JSON.stringify(this.taskdetails.TaskTitle+""+this.taskdetails.TaskAttachmentName+""+this.taskdetails.Description));
  }

}
