import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../resource.service';
import { MatTableDataSource } from '@angular/material';
import { FormArray, FormControl, FormGroup, FormGroupDirective, FormBuilder, Validators, NgModel, ValidatorFn, AbstractControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Resource } from '../resource.model';
import { DatePipe } from '@angular/common';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Observable, observable } from 'rxjs';
import { formControlBinding } from '@angular/forms/src/directives/reactive_directives/form_control_directive';
import { resource } from 'selenium-webdriver/http';
import { NgbDatepickerDayView } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker.module';
@Component({
  selector: 'app-resource-background',
  templateUrl: './resource.backgrounddetails.component.html',
  styleUrls: ['./resource.backgrounddetails.component.scss']
})
export class ResourceBackgrounddetailsComponent implements OnInit {
  tottalExpy:any=0;
  Days: Number;
  tottalExpm:any=0;
  tottalExpd:any=0;
  userDetailId: number;
  showExp: boolean = false;
  selected: any = 'false';
  isExp: boolean = true; 
  cYear:number;
  cmonth:number;
  cday:number;  
  backgroundDetails = new MatTableDataSource<UserBackgrnd>();
  currentExp: any; 
  backup: any;
  isAddItem: boolean = false;
  disableFooter: boolean = true;
  uBackgrndForm: any;
  inputuBackgrnd: UserBackgrnd;
  globalResponse: any;
  error: any = { isError: false, errorMessage: '' };
  selectedRowIndex: number = -1;
  formType = "Add";
  disableSave: boolean = true;
  displayedColumns: string[] = ['CompanyName', 'Designation', 'JoiningDate', 'LeavingDate', 'Duration'];
  TotalExp: string;
  constructor(public dataService: ResourceService, private datePipe: DatePipe, private formBuilder: FormBuilder, public snackBar: MatSnackBar, public router: Router) { }
 
  edit() {
   
    if (this.selected == 'true') {
      this.isAddItem = true;
    }
    else {
      this.isAddItem = false;
    }
    this.isExp = false;
    this.disableFooter = false;
  }
  discard() {
    this.isExp = true;
    this.isAddItem = false;
    this.disableFooter = true;
   // this.selected = 'false';
  }


  ngOnInit() {
    this.userDetailId = +localStorage.getItem('UserDetailID');
    if (JSON.parse(localStorage.getItem('IsExperienced'))) {
      this.selected = 'true';
      this.GetBackgroundDetails();     
    }
    else {
      this.selected = 'false';
      this.backup = 1;
      //this.isAddItem=true;
    }
    this.currentExp = this.calcExperience(this.datePipe.transform(localStorage.getItem("DateOfJoining"), "yyyy-MM-dd"), new Date());
    this.uBackgrndForm = this.formBuilder.group({
      BackgroundID: [''],
      CompanyName: ['', Validators.required],
      Designation: ['', Validators.required],
      JoiningDate: ['', Validators.required],
      LeavingDate: ['', Validators.required]
    }, {
        validator: this.matchval // your validation method
      });

    // this.dataService.getResourceById().subscribe(
    //   res => {
    //     debugger;
    //     this.dataSource = res;

    //     // this.currentExp = this.calcExperience(this.datePipe.transform(localStorage.getItem("DateOfJoining"),"yyyy-MM-dd"), new Date());
    //     console.log(localStorage.getItem("DateOfJoining"));
    //     console.log(this.datePipe.transform(new Date(), "yyyy-MM-dd"));


    //     this.userDetailId = +localStorage.getItem('element');       
    //     if (this.dataSource.IsExperienced) {
    //       this.selected = 'true';

    //       this.GetBackgroundDetails();
    //     }
    //     else {
    //       this.selected = 'false';
    //       this.backup = 1;
    //       //this.isAddItem=true;

    //     }
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // );
  }

  matchval(group: FormGroup) {
    debugger
    // let c1 = group.controls['CompanyName'].value;
    // let c2 = group.controls['Designation'].value;
    let c3 = group.controls['JoiningDate'].value;
    let c4 = group.controls['LeavingDate'].value;
    if (c4 > c3) {
      // alert("done");
      return null;

    }
    else {
      return group.controls['LeavingDate'].setErrors({ matchval: true });

    }
  }
 

