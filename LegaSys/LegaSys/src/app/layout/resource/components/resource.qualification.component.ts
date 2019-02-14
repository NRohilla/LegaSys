import { Component, OnInit, ɵConsole, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroupDirective, Validators, FormGroup, AbstractControl, FormGroupName } from '@angular/forms';
import { ResourceService } from '../resource.service';
import { MatTableDataSource, MatSnackBar, MatSort, MatTreeFlatDataSource } from '@angular/material';
import { TosterService } from '../../../shared/services/toster.service';

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
  // Qgrid: any;
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
  boards:string[]=['CBSE','ICSE','UP','Bihar Board'];
  institutes:string[]=['DUCAT','TestInstitute', 'TestInstitute','TestInstitute'];
  cstreams:string[]=['Computer','IT','.NET']
  panelOpenState=open;
  errorFlag=1;
  //Qdisable:boolean=false;
  // @ViewChild(MatSort) sort: MatSort;
  // @ViewChild('matformfield') 
  // matformfield:ElementRef;

  public get userGroup(): FormGroup {
    return this.uQualificationForm.get('Qgrid') as FormGroup;
  }
  constructor(private formBuilder: FormBuilder, public dataservice: ResourceService, public snackBar: MatSnackBar,public toster:TosterService) {

  }

  ddlHQualification = [
    { id: '0', name: "Under 10th" },
    { id: '10', name: "10th" },
    { id: '12', name: '12th' },
    { id: 'G', name: 'Graduate' },
    { id: 'PG', name: 'Post Graduate' },
    { id: 'HQ', name: 'Higher Qualification' },

  ];
 

  edit() {
    // this.disableFooter = false;
    // this.uQualificationForm.enable();
    // this.isAddItem = true;
    // if(this.qualificationDS.data.length==0 && this.certificationDS.data.length==0){
    //   this.disablesave=true;
    // }
  }
  discard() {
    //this.uQualificationForm.disable();
    // this.disableFooter = true;
    // this.isAddItem = false;
    this.GetQualification();
    this.GetCertification();
    this.selectedRowIndex=-1;
    this.selectedRowIndex1=-1;
  }

  ngOnInit() {
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
    //this.uQualificationForm.disable();
       
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
      //console.log(this.qualificationDS.data[i].QYear);
    if(c1==this.qualificationDS.data[i].QYear){
      this.errorFlag=1;
      return this.uQualificationForm.controls.Qgrid.controls['QYear'].setErrors({matchYear:true});
    }
    else
    {      
    }

    // if(this.qualificationDS.data.length>0 && this.uQualificationForm.controls.Qgrid.controls['Qualification'].value=="12th"
    // && (this.qualificationDS.data[i].Qualification=="10th"&&  c1<=this.qualificationDS.data[i].QYear||c1<this.qualificationDS.data[i].QYear+2)){
    //   //alert("must be greater");
    //   this.errorFlag=0;
    //   return this.uQualificationForm.controls.Qgrid.controls['QYear'].setErrors({matchYear:true});
    // }
    // else if(this.uQualificationForm.controls.Qgrid.controls['Qualification'].value=="Graduate" &&( this.qualificationDS.data[i].Qualification=="12th"
    //    && c1<=this.qualificationDS.data[i].QYear||c1< this.qualificationDS.data[i].QYear+3)){
    //     this.errorFlag=0;
    //     return this.uQualificationForm.controls.Qgrid.controls['QYear'].setErrors({matchYear:true});
    // }
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
  
  addQualification(formDirective: FormGroupDirective) {
     debugger;
    
    console.log(this.qualificationDS.data);
    this.iQualification = this.uQualificationForm.controls.Qgrid.value;
    this.iQualification.QualificationID = this.qid;//prevent dual row select
    this.qid -= 1;
    this.iQualification.UserDetailID =  +localStorage.getItem('UserDetailID');
    // this.iQualification.PrimarySkillSet = null;
    // this.iQualification.SecondarySkillSet = null;
    //this.iQualification.HQualification = null;
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
         
          // if(this.qualificationDS.data.length==0 && this.iQualification.Qualification!="10th"){
          //   this.toster.showError("Add 10th record first");
          //   return;
          // }
          // else if(this.qualificationDS.data.length>0 && this.iQualification.Qualification=="12th"){
          //   for(var i in this.qualificationDS.data){
          //   if(this.iQualification.QYear<this.qualificationDS.data[i].QYear|| this.iQualification.QYear<this.qualificationDS.data[i].QYear+2){
          //     this.toster.showError("must be greater");
          //     return;
          //   }
          //   else{
              
          //   }
          // }}

        for (var i in this.qualificationDS.data) {
          if (this.qualificationDS.data[i].Qualification.toLowerCase() == this.iQualification.Qualification.toLowerCase()) {
            this.toster.showWarning("Qualification: "+this.qualificationDS.data[i].Qualification+ " already Exists");
            // , "Ok", {
            //   duration: 5000,
            // });
            return;

          }
          if(this.iQualification.QYear==this.qualificationDS.data[i].QYear){
            this.toster.showError("Year Already exists");

            return;
          }
         
        }
        const data = this.qualificationDS.data;
        data.push(this.iQualification);
        //this.qualificationDS.data.push(this.iQualification);
        // debugger;
        this.qualificationDS.data = data;
          
        console.log(this.qualificationDS.data);
        console.log(data);
        this.uQualificationForm.controls.Qgrid.reset();
        this.disablesave=false;
      }
      // else{
      //   this.uQualificationForm.controls.Qgrid.controls.reset();
      // }
    }
    else if (this.qformType == "Update") {  
        
      if (this.iQualification.Qualification != ""  && this.iQualification.QYear != ""
        && this.iQualification.BoardUniversity != "" && this.iQualification.QMarks != null) {
         
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
        //this.Qdisable=false;
      }

    }
    //  formDirective.resetForm();
    //  this.uQualificationForm.controls.Qgrid.reset();
    //  this.uQualificationForm.controls.Cgrid.reset();

    //this.uQualificationForm.controls.Qgrid.patchValue( {QStream:"",QYear:""} );
    //this.uQualificationForm.controls.Qgrid.reset();


    // this.uQualificationForm.value.Qgrid.Stream="";
    // formDirective.resetForm({
    //   'Stream': ''//Or '' to empty initial value. 
    //   //address: this.hero.addresses[0] || new Address()
    // });
    //  this.uQualificationForm.controls.Qgrid.controls.reset();
    //this.formResetQ(event);
  }
  // valueChanged(value){
  //   debugger;
  //   for (var i in this.qualificationDS.data) {
  //     if (this.qualificationDS.data[i].Qualification.toLowerCase() == value) {
         
  //         this.uQualificationForm.controls.Qgrid.setValue({
  //         QualificationID:this.qualificationDS.data[i].QualificationID,
  //         Qualification:this.qualificationDS.data[i].Qualification,        
  //         QStream: this.qualificationDS.data[i].QStream,
  //         QYear:this.qualificationDS.data[i].QYear,
  //         BoardUniversity:this.qualificationDS.data[i].BoardUniversity,
  //         QMarks:this.qualificationDS.data[i].QMarks
        
  //       });
  //       this.qformType="Update";
  //         return;
  //     }
  //     else{
  //       // this.uQualificationForm.controls.Qgrid.patchValue({
  //       //   Qualification:value,
  //       //   Qstream:''
  //       // });
  //       //this.uQualificationForm.controls.Qgrid.reset();
  //       this.uQualificationForm.controls.Qgrid.setValue({
  //         QualificationID:'',
  //         Qualification:value,
  //         QStream:'',
  //         QYear:'',
  //         BoardUniversity:'',
  //         QMarks:''
  //       });
  //       this.qformType="Add";
  //     }
  //   } 
  // }
  checkCertificate(){
    debugger;
    for(var i in this.certificationDS.data){
     if(this.certificationDS.data[i].CertificateNumber==this.uQualificationForm.value.Cgrid.CertificateNumber){
        alert("already exists");
                  //  this.matformfield=true ;             
      }
    }
  }

  addCertification(formDirective: FormGroupDirective) {
    // debugger
    //this.certificationDS.data=null;
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

        // console.log(this.iCertification);
        // console.log(this.certificationDS.data);
        const data = this.certificationDS.data;
        data.push(this.iCertification);
        this.certificationDS.data = data;
        // console.log(this.certificationDS.data);


        //this.certificationDS.data.push(this.iCertification);

        // this.educationDS.data=data;
        //console.log(data);
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
    //formDirective.resetForm();

    // this.uQualificationForm.controls.Cgrid.reset();
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
    //console.log(JSON.stringify(this.backgroundDetails.data));

    // debugger;
    var id = +localStorage.getItem('UserDetailID');
    //this.inputQualification = this.uQualificationForm.controls.inputGroup.value;
    //    const eds = new Qualification();
    // eds.PrimarySkillSet = this.inputQualification.PrimarySkillSet;
    // eds.SecondarySkillSet = this.inputQualification.SecondarySkillSet;
    // eds.HQualification = this.inputQualification.HQualification;
    // eds.UserDetailID=id;
    // this.educationDS.data.push(eds);

    if (this.qualificationDS.data.length > 0) {

      this.InsertQualificationDetails();
    }
    if (this.certificationDS.data.length > 0) {
      this.InsertCertificationDetails();

    }
    if (this.qualificationDS.data.length == 0 && this.certificationDS.data.length == 0) {
      // const eds = new Qualification();
      // // eds.PrimarySkillSet = this.inputQualification.PrimarySkillSet;
      // // eds.SecondarySkillSet = this.inputQualification.SecondarySkillSet;
      // eds.HQualification = this.inputQualification.HQualification;
      // eds.UserDetailID = id;
      // this.educationDS.data.push(eds);
      //this.disablesave=true;

    }  
    
    //this.educationDS.data[0].QualificationID = this.qualificationDS.data[0].QualificationID;
    this.dataservice.AddUserQualification(id, this.educationDS.data)
      .subscribe(result => {
        this.globalResponse = result;
      },
        error => {
          //  console.log(error);
          // this.isFailedMessage = true;
          // this.snackBar.open("Error in posting data", "Ok", {
          //   duration: 2000,
          // });
          this.toster.showError("Something went wrong");
        },
        () => {
          //this.isSuccessMessage = true;
          // if (this.formType == "Add") {
          // this.snackBar.open("Success", "Ok", {
          //   duration: 2000,

          // });
          this.toster.showSuccess("Success");        
          
          // this.isExp = true;
          // this.isAddItem = false;
          //this.disableFooter = true;
          //this.isAddItem = false;

          this.formResetQ();
          this.formResetC();
          this.uQualificationForm.controls.Qgrid.reset();
          this.uQualificationForm.controls.Cgrid.reset();
            //this.uQualificationForm.disable();
          // this.qualificationDS.data=null;

          this.GetQualification();
          this.GetCertification();


          // this.uQualificationForm.Cgrid.reset();
        }
        // else if (this.formType == "Update") {
        //   // this.snackBar.open("Resource Updated Successfully", "Ok", {
        //   //   duration: 2000,
        //   // });
        // }
        //this.router.navigate(['resource']);
        //}

      )
  }
  formResetQ() {
    //event.preventDefault();
    // this.uQualificationForm.controls.Qgrid.patchValue( {'Stream':null} );
    this.uQualificationForm.controls.Qgrid.reset();   
    this.qformType = "Add"; 
    this.selectedRowIndex=-1;
    //this.Qdisable=false;
  }
  formResetC() {
    this.uQualificationForm.controls.Cgrid.reset();
    this.cformType = "Add";
    this.selectedRowIndex1=-1;
    
  }
  highlight(row) {
    // debugger;
    //  alert("highlight"+JSON.stringify(row));
    this.selectedRowIndex = row.QualificationID;
    this.qformType = "Update";
   // this.Qdisable=true;
    // console.log(this.uQualificationForm.controls.Qgrid)
    this.uQualificationForm.controls.Qgrid.setValue({
      QualificationID: row.QualificationID, Qualification: row.Qualification, QStream: row.QStream, QYear: row.QYear,
      BoardUniversity: row.BoardUniversity, QMarks: row.QMarks
    });
  }

  highlightCert(row) {
    //  alert("highlightCert"+JSON.stringify(row) );
    this.selectedRowIndex1 = row.CertificationID;
    this.cformType = "Update";
    this.uQualificationForm.controls.Cgrid.setValue({
      CertificationID: row.CertificationID, CertificateNumber: row.CertificateNumber, Type: row.Type, CYear: row.CYear,
      Institution: row.Institution, CStream: row.CStream, CMarks: row.CMarks
    })
  }
 ageRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
   debugger;
  var flag=0;
    if (control.value !== undefined  ) {
        for(var i=0;i<this.certificationDS.data.length;i++){
          if(this.certificationDS.data[i].CertificateNumber==control.value ){
            flag=1;
          }
        }
        if(flag==0){
          return { 'ageRange': true };
        }
        else{
          return null;
        }
        //return { 'ageRange': true };
    }

    return null;
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
// export class QualificationModel {
//   QualificationID: number;
//   UserDetailID: number;
//   Qualification: string;
//   Stream: string;
//   Year: string;
//   BoardUniversity: string;
//   Marks: number;
// }
// export class CertificationModel {
//   CertificationID: number;
//   UserDetailID: number;
//   Type: string;
//   CertificateNumber: string;
//   Institution: string;
//   Stream: string;
//   Year: string;
//   Marks: number
// }
// export class EducationModel {
//   PrimarySkillSet: string;
//   SecondarySkillSet: string;
//   HQualification: string;
//   Qualification: QualificationModel[];
//   Certification: CertificationModel[];

//}