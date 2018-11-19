import { Component, OnInit } from '@angular/core';
import { CurrentClientdataServiceService } from '../../../current-clientdata-service.service';
import { ClientServiceService } from '../client-service.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-client-details-co-client-details',
  templateUrl: './client-details-co-client-details.component.html',
  styleUrls: ['./client-details-co-client-details.component.scss']
})
export class ClientDetailsCoClientDetailsComponent implements OnInit {

  /********************** Created By Shubham Mishr on 10-Nov-2018 **************/
  disable: boolean = true;
  currentClientDetails: any; // this variable is used to hold details of select client whose details user want to view 
  currentClientID: number;      // this varibale will have Id of client whse details client want to view and this varibale will be passed to service to get details of perticular client
  currentClientDetailsBackup: any; // this variable will hold same data as varible currentClientDetails, if user click cancel button after edditing some field this varible is used to get the old data
  coClientForm:FormGroup;// this is form group for co client 
  constructor(private clientService: ClientServiceService, private currentClientdataService: CurrentClientdataServiceService,private formBuilder:FormBuilder) {
    this.coClientForm=this.formBuilder.group({
      coClient: ['',Validators.pattern('^[a-zA-Z]+$')],
      coClient2: ['',Validators.pattern('^[a-zA-Z]+$')],
      coClient3: ['',Validators.pattern('^[a-zA-Z]+$')],
      coClient4: ['',Validators.pattern('^[a-zA-Z]+$')]
      

    })
   }

  /**** this function is used to get details of perticuler client, user has selected to view, this method is making a call to a service with client id as parameter */
  GetClientsWithID(ID) {
    this.clientService.GetDetailsOfClientwhoseID(ID).subscribe(
      suc => {
        console.log(suc);
        this.currentClientDetails = suc;
        this.currentClientDetailsBackup = JSON.parse(JSON.stringify(suc));
      },
      err => {
        console.log(err);

      }
    );
  }

  /****** This fuction is used to make the form field editable  */
  MakeFieldEditable() {
    if(this.disable){
      this.disable = false;
      this.coClientForm.enable();
    }
    else{
      this.disable = true;
    this.coClientForm.disable();
    }
  }

  /****** This function is used to discard changes done by user, and replace changed data with previous data */
  DiscardChanges() {
    debugger;
    console.log(this.currentClientDetailsBackup);
    this.currentClientDetails = this.currentClientDetailsBackup;
    console.log(this.currentClientDetails);
    this.disable = true;
  }
  /***** This function is used to update details of a client, following fucntion is making a call to api and sending the modal as parameter */
  UpdateClient() {

    this.clientService.UpdateDetailsWithID(this.currentClientDetails).subscribe(
      suc => {
        this.currentClientDetails = suc;
        this.GetClientsWithID(this.currentClientID);
        this.MakeFieldEditable();
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnInit() {
    this.currentClientID = this.currentClientdataService.currentClientID;
    this.GetClientsWithID(this.currentClientID);
    this.coClientForm.disable();
  }
}
