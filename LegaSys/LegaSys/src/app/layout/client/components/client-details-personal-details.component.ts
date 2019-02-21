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
  emailPattern = '^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';// this regex will be used to validate email pattern

  /**** Writen on 23 Nov 2018 ***********/
  readOnly: boolean = true;// this variable will be used to make the form field non editable
  // following array will hold the list of country and willbe used to shown as dropdown in country field 
  CountryList: string[] = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];
  countriesCode:string[]= ["+7 840","+93","+93","+355","+213","+1 684","+376","+244", "+1 264", "+1 268","+54","+374","+297","+247","+61","+672","+43","+994","+1 242","+973","+880","+1 246","+1 268","+375","+32","+501","+229","+1 441","+975","+55","+246","+359","+855","+1", "+236","+56","+86","+57","+506","+53","+420","+45","+1 767","+1 809","+20","+251","+679","+358","+33", "+995","+49","+30","+852","+36","+354","+91","+62","+98","+964","+353","+972","+39","+1 876","+81","+962","+7 7","+254","+965","+996","+218","+370","+352","+261","+60","+960","+223","+230","+52","+976","+212","+95","+977","+31","+64","+234","+850","+47","+968","+92","+595","+51","+63","+48","+351","+974","+40","+7","+966","+381","+65","+27","+82","+34","+94","+268","+46","+41","+963","+886","+992","+255","+66","+670","+216","+90","+1 340","+256","+380","+971","+44","+1","+84","+967","+263"];
  filteredOptions: Observable<string[]>;// this variable will hold the returned list of autocomplete
  filterBasedOptionsForCountryCode:Observable<string[]>;
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
    this.currentClientDetails.EmailID2 = this.personalDetailsForm.controls['clientEmail'].value;
   this.currentClientDetails.Country = this.personalDetailsForm.controls['country'].value;
   this.currentClientDetails.ClientPhone = this.personalDetailsForm.controls['clientPhone'].value;
   this.currentClientDetails.countrytTelephoneCodeClient=this.personalDetailsForm.controls['countryCode'].value;
    this.onClientDetailsChange.emit(this.currentClientDetails);
    this.MakeFieldEditable();
  }
  /***** Writen by Shubham  Mishra on 21 Nov 2018 ****
   * ******* This fucntion is used to create a reactive form ************/
  CreatePersonalDetailsForm() {
    this.personalDetailsForm = this.formBuilder.group({
      clientName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      clientAddress: ['',[Validators.required,Validators.pattern('^[a-zA-Z0-9-.#&^ ]+$')]],
      clientEmail: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      clientPhone: ['',[Validators.required,Validators.pattern('^[0-9]+$')]],
      countryCode: ['',[Validators.required]],
      country: ['', Validators.required]
    });
  }
  ngOnInit() {
    debugger;
    if (this.currentClientDetails) {
      this.CreatePersonalDetailsForm();
      this.LoadValuesInPersonalDetailsForm();
      this.filteredOptions = this.personalDetailsForm.controls['country'].valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );
      this.filterBasedOptionsForCountryCode=this.personalDetailsForm.controls['countryCode'].valueChanges.pipe(
        startWith(''),
        map(value => this._filterForCountryCode(value))
      );
    }
  }
  /**** This function is used to filter the name of country from country List  */
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.CountryList.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  private _filterForCountryCode(value: string): string[] {
    debugger;
    const filterValueForCountryCode = value.toLowerCase();
    return this.countriesCode.filter(option => option.toLowerCase().indexOf(filterValueForCountryCode) === 0);
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
      this.personalDetailsForm.controls['clientEmail'].setValue(this.currentClientDetails.EmailID2.trim());
    }
  
      this.personalDetailsForm.controls['clientPhone'].setValue(this.currentClientDetails.ClientPhone);
    this.personalDetailsForm.controls['country'].setValue(this.currentClientDetails.Country);
    this.personalDetailsForm.controls['countryCode'].setValue(this.currentClientDetails.countrytTelephoneCodeClient);
  }

  /****** Created on 27 Nov 2017 ************/
  /****** Following method will be used to det the placeholder for mat input  ************/

  GetPlaceHolder(str: string) {
    if (!this.readOnly) {
      switch (str) {
        case 'clientName': return "Name ";
        case 'clientAddress': return "Address ";
        case 'country': return "Country ";
        case 'clientEmail': return "Email  ";
        case 'countryCode': return "Telephone Country Code  ";
     
        case 'clientPhone': return "Number";
        default: return " ";
      }
    }
    else {
      return " ";
    }
  }
  CheckForWhiteSpace(contraolName:string){
    debugger;
    
    if(this.personalDetailsForm.controls[contraolName].value<=0){
      return this.personalDetailsForm.controls[contraolName].setErrors({ pattern: true });
    }
    else{
      this.personalDetailsForm.controls[contraolName].setValue(this.personalDetailsForm.controls[contraolName].value.trim());
    }
  }
  /****** Created on 14 feb 2019 ************* */
  


}
