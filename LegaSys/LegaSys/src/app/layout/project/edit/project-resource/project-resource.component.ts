import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../projenctModel';

@Component({
  selector: 'app-project-resource',
  templateUrl: './project-resource.component.html',
  styleUrls: ['./project-resource.component.scss']
})
export class ProjectResourceComponent implements OnInit {
  @Input('resourceDetails') resourcedetails: Project; 
  constructor() { }

  ngOnInit() {
  }

}
