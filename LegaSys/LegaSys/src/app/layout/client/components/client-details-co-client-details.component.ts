import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { CurrentClientdataServiceService } from '../../../current-clientdata-service.service';
import { ClientServiceService } from '../client-service.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import{Client} from '../model/client.model';

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
  client:Client; // This is model of client
  readOnly:boolean=true;
  constructor(private clientService: ClientServiceService, private currentClientdataService: CurrentClientdataServiceService, private formBuilder: FormBuilder) {
    
  }
  /****** This fuction is used to make the form field editable  */
  MakeFieldEditable() {
    if (this.disable) {
      this.disable = false;
      this.readOnly=false;
      //this.coClientForm.enable();      
    }
    else {
      this.disable = true;
      this.readOnly=true;
     // this.coClientForm.disable();
    }
  }

  // MakeReadonly(){
  //   if(this.currentClientDetails.CoClient==undefined && this.currentClientDetails==null){
    
  //   }
  // }
  /****** This function is used to discard changes done by user, and replace changed data with previous data */
  DiscardChanges() {
    this.currentClientDetails = this.currentClientDetailsBackup;
    this.onCancel.emit(this.currentClientDetails);
    this.MakeFieldEditable();
  }
  /***** This function is used to update details of a client, following fucntion is emiting a event  */
  UpdateClient() {
    
  this.currentClientDetails.CoClient=this.coClientForm.controls['coClient'].value;
  this.currentClientDetails.CoClient2=this.coClientForm.controls['coClient2'].value;
  this.currentClientDetails.CoClient3=this.coClientForm.controls['coClient3'].value;
  this.currentClientDetails.CoClient4=this.coClientForm.controls['coClient4'].value;
    this.onClientDetailsChange.emit(this.currentClientDetails);    
    this.MakeFieldEditable();
  }

  /***** Writen by Shubham  Mishra on 21 Nov 2018 ****
   * ******* This fucntion is used to create a reactive form ************/

  CreateCoClientForm(){
    debugger;
    this.coClientForm = this.formBuilder.group({
      coClient: [this.currentClientDetails.CoClient, Validators.pattern('^[a-zA-Z ]+$')],
      coClient2: [this.currentClientDetails.CoClient2, Validators.pattern('^[a-zA-Z ]+$')],
      coClient3: [this.currentClientDetails.CoClient3, Validators.pattern('^[a-zA-Z ]+$')],
      coClient4: [this.currentClientDetails.CoClient4, Validators.pattern('^[a-zA-Z ]+$')]
    });
  }
  GetPlaceHolder(){
    
    if(!this.readOnly){
      return "Other Co Client";
    }
    else{
      return " ";
    }
  }
  GetSecondryPlaceHolder(){
    if(!this.readOnly){
      return "Secondary Co Client";
    }
    else{
      return " ";
    }
  }
  GetPrimaryPlaceHolder(){
    if(!this.readOnly){
      return "Primary Co Client";
    }
    else{
      return " ";
    }
  }
  
  ngOnInit() {
   if(this.currentClientDetails){
    this.CreateCoClientForm();
    this.coClientForm.markAsTouched();
   }
    
   
  }
}