  onChange($event) {
      if ($event == "true") {
      this.GetBackgroundDetails();
      this.isAddItem = true;
    }
    else {    
      this.showExp = false;
      this.isAddItem = false;
      this.disableFooter = false;
      this.isExp = true;
    }
  }
  
  calcTotExp(sDate, eDate){
   
    var startDate = new Date(sDate);
    var endDate = new Date(eDate);
    var increment;    
    /// new Array<Duraaastion>(); 

    var Days = parseInt((endDate.getDate() - startDate.getDate()).toString().replace('-', ''));
    var month;
    if ((startDate.getMonth()) > endDate.getMonth()) {
      month = (endDate.getMonth() + 12) - (startDate.getMonth());
      increment = 1;
    }
    else {
      month = (endDate.getMonth()) - (startDate.getMonth());
      increment = 0
    }
    var Year = endDate.getFullYear() - (startDate.getFullYear() + increment);

   this.tottalExpy=this.tottalExpy+Year;
   this.tottalExpm=this.tottalExpm+month;
   if(this.tottalExpm>12){
     this.tottalExpy+=1;
     this.tottalExpm=this.tottalExpm-12;
   }
   this.tottalExpd=this.tottalExpd+Days;
   {
     if(this.tottalExpd>30){
      this.tottalExpm+=1;
      this.tottalExpd=this.tottalExpd-30;
     }
   }       
    this.TotalExp=this.tottalExpy+" Year(s) "+this.tottalExpm+" Month(s) "+this.tottalExpd+" Day(s)";
    console.log(this.TotalExp);   
  }

  calcExperience(sDate, eDate) {
   
    var startDate = new Date(sDate);
    var endDate = new Date(eDate);
    var increment;
    /// new Array<Duraaastion>();
    console.log("abd");
    this.cday = parseInt((endDate.getDate() - startDate.getDate()).toString().replace('-', ''));
   
    if ((startDate.getMonth()) > endDate.getMonth()) {
    this.cmonth = (endDate.getMonth() + 12) - (startDate.getMonth());
      increment = 1;
    }
    else {
      this.cmonth = (endDate.getMonth()) - (startDate.getMonth());
      increment = 0
    }
    this.cYear = endDate.getFullYear() - (startDate.getFullYear() + increment);
    ///////////////////

    return this.cYear + " Year(s)" + ' ' + this.cmonth + " Month(s)" + ' ' + this.cday + " Day(s)";
  }

