import { Component, OnInit, ViewChild } from '@angular/core';
import { ResourceService } from '../resource.service';
import { MatTableDataSource, MatSort, MatSortable } from '@angular/material';
import { FormGroup, FormGroupDirective, FormBuilder, Validators, AbstractFormGroupDirective } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MatSnackBar } from '@angular/material';
import { Router, RouterLinkWithHref } from '@angular/router';
import { toDate } from '@angular/common/src/i18n/format_date';
import { from } from 'rxjs';
import { TosterService } from '../../../shared/services/toster.service';
import { Resource } from '../resource.model';
import { formDirectiveProvider } from '@angular/forms/src/directives/ng_form';
//import { start } from 'repl';

@Component({
  selector: 'app-resource-background',
  templateUrl: './resource.backgrounddetails.component.html',
  styleUrls: ['./resource.backgrounddetails.component.scss']
})
export class ResourceBackgrounddetailsComponent implements OnInit {
  tottalExpy: any = 0;
  Days: Number;
  tottalExpm: any = 0;
  tottalExpd: any = 0;
  userDetailId: number;
  showExp: boolean = false;//show data table
  selected: any = 'false';
  isExp: boolean = false;//disable/enable yes/no
  cYear: number;
  cmonth: number;
  cday: number;
  backgroundDetails = new MatTableDataSource<UserBackgrnd>();
  currentExp: any;
  backup: any;
  isAddItem: boolean = true;//show expo panel
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
  TotalExpBackup: string;
  count: number = 0;
  onlyLetters = "^[a-zA-Z \-\']+";
  disableAction:boolean=true;
  response:Resource;
  joiningDate:any;
  minDate=new Date(1990,0,1);
  monthDay: number[] = [31, -1, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; 
  todayDate=new Date;
  panelOpenState=true;
  isDisabled=true;
  hideDiscard:boolean=true;
  backupexp:any;
  texp:any;
  @ViewChild(MatSort) sort: MatSort
  constructor(public dataService: ResourceService, private datePipe: DatePipe, private formBuilder: FormBuilder, public snackBar: MatSnackBar, public router: Router,public toster:TosterService)
   { 
    //  debugger;
    //  this.getJoiningDate();
    // if(this.joiningDate!=undefined)
    // this.currentExp=this.calcExperience(this.joiningDate,new Date())
  }

  getToday(): string {
    return new Date().toISOString().split('T')[0]
  }

  // edit() {

  //   if (this.selected == 'true') {
  //     this.isAddItem = true;
  //   }
  //   else {
  //     this.isAddItem = false;
  //   }
  //   this.isExp = false;
  //   this.disableFooter = true;
  //   // this.disableAction=false;
  //   //this.panelOpenState=true;
  // }
  discard() {
    debugger;
    // this.isExp = true;
    // this.isAddItem = false;
    // this.disableFooter = true;
    // this.TotalExp = this.TotalExpBackup;
    // //this.selected = 'false';
    // this.disableAction=true;
    this.GetBackgroundDetailsDS();    
    this.selectedRowIndex=-1;
    //this.restorebackup();
    this.toster.showInfo("Changes discarded");
  }  
  CheckForWhiteSpace(controlName:string){
    debugger;
    
    if(this.uBackgrndForm.controls[controlName].value<=0){
      return this.uBackgrndForm.controls[controlName].setErrors({ pattern: true });
    }
    else{
      this.uBackgrndForm.controls[controlName].setValue(this.uBackgrndForm.controls[controlName].value.trim());
    }
  }
 
ngOnInit() {
    debugger;
   
      if(localStorage.getItem('isLoggedin')=='true'){
        this.userDetailId = +localStorage.getItem('UserDetailID');
        if (JSON.parse(localStorage.getItem('IsExperienced'))) {
          this.selected = 'true';
          this.GetBackgroundDetails();
       
        }
        else {
          this.selected = 'false';
          this.backup = 1;
          this.isAddItem=false;  
       
        }
      
           this.getJoiningDate();    
           this.currentExp = this.calcExperience(this.datePipe.transform(localStorage.getItem("DateOfJoining"), "yyyy-MM-dd"), new Date());
        
          this.uBackgrndForm = this.formBuilder.group({ 
          BackgroundID: [''],
          CompanyName: ['', [Validators.required, Validators.pattern(this.onlyLetters)]],
          Designation: ['', [Validators.required, Validators.pattern(this.onlyLetters)]],
          JoiningDate: ['', Validators.required],
          LeavingDate: ['', Validators.required],
    
        }, {
            validator: this.matchval 
          });
    
          // this.sort.sort(<MatSortable>({id: 'JoiningDate', start: 'desc'}));
          this.backgroundDetails.sort = this.sort;
      }
      else{
      this.router.navigateByUrl("/login");
      }
  }
getJoiningDate(){
  //debugger;
  this.dataService.getResourceById(+localStorage.getItem("UserDetailID"))
  .subscribe((res)=>{
   // debugger;   
    this.response=res; 
  this.joiningDate=this.datePipe.transform(this.response.DateOfJoining,"yyyy-MM-dd");
  if(this.joiningDate!=null)
  this.currentExp=this.calcExperience(this.joiningDate,new Date())
//  this.ifAvailable=true;
  });
}
  matchval(group: FormGroup) {
    let c1 = group.controls['JoiningDate'].value;
    let c2 = group.controls['LeavingDate'].value;
    if (c2 >= c1) {
      // alert("done");
      return null;
    }
    else {
      return group.controls['LeavingDate'].setErrors({ matchval: true });

    }
  }

  onChange($event) {
    debugger
    if ($event == "true") {
      this.GetBackgroundDetailsDS();
      this.isAddItem = true;
        this.getJoiningDate();  
        
        this.showExp = true;
      
    }
    else {
      this.showExp = false;
      this.isAddItem = false;
     
    }
  }
  leapYear(date){
    //debugger;
    date=new Date(date);
    var year=date.getFullYear();
    if((0==year%4)&&(0!=year%100)||(0==year%400)){
      return true;
    }
    else{
      return false;
    }

  }
  //current Experience and datatable duration calculation
  calcExperience(sDate, eDate) {    
   //  debugger;
     var startDate = new Date(sDate);
     var endDate = new Date(eDate);
     var increment=0;
     
     if(startDate.getDate()>endDate.getDate()){
       increment = this.monthDay[startDate.getMonth()];        
     }
     if(increment!=0){
       this.cday = (endDate.getDate()+ increment) - startDate.getDate();
       increment = 1;  
     }
     else{
     this.cday = parseInt((endDate.getDate() - startDate.getDate()).toString().replace('-', ''));
     increment=0;
   }
    
     if ((startDate.getMonth()+increment) > endDate.getMonth()) {
     this.cmonth = (endDate.getMonth() + 12) - (startDate.getMonth()+increment);
       increment = 1;
     }
     else {
       this.cmonth = (endDate.getMonth()) - (startDate.getMonth()+increment);
       increment = 0
     }
     this.cYear = endDate.getFullYear() - (startDate.getFullYear() + increment);    
  
   return this.cYear + " Year(s)" + ' ' + this.cmonth + " Month(s)" + ' ' + this.cday + " Day(s)";
 }


  calcTotExp(sDate, eDate) {
  // debugger;
     sDate=new Date(sDate);
     eDate=new Date(eDate);
      if(sDate>eDate){
        var fromDate=eDate;
        var ToDate= sDate;
      }
      else{
        fromDate=sDate;
        ToDate=eDate;
      }
      var increment=0;
   
      if(fromDate.getDate()>=ToDate.getDate()){
        increment=this.monthDay[fromDate.getMonth()];           
      }
      // if(this.leapYear(fromDate)){
      //   increment=-1;
      // }
      if (increment== -1)  
      {
    if (this.leapYear(fromDate))
    {
        increment = 29;
    } 
    else
    {
        increment = 28;
    }
      }
      if(increment!=0){
        console.log(ToDate.getDate());
      console.log(fromDate.getDate());
        var Days = (ToDate.getDate()+ increment) - fromDate.getDate();
        increment = 1; 

      }
      else
    {    
        Days= ToDate.getDate() -fromDate.getDate();
    }

    if ((fromDate.getMonth() + increment) > ToDate.getMonth())
    {   
      var month = (ToDate.getMonth()+ 12) - (fromDate.getMonth() + increment);
           increment = 1;
    }
    else
    {    
      month = (ToDate.getMonth()) - (fromDate.getMonth() + increment);
        increment = 0;
    }
    var Year = ToDate.getFullYear() - (fromDate.getFullYear() + increment);    
    this.tottalExpd = this.tottalExpd + Days;
    {
      if (this.tottalExpd == 30) {
        this.tottalExpm += 1;
        this.tottalExpd = this.tottalExpd - 30;
      }
      else if(this.tottalExpd==31){
        this.tottalExpm += 1;
        this.tottalExpd = this.tottalExpd - 31;
      }
    }  
    this.tottalExpm = this.tottalExpm + month;
    if (this.tottalExpm >= 12) {
      this.tottalExpy += 1;
      this.tottalExpm = this.tottalExpm - 12;
    }
    this.tottalExpy = this.tottalExpy + Year;
   // debugger;
    this.TotalExp = this.tottalExpy + " Year(s) " + this.tottalExpm + " Month(s) " + this.tottalExpd + " Day(s)";
    //this.TotalExp=Year+" Year(s) "+month+" Month(s) "+Days+" Day(s)";
    //console.log(this.TotalExp);

  } 
 //Calculate Total experience
  CalculateTotal() {
  //debugger;

    this.tottalExpd = this.tottalExpd + this.cday;
    if (this.tottalExpd >= 30) {
      this.tottalExpm += 1;
      this.tottalExpd = this.tottalExpd - 30;
    }
    this.tottalExpm += this.cmonth;
    if (this.tottalExpm >= 12) {

      this.tottalExpy += 1;
      this.tottalExpm = this.tottalExpm - 12;
    }

    this.TotalExp = (this.tottalExpy += this.cYear) + " Year(s) " + this.tottalExpm + " Month(s) " + this.tottalExpd + " Day(s)";
    this.texp=parseFloat( this.tottalExpy+'.'+this.tottalExpm).toFixed(2);
    if (this.count == 0) {
      
      this.TotalExpBackup = this.TotalExp;
      this.count += 1;
    }

  }
  bID: number = 0;
  addExperience( formDirective: FormGroupDirective,row:any) {
    debugger;
    this.inputuBackgrnd = this.uBackgrndForm.value;
    this.inputuBackgrnd.BackgroundID = this.bID;
    this.bID += 1;
    this.inputuBackgrnd.UserDetailID = this.userDetailId;
    
    if (this.formType == "Add") {
      if (this.inputuBackgrnd.CompanyName !== "" && this.inputuBackgrnd.Designation !== "" && new Date(this.uBackgrndForm.controls['LeavingDate'].value) >= new Date(this.uBackgrndForm.controls['JoiningDate'].value)) {
        for (var i in this.backgroundDetails.data) {
          console.log(new Date (this.backgroundDetails.data[i].LeavingDate));
          console.log(new Date (this.inputuBackgrnd.JoiningDate));
          if (this.backgroundDetails.data[i].CompanyName.toLowerCase() == this.inputuBackgrnd.CompanyName.toLowerCase() &&
           this.backgroundDetails.data[i].Designation.toLowerCase() == this.inputuBackgrnd.Designation.toLowerCase()) {
            // this.snackBar.open("Record already exists", "Ok", {
            //   duration: 5000,
            // });
            this.toster.showError("Record not modified :Record already exists");
            this.selectedRowIndex=-1;
            return;
          }
          if( this.datePipe.transform(this.backgroundDetails.data[i].LeavingDate,'yyyy-MM-dd')> this.datePipe.transform( this.inputuBackgrnd.JoiningDate,'yyyy-MM-dd')){
            this.toster.showError("Joining date of Last company(s) can't be lesser or equal to Leaving date of previous company(s)");
            return;
          }       
         
        }
        if(new Date(this.inputuBackgrnd.JoiningDate)> new Date(this.joiningDate)|| new Date(this.inputuBackgrnd.LeavingDate)>=new Date(this.joiningDate)){
          this.toster.showError("Past company(s) Joining Date/Leaving Date can't exceed Current Joining Date/Leaving Date")
          return;
        }
        const data = this.backgroundDetails.data;
        data.push(this.inputuBackgrnd);
        this.backgroundDetails.data = data;
       // this.hideDiscard=false;
      }
      
      else if (new Date(this.uBackgrndForm.controls['LeavingDate'].value) < new Date(this.uBackgrndForm.controls['JoiningDate'].value)) {
        //this.isFailedMessage = true;
        // this.snackBar.open("Leaving Date must be greater than Joining Date", "Ok", {
        //   duration: 2000,
        // });
        this.toster.showError("Leaving Date must be greater than Joining Date");
      }
     
      else {

      }
      this.snackBar.open("Successfully Added", "Ok", {
               duration: 2000,
             });
      this.selectedRowIndex=-1;
      this.uBackgrndForm.reset();
    }
    else if (this.formType == "Update") {
      debugger;
      var flag = 0;
      let len=this.backgroundDetails.data.length;
    if(len>1){
      for(var k=0;k<len;k++){
        if(this.backgroundDetails.data[k].BackgroundID==this.selectedRowIndex){
          if(k==0 && new Date(this.backgroundDetails.data[k+1].JoiningDate)<new Date(this.inputuBackgrnd.LeavingDate)){
            this.toster.showError("leaving date should not be greter than next company joining date");
          }
          else if(k==(len-1) && new Date(this.backgroundDetails.data[k-1].LeavingDate)>new Date(this.inputuBackgrnd.JoiningDate)){
            this.toster.showError("joining date should be less than previous company leaving date ");
          }
          else if(k!=0 && k!=(len-1) ) {
            if(new Date(this.backgroundDetails.data[k-1].LeavingDate)>new Date(this.inputuBackgrnd.JoiningDate) ||new Date(this.backgroundDetails.data[k+1].JoiningDate)<new Date(this.inputuBackgrnd.LeavingDate) ){
              this.toster.showError("joining can not be lesser than previous leaving date and leaving date should not be greater than next joining date  ");
          
            }
            else{
              this.backgroundDetails.data.forEach(element => {
                if (element.BackgroundID == this.selectedRowIndex) {
                    
                  element.CompanyName = this.inputuBackgrnd.CompanyName;
                  element.Designation = this.inputuBackgrnd.Designation;
                  element.JoiningDate =this.datePipe.transform(this.inputuBackgrnd.JoiningDate, "yyyy-MM-dd");
                  element.LeavingDate =this.datePipe.transform(this.inputuBackgrnd.LeavingDate, "yyyy-MM-dd");
                }
              });
            }

           }
          
           
          else{

            if (this.inputuBackgrnd.CompanyName !== "" && this.inputuBackgrnd.Designation !== "" && new Date(this.uBackgrndForm.controls['LeavingDate'].value) >= new Date(this.uBackgrndForm.controls['JoiningDate'].value)) {
       
              for (var i in this.backgroundDetails.data) {
      
                if (this.backgroundDetails.data[i].CompanyName.toLowerCase() == this.inputuBackgrnd.CompanyName.toLowerCase() &&
                 this.backgroundDetails.data[i].Designation.toLowerCase() == this.inputuBackgrnd.Designation.toLowerCase()) {
                  flag=1;           
                        
                }
            
                
              }
              if(new Date(this.inputuBackgrnd.JoiningDate)>= new Date(this.joiningDate)||new Date(this.inputuBackgrnd.LeavingDate)>=new Date(this.joiningDate)){
                this.toster.showError("Past company(s) Joining Date/Leaving Date can't exceed Current Joining Date/Leaving Date")
                return;
              }
            
             // update date for the existing record
              if (flag != 0) {
                this.backgroundDetails.data.forEach(element => {
                  if (element.BackgroundID == this.selectedRowIndex) {
                                             
                       if(new Date(element.JoiningDate).getTime()  !=new Date(this.inputuBackgrnd.JoiningDate).getTime()||
                           new Date(element.LeavingDate).getTime()!= new Date(this.inputuBackgrnd.LeavingDate).getTime()&&
                           new Date(this.inputuBackgrnd.JoiningDate)<=new Date(element.LeavingDate) )
                       {
                         
                         debugger;
                        console.log(new Date(this.inputuBackgrnd.JoiningDate));
                        console.log((this.inputuBackgrnd.JoiningDate));
                        element.JoiningDate =this.datePipe.transform(this.inputuBackgrnd.JoiningDate, "yyyy-MM-dd");;
                        element.LeavingDate =this.datePipe.transform(this.inputuBackgrnd.LeavingDate, "yyyy-MM-dd");
                        flag=2;
                       }
                       
                  
                  }
                });
               if(flag==1){
                // this.snackBar.open("Record already exists", "Ok", {
                //   duration: 5000,
      
                // });
                this.toster.showWarning("Cannot Update: Record is unmodified");
                this.selectedRowIndex=-1;
               }
              }
              else  {
                this.backgroundDetails.data.forEach(element => {
                  if (element.BackgroundID == this.selectedRowIndex) {
                      
                    element.CompanyName = this.inputuBackgrnd.CompanyName;
                    element.Designation = this.inputuBackgrnd.Designation;
                    element.JoiningDate =this.datePipe.transform(this.inputuBackgrnd.JoiningDate, "yyyy-MM-dd");;
                    element.LeavingDate =this.datePipe.transform(this.inputuBackgrnd.LeavingDate, "yyyy-MM-dd");;
                  }
                });
              }
              this.snackBar.open("Updated successfully", "Ok", {
                duration: 2000,
              });
            }
      
      
      
      
            else if (new Date(this.uBackgrndForm.controls['LeavingDate'].value) < new Date(this.uBackgrndForm.controls['JoiningDate'].value)) {
              
              // this.snackBar.open("Leaving Date must be greater than Joining Date", "Ok", {
              //   duration: 2000,
              // });
              this.toster.showError("Leaving Date must be greater than Joining Date");
            }
            
            //this.uBackgrndForm.reset();
            this.selectedRowIndex=-1;
          }
           
          //formDirective.resetForm();
          this.uBackgrndForm.reset();
          this.formType = "Add"
          //formDirective.resetForm();
          if (this.backgroundDetails.data.length > 0) {
            this.disableSave = true;
          }
      
          this.currentExp = this.calcExperience(this.datePipe.transform(localStorage.getItem("DateOfJoining"), "yyyy-MM-dd"), new Date());
         // this.currentExp = this.calcExperience(this.datePipe.transform(this.joiningDate, "yyyy-MM-dd"), new Date());
      
          this.tottalExpy = this.tottalExpm = this.tottalExpd = 0;
         // debugger;
          for (var i in this.backgroundDetails.data) {
            this.calcTotExp(this.backgroundDetails.data[i].JoiningDate, this.backgroundDetails.data[i].LeavingDate);
      
          }
          console.log(this.TotalExp);
          this.CalculateTotal();

          }
        }
    }
    else{
      this.backgroundDetails.data.forEach(element => {
        if (element.BackgroundID == this.selectedRowIndex) {
            
          element.CompanyName = this.inputuBackgrnd.CompanyName;
          element.Designation = this.inputuBackgrnd.Designation;
          element.JoiningDate =this.datePipe.transform(this.inputuBackgrnd.JoiningDate, "yyyy-MM-dd");;
          element.LeavingDate =this.datePipe.transform(this.inputuBackgrnd.LeavingDate, "yyyy-MM-dd");;
        }
      });
    }
      }
    
    //formDirective.resetForm();
    this.uBackgrndForm.reset();
    this.formType = "Add"
    //formDirective.resetForm();
    if (this.backgroundDetails.data.length > 0) {
      this.disableSave = true;
    }

    this.currentExp = this.calcExperience(this.datePipe.transform(localStorage.getItem("DateOfJoining"), "yyyy-MM-dd"), new Date());
   // this.currentExp = this.calcExperience(this.datePipe.transform(this.joiningDate, "yyyy-MM-dd"), new Date());

    this.tottalExpy = this.tottalExpm = this.tottalExpd = 0;
   // debugger;
    for (var i in this.backgroundDetails.data) {
      this.calcTotExp(this.backgroundDetails.data[i].JoiningDate, this.backgroundDetails.data[i].LeavingDate);

    }
    console.log(this.TotalExp);
    this.CalculateTotal();


  }


  GetBackgroundDetails() {
   // debugger
    this.dataService.getBackGroundDetails(+localStorage.getItem('UserDetailID')).subscribe(
      res => {

        this.showExp = true;
        this.backgroundDetails.data = res;

        console.log(this.backgroundDetails.data);
        for (var i in this.backgroundDetails.data) {
          this.calcTotExp(this.backgroundDetails.data[i].JoiningDate, this.backgroundDetails.data[i].LeavingDate);

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

  GetBackgroundDetailsDS() {

    this.dataService.getBackGroundDetails(+localStorage.getItem('UserDetailID')).subscribe(
      res => {

        // this.showExp = true;
       
        this.backgroundDetails.data = res;
      

      })
  }

  Save() {
    //console.log(JSON.stringify(this.backgroundDetails.data)); 
    debugger;
    var id = +localStorage.getItem('UserDetailID');
    // for(var i=0;i<=this.backgroundDetails.data.length;i++){
    //      if(new Date (this.backgroundDetails.data[i].LeavingDate)>new Date (this.backgroundDetails.data[i+1].JoiningDate)){
    //          this.toster.showError("Leaving date> joining date");
             
    //         //  this.highlight(this.backgroundDetails.data[i].BackgroundID)
    //          return;
    //      }
    //     }
         this.dataService.AddUserBackGound(id, this.showExp,this.texp, this.backgroundDetails.data)
         .subscribe((result) => {
           this.globalResponse = result;
         },
           error => {
             console.log(error);
             //this.isFailedMessage = true;
             // this.snackBar.open("Error in posting data", "Ok", {
             //   duration: 2000,
             // });
             this.toster.showError("Error in posting data");
           },
           () => {
             //this.isSuccessMessage = true;
             if (this.formType == "Add") {
              //  this.snackBar.open("Success", "Ok", {
              //   duration: 2000,
              //  });
              this.toster.showSuccess("Background details saved successfully")
               this.GetBackgroundDetailsDS();
               // this.isExp = true;
               // this.isAddItem = false;
               // this.disableFooter = true;
               // if(this.showExp==true){
               //   this.backupexp=1;
               //   this.hideDiscard=false;
               // }
               // else if(this.showExp==false){
               //   this.backupexp=0;
               //   this.hideDiscard=false; 
               // }
              
             }
             // else if (this.formType == "Update") {
             //   // this.snackBar.open("Resource Updated Successfully", "Ok", {
             //   //   duration: 2000,
             //   // });
             
             //this.router.navigate(['resource']);
           
            
           })
          
  




   
  }

  formReset(formDirective: FormGroupDirective) {
    //formDirective.resetForm();
    this.uBackgrndForm.reset();
    this.formType = "Add";
    this.selectedRowIndex=-1;
  }
  highlight(row) {
    this.selectedRowIndex = row.BackgroundID;
    this.formType = "Update";
    this.uBackgrndForm.setValue({
      BackgroundID: row.BackgroundID, CompanyName: row.CompanyName, Designation: row.Designation,
      JoiningDate: new Date(row.JoiningDate),
      LeavingDate: new Date(row.LeavingDate)
      // JoiningDate: this.datePipe.transform(row.JoiningDate, "yyyy-MM-dd"),
      // LeavingDate: this.datePipe.transform(row.LeavingDate, "yyyy-MM-dd")
    });
  }

  RemoveBackground(id):void{ 
     // debugger;
      for(var i=0;i<this.backgroundDetails.data.length;i++){

        const data = this.backgroundDetails.data;
        if(data[i].BackgroundID==id)
        data.splice(i,1);
        this.backgroundDetails.data = data;

      }

  }

}

export class UserBackgrnd {
  BackgroundID: number;
  UserDetailID: number;
  CompanyName: string;
  Designation: string;
  JoiningDate: string;
  LeavingDate: string;
  Duration: string;
  IsExperienced: Boolean;
}








