import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { CurrentClientdataServiceService } from '../../../current-clientdata-service.service';
import { ClientServiceService } from '../client-service.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-client-details-co-client-details',
  templateUrl: './client-details-co-client-details.component.html',
  styleUrls: ['./client-details-co-client-details.component.scss']
})
export class ClientDetailsCoClientDetailsComponent implements OnInit {
  @Output('onClientDetailsChange') onClientDetailsChange = new EventEmitter<any>(); //used  to emit event to parent controller 
  @Input('currentClientDetails') currentClientDetails: object; // used to hold current client details comming from parent controller i.e child details
  @Input('currentClientDetailsBackup') currentClientDetailsBackup: object;// used to hold current client details comming from parent controller i.e child details this will be used when we need to change the update data to previous one


  /********************** Created By Shubham Mishra on 19-Nov-2018 **************/
  disable: boolean = true; //this variable is used to bind the disabled attribute of input to make input fields editable and non editable
  coClientForm: FormGroup;// this is form group for co client 
  constructor(private clientService: ClientServiceService, private currentClientdataService: CurrentClientdataServiceService, private formBuilder: FormBuilder) {
    this.coClientForm = this.formBuilder.group({
      coClient: ['', Validators.pattern('^[a-zA-Z ]+$')],
      coClient2: ['', Validators.pattern('^[a-zA-Z ]+$')],
      coClient3: ['', Validators.pattern('^[a-zA-Z ]+$')],
      coClient4: ['', Validators.pattern('^[a-zA-Z ]+$')]
    });
  }
  /****** This fuction is used to make the form field editable  */
  MakeFieldEditable() {
    if (this.disable) {
      this.disable = false;
      this.coClientForm.enable();
    }
    else {
      this.disable = true;
      this.coClientForm.disable();
    }
  }
  /****** This function is used to discard changes done by user, and replace changed data with previous data */
  DiscardChanges() {
    debugger;

    this.currentClientDetails = this.currentClientDetailsBackup;
    this.onClientDetailsChange.emit(this.currentClientDetails);
    this.MakeFieldEditable();
  }
  /***** This function is used to update details of a client, following fucntion is emiting a event  */
  UpdateClient() {
    this.onClientDetailsChange.emit(this.currentClientDetails);
    this.MakeFieldEditable();
  }
  ngOnInit() {
    this.coClientForm.disable();
   
  }
}
