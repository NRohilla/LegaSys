import { Component, OnInit } from '@angular/core';
import { ResourceService } from './resource.service'
import { Resource } from './resource.model';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-create-resource',
  templateUrl: './create-resource.component.html',
  styleUrls: ['./create-resource.component.scss']
})
export class CreateResourceComponent implements OnInit {
  resourceForm: any;
  inputResource: Resource;
  globalResponse: any;
  isFailedMessage: boolean = false;
  isSuccessMessage: boolean = false;
  location: Resource[];
  shift: Resource[];
  role: Resource[];
  rHead: Resource[];
  namePattern = "[A-Za-z]{1,25}";
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  totexpPattern = "^(?!0+(?:\.0+)?$)[0-5]?[0-9](?:\.\d\d?)?$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  get officialEmail() {
    return this.resourceForm.get('emailId');
  }
  constructor(public dataService: ResourceService, private formBuilder: FormBuilder,
    private router: Router, public snackBar: MatSnackBar) { }


  ngOnInit() {
    this.RenderData();

    this.resourceForm = this.formBuilder.group({

      firstname: ['', [Validators.required, Validators.maxLength(25), Validators.pattern(this.namePattern)]],
      middlename: [''],
      lastname: ['', [Validators.required, Validators.maxLength(25), Validators.pattern(this.namePattern)]],
      totalexp: ['', [Validators.required, Validators.pattern(this.totexpPattern)]],
      emailId: ['', [Validators.required, Validators.pattern(this.emailPattern)]],

      ShiftID: [''],
      LocationID: [''],
      UserRoleID: [''],
      UserDetailID: ['0'],
      mobile: ['', [Validators.required, Validators.pattern(this.mobnumPattern)]],
      remarks: [''],
      Master_Location_ID: ['', Validators.required],
      Master_Role_ID: ['', Validators.required],
      Master_Shift_ID: ['', Validators.required],
      ReportingHead_ID: ['', Validators.required],
    });


  }

  onSubmit(formData: any, formDirective: FormGroupDirective) {
    debugger;
    console.log(this.resourceForm.value);
    this.inputResource = this.resourceForm.value;
    console.log(this.inputResource);
    debugger;
    this.dataService.addResource(this.inputResource)
      .subscribe((result) => {
        this.globalResponse = result;
      },
        error => {
          console.log(error);
          this.isFailedMessage = true;
          this.snackBar.open("Error in posting data", "Ok", {
            duration: 2000,
          });
        },
        () => {
          this.isSuccessMessage = true;
          this.snackBar.open("Resource Added Successfully", "Ok", {
            duration: 2000,
          });
        }

      )
    formDirective.resetForm();
    this.resourceForm.reset();
  }

  RenderData() {
    debugger;
    this.dataService.getLocation()
      .subscribe((data: Resource[]) => {
        debugger;
        this.location = data;
      });

    this.dataService.getShift()
      .subscribe((data: Resource[]) => {
        debugger;
        this.shift = data;
      });

    this.dataService.getRoles()
      .subscribe((data: Resource[]) => {
        this.role = data;
      })
  }

  roleChanged(value) {
    this.dataService.getReportingHead(value)
      .subscribe((data: Resource[]) => {
        this.rHead = data;
      })
  }
}