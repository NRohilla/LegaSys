import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../resource.service'
import { Resource } from '../resource.model';
import { Router } from '@angular/router';
import { ResourceDataServiceService } from '../../../resource-data-service.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-resource-personal',
  templateUrl: './resource.personaldetails.html',
  styleUrls: ['./resource.personaldetails.component.scss']
})
export class ResourcePersonaldetailsComponent implements OnInit {
  disable: boolean = true;
  resoursedetails: any;
  getAllRole: Resource;
  getAllShift: Resource[];
  getLocation: Resource[];
  getReportingHead: Resource[];
  currentResourceDetails: any;
  currentResourceDetailsCancel: any
  personalDetailsForm:FormGroup;
  constructor(private resourceService: ResourceService, private router: Router, private ResourceDataService: ResourceDataServiceService,private formBuilder:FormBuilder) {
    this.personalDetailsForm=this.formBuilder.group({
      Firstname: ['',[Validators.required,Validators.pattern('^[a-zA-Z ]+$')]],
      Lastname : ['',[Validators.required,Validators.pattern('^[a-zA-Z ]+$')]],
      Middlename :['',''],
    EmailId: ['', Validators.pattern('^[a-zA-Z]+[a-zA-Z0-9_-]*@([a-zA-Z0-9]+){1}(\.[a-zA-Z0-9]+){1,2}')],
    TotalExp :['',[Validators.required]],
    Master_Role_ID :[this.getAllRole,[Validators.required]],
    Master_Shift_ID :[this.getAllShift,[Validators.required]],
    Master_Location_ID :[this.getLocation,[Validators.required]],
    UserDetailID :[this.getReportingHead,[Validators.required]],
    Remarks :['',''],
    });

    

   }

  ngOnInit() {

    this.resourceService.getRole().subscribe(
      suc => {
        //console.log(suc);
        this.getAllRole = suc;
      },
      err => {
        console.log(err);
      }
    );

    this.resourceService.getShift().subscribe(
      suc => {
       // console.log(suc);
        this.getAllShift = suc;
      },
      err => {
        console.log(err);
      }
    );
debugger;
    this.resourceService.getLocation().subscribe(

      suc => {
        //console.log(suc);
        this.getLocation = suc;
      },
      err => {
        console.log(err);
      }
    );

    this.resourceService.getReportingHead().subscribe(

      suc => {
        console.log(suc);
        this.getReportingHead = suc;
      },
      err => {
        console.log(err);
      }
    );

    this.GetId();
    this.personalDetailsForm.disable();
  }
  GetId()
  {
    this.resourceService.getResourceById(this.ResourceDataService.currentresoursedetails).subscribe(
      suc => {
    
        this.resoursedetails = suc;
        
        this.currentResourceDetailsCancel = JSON.parse(JSON.stringify(suc));
      },
      err => {
        console.log(err);
      }
    );
  }

  onSubmit() {
    debugger;
    this.resourceService.updateResource(this.resoursedetails).subscribe(
      suc => {
        debugger;
        if(suc)
       // console.log(suc);
        this.resoursedetails = suc;
        debugger;
        
        this.GetId();
        this.MakeFieldEditable();
       
        // this.router.navigate(['/resource-details']);
        
      },
      err => {
        console.log(err);
      }
    );
  }
  MakeFieldEditable() {
    debugger;
    if(this.disable){
      this.disable = false;
      this.personalDetailsForm.enable();
    }
    else{
      this.disable = true;
    this.personalDetailsForm.disable();
    }
  }

  Cancel() {
    debugger;
    //console.log(this.currentResourceDetails);
    //console.log(this.currentResourceDetailsCancel);
    this.currentResourceDetails = this.currentResourceDetailsCancel;
    this.MakeFieldEditable();
  }



}
