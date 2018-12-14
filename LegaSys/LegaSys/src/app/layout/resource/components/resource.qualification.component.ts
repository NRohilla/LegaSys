import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroupDirective, Validators, FormGroup } from '@angular/forms';
import { ResourceService } from '../resource.service';
import { MatTableDataSource } from '@angular/material';
import { NgForm } from '@angular/forms';
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-resource-qualification',
  templateUrl: './resource.qualification.component.html',
  styleUrls: ['./resource.qualification.component.scss']
})
export class ResourceQualificationComponent implements OnInit {
  disableFooter: boolean = true;
  uQualificationForm: any;
  qualificationDS1:any;
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
  Qgrid: any;
  educationDS = new MatTableDataSource<Qualification>();
  primaryskillSet:any;
  secondaryskillSet:any;
  // educationDS1 = new MatTableDataSource<QualificationModel>();
  // educationDS2 = new MatTableDataSource<CertificationModel>();
  // educationDS3 = new MatTableDataSource<EducationModel>();

  globalResponse: Object;
  inputQualification: Qualification;

  constructor(private formBuilder: FormBuilder, public dataservice: ResourceService) { }

  
  edit() {
    this.disableFooter = false;
    this.uQualificationForm.enable();

  }
  discard() {
    this.uQualificationForm.disable();
    this.disableFooter = true;

  }

