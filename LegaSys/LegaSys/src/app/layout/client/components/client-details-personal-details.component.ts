import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ClientServiceService } from '../client-service.service';
import { CurrentClientdataServiceService } from '../../../current-clientdata-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import{Client} from '../model/client.model';

@Component({
  selector: 'app-client-details-personal-details',
  templateUrl: './client-details-personal-details.component.html',
  styleUrls: ['./client-details-personal-details.component.scss']
})

export class ClientDetailsPersonalDetailsComponent implements OnInit {

  /****** Created By Shubham Mishra on 19-Nov-2018 ************/
  @Output('onCancel') onCancel = new EventEmitter<any>(); //used  to emit event to parent controller 
  @Output('onClientDetailsChange') onClientDetailsChange = new EventEmitter<any>(); //used  to emit event to parent controller 
  @Input('currentClientDetails') currentClientDetails: Client; // used to hold current client details comming from parent controller i.e child details
  @Input('currentClientDetailsBackup') currentClientDetailsBackup: Client;// used to hold current client details comming from parent controller i.e child details this will be used when we need to change the update data to previous one

  disable: boolean = true; // this variable is used to bind the disabled attribute of input to make input fields editable and non editable
  personalDetailsForm: FormGroup; // This formgroup is for Client Personal Details form
  flag:number=0;

  constructor(private clientService: ClientServiceService, private currentClientdataService: CurrentClientdataServiceService, private router: Router, private formBuilder: FormBuilder) {
 
  }
  /****** This fuction is used to make the form field editable  */
  MakeFieldEditable() {
    debugger;
    if (this.disable) {
      this.disable = false;
      this.personalDetailsForm.enable();
    }
    else {
      this.disable = true;
      this.personalDetailsForm.disable();
    }
   
  }
  /****** This function is used to discard changes done by user, and replace changed data with previous data */
  DiscardChanges() {
    this.currentClientDetails = this.currentClientDetailsBackup;
    this.onCancel.emit(this.currentClientDetails);
    this.MakeFieldEditable();
  }
  /***** This function is used to update details of a client, following fucntion is making a call to api and sending the modal as parameter */

  UpdateClient() {
    this.currentClientDetails.ClientName=this.personalDetailsForm.controls['clientName'].value;
    this.currentClientDetails.Address=this.personalDetailsForm.controls['clientAddress'].value;
    this.currentClientDetails.EmailID=this.personalDetailsForm.controls['clientEmail'].value;
    this.currentClientDetails.EmailID2=this.personalDetailsForm.controls['clientEmail2'].value;
    this.currentClientDetails.EmailID3=this.personalDetailsForm.controls['clientEmail3'].value;
    this.currentClientDetails.EmailID4=this.personalDetailsForm.controls['clientEmail4'].value;
    
    this.onClientDetailsChange.emit(this.currentClientDetails);
    this.flag=0;
    this.MakeFieldEditable();
  }
  ValidateForm(){
     this.flag=1;
  }
  
  /***** Writen by Shubham  Mishra on 21 Nov 2018 ****
   * ******* This fucntion is used to create a reactive form ************/

  CreatePersonalDetailsForm(){
    this.personalDetailsForm = this.formBuilder.group({
      clientName: [this.currentClientDetails.ClientName, [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      clientAddress: [this.currentClientDetails.Address, Validators.required],
      clientEmail: [this.currentClientDetails.EmailID,[Validators.required, Validators.pattern('^[a-zA-Z]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$')]],
      clientEmail2: [this.currentClientDetails.EmailID2, Validators.email],
      clientEmail3: [this.currentClientDetails.EmailID3, Validators.email],
      clientEmail4: [this.currentClientDetails.EmailID4, Validators.email]
    });
  }
  ngOnInit() {
    if(this.currentClientDetails){
      this.CreatePersonalDetailsForm();
    
      for (var i in this.personalDetailsForm.controls) {
        this.personalDetailsForm.controls[i].markAsTouched();
     }
      this.personalDetailsForm.disable();
    }
    
   
  }
}
