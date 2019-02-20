import { Component, OnInit } from '@angular/core';
import { ResourceService } from './resource.service'
import { Resource } from './resource.model';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar, AnimationDurations } from '@angular/material';
import { TosterService } from '../../shared/services/toster.service';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
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
  countriesCode:string[]= ["+7 840","+93","+93","+355","+213","+1 684","+376","+244", "+1 264", "+1 268","+54","+374","+297","+247","+61","+672","+43","+994","+1 242","+973","+880","+1 246","+1 268","+375","+32","+501","+229","+1 441","+975","+55","+246","+359","+855","+1", "+236","+56","+86","+57","+506","+53","+420","+45","+1 767","+1 809","+20","+251","+679","+358","+33", "+995","+49","+30","+852","+36","+354","+91","+62","+98","+964","+353","+972","+39","+1 876","+81","+962","+7 7","+254","+965","+996","+218","+370","+352","+261","+60","+960","+223","+230","+52","+976","+212","+95","+977","+31","+64","+234","+850","+47","+968","+92","+595","+51","+63","+48","+351","+974","+40","+7","+966","+381","+65","+27","+82","+34","+94","+268","+46","+41","+963","+886","+992","+255","+66","+670","+216","+90","+1 340","+256","+380","+971","+44","+1","+84","+967","+263"];
  filterBasedOptionsForCountryCode:Observable<string[]>;
  get officialEmail() {
    return this.resourceForm.get('emailId');
  }
  constructor(public dataService: ResourceService, private formBuilder: FormBuilder,
    private router: Router, public snackBar: MatSnackBar,public toster:TosterService) { }


  ngOnInit() {
    if(localStorage.getItem('isLoggedin')=='true'){
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
        countrycode:['',Validators.required],
      });
      this.filterBasedOptionsForCountryCode=this.resourceForm.controls['countrycode'].valueChanges.pipe(
        startWith(''),
        map(value => this._filterForCountryCode(value))
      );
    }
    else{
    this.router.navigateByUrl("/login");
    }
   

  }
  private _filterForCountryCode(value: string): string[] {
    debugger;
    const filterValueForCountryCode = value.toLowerCase();
    return this.countriesCode.filter(option => option.toLowerCase().indexOf(filterValueForCountryCode) === 0);
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
         // this.toster.showError("Error in posting data");
          return;
        },
        () => {
          this.isSuccessMessage = true;
          // this.snackBar.open("Resource Added Successfully", "Ok", {
          //   duration: 2000,
          // });
          this.toster.showSuccess("Resource created successfully");
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
  cancel(){
    this.resourceForm.reset();
    this.filterBasedOptionsForCountryCode=this.resourceForm.controls['countrycode'].valueChanges.pipe(
      startWith(''),
      map(value => this._filterForCountryCode(value))
    );
  }
}