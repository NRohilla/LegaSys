import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../resource.service'
import { Resource } from '../resource.model';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from '@angular/material';
import { Title } from '@angular/platform-browser';
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
  namePattern = '^[a-zA-Z ]+$';
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  totexpPattern = "^(?!0+(?:\.0+)?$)[0-5]?[0-9](?:\.\d\d?)?$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  getLocation: Resource[];
  getReportingHead: Resource[];
  currentResourceDetails: any;
  currentResourceDetailsCancel: any
  personalDetailsForm: FormGroup;
  constructor(private snackBar: MatSnackBar, private resourceService: ResourceService, private router: Router,
    private formBuilder: FormBuilder, private titleService: Title) {
    titleService.setTitle("LegaSys - Resource Details");
    this.personalDetailsForm = this.formBuilder.group({
      Firstname: ['', [Validators.required,Validators.maxLength(25), Validators.pattern(this.namePattern)]],
      Lastname: ['', [Validators.required,Validators.maxLength(25), Validators.pattern(this.namePattern)]],
      Middlename: ['', [Validators.maxLength(25),Validators.pattern(this.namePattern)]],
      EmailId: ['', Validators.pattern(this.emailPattern)],
      TotalExp: ['', [Validators.required, Validators.pattern('[0-9/.]+')]],
      Master_Role_ID: [this.getAllRole, [Validators.required]],
      Master_Shift_ID: [this.getAllShift, [Validators.required]],
      Master_Location_ID: [this.getLocation, [Validators.required]],
      UserDetailID: [this.getReportingHead, [Validators.required]],
      Remarks: ['', ''],
      mobile: ['', [Validators.required, Validators.pattern(this.mobnumPattern)]]
    });



  }
  CheckForWhiteSpace(controlName:string){
    debugger;
    
    if(this.personalDetailsForm.controls[controlName].value<=0){
      return this.personalDetailsForm.controls[controlName].setErrors({ pattern: true });
    }
    else{
      this.personalDetailsForm.controls[controlName].setValue(this.personalDetailsForm.controls[controlName].value.trim());
    }
  }
  roleChanged(value) {
    this.resourceService.getReportingHead(value)
      .subscribe((data: Resource[]) => {
        this.getReportingHead = data;
      })
  }

  ngOnInit() {

    this.resourceService.getRole().subscribe(
      suc => {
        this.getAllRole = suc;
      },
      err => {
        console.log(err);
      }
    );

    this.resourceService.getShift().subscribe(
      suc => {
        this.getAllShift = suc;
      },
      err => {
        console.log(err);
      }
    );
    this.resourceService.getLocation().subscribe(

      suc => {
        this.getLocation = suc;
      },
      err => {
        console.log(err);
      }
    );

    this.GetId();



    this.personalDetailsForm.disable();
  }

  GetId() {
    this.resourceService.getResourceById(+localStorage.getItem('UserDetailID')).subscribe(
      suc => {
        this.resoursedetails = suc;
        this.currentResourceDetailsCancel = JSON.parse(JSON.stringify(suc));
        //localStorage.setItem("DateOfJoining", this.resoursedetails.DateOfJoining);
        this.resourceService.getReportingHead(this.resoursedetails.Master_Role_ID).subscribe(

          res => {
            this.getReportingHead = res;
          },
          err => {
            console.log(err);
          }
        );
      },
      err => {
        console.log(err);
      }
    );
  }


  onSubmit() {
    this.resourceService.updateResource(this.resoursedetails).subscribe(
      suc => {
        if (suc) {
          this.resoursedetails = suc;
          this.snackBar.open("Resource details updated successfully", "Ok", {
            duration: 2000,
          });
        }

        this.GetId();
        this.MakeFieldEditable();


      },
      err => {
        console.log(err);
      }
    );
  }
  MakeFieldEditable() {
    if (this.disable) {
      this.disable = false;
      this.personalDetailsForm.enable();
    }
    else {
      this.disable = true;
      this.personalDetailsForm.disable();
    }
  }

  Cancel() {
    this.currentResourceDetails = this.currentResourceDetailsCancel;
    this.MakeFieldEditable();
  }



}
