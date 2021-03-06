import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ClientServiceService } from '../client-service.service';
import { CurrentClientdataServiceService } from '../../../current-clientdata-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from "@angular/forms";
import { Client } from '../model/client.model';
import { isError } from 'util';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

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

  /**** Writen on 23 Nov 2018 ***********/
  readOnly: boolean = true;// this variable will be used to make the form field non editable
  // following array will hold the list of country and willbe used to shown as dropdown in country field 
  CountryList: string[] = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];
  filteredOptions: Observable<string[]>;// this variable will hold the returned list of autocomplete
  constructor(private clientService: ClientServiceService, private currentClientdataService: CurrentClientdataServiceService, private router: Router, private formBuilder: FormBuilder) {
  }
  /****** This fuction is used to make the form field editable  */
  MakeFieldEditable() {

    if (this.disable) {
      this.disable = false;
      this.readOnly = false;
      //this.personalDetailsForm.enable();
    }
    else {
      this.disable = true;
      this.readOnly = true;
      //this.personalDetailsForm.disable();
    }
  }
  /****** This function is used to discard changes done by user, and replace changed data with previous data */
  DiscardChanges() {
    this.currentClientDetails = this.currentClientDetailsBackup;
    this.LoadValuesInPersonalDetailsForm();
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
    this.currentClientDetails.Country = this.personalDetailsForm.controls['country'].value;
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
      clientEmail4: ['', Validators.pattern(this.emailPattern)],
      country: ['', Validators.required]
    });
  }
  ngOnInit() {
    if (this.currentClientDetails) {
      this.CreatePersonalDetailsForm();
      this.LoadValuesInPersonalDetailsForm();
      this.filteredOptions = this.personalDetailsForm.controls['country'].valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    }
  }
  /**** This function is used to filter the name of country from country List  */
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.CountryList.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  /******** Created by SHubham Kumar Mishra on 22 nov 2018 **********
   ********* following method are used for geting validation error message dynamically **********/
  GetErrorMessage(controlName: string) {
    switch (controlName) {
      case 'clientName': if (this.personalDetailsForm.controls['clientName'].errors.required) {
        return "Client name can not be empty";
      }
        if (this.personalDetailsForm.controls['clientName'].errors.pattern) {
          return "Client name can only contails text";
        }

      case 'clientEmail': if (this.personalDetailsForm.controls['clientEmail'].errors.required) {
        return "Primary Email can not be empty";
      }
        if (this.personalDetailsForm.controls['clientEmail'].errors.pattern) {
          return "Please enter valid Email";
        }
      default: return " ";
    }
  }
  /******* Created by Shubham Kumar Mishra on 22 Nov 2018 ***********
   * ******* Following method is to load the values into the form ********/
  LoadValuesInPersonalDetailsForm() {
    this.personalDetailsForm.controls['clientName'].setValue(this.currentClientDetails.ClientName);
    this.personalDetailsForm.controls['clientAddress'].setValue(this.currentClientDetails.Address);

    if (this.currentClientDetails.EmailID != null && this.currentClientDetails.EmailID != '' && this.currentClientDetails.EmailID != undefined) {
      this.personalDetailsForm.controls['clientEmail'].setValue(this.currentClientDetails.EmailID.trim());
    }
    if (this.currentClientDetails.EmailID2 != null && this.currentClientDetails.EmailID2 != '' && this.currentClientDetails.EmailID2 != undefined) {
      this.personalDetailsForm.controls['clientEmail2'].setValue(this.currentClientDetails.EmailID2.trim());
    }
    if (this.currentClientDetails.EmailID3 != null && this.currentClientDetails.EmailID3 != '' && this.currentClientDetails.EmailID3 != undefined) {
      this.personalDetailsForm.controls['clientEmail3'].setValue(this.currentClientDetails.EmailID3.trim());
    }
    if (this.currentClientDetails.EmailID4 != null && this.currentClientDetails.EmailID4 != '' && this.currentClientDetails.EmailID4 != undefined) {
      this.personalDetailsForm.controls['clientEmail4'].setValue(this.currentClientDetails.EmailID4.trim());    }
    this.personalDetailsForm.controls['country'].setValue(this.currentClientDetails.Country);
  }

  /****** Created on 27 Nov 2017 ************/
  /****** Following method will be used to det the placeholder for mat input  ************/

  GetPlaceHolder(str: string) {
    if (!this.readOnly) {
      switch (str) {
        case 'clientName': return "Client Name ";
        case 'clientAddress': return "Client Address ";
        case 'country': return "Country ";
        case 'clientEmail': return "Primary Email  ";
        case 'clientEmail2': return "Secondary Email ";
        case 'clientEmail3': return "Other Email";
        case 'clientEmail4': return "Other Email";
        default: return " ";
      }
    }
    else {
      return " ";
    }
  }

}
