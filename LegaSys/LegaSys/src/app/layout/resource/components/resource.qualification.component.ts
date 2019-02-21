import { Component, OnInit, ɵConsole, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroupDirective, Validators, FormGroup, AbstractControl, FormGroupName } from '@angular/forms';
import { ResourceService } from '../resource.service';
import { MatTableDataSource, MatSnackBar, MatSort, MatTreeFlatDataSource } from '@angular/material';
import { TosterService } from '../../../shared/services/toster.service';
import { retryWhen } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resource-qualification',
  templateUrl: './resource.qualification.component.html',
  styleUrls: ['./resource.qualification.component.scss']
})

export class ResourceQualificationComponent implements OnInit {
  disablesave:any;
  disableFooter: boolean = true;
  uQualificationForm: any;
  qualificationDS1: any;
  qualificationDS = new MatTableDataSource<Qualification>();
  certificationDS = new MatTableDataSource<Qualification>();
  displayedColumns: string[] = ['Qualification', 'Stream', 'Year', 'BoardUniversity', 'Marks'];
  displayedCertColumns: string[] = ['CertificateNumber', 'Type', 'Stream', 'Year', 'Institution', 'Marks'];
  showQTable: boolean = false;
  qformType = "Add";
  cformType = "Add";
  iQualification: Qualification;
  iCertification: Qualification;
  selectedRowIndex: number = -1;
  selectedRowIndex1: number = -1;
  userDetailId: number; 
  educationDS = new MatTableDataSource<Qualification>();
  primaryskillSet: any;
  secondaryskillSet: any;
  hqualification: any;
  isAddItem: boolean = true;
  globalResponse: any;
  inputQualification: Qualification;
  qid: number = 0;
  cid: number = 0;
  namePattern = '^[a-zA-Z ]+$';
  cTypes:string[]=['Certificate','Diploma'];
  tResponse:any;
  boards:string[]=['CBSE','ICSE','UP Board','Bihar Board'];
  institutes:string[]=['DUCAT','TestInstitute', 'TestInstitute','TestInstitute'];
  cstreams:string[]=['Computer','IT','.NET']
  panelOpenState=open;
  errorFlag=1;
  

  public get userGroup(): FormGroup {
    return this.uQualificationForm.get('Qgrid') as FormGroup;
  }
  constructor(private formBuilder: FormBuilder, public dataservice: ResourceService, public snackBar: MatSnackBar,public toster:TosterService,private router: Router) {

  }

  ddlHQualification = [
    { id: '0', name: "Under 10th" },
    { id: '10', name: "10th" },
    { id: '12', name: '12th' },
    { id: 'G', name: 'Graduate' },
    { id: 'PG', name: 'Post Graduate' },
    { id: 'HQ', name: 'Higher Qualification' },

  ];
 

  
  discard() {
   
    this.GetQualification();
    this.GetCertification();
    this.selectedRowIndex=-1;
    this.selectedRowIndex1=-1;
    this.toster.showInfo("Changes discarded");
  }

  ngOnInit() {
     
    if(localStorage.getItem('isLoggedin')=='true'){
      this.uQualificationForm = this.formBuilder.group({
        // inputGroup: this.formBuilder.group({
        //   // PrimarySkillSet: ['', Validators.required],
        //   // SecondarySkillSet: [''],
        //   //HQualification: ['', Validators.required],
        // }),
        //Qgrid: this.formBuilder.array([this.QgridItem()])
        Qgrid: this.formBuilder.group({
          QualificationID: [''],
          Qualification: ['', Validators.required],
          // iQualification:[''],
          BoardUniversity: ['', [Validators.required,Validators.pattern(this.namePattern)]],
          QStream: [''],
          QYear: ['', [Validators.required, Validators.maxLength(4),Validators.minLength(4)]],
          QMarks: ['', [Validators.required]]
        }),
  
        Cgrid: this.formBuilder.group({
          CertificationID: [''],
          CertificateNumber: ['', [Validators.required, Validators.maxLength(10)]],
          Type: ['', Validators.required],
          Institution: ['', [Validators.required,Validators.pattern(this.namePattern)]],
          CStream: ['', Validators.required],
          CYear: ['', [Validators.required, Validators.maxLength(4),Validators.minLength(4)]],
          CMarks: ['', Validators.required]
        }),
  
      });
      this.showQTable = true;
      this.GetQualification();
      this.GetCertification();
    }
    else{
    this.router.navigateByUrl("/login");
    }
       
  }
  
