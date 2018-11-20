import { Component, OnInit } from '@angular/core';
import{ResourceService} from '../resource.service'
import {ResourceDataServiceService} from '../../../resource-data-service.service'
import { Resource } from '../resource.model';
@Component({
  selector: 'app-resource-summary',
  templateUrl: './resource.summary.html',
  styleUrls: ['./resource.summary.component.scss']
})
export class ResourceSummaryComponent implements OnInit {
resoursedetails : any;
  constructor(private resourceService :ResourceService,private ResourceDataService:ResourceDataServiceService) { }

  ngOnInit() {
   debugger;
   this.resourceService.getResourceById(this.ResourceDataService.currentresoursedetails).subscribe(
     suc=>{
       console.log(suc);
       this.resoursedetails=suc;
     },
     err=>{
      console.log(err);
     }
   );
  }

}
