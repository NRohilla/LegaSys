import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../resource.service'
@Component({
  selector: 'app-resource-summary',
  templateUrl: './resource.summary.html',
  styleUrls: ['./resource.summary.component.scss']
})
export class ResourceSummaryComponent implements OnInit {
  resoursedetails: any;
  constructor(private resourceService: ResourceService) {
  }

  ngOnInit() {
    //debugger;
    this.resourceService.getResourceById(+localStorage.getItem('UserDetailID')).subscribe(
      suc => {
        this.resoursedetails = suc;
        
      },
      err => {
        console.log(err);
      }
    );
  }

}