  CheckForWhiteSpace(controlName:string){
    debugger;
    
    if(this.uQualificationForm.controls.Cgrid.controls[controlName].value<=0){
      return this.uQualificationForm.controls.Cgrid.controls[controlName].setErrors({ pattern: true });
    }
    else{
      this.uQualificationForm.controls.Cgrid.controls[controlName].setValue(this.uQualificationForm.Cgrid.formgroup.controls[controlName].value.trim());
    }
  }
  GetQualification() {
    // debugger;
    this.dataservice.getUserQualification(+localStorage.getItem("UserDetailID")).subscribe(
      res => {
        this.qualificationDS.data = res;
        // this.qualificationDS.sort=this.sort;
        //   if(this.educationDS.data[0].QualificationID>0){
        //     for(var i in this.educationDS.data){
        //     this.qualificationDS.data[i].QualificationID=  this.educationDS.data[i].QualificationID;
        //     this.qualificationDS.data[i].Qualification=this.educationDS.data[i].Qualification;
        //     this.qualificationDS.data[i].QStream=this.educationDS.data[i].QStream;
        //     this.qualificationDS.data[i].QYear=this.educationDS.data[i].QYear;
        //     this.qualificationDS.data[i].QMarks=this.educationDS.data[i].QMarks;
        //     this.qualificationDS.data[i].BoardUniversity=this.educationDS.data[i].BoardUniversity;

        //   }

        // }
        console.log(res);
      })
  }
  GetCertification() {
    // debugger;
    this.dataservice.getUserCertification(+localStorage.getItem("UserDetailID")).subscribe(
      res => {
        this.certificationDS.data = res;
        // this.certificationDS.sort=this.sort;
        console.log(res);
      }
    )
  }
  // onChange($event) {
  //   if ($event == "0") {
  //     this.showQTable = false;

  //   }
  //   else {
  //     this.showQTable = true;
  //     this.GetQualification();
  //     this.GetCertification();

  //   }
  // }
 