  ngOnInit() {
    debugger;
    this.userDetailId = +localStorage.getItem('UserDetailID');
    this.primaryskillSet=localStorage.getItem("PrimarySkillSet");
    this.secondaryskillSet=localStorage.getItem("SecondarySkillSet");
    this.uQualificationForm = this.formBuilder.group({
      PrimarySkillSet: [''],
      SecondarySkillSet: [''],
      HQualification: [''],

      //Qgrid: this.formBuilder.array([this.QgridItem()])
      Qgrid: this.formBuilder.group({
        QualificationID: [''],
        Qualification: ['', Validators.required],
        // iQualification:[''],
        BoardUniversity: ['', Validators.required],
        QStream: ['', Validators.required],
        QYear: ['', Validators.required],
        QMarks: ['', Validators.required]
      }),

      Cgrid: this.formBuilder.group({
        CertificationID: [''],
        CertificateNumber: ['', Validators.required],
        Type: ['', Validators.required],
        Institution: ['', Validators.required],
        CStream: ['', Validators.required],
        CYear: ['', Validators.required],
        CMarks: ['', Validators.required]
      }),

    });

    this.uQualificationForm.disable();
    //this.GetQualification();
  }
  // QgridItem(): FormGroup {
  //   return this.formBuilder.group({
  //     QualificationID: [''],
  //     Qualification: ['', Validators.required],
  //     // iQualification:[''],
  //     BoardUniversity: ['', Validators.required],
  //     Stream: ['', Validators.required],
  //     Year: ['', Validators.required],
  //     Marks: ['', Validators.required]
  //   })
  // }
  GetQualification() {
    debugger;
    this.dataservice.getUserQualification(+localStorage.getItem("UserDetailID")).subscribe(
      res => {
        this.qualificationDS.data = res;
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
    debugger;
    this.dataservice.getUserCertification(+localStorage.getItem("UserDetailID")).subscribe(
      res => {
        this.certificationDS.data = res;
        console.log(res);
      }
    )
  }
  onChange($event) {
    if ($event == "") {
      this.showQTable = false;

    }
    else {
      this.showQTable = true;
      this.GetQualification();
      this.GetCertification();
    }
  }
  addQualification(formDirective: FormGroupDirective) {
    debugger;
    this.iQualification = this.uQualificationForm.controls.Qgrid.value;
    this.iQualification.QualificationID = 0;
    this.iQualification.UserDetailID = this.userDetailId;
    this.iQualification.PrimarySkillSet=null;
    this.iQualification.SecondarySkillSet=null;
    this.iQualification.HQualification=null;
    this.iQualification.CertificationID=0;
    this.iQualification.CertificateNumber=null;
    this.iQualification.Type=null;
    this.iQualification.CStream=null;
    this.iQualification.CYear=null;
    this.iQualification.Institution=null;
    this.iQualification.CMarks=null;

    if (this.qformType == "Add") {
      if (this.iQualification.Qualification != "" && this.iQualification.QStream != "" && this.iQualification.QYear != ""
        && this.iQualification.BoardUniversity != "" && this.iQualification.QMarks!=null) {
        const data = this.qualificationDS.data;
        data.push(this.iQualification);
        this.qualificationDS.data = data;
        //this.educationDS.data=data;
        console.log(data);
      }
    }
    else if (this.qformType == "Update") {
      if (this.iQualification.Qualification != "" && this.iQualification.QStream != "" && this.iQualification.QYear != ""
        && this.iQualification.BoardUniversity != "" && this.iQualification.QMarks!=null) {
        this.qualificationDS.data.forEach(element => {
          if (element.QualificationID == this.selectedRowIndex) {
            element.Qualification = this.iQualification.Qualification;
            element.QStream = this.iQualification.QStream;
            element.QYear = this.iQualification.QYear;
            element.BoardUniversity = this.iQualification.BoardUniversity;
            element.QMarks = this.iQualification.QMarks;
          }
        });

      }

    }
    //formDirective.resetForm();

    // this.uQualificationForm.controls.Qgrid.patchValue( {'Stream':null} );
    this.uQualificationForm.controls.Qgrid.reset();


    // this.uQualificationForm.value.Qgrid.Stream="";
    // formDirective.resetForm({
    //   'Stream': ''//Or '' to empty initial value. 
    //   //address: this.hero.addresses[0] || new Address()
    // });
    // this.uQualificationForm.controls.Qgrid.reset();
  }
  addCertification(formDirective: FormGroupDirective) {
    debugger
    this.iCertification = this.uQualificationForm.controls.Cgrid.value;
    this.iCertification.CertificationID = 0;
    this.iCertification.UserDetailID = this.userDetailId;
    if (this.cformType == "Add") {
      if (this.iCertification.CertificateNumber !== "" && this.iCertification.Type !== "" && this.iCertification.CStream !== ""
        && this.iCertification.CYear !== "" && this.iCertification.Institution !== "" && this.iCertification.CMarks !==null) {

        const data = this.certificationDS.data;
        data.push(this.iCertification);
        this.certificationDS.data = data;
        // this.educationDS.data=data;
        console.log(data);
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
      }
    }
    //formDirective.resetForm();

    this.uQualificationForm.controls.Cgrid.reset();
  }
  Save() {
    //console.log(JSON.stringify(this.backgroundDetails.data));

    debugger;
    var id = +localStorage.getItem('UserDetailID');
    if(this.qualificationDS.data.length>0){
      // for(var i in this.educationDS.data){
       // console.log(this.qualificationDS.data);
         this.educationDS.data=this.qualificationDS.data;
      //this.qualificationDS1.data=this.qualificationDS.data;
     // let obj=;
      // for(let i in this.qualificationDS){
      //   // this.educationDS.data[i].QualificationID.push(this.qualificationDS.data[i].QualificationID);
      //console.log(this.educationDS.data);
      // }
      this.inputQualification = this.uQualificationForm.value;
       for(var i in this.certificationDS.data){
          this.educationDS.data[i].CertificationID=(this.certificationDS.data[i].CertificationID);
          this.educationDS.data[i].CertificateNumber=this.certificationDS.data[i].CertificateNumber;
          this.educationDS.data[i].Type=this.certificationDS.data[i].Type;
          this.educationDS.data[i].CStream=this.certificationDS.data[i].CStream;
          this.educationDS.data[i].CYear=this.certificationDS.data[i].CYear;
          this.educationDS.data[i].Institution=this.certificationDS.data[i].Institution;
          this.educationDS.data[i].CMarks=this.certificationDS.data[i].CMarks;
          this.educationDS.data[i].PrimarySkillSet=this.inputQualification.PrimarySkillSet;
          this.educationDS.data[i].SecondarySkillSet=this.inputQualification.SecondarySkillSet;
          this.educationDS.data[i].HQualification=this.inputQualification.HQualification;
          this.educationDS.data[i].UserDetailID=id;
        }
      // }
      console.log(this.educationDS.data);
    }
   
  
    //this.educationDS.data[0].QualificationID = this.qualificationDS.data[0].QualificationID;
    this.dataservice.AddUserQualification(id, this.educationDS.data)
      .subscribe(result => {
        this.globalResponse = result;
      },
        // error => {
        //   console.log(error);
        //this.isFailedMessage = true;
        //   this.snackBar.open("Error in posting data", "Ok", {
        //     duration: 2000,
        //   });
        // },
        // () => {
        //this.isSuccessMessage = true;
        // if (this.formType == "Add") {
        //   // this.snackBar.open("Resource Added Successfully", "Ok", {
        //   // duration: 2000,
        //   //});
        //   this.isExp = true;
        //   this.isAddItem = false;
        //   this.disableFooter = true;
        // }
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

    this.uQualificationForm.controls.Qgrid.reset();
    //this.uQualificationForm.controls.Cgrid.reset();
    this.qformType = "Add";
    //this.cformType = "Add";
  }
  formResetC() {

    this.uQualificationForm.controls.Cgrid.reset();

    this.cformType = "Add";
  }
  highlight(row) {
    this.selectedRowIndex = row.QualificationID;
    this.qformType = "Update";
    this.uQualificationForm.controls.Qgrid.setValue({
      QualificationID: row.QualificationID, Qualification: row.Qualification, Stream: row.QStream, Year: row.QYear,
      BoardUniversity: row.BoardUniversity, Marks: row.QMarks
    });
  }
  highlightCert(row) {
    this.selectedRowIndex1 = row.CertificationID;
    this.cformType = "Update";
    this.uQualificationForm.controls.Cgrid.setValue({
      CertificationID: row.CertificationID, CertificateNumber: row.CertificateNumber, Type: row.Type, Year: row.CYear,
      Institution: row.Institution, Stream: row.CStream, Marks: row.CMarks
    })
  }

}


export class Qualification {
  PrimarySkillSet: string;
  SecondarySkillSet: string;
  HQualification: string;
  QualificationID: number;
  UserDetailID: number;
  Qualification: string;
  QStream: string;
  QYear: string;
  BoardUniversity: string;
  QMarks: number;
  CertificationID: number;
  Type: string;
  CertificateNumber: String;
  Institution: string;
  CStream:string;
  CYear:string;
  CMarks:string;
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