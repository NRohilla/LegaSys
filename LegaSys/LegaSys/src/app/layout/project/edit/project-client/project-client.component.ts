import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Project } from '../../projectModel';

@Component({
  selector: 'app-project-client',
  templateUrl: './project-client.component.html',
  styleUrls: ['./project-client.component.scss']
})
export class ProjectClientComponent implements OnInit {
  
  @Output('onprojectinformation') onprojectinformation  = new EventEmitter<any>(); //used  to emit event to parent controller 
  @Input('clientDetails') clientDetails: Project; 
  @Input('currentProjectDetailsBackup') currentProjectDetailsBackup: Project;

  constructor() { }
  

  ngOnInit() {
    debugger;
    console.log("heeelo : "+JSON.stringify(this.clientDetails));
  }

}
