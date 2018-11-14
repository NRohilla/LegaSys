import { Component, OnInit } from '@angular/core';
import { ResourceService } from './resource.service'
import { Resource } from './resource.model';
import { FormGroup, FormControl,ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-create-resource',
  templateUrl: './create-resource.component.html',
  styleUrls: ['./create-resource.component.scss']
})
export class CreateResourceComponent implements OnInit {
  ngForm=new FormGroup({
    firstname:new FormControl(''),
    middlename:new FormControl(''),
    lastname:new FormControl(''),
    totalexp:new FormControl(''),
    email:new FormControl(''),
    shift:new FormControl(''),
    location:new FormControl(''),
    role:new FormControl(''),
    head:new FormControl('')
  });
  
  
  
  location :Resource[];
  shift: Resource[];
  role: Resource[];
  rHead: Resource[];

  constructor(public dataService: ResourceService,) { }

  ngOnInit() {
    this.RenderData();
  }
  RenderData() {
    debugger;
    this.dataService.getLocation()
     .subscribe((data:Resource[]) => {  
      this.location = data;  
    });
        
    this.dataService.getShift()
    .subscribe((data:Resource[])=>{
      this.shift=data;
    });

    this.dataService.getRoles()
    .subscribe((data:Resource[])=>{
      this.role=data;
    })

    this.dataService.getReportingHead()
    .subscribe((data:Resource[])=>{
      this.rHead=data;
    })


  }
}
