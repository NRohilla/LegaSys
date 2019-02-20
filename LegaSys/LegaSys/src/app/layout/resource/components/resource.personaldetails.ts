import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../resource.service'
import { Resource } from '../resource.model';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { ToastrModule } from 'ng6-toastr-notifications';
import { TosterService } from '../../../shared/services/toster.service';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { parse } from 'querystring';
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
  countriesCode:string[]= ["+7 840","+93","+93","+355","+213","+1 684","+376","+244", "+1 264", "+1 268","+54","+374","+297","+247","+61","+672","+43","+994","+1 242","+973","+880","+1 246","+1 268","+375","+32","+501","+229","+1 441","+975","+55","+246","+359","+855","+1", "+236","+56","+86","+57","+506","+53","+420","+45","+1 767","+1 809","+20","+251","+679","+358","+33", "+995","+49","+30","+852","+36","+354","+91","+62","+98","+964","+353","+972","+39","+1 876","+81","+962","+7 7","+254","+965","+996","+218","+370","+352","+261","+60","+960","+223","+230","+52","+976","+212","+95","+977","+31","+64","+234","+850","+47","+968","+92","+595","+51","+63","+48","+351","+974","+40","+7","+966","+381","+65","+27","+82","+34","+94","+268","+46","+41","+963","+886","+992","+255","+66","+670","+216","+90","+1 340","+256","+380","+971","+44","+1","+84","+967","+263"];
  filterBasedOptionsForCountryCode:Observable<string[]>;
  constructor(private snackBar: MatSnackBar, private resourceService: ResourceService, private router: Router,
    private formBuilder: FormBuilder, private titleService: Title ,public toster:TosterService) {
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
      mobile: ['', [Validators.required, Validators.pattern(this.mobnumPattern)]],
      countrycode:['',Validators.required]
    });

    this.filterBasedOptionsForCountryCode=this.personalDetailsForm.controls['countrycode'].valueChanges.pipe(
      startWith(''),
      map(value => this._filterForCountryCode(value))
    );

  }
  private _filterForCountryCode(value: string): string[] {
    debugger;
    const filterValueForCountryCode = value.toLowerCase();
    return this.countriesCode.filter(option => option.toLowerCase().indexOf(filterValueForCountryCode) === 0);
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
    if(localStorage.getItem('isLoggedin')=='true'){
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
    else{
    this.router.navigateByUrl("/login");
    }
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
          // this.snackBar.open("Resource details updated successfully", "Ok", {
          //   duration: 2000,
          // });
          this.toster.showSuccess("Resource details updated successfully");
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
    this.GetId();
  }



}