  yearErrorFlags(){
    if(this.errorFlag==1){
    return  "Year Already Exists";
    }
    else{
    return  "cannot be lesser or must be year difference in between ";
  }
  }
  matchYear(){
     debugger;
    let c1 = this.uQualificationForm.controls.Qgrid.controls['QYear'].value;
  
    for (var i in this.qualificationDS.data) {
    
    if(c1==this.qualificationDS.data[i].QYear){
      this.errorFlag=1;
      return this.uQualificationForm.controls.Qgrid.controls['QYear'].setErrors({matchYear:true});
    }
    else
    {      
    }

  
  }
  
  }
  matchQualification(value){
    // let Q=this.uQualificationForm.controls.Qgrid.controls['Qualification'].value;

    for (var i in this.qualificationDS.data) {
      console.log(this.qualificationDS.data[i].Qualification);
    if(value==this.qualificationDS.data[i].Qualification){
      return this.uQualificationForm.controls.Qgrid.controls['Qualification'].setErrors({matchQualification:true});
    }
    else
    {    
  
    }
  }
  
  }
  add(){
    const data = this.qualificationDS.data;
    data.push(this.iQualification);       
    this.qualificationDS.data = data;    
    this.uQualificationForm.controls.Qgrid.reset();
    this.disablesave=false;
    this.selectedRowIndex=-2;
  }
  addQualification(formDirective: FormGroupDirective) {
     debugger;
    
    console.log(this.qualificationDS.data);
    this.iQualification = this.uQualificationForm.controls.Qgrid.value;
    this.iQualification.QualificationID = this.qid;//prevent dual row select
    this.qid -= 1;
    this.iQualification.UserDetailID =  +localStorage.getItem('UserDetailID');
    this.iQualification.CertificationID = null;
    this.iQualification.CertificateNumber = null;
    this.iQualification.Type = null;
    this.iQualification.CStream = null;
    this.iQualification.CYear = null;
    this.iQualification.Institution = null;
    this.iQualification.CMarks = null;

    if (this.qformType == "Add") {
     
      if (this.iQualification.Qualification !== ""  && this.iQualification.QYear !== ""
        && this.iQualification.BoardUniversity !== "" && this.iQualification.QMarks !== null) {
          let length=this.qualificationDS.data.length;
          switch(this.iQualification.Qualification){
              case '12th' : if(this.qualificationDS.data.length>0){
                              let diffrence=parseInt(this.iQualification.QYear)-parseInt(this.qualificationDS.data[length-1].QYear)                         
                              if(diffrence>=2){
                                this.add();
                               
                                return;
                              }
                              else{
                                this.toster.showError("There should be 2 year minimum gap between 10Th and 12th");
                                return;
                              }
                            }
                            else{
                              this.toster.showError("Insert 10th Record first");
                              return;
                            }
             case 'Graduate' : if(this.qualificationDS.data.length>1){
                              let diffrence=parseInt(this.iQualification.QYear)-parseInt(this.qualificationDS.data[length-1].QYear)                            
                               if(diffrence>=3){
                                this.add();
                              
                                return;
                              }                                                    
                              else{
                                this.toster.showError("There should be 3 year minimum gap between 12Th and Gradualtion");
                                return;
                              }
                            }
                            else{
                              this.toster.showError("Insert 12th Record first");
                              return;
                            }
           case 'PostGraduate' : if(this.qualificationDS.data.length>2){
                              let diffrence=parseInt(this.iQualification.QYear)-parseInt(this.qualificationDS.data[length-1].QYear)
                              // if(this.qualificationDS.data[length-1].Qualification=="12th"){
                              //   this.toster.showError("Record Already exists");
                              // }
                               if(diffrence>=2){
                                this.add();
                           
                                return;
                              }                                                    
                              else{
                                this.toster.showError("There should be 2 year minimum gap between Graduation and Post Graduation");
                                return;
                              }
                            }
                            else{
                              this.toster.showError("Insert Graduation Record first");
                              return;
                            }    
             

        
             default: this.add();
           
                       return;       
                            
          }
          

    
      }
     
    }
    else if (this.qformType == "Update") {  
        debugger;
      if (this.iQualification.Qualification != ""  && this.iQualification.QYear != ""
        && this.iQualification.BoardUniversity != "" && this.iQualification.QMarks != null) {
         var countUpdate=0;
          switch(this.iQualification.Qualification){
            case '10th' : for(var j=0;j<this.qualificationDS.data.length;j++){
                             if(this.qualificationDS.data[j].Qualification=='12th' && this.iQualification.QYear>this.qualificationDS.data[j].QYear){
                               this.toster.showError(" 10th completion year can not be greter than 12th complition year");
                               countUpdate=1;
                              // this.selectedRowIndex=-2;
                               return;
                             }
                             if(this.qualificationDS.data[j].Qualification=='12th' && (parseInt(this.iQualification.QYear)-parseInt(this.qualificationDS.data[j].QYear))<2){
                               this.toster.showError("There should be minimum 2 year gap between 10th and 12th");
                               countUpdate=1;
                            //   this.selectedRowIndex=-2;
                               return;
                             }
                             
                            }
            case '12th': for(var k=0;k<this.qualificationDS.data.length;k++){
              if(this.qualificationDS.data[k].Qualification=='Graduate' && this.iQualification.QYear>this.qualificationDS.data[k].QYear){
                this.toster.showError(" 12th completion year can not be greter than Graduation complition year");
                countUpdate=1;
              //  this.selectedRowIndex=-2;
                return;
              }
              else if(this.qualificationDS.data[k].Qualification=='Graduate' && (parseInt(this.iQualification.QYear)-parseInt(this.qualificationDS.data[k].QYear))<3){
                this.toster.showError("There should be minimum 3 year gap between 12th and Graduation");
                countUpdate=1;
                //this.selectedRowIndex=-2;
                return;
              }
              // else{
             
              //     return;
              // }
             }           
             case 'Graduate': for(var l=0;l<this.qualificationDS.data.length;l++){
              if(this.qualificationDS.data[l].Qualification=='PostGraduate' && this.iQualification.QYear>this.qualificationDS.data[l].QYear){
                this.toster.showError(" Graduation completion year can not be greter than Post Graduation complition year");
                countUpdate=1;
               // this.selectedRowIndex=-2;
                return;
              }
              else if(this.qualificationDS.data[l].Qualification=='PostGraduate' && (parseInt(this.iQualification.QYear)-parseInt(this.qualificationDS.data[l].QYear))<2){
                this.toster.showError("There should be minimum 2 year gap between Graduation and Post Graduation");
                countUpdate=1;
               // this.selectedRowIndex=-2;
                return;
              }
              
             }           
           }
                  if(countUpdate==0){
                          this.qualificationDS.data.forEach(element => {
                            if (element.QualificationID == this.selectedRowIndex) {
                              element.Qualification = this.iQualification.Qualification;
                              element.QStream = this.iQualification.QStream;
                              element.QYear = this.iQualification.QYear;
                              element.BoardUniversity = this.iQualification.BoardUniversity;
                              element.QMarks = this.iQualification.QMarks;
                            }
                            
                          });
                          this.uQualificationForm.controls.Qgrid.reset();
                          this.qformType = "Add";
                         // this.selectedRowIndex=-2;
                        }

       
       
      }

    }
  //  this.selectedRowIndex=-2;
  }
 