  addExperience() {    
    this.inputuBackgrnd = this.uBackgrndForm.value;
    this.inputuBackgrnd.BackgroundID = 0;
    this.inputuBackgrnd.UserDetailID = this.userDetailId;
    if (this.formType == "Add") {
      if (this.inputuBackgrnd.CompanyName !== "" && this.inputuBackgrnd.Designation !== "" && new Date(this.uBackgrndForm.controls['LeavingDate'].value) > new Date(this.uBackgrndForm.controls['JoiningDate'].value)) {

        const data = this.backgroundDetails.data;
        data.push(this.inputuBackgrnd);
        this.backgroundDetails.data = data;
      }
      else if (new Date(this.uBackgrndForm.controls['LeavingDate'].value) < new Date(this.uBackgrndForm.controls['JoiningDate'].value)) {
        //this.isFailedMessage = true;
        this.snackBar.open("Leaving Date must be greater than Joining Date", "Ok", {
          duration: 2000,
        });
      }
        
    }
    else if (this.formType == "Update") {
        if (this.inputuBackgrnd.CompanyName !== "" && this.inputuBackgrnd.Designation !== "" && new Date(this.uBackgrndForm.controls['LeavingDate'].value) > new Date(this.uBackgrndForm.controls['JoiningDate'].value))
        {
        this.backgroundDetails.data.forEach(element => {
          if (element.BackgroundID == this.selectedRowIndex) {
            element.CompanyName = this.inputuBackgrnd.CompanyName;
            element.Designation = this.inputuBackgrnd.Designation;
            element.JoiningDate = this.inputuBackgrnd.JoiningDate;
            element.LeavingDate = this.inputuBackgrnd.LeavingDate;
          }
        });
      }
      else if (new Date(this.uBackgrndForm.controls['LeavingDate'].value) < new Date(this.uBackgrndForm.controls['JoiningDate'].value)) {
        //this.isFailedMessage = true;
        this.snackBar.open("Leaving Date must be greater than Joining Date", "Ok", {
          duration: 2000,
        });
      }
      //this.uBackgrndForm.reset();
    }

    //formDirective.resetForm();
    if (this.backgroundDetails.data.length > 0) {
      this.disableSave = true;
    }
    
    this.currentExp = this.calcExperience(this.datePipe.transform(localStorage.getItem("DateOfJoining"), "yyyy-MM-dd"), new Date());
   
    this.tottalExpy=this.tottalExpm=this.tottalExpd=0;
    for(var i in this.backgroundDetails.data){
      this.calcTotExp(this.backgroundDetails.data[i].JoiningDate,this.backgroundDetails.data[i].LeavingDate);

    }
    this.CalculateTotal();
      // 
  
  }
  CalculateTotal(){
    this.tottalExpm+=this.cmonth
      if(this.tottalExpm>=12){
        
        this.tottalExpy+=1;
        this.tottalExpm=this.tottalExpm-12;
      }
      this.tottalExpd=this.tottalExpd+this.cday;
      if(this.tottalExpd>30){
         this.tottalExpm+=1;
         this.tottalExpd=this.tottalExpd-30;
        }
      this.TotalExp=(this.tottalExpy+=this.cYear)+" Year(s) "+this.tottalExpm+" Month(s) "+this.tottalExpd+" Day(s)";
  }
  GetBackgroundDetails() {
    this.dataService.getBackGroundDetails(+localStorage.getItem('UserDetailID')).subscribe(
      res => {
     
        this.showExp = true;
        this.backgroundDetails.data = res;
        
        console.log(this.backgroundDetails.data);
        for(var i in this.backgroundDetails.data){
        this.calcTotExp(this.backgroundDetails.data[i].JoiningDate,this.backgroundDetails.data[i].LeavingDate);

      }
      this.CalculateTotal();
        // 
        if (this.backup == 1) {
          if (this.backgroundDetails.data.length == 0) {
            this.disableSave = false;
          }
          else {
            this.disableSave = true;
          }
        }
        else {
          this.disableSave = true;
        }
      },
      err => {
        console.log(err);
      }
    );
  }
  Save() {
    console.log(JSON.stringify(this.backgroundDetails.data));
   

    var id = +localStorage.getItem('UserDetailID');
    this.dataService.AddUserBackGound(id, this.showExp, this.backgroundDetails.data)
      .subscribe((result) => {
        this.globalResponse = result;
      },
        error => {
          console.log(error);
          //this.isFailedMessage = true;
          this.snackBar.open("Error in posting data", "Ok", {
            duration: 2000,
          });
        },
        () => {
          //this.isSuccessMessage = true;
          if (this.formType == "Add") {
            // this.snackBar.open("Resource Added Successfully", "Ok", {
            // duration: 2000,
            //});
            this.isExp = true;
            this.isAddItem = false;
            this.disableFooter = true;
          }
          else if (this.formType == "Update") {
            // this.snackBar.open("Resource Updated Successfully", "Ok", {
            //   duration: 2000,
            // });
          }
          //this.router.navigate(['resource']);
        })
  }

  formReset(formData: any, formDirective: FormGroupDirective) {
    formDirective.resetForm();
    this.uBackgrndForm.reset();
    this.formType = "Add";
  }
  highlight(row) {
    this.selectedRowIndex = row.BackgroundID;
    this.formType = "Update";
    this.uBackgrndForm.setValue({
      BackgroundID: row.BackgroundID, CompanyName: row.CompanyName, Designation: row.Designation,
      JoiningDate:new Date(row.JoiningDate),
      LeavingDate: new Date(row.LeavingDate)
      // JoiningDate: this.datePipe.transform(row.JoiningDate, "yyyy-MM-dd"),
      // LeavingDate: this.datePipe.transform(row.LeavingDate, "yyyy-MM-dd")
    });
  }
}

export class UserBackgrnd {
  BackgroundID: number;
  UserDetailID: number;
  CompanyName: string;
  Designation: string;
  JoiningDate: Date;
  LeavingDate: Date;
  Duration: string;
  IsExperienced: Boolean;
}








