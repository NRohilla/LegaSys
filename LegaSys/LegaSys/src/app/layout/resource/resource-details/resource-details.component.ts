import { Component, OnInit } from '@angular/core';
import {ViewChild} from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';
import { ResourceSummaryComponent } from '../components/resource.summary';
import { ResourcePersonaldetailsComponent } from '../components/resource.personaldetails';

@Component({
  selector: 'app-resource-details',
  templateUrl: './resource-details.component.html',
  styleUrls: ['./resource-details.component.scss']
  
})

export class ResourceDetailsComponent implements OnInit {
  @ViewChild(ResourceSummaryComponent) private resourceSummaryComponent: ResourceSummaryComponent;
  //@ViewChild(ResourcePersonaldetailsComponent) private resourcePersonaldetailsComponent: ResourcePersonaldetailsComponent;

  constructor() { }

  ngOnInit() {
  }
  
  onTabChanged(event: MatTabChangeEvent) 
  {
    if(event.index == 0)
    {
        this.resourceSummaryComponent.ngOnInit();//Or whatever name the method is called
    }
    else
    {
       // this.resourcePersonaldetailsComponent.ngOnInit(); //Or whatever name the method is called
    }
  }
}
