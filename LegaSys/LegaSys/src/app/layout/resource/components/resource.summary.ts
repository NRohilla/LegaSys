import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../resource.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-resource-summary',
  templateUrl: './resource.summary.html',
  styleUrls: ['./resource.summary.component.scss']
})
export class ResourceSummaryComponent implements OnInit {
  resoursedetails: any;
  constructor(private resourceService: ResourceService,private router: Router) {
  }

  ngOnInit() {
    //debugger;
    
    if(localStorage.getItem('isLoggedin')=='true'){
      this.resourceService.getResourceById(+localStorage.getItem('UserDetailID')).subscribe(
        suc => {
          this.resoursedetails = suc;
         
        },
        err => {
          console.log(err);
        }
      );
    }
    else{
    this.router.navigateByUrl("/login");
    }



   
  }

}
