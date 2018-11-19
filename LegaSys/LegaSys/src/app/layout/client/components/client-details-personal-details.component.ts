import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ClientServiceService } from '../client-service.service';
import { CurrentClientdataServiceService } from '../../../current-clientdata-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-client-details-personal-details',
  templateUrl: './client-details-personal-details.component.html',
  styleUrls: ['./client-details-personal-details.component.scss']
})

export class ClientDetailsPersonalDetailsComponent implements OnInit {

  /****** Created By Shubham Mishra on 19-Nov-2018 ************/
  @Output('onClientDetailsChange') onClientDetailsChange = new EventEmitter<any>(); //used  to emit event to parent controller 
  @Input('currentClientDetails') currentClientDetails: object; // used to hold current client details comming from parent controller i.e child details
  @Input('currentClientDetailsBackup') currentClientDetailsBackup: object;// used to hold current client details comming from parent controller i.e child details this will be used when we need to change the update data to previous one

  disable: boolean = true; // this variable is used to bind the disabled attribute of input to make input fields editable and non editable
  personalDetailsForm: FormGroup; // This formgroup is for Client Personal Details form

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
    debugger;
    this.currentClientDetails = this.currentClientDetailsBackup;
    this.onClientDetailsChange.emit(this.currentClientDetails);
    this.MakeFieldEditable();
  }
  /***** This function is used to update details of a client, following fucntion is making a call to api and sending the modal as parameter */

  UpdateClient() {
    this.onClientDetailsChange.emit(this.currentClientDetails);
    this.MakeFieldEditable();
  }
  ngOnInit() {
    this.personalDetailsForm = this.formBuilder.group({
      clientName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      clientAddress: ['', Validators.required],
      clientEmail: ['', [Validators.required, Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$')]],
      clientEmail2: ['', Validators.email],
      clientEmail3: ['', Validators.email],
      clientEmail4: ['', Validators.email]
    });
    this.personalDetailsForm.disable();
  }
}
