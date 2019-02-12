import { Component, OnInit } from '@angular/core';
import { ResourceService } from './resource.service'
import { Resource } from './resource.model';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar, AnimationDurations } from '@angular/material';
import { TosterService } from '../../shared/services/toster.service';
@Component({
  selector: 'app-create-resource',
  templateUrl: './create-resource.component.html',
  styleUrls: ['./create-resource.component.scss']
})
export class CreateResourceComponent implements OnInit {
  resourceForm: FormGroup ;
  inputResource: Resource;
  globalResponse: any;
  isFailedMessage: boolean = false;
  isSuccessMessage: boolean = false;
  location: Resource[];
  shift: Resource[];
  role: Resource[];
  rHead: Resource[];
  namePattern = '^[a-zA-Z ]+$';
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  totexpPattern = "^(?!0+(?:\.0+)?$)[0-5]?[0-9](?:\.\d\d?)?$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  get officialEmail() {
    return this.resourceForm.get('emailId');
  }
  constructor(public dataService: ResourceService, private formBuilder: FormBuilder,
    private router: Router, public snackBar: MatSnackBar,public toster:TosterService) { }


  ngOnInit() {
    this.RenderData();

    this.resourceForm = this.formBuilder.group({

      firstname: ['', [Validators.required,Validators.maxLength(25), Validators.pattern(this.namePattern)]],
      middlename: ['',[Validators.maxLength(25), Validators.pattern(this.namePattern)]],
      lastname: ['', [Validators.required, Validators.maxLength(25),Validators.pattern(this.namePattern)]],
      totalexp: ['', [Validators.required]],
      emailId: ['', [Validators.required, Validators.pattern(this.emailPattern)]],

      ShiftID: [''],
      LocationID: [''],
      UserRoleID: [''],
      UserDetailID: ['0'],
      mobilenumber: ['', [Validators.required, Validators.pattern(this.mobnumPattern)]],
      remarks: [''],
      Master_Location_ID: ['', Validators.required],
      Master_Role_ID: ['', Validators.required],
      Master_Shift_ID: ['', Validators.required],
      ReportingHead_ID: ['', Validators.required],
    });


  }
  CheckForWhiteSpace(controlName:string){
    debugger;
    
    if(this.resourceForm.controls[controlName].value<=0){
      return this.resourceForm.controls[controlName].setErrors({ pattern: true });
    }
    else{
      this.resourceForm.controls[controlName].setValue(this.resourceForm.controls[controlName].value.trim());
    }
  }
  emailExists(){
    debugger;
    this.dataService.CheckEmail(this.resourceForm.value.emailId)
    .subscribe((res:any)=>{
      debugger;
        console.log(res);
        if(!res.success){
          
          // this.snackBar.open("Email already registered! Try using different email id ", "Ok", {
          //   duration: 3000,
          // });
          this.toster.showError("Email already registered! Try using different email id ");
          this.resourceForm.controls['emailId'].setErrors({'pattern': true});

        }         
    } 
   );
    
  }

  onSubmit(formData: any, formDirective: FormGroupDirective) {
    debugger;
    console.log(this.resourceForm.value);
    this.inputResource = this.resourceForm.value;
    this.inputResource.IsActive=true;
    
    console.log(this.inputResource);
    debugger;       

    this.dataService.addResource(this.inputResource)
      .subscribe((result) => {
        this.globalResponse = result;
      },
        error => {
          console.log(error);
          this.isFailedMessage = true;
          // this.snackBar.open("Error in posting data", "Ok", {
          //   duration: 2000,
          // });
          this.toster.showError("Error in posting data");
          return;
        },
        () => {
          this.isSuccessMessage = true;
          // this.snackBar.open("Resource Added Successfully", "Ok", {
          //   duration: 2000,
          // });
          this.toster.showSuccess("Success");
          this.router.navigate(['resource']);
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