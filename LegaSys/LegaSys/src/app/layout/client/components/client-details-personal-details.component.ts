import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ClientServiceService } from '../client-service.service';
import { CurrentClientdataServiceService } from '../../../current-clientdata-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from "@angular/forms";
import { Client } from '../model/client.model';
import { isError } from 'util';

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
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';// this regex will be used to validate email pattern

  constructor(private clientService: ClientServiceService, private currentClientdataService: CurrentClientdataServiceService, private router: Router, private formBuilder: FormBuilder) {

  }
  /****** This fuction is used to make the form field editable  */
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
  /****** This function is used to discard changes done by user, and replace changed data with previous data */
  DiscardChanges() {
    this.currentClientDetails = this.currentClientDetailsBackup;
    this.onCancel.emit(this.currentClientDetails);
    this.MakeFieldEditable();
  }
  /***** This function is used to update details of a client, following fucntion is making a call to api and sending the modal as parameter */

  UpdateClient() {
    this.currentClientDetails.ClientName = this.personalDetailsForm.controls['clientName'].value;
    this.currentClientDetails.Address = this.personalDetailsForm.controls['clientAddress'].value;
    this.currentClientDetails.EmailID = this.personalDetailsForm.controls['clientEmail'].value;
    this.currentClientDetails.EmailID2 = this.personalDetailsForm.controls['clientEmail2'].value;
    this.currentClientDetails.EmailID3 = this.personalDetailsForm.controls['clientEmail3'].value;
    this.currentClientDetails.EmailID4 = this.personalDetailsForm.controls['clientEmail4'].value;

    this.onClientDetailsChange.emit(this.currentClientDetails);

    this.MakeFieldEditable();
  }

  /***** Writen by Shubham  Mishra on 21 Nov 2018 ****
   * ******* This fucntion is used to create a reactive form ************/

  CreatePersonalDetailsForm() {
    this.personalDetailsForm = this.formBuilder.group({
      clientName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      clientAddress: ['', Validators.required],
      clientEmail: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      clientEmail2: ['', Validators.pattern(this.emailPattern)],
      clientEmail3: ['', Validators.pattern(this.emailPattern)],
      clientEmail4: ['', Validators.pattern(this.emailPattern)]
    });
  }
  ngOnInit() {
    if (this.currentClientDetails) {
      this.CreatePersonalDetailsForm();
      this.LoadValuesInPersonalDetailsForm();
    }
  }
  
/******** Created by SHubham Kumar Mishra on 22 nov 2018 **********
 ********* following method are used for geting validation error message dynamically **********/

  GetEmailErrorMessage(control:any){
    if(this.personalDetailsForm.controls['clientEmail'].errors.required){
      return "Primary Email can not be empty";
    }
    if(this.personalDetailsForm.controls['clientEmail'].errors.pattern){
      return "Please enter valid Email";
    }
  }

  GetClientNameErrorMessage(){
    if(this.personalDetailsForm.controls['clientName'].errors.required){
      return "Client name can not be empty";
    }
    if(this.personalDetailsForm.controls['clientName'].errors.pattern){
      return "Client name can only contails text";
    }
  }

/******* Created by Shubham Kumar Mishra on 22 Nov 2018 ***********
 * ******* Following method is to load the values into the form ********/

  LoadValuesInPersonalDetailsForm() {
    this.personalDetailsForm.controls['clientName'].setValue(this.currentClientDetails.ClientName);
    this.personalDetailsForm.controls['clientAddress'].setValue(this.currentClientDetails.Address);

    if (this.currentClientDetails.EmailID != null && this.currentClientDetails.EmailID != '' && this.currentClientDetails.EmailID3 != undefined) {
      this.personalDetailsForm.controls['clientEmail'].setValue(this.currentClientDetails.EmailID.trim());
    }
    if (this.currentClientDetails.EmailID2 != null && this.currentClientDetails.EmailID2 != '' && this.currentClientDetails.EmailID3 != undefined) {
      this.personalDetailsForm.controls['clientEmail2'].setValue(this.currentClientDetails.EmailID2.trim());
    }
    if (this.currentClientDetails.EmailID3 != null && this.currentClientDetails.EmailID3 != '' && this.currentClientDetails.EmailID3 != undefined) {
      this.personalDetailsForm.controls['clientEmail3'].setValue(this.currentClientDetails.EmailID3.trim());
    }
    if (this.currentClientDetails.EmailID4 != null && this.currentClientDetails.EmailID4 != '' && this.currentClientDetails.EmailID3 != undefined) {
      this.personalDetailsForm.controls['clientEmail4'].setValue(this.currentClientDetails.EmailID4.trim());
    }
    this.personalDetailsForm.disable();
  }
}