  checkCertificate(){
    debugger;
    for(var i in this.certificationDS.data){
     if(this.certificationDS.data[i].CertificateNumber==this.uQualificationForm.value.Cgrid.CertificateNumber){
        alert("already exists");
                           
      }
    }
  }

  addCertification(formDirective: FormGroupDirective) {
    // debugger
   
    this.iCertification = this.uQualificationForm.controls.Cgrid.value;

    this.iCertification.CertificationID = this.cid;
    this.cid -= 1;
    this.iCertification.UserDetailID =  +localStorage.getItem('UserDetailID');
    if (this.cformType == "Add") {
      if (this.iCertification.CertificateNumber !== "" && this.iCertification.Type !== "" && this.iCertification.CStream !== ""
        && this.iCertification.CYear !== "" && this.iCertification.Institution !== "" && this.iCertification.CMarks !== null) {
          for (var i in this.certificationDS.data) {
            if (this.certificationDS.data[i].CertificateNumber.toLowerCase() == this.iCertification.CertificateNumber.toLowerCase()&& this.certificationDS.data[i].Type.toLowerCase()==this.iCertification.Type.toLowerCase()) {
              this.toster.showWarning("Certification Number: "+this.certificationDS.data[i].CertificateNumber +" already Exists")
              // , "Ok", {
              //   duration: 5000,
              // });
              return;
  
            }
          }

       
        const data = this.certificationDS.data;
        data.push(this.iCertification);
        this.certificationDS.data = data;
   
        this.uQualificationForm.controls.Cgrid.reset();
        this.disablesave=false;
      }

    }
    else if (this.cformType == "Update") {
      if (this.iCertification.CertificateNumber !== "" && this.iCertification.Type !== "" && this.iCertification.CStream !== ""
        && this.iCertification.CYear !== "" && this.iCertification.Institution !== "" && this.iCertification.CMarks !== null) {
        this.certificationDS.data.forEach(element => {
          if (element.CertificationID == this.selectedRowIndex1) {
            element.CertificateNumber = this.iCertification.CertificateNumber;
            element.Type = this.iCertification.Type;
            element.CStream = this.iCertification.CStream;
            element.CYear = this.iCertification.CYear;
            element.Institution = this.iCertification.Institution;
            element.CMarks = this.iCertification.CMarks;
          }
        });
        this.uQualificationForm.controls.Cgrid.reset();
        this.cformType = "Add";
      }
    }
   
  }
  InsertQualificationDetails() {
    this.educationDS.data = this.qualificationDS.data;
  }
  InsertCertificationDetails() {
    // debugger;
    var length = this.educationDS.data.length;
    var id = +localStorage.getItem('UserDetailID');
   
    for (var i in this.certificationDS.data) {
      if (parseInt(i) < length) {
        this.educationDS.data[i].CertificationID = this.certificationDS.data[i].CertificationID;
        this.educationDS.data[i].CertificateNumber = this.certificationDS.data[i].CertificateNumber;
        this.educationDS.data[i].Type = this.certificationDS.data[i].Type;
        this.educationDS.data[i].CStream = this.certificationDS.data[i].CStream;
        this.educationDS.data[i].CYear = this.certificationDS.data[i].CYear;
        this.educationDS.data[i].Institution = this.certificationDS.data[i].Institution;
        this.educationDS.data[i].CMarks = this.certificationDS.data[i].CMarks;
        // this.educationDS.data[i].PrimarySkillSet = this.inputQualification.PrimarySkillSet;
        // this.educationDS.data[i].SecondarySkillSet = this.inputQualification.SecondarySkillSet;
       // this.educationDS.data[i].HQualification = this.inputQualification.HQualification;
      }
      else {
        const data = new Qualification();
        data.CertificationID = this.certificationDS.data[i].CertificationID;
        data.CertificateNumber = this.certificationDS.data[i].CertificateNumber;
        data.Type = this.certificationDS.data[i].Type;
        data.CStream = this.certificationDS.data[i].CStream;
        data.CYear = this.certificationDS.data[i].CYear;
        data.Institution = this.certificationDS.data[i].Institution;
        data.CMarks = this.certificationDS.data[i].CMarks;
        // data.PrimarySkillSet = this.inputQualification.PrimarySkillSet;
        // data.SecondarySkillSet = this.inputQualification.SecondarySkillSet;
       // data.HQualification = this.inputQualification.HQualification;
        data.UserDetailID = id;

        this.educationDS.data.push(data);
      }
    }



  }
  Save() {
    
    // debugger;
    var id = +localStorage.getItem('UserDetailID');
    
    if (this.qualificationDS.data.length > 0) {

      this.InsertQualificationDetails();
    }
    if (this.certificationDS.data.length > 0) {
      this.InsertCertificationDetails();

    }
    if (this.qualificationDS.data.length == 0 && this.certificationDS.data.length == 0) {
      

    }  
    
    
    this.dataservice.AddUserQualification(id, this.educationDS.data)
      .subscribe(result => {
        this.globalResponse = result;
      },
        error => {
        
          // this.snackBar.open("Error in posting data", "Ok", {
          //   duration: 2000,
          // });
          this.toster.showError("Something went wrong");
        },
        () => {
        
          this.toster.showSuccess("Success");        
          
        
          this.formResetQ();
          this.formResetC();
          this.uQualificationForm.controls.Qgrid.reset();
          this.uQualificationForm.controls.Cgrid.reset();
           
          this.GetQualification();
          this.GetCertification();


        
        }
        

      )
  }
  formResetQ() {
  
    this.uQualificationForm.controls.Qgrid.reset();   
    this.qformType = "Add"; 
    this.selectedRowIndex=-1;
    
   
  }
  formResetC() {
    this.uQualificationForm.controls.Cgrid.reset();
    this.cformType = "Add";
    this.selectedRowIndex1=-1;
    
  }
  highlight(row) {
    // debugger;
   
    this.selectedRowIndex = row.QualificationID;
    this.qformType = "Update";
   
    this.uQualificationForm.controls.Qgrid.setValue({
      QualificationID: row.QualificationID, Qualification: row.Qualification, QStream: row.QStream, QYear: row.QYear,
      BoardUniversity: row.BoardUniversity, QMarks: row.QMarks
    });
  }

  highlightCert(row) {
    
    this.selectedRowIndex1 = row.CertificationID;
    this.cformType = "Update";
    this.uQualificationForm.controls.Cgrid.setValue({
      CertificationID: row.CertificationID, CertificateNumber: row.CertificateNumber, Type: row.Type, CYear: row.CYear,
      Institution: row.Institution, CStream: row.CStream, CMarks: row.CMarks
    })
  }
 

}



export class Qualification {
  PrimarySkillSet: string;
  SecondarySkillSet: string;  
  HQualification: string;
  QualificationID?: number;
  UserDetailID: number;
  Qualification: string;
  QStream: string;
  QYear: string;
  BoardUniversity: string;
  QMarks: number;
  CertificationID?: number;
  Type: string;
  CertificateNumber: String;
  Institution: string;
  CStream: string;
  CYear: string;
  CMarks: string;
}
