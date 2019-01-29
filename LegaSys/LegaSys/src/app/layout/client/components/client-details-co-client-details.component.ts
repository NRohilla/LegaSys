import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { CurrentClientdataServiceService } from '../../../current-clientdata-service.service';
import { ClientServiceService } from '../client-service.service';
import { FormBuilder, FormGroup, Validators, AbstractControl } from "@angular/forms";
import { Client } from '../model/client.model';

@Component({
  selector: 'app-client-details-co-client-details',
  templateUrl: './client-details-co-client-details.component.html',
  styleUrls: ['./client-details-co-client-details.component.scss']
})
export class ClientDetailsCoClientDetailsComponent implements OnInit {
  @Output('onClientDetailsChange') onClientDetailsChange = new EventEmitter<any>(); //used  to emit event to parent controller 
  @Output('onCancel') onCancel = new EventEmitter<any>(); //used  to emit event to parent controller 
  @Input('currentClientDetails') currentClientDetails: Client; // used to hold current client details comming from parent controller i.e child details
  @Input('currentClientDetailsBackup') currentClientDetailsBackup: Client;// used to hold current client details comming from parent controller i.e child details this will be used when we need to change the update data to previous one


  /********************** Created By Shubham Mishra on 19-Nov-2018 **************/
  disable: boolean = true; //this variable is used to bind the disabled attribute of input to make input fields editable and non editable
  coClientForm: FormGroup;// this is form group for co client 
  client: Client; // This is model of client
  readOnly: boolean = true;
  constructor(private clientService: ClientServiceService, private currentClientdataService: CurrentClientdataServiceService, private formBuilder: FormBuilder) {

  }
  /****** This fuction is used to make the form field editable  */
  MakeFieldEditable() {
    if (this.disable) {
      this.disable = false;
      this.readOnly = false;
    }
    else {
      this.disable = true;
      this.readOnly = true;
    }
  }
  /****** This function is used to discard changes done by user, and replace changed data with previous data */
  /*** modified on 27 Nov 2018  By Shubham Mishra *****/
  DiscardChanges() {
    this.currentClientDetails = this.currentClientDetailsBackup;
    this.LoadCoClientForm();
    this.onCancel.emit(this.currentClientDetails);
    this.MakeFieldEditable();
  }
  /***** This function is used to update details of a client, following fucntion is emiting a event  */
  UpdateClient() {
    this.currentClientDetails.CoClient = this.coClientForm.controls['coClient'].value;
    this.currentClientDetails.CoClient2 = this.coClientForm.controls['coClient2'].value;
    this.currentClientDetails.CoClient3 = this.coClientForm.controls['coClient3'].value;
    this.currentClientDetails.CoClient4 = this.coClientForm.controls['coClient4'].value;
    this.onClientDetailsChange.emit(this.currentClientDetails);
    this.MakeFieldEditable();
  }
  /***** Writen by Shubham  Mishra on 21 Nov 2018 ****
   * ******* This fucntion is used to create a reactive form ************/
  CreateCoClientForm() {
    this.coClientForm = this.formBuilder.group({
      coClient: ['', Validators.pattern('^[a-zA-Z ]+$')],
      coClient2: ['', Validators.pattern('^[a-zA-Z ]+$')],
      coClient3: ['', Validators.pattern('^[a-zA-Z ]+$')],
      coClient4: ['', Validators.pattern('^[a-zA-Z ]+$')]
    }, {
      validator: this.matchval // your validation method
    })
  }
  matchval(group: FormGroup){
    let c1=group.controls['coClient'].value;
    let c2=group.controls['coClient2'].value;
    let c3=group.controls['coClient3'].value;
    let c4=group.controls['coClient4'].value;
    if(c4!=undefined ){
      if(c3!=c4){
        return null;

 }
 else{
   return group.controls['coClient4'].setErrors({matchval: true});
   
 }
    }
    else{
      return null;
    }
  }
  /******** Created on 27 nov 2018 ********/
  /******** Following method will be used to get the place holder ********/
  GetPlaceHolder(controlName: string) {
    if (!this.readOnly) {
      switch (controlName) {
        case 'coClient': return "Primary Co client ";
        case 'coClient2': return "Secondary Co Client";
        case 'coClient3': return "Other Co Client ";
        case 'coClient4': return "Other Co Client ";
      }
    }
    else {
      return " ";
    }
  }
  ngOnInit() {
    if (this.currentClientDetails) {
      this.CreateCoClientForm();
      this.LoadCoClientForm();
      this.coClientForm.markAsTouched();
    }
  }
  /********** Writen on 27 Nov 2018 **/
  LoadCoClientForm() {
    this.coClientForm.controls['coClient'].setValue(this.currentClientDetails.CoClient);
    this.coClientForm.controls['coClient2'].setValue(this.currentClientDetails.CoClient2);
    this.coClientForm.controls['coClient3'].setValue(this.currentClientDetails.CoClient3);
    this.coClientForm.controls['coClient4'].setValue(this.currentClientDetails.CoClient4);
  }

}
