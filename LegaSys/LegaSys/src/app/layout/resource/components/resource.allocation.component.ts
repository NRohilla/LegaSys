import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../resource.service';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
@Component({
  selector: 'app-resource-allocation',
  templateUrl: './resource.allocation.component.html',
  styleUrls: ['./resource.allocation.component.scss']
})
export class ResourceAllocationComponent implements OnInit {

  resourceProjectDS=new MatTableDataSource<ResourceProject>();
  displayedColumns: string[] = [ 'Title','Status','Start_Date','End_Date','Action'];
  constructor(public dataservice: ResourceService,public router: Router) { }

  ngOnInit() {
   this.getProjectByResourceId();
  }


getProjectByResourceId(){

  this.dataservice.GetResourceProject(+localStorage.getItem("UserDetailID")).subscribe(
      res => {
        this.resourceProjectDS.data = res
      
      });

}

ViewProjectDetails(ProjectID:any){
  this.router.navigate(['./project/edit',ProjectID]);
}
}
export class ResourceProject{
    ProjectResourceID :number;
    Resource_ID :number;
    Project_ID :number;
    Title :string;
    Description :string;
}
