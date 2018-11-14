import { Component, OnInit } from '@angular/core';
import{ResourceService} from '../resource.service'
import { Resource } from '../resource.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resource-personal',
  templateUrl: './resource.personaldetails.html'
})
export class ResourcePersonaldetailsComponent implements OnInit {
getAllRole :Resource;
getAllShift : Resource[];
getLocation : Resource[];
currentResourceDetails :any;
  constructor(private resourceService :ResourceService,private router :Router) { }

  ngOnInit() {
    debugger;
    this.resourceService.getRole().subscribe(
      suc=>{
        console.log(suc);
        this.getAllRole=suc;
      },
      err=>{
       console.log(err);
      }
    );
    
    this.resourceService.getShift().subscribe(
      suc=>{
        console.log(suc);
        this.getAllShift=suc;
      },
      err=>{
       console.log(err);
      }
    );

    this.resourceService.getLocation().subscribe(
      suc=>{
        console.log(suc);
        this.getLocation=suc;
      },
      err=>{
       console.log(err);
      }
    );
  }

  UpdateResource()
  {
    this.resourceService.updateResource(this.currentResourceDetails).subscribe(
      suc => {
       this.currentResourceDetails=suc;
       this.router.navigate(['/resource-details']);              
      },
      err =>{
        console.log(err);    
      }
      );
  }

}
