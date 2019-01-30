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
  }
  /******* This method will be used for filtering the  country list  */
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.CountryList.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
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
        default: return " ";
      }
    }
    else {
      return " ";
    }
  }
  /****** This function will be called on OnInit to load set the values in form  */
  LoadProfessionalDetailsForm(){
    this.professionalDetailsForm.controls['companyName'].setValue(this.currentClientDetails.CompanyName);
    this.professionalDetailsForm.controls['companyAddress'].setValue(this.currentClientDetails.CompanyAddress);
    this.professionalDetailsForm.controls['companyCountry'].setValue(this.currentClientDetails.ClientCountry);
    this.professionalDetailsForm.controls['companyZipcode'].setValue(this.currentClientDetails.ClientCountryZip);
    this.professionalDetailsForm.controls['companyEmail'].setValue(this.currentClientDetails.EmailID.trim());
    this.professionalDetailsForm.controls['companyFax'].setValue(this.currentClientDetails.ClientCompanyFax);
    this.professionalDetailsForm.controls['companyPhone'].setValue(this.currentClientDetails.CompanyPhone);
  }
  /**** This method will be used in OnInit to create a reactive form  */
  CreateProfessionalDetailsForm(){
    this.professionalDetailsForm = this.formBuilder.group({
      companyName: ['',[Validators.required]],
      companyAddress: ['',Validators.required],
      companyCountry: ['',Validators.required],
      companyZipcode: ['',[Validators.required,Validators.pattern('^[0-9 ]+$')]],
      companyEmail: ['',Validators.required],
      companyPhone: ['',[Validators.required,Validators.pattern('^[0-9 ]+$')]],
      companyFax: ['',Validators.pattern('^[0-9 ]+$')]     
    });
    
  }

}
