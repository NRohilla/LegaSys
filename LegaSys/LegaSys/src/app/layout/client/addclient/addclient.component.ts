import { Component, OnInit } from '@angular/core';
import {ClientServiceService} from '../client-service.service';
import {FormBuilder, FormGroup, Validators, FormArray} from "@angular/forms";
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { TosterService } from '../../../shared/services/toster.service';
import { Client, CoClientModal } from '../model/client.model';



@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.scss']
})
export class AddclientComponent implements OnInit {
  isLinear = false;
  flag:number=0;
  clientPersonalDetailsForm: FormGroup;
  clientProfestionalDetailsForm: FormGroup;
  coClientForm:FormGroup;
  clientDetails=new Client();
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';// this regex will be used to validate email pattern
  CountryList: string[] = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"];
  filteredOptionsForClientPersonalDetailsForm: Observable<string[]>;// this variable will hold the returned list of autocomplete.
  filteredOptionsForClientProfestionalDetailsForm: Observable<string[]>;// this variable will hold the returned list of autocomplete
  constructor(private formBuilder: FormBuilder,public snackBar: MatSnackBar,private clientservice: ClientServiceService) { }
  ngOnInit() {
    this.clientPersonalDetailsForm = this.formBuilder.group({
      
      ClientName: ['',[Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      Country: ['',Validators.required],
      Address: ['',Validators.required],
      personalEmailId: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      personalContactNo: ['',[ Validators.required,Validators.pattern('^[0-9 ]+$')]]

    });
    this.clientProfestionalDetailsForm = this.formBuilder.group({
      
      companyName: ['',[Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      Country: ['',Validators.required],
      Address: ['',Validators.required],
      companyEmailId: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      companyContactNo: ['', Validators.pattern('^[0-9 ]+$')],
      companyFax: ['', Validators.pattern('^[0-9 ]+$')],

    });
    this.coClientForm=this.formBuilder.group({
      coClientDetails:this.formBuilder.array([this.InitCoClientForm()])
    });
    this.filteredOptionsForClientPersonalDetailsForm = this.clientPersonalDetailsForm.controls['Country'].valueChanges.pipe(
     startWith(''),
     map(value => this._filter(value))
  );
  

  this.filteredOptionsForClientProfestionalDetailsForm = this.clientProfestionalDetailsForm.controls['Country'].valueChanges.pipe(
    startWith(''),
    map(value => this._filter(value))
 );
 
 }
 private _filter(value: string): string[] {
   debugger;
  const filterValue = value.toLowerCase();
  return this.CountryList.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
}

AddClient() 
{
   debugger;
  console.log(this.clientPersonalDetailsForm.controls['ClientName'].value);
  this.clientDetails.ClientName=this.clientPersonalDetailsForm.controls['ClientName'].value;
  this.clientDetails.Address=this.clientPersonalDetailsForm.controls['Address'].value;
  this.clientDetails.Country=this.clientPersonalDetailsForm.controls['Country'].value;
  this.clientDetails.EmailID2=this.clientPersonalDetailsForm.controls['personalEmailId'].value;
  //this.clientDetails.pe
  this.clientDetails.CompanyName=this.clientProfestionalDetailsForm.controls['companyName'].value;
  this.clientDetails.CompanyAddress=this.clientProfestionalDetailsForm.controls['Address'].value;
  this.clientDetails.ClientCountry=this.clientProfestionalDetailsForm.controls['Country'].value;
  this.clientDetails.EmailID=this.clientProfestionalDetailsForm.controls['companyEmailId'].value;
  this.clientDetails.ClientCompanyFax=this.clientProfestionalDetailsForm.controls['companyFax'].value;
  this.clientDetails.CompanyPhone=this.clientProfestionalDetailsForm.controls['companyContactNo'].value;
  var arrayControl = this.coClientForm.get('coClientDetails') as FormArray;
  for(var j=0;j<arrayControl.length;j++){
    console.log(arrayControl.controls[j].value);
      let formArrayValue=new CoClientModal();
      formArrayValue.Name=arrayControl.controls[j].value.Name;
      formArrayValue.Address=arrayControl.controls[j].value.Address;
      formArrayValue.Email=arrayControl.controls[j].value.email;
      formArrayValue.ContactNo=arrayControl.controls[j].value.contactNo;
      this.clientDetails.CoClientDetails.push(formArrayValue);
  }
  debugger;
  console.log(this.clientDetails);
  this.clientservice.AddClientDetails(this.clientDetails).subscribe(
    (suc:any)=>{
      debugger;
        if(suc.success){
          this.openSnackBar();
        }
          }
  )
}
openSnackBar() {
  this.snackBar.open("Client Added Successfully'","Close", {
    duration: 500,
  });
}
InitCoClientForm(){
  return this.formBuilder.group({
    Name:[''],
    email:[''],
    Address:[''],
    contactNo:['']
  });
}
AddNewCoCLientForm(){
  if(this.flag>4){}
  const control = <FormArray>this.coClientForm.controls['coClientDetails'];
    // add new formgroup
    control.push(this.InitCoClientForm());
    this.flag+=1;

}

deleteRow(index: number) {
  // control refers to your formarray
  const control = <FormArray>this.coClientForm.controls['coClientDetails'];
  // remove the chosen row
  control.removeAt(index);
}
CheckFlag(){
  debugger;
  if(this.flag==3){
    return false;
  }
  else{
    return true;
  }
}
}
