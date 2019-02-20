import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Client } from '../model/client.model';
import { validateVerticalPosition } from '@angular/cdk/overlay';

@Component({
  selector: 'app-client-profesional-details',
  templateUrl: './client-profesional-details.component.html',
  styleUrls: ['./client-profesional-details.component.scss']
})
export class ClientProfesionalDetailsComponent implements OnInit {

  /********** Writen By Shubham Kumar Mishra on 3 Jan 2019************/

  @Output('onClientDetailsChange') onClientDetailsChange = new EventEmitter<any>(); //used  to emit event to parent controller 
  @Output('onCancel') onCancel = new EventEmitter<any>(); //used  to emit event to parent controller 
  @Input('currentClientDetails') currentClientDetails: Client; // used to hold current client details comming from parent controller i.e child details
  @Input('currentClientDetailsBackup') currentClientDetailsBackup: Client;// used to hold current client details comming from parent controller i.e child details this will be used when we need to change the update data to previous one
  professionalDetailsForm:FormGroup;
  readOnly: boolean =true;// this variable will be used to make the form field non editable
  // following array will hold the list of country and willbe used to shown as dropdown in country field 
  CountryList: string[] = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];
  filteredOptions: Observable<string[]>;// this variable will hold the returned list of autocomplete
  countriesCode:string[]= ["+7 840","+93","+93","+355","+213","+1 684","+376","+244", "+1 264", "+1 268","+54","+374","+297","+247","+61","+672","+43","+994","+1 242","+973","+880","+1 246","+1 268","+375","+32","+501","+229","+1 441","+975","+55","+246","+359","+855","+1", "+236","+56","+86","+57","+506","+53","+420","+45","+1 767","+1 809","+20","+251","+679","+358","+33", "+995","+49","+30","+852","+36","+354","+91","+62","+98","+964","+353","+972","+39","+1 876","+81","+962","+7 7","+254","+965","+996","+218","+370","+352","+261","+60","+960","+223","+230","+52","+976","+212","+95","+977","+31","+64","+234","+850","+47","+968","+92","+595","+51","+63","+48","+351","+974","+40","+7","+966","+381","+65","+27","+82","+34","+94","+268","+46","+41","+963","+886","+992","+255","+66","+670","+216","+90","+1 340","+256","+380","+971","+44","+1","+84","+967","+263"];
  filterBasedOptionsForCountryCode:Observable<string[]>;
  disable: boolean=true;
  constructor(private formBuilder:FormBuilder) { }
  ngOnInit() {    
    
    debugger;
    console.log(this.currentClientDetails);
    this.CreateProfessionalDetailsForm();
    this.LoadProfessionalDetailsForm();
   // this.professionalDetailsForm.controls['companyName'].setValue('IBM');
    this.filteredOptions = this.professionalDetailsForm.controls['companyCountry'].valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    this.filterBasedOptionsForCountryCode=this.professionalDetailsForm.controls['countryCode'].valueChanges.pipe(
      startWith(''),
      map(value => this._filterForCountryCode(value))
    );
  }
  /******* This method will be used for filtering the  country list  */
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.CountryList.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  private _filterForCountryCode(value: string): string[] {
    debugger;
    const filterValueForCountryCode = value.toLowerCase();
    return this.countriesCode.filter(option => option.toLowerCase().indexOf(filterValueForCountryCode) === 0);
  }
  /**** this method will be used to  upadate the value in the modal and pass the model to client details componenet through an event  */
  UpdateClient() {
    this.currentClientDetails.CompanyName=this.professionalDetailsForm.controls['companyName'].value;
    this.currentClientDetails.CompanyAddress=this.professionalDetailsForm.controls['companyAddress'].value;
    this.currentClientDetails.ClientCountryZip=this.currentClientDetails.ClientCountry=this.professionalDetailsForm.controls['companyCountry'].value;
    this.currentClientDetails.ClientCountryZip=this.professionalDetailsForm.controls['companyZipcode'].value;
    this.currentClientDetails.EmailID=this.professionalDetailsForm.controls['companyEmail'].value;
    this.currentClientDetails.ClientCompanyFax=this.professionalDetailsForm.controls['companyFax'].value;
    this.currentClientDetails.CompanyPhone=this.professionalDetailsForm.controls['companyPhone'].value;
      
      this.currentClientDetails.countrytTelephoneCodeClientOffice=this.professionalDetailsForm.controls['countryCode'].value;
    this.onClientDetailsChange.emit(this.currentClientDetails);
    this.MakeFieldEditable();
  }
  /***** This method will be used to make filed editable and diabled  */
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
  /******** Following method will be called when user click the cancel button. this method will undo the changes done by the user and make field disabled  */
  DiscardChanges() {
    //this.currentClientDetails = this.currentClientDetailsBackup;
    this.LoadProfessionalDetailsForm();
  //  this.onCancel.emit(this.currentClientDetails);
    this.MakeFieldEditable();
  }
  /***** this method will be used to set the value of placeholder when user make field editable  */
  GetPlaceHolder(formControlName:string){
   // this.professionalDetailsForm.controls['companyZipcode'].errors.required
  
    if (!this.readOnly) {
      switch (formControlName) {
        case 'companyName': return "Company Name ";
        case 'companyAddress': return "Company Address ";
        case 'companyCountry': return "Country ";
        case 'companyZipcode': return "ZIP";
        case 'companyEmail': return "Company Email";
        case 'companyPhone': return "Company Phone ";
        case 'companyFax': return "Fax";
        case 'countryCode': return "Telephone Country Code";
        default: return " ";
      }
    }
    else {
      return " ";
    }
  }
  /****** This function will be called on OnInit to load set the values in form  */
  LoadProfessionalDetailsForm(){
    debugger;
    this.professionalDetailsForm.controls['companyName'].setValue(this.currentClientDetails.CompanyName);
    this.professionalDetailsForm.controls['companyAddress'].setValue(this.currentClientDetails.CompanyAddress);
    this.professionalDetailsForm.controls['companyCountry'].setValue(this.currentClientDetails.ClientCountry);
    this.professionalDetailsForm.controls['companyZipcode'].setValue(this.currentClientDetails.ClientCountryZip);
    this.professionalDetailsForm.controls['companyEmail'].setValue(this.currentClientDetails.EmailID.trim());
    this.professionalDetailsForm.controls['companyFax'].setValue(this.currentClientDetails.ClientCompanyFax);
    this.professionalDetailsForm.controls['companyPhone'].setValue(this.currentClientDetails.CompanyPhone);
    this.professionalDetailsForm.controls['countryCode'].setValue(this.currentClientDetails.countrytTelephoneCodeClientOffice);
  }
  /**** This method will be used in OnInit to create a reactive form  */
  CreateProfessionalDetailsForm(){
    this.professionalDetailsForm = this.formBuilder.group({
      companyName: ['',[Validators.required,Validators.pattern('^[a-zA-Z. ]+$')]],
      companyAddress: ['',[Validators.required,Validators.pattern('^[a-zA-Z-#. ]+$')]],
      companyCountry: ['',Validators.required],
      companyZipcode: ['',[Validators.required,Validators.pattern('^[0-9]+$')]],
      companyEmail: ['',Validators.required],
      companyPhone: ['',[Validators.required,Validators.pattern('^[0-9]+$')]],
      countryCode:['',Validators.required],
      companyFax: ['',Validators.pattern('^[0-9]+$')]     
    });
    
  }
  CheckForWhiteSpace(contraolName:string){
    debugger;
    
    if(this.professionalDetailsForm.controls[contraolName].value<=0){
      return this.professionalDetailsForm.controls[contraolName].setErrors({ pattern: true });
    }
    else{
      this.professionalDetailsForm.controls[contraolName].setValue(this.professionalDetailsForm.controls[contraolName].value.trim());
    }
  }

}
