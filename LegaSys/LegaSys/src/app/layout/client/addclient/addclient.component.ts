import { Component, OnInit, Inject } from '@angular/core';
import {ClientServiceService} from '../client-service.service';
import {FormBuilder, FormGroup, Validators, FormArray} from "@angular/forms";
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { TosterService } from '../../../shared/services/toster.service';
import { Client, CoClientModal } from '../model/client.model';
import { StorageService, SESSION_STORAGE } from 'angular-webstorage-service';



@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.scss']
})
/******** Created By Shubham Mishra on 4 Feb 2019**********/
export class AddclientComponent implements OnInit {
  isLinear = true;// this variable will be used to for not leting user traverse the stepper without filling current form
  flag:number=0;// this varibale is used for checking that not more than 4 client form is added 
  clientPersonalDetailsForm: FormGroup;
  clientProfestionalDetailsForm: FormGroup;
  coClientForm:FormGroup;
  showCoClientForm:boolean=false; // used for toggle Co Client form 
  clientDetails=new Client();
  emailPattern = '^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';// this regex will be used to validate email pattern
  CountryList: string[] = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"];
  filteredOptionsForClientPersonalDetailsForm: Observable<string[]>;// this variable will hold the returned list of autocomplete.
  filteredOptionsForClientProfestionalDetailsForm: Observable<string[]>;// this variable will hold the returned list of autocomplete
  countriesCode:string[]= ["+7 840","+93","+93","+355","+213","+1 684","+376","+244", "+1 264", "+1 268","+54","+374","+297","+247","+61","+672","+43","+994","+1 242","+973","+880","+1 246","+1 268","+375","+32","+501","+229","+1 441","+975","+55","+246","+359","+855","+1", "+236","+56","+86","+57","+506","+53","+420","+45","+1 767","+1 809","+20","+251","+679","+358","+33", "+995","+49","+30","+852","+36","+354","+91","+62","+98","+964","+353","+972","+39","+1 876","+81","+962","+7 7","+254","+965","+996","+218","+370","+352","+261","+60","+960","+223","+230","+52","+976","+212","+95","+977","+31","+64","+234","+850","+47","+968","+92","+595","+51","+63","+48","+351","+974","+40","+7","+966","+381","+65","+27","+82","+34","+94","+268","+46","+41","+963","+886","+992","+255","+66","+670","+216","+90","+1 340","+256","+380","+971","+44","+1","+84","+967","+263"];
  filterBasedOptionsForCountryCodePersonaTab:Observable<string[]>;
  filterBasedOptionsForCountryCodeProfestionalTab:Observable<string[]>;
  filterBasedOptionsForCountryCodeCoCLientTab:Observable<string[]>[]=[];
  constructor(private formBuilder: FormBuilder,public snackBar: MatSnackBar,private clientservice: ClientServiceService,private router:Router,
    @Inject(SESSION_STORAGE) private storage: StorageService) { }
  ngOnInit() {
    
    if(this.storage.get("userDetailsID")!=null){
      this.clientPersonalDetailsForm = this.formBuilder.group({
      
        ClientName: ['',[Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
        Country: ['',Validators.required],
        Address: ['',[Validators.required,Validators.pattern('^[a-zA-Z0-9 ]+$')]],
        personalEmailId: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
        personalContactNo: ['',[Validators.required,Validators.pattern('^[0-9]+$')]],
        countryCode: ['',[Validators.required]]
  
      });
      this.clientProfestionalDetailsForm = this.formBuilder.group({
        
        companyName: ['',[Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
        Country: ['',Validators.required],
        Address: ['',[Validators.required,Validators.pattern('^[a-zA-Z0-9 ]+$')]],
        companyEmailId: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
        companyContactNo: ['',[Validators.required,Validators.pattern('^[0-9]+$')]],
        companyFax: ['',[Validators.pattern('^[0-9]+$')]],
        zip: ['',[Validators.required, Validators.pattern('^[0-9]+$')]],
        countryCode: ['',[Validators.required]]
  
      });
      
      this.coClientForm=this.formBuilder.group({
        coClientDetails:this.formBuilder.array([this.InitCoClientForm()])
  
      });
      
      
      /***** Autocomplete filter for country in personal details tab */
      this.filteredOptionsForClientPersonalDetailsForm = this.clientPersonalDetailsForm.controls['Country'].valueChanges.pipe(
       startWith(''),
       map(value => this._filter(value))
    );
    
  /***** Autocomplete filter for country in professional  details tab */
    this.filteredOptionsForClientProfestionalDetailsForm = this.clientProfestionalDetailsForm.controls['Country'].valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
   );
   this.filterBasedOptionsForCountryCodePersonaTab=this.clientPersonalDetailsForm.controls['countryCode'].valueChanges.pipe(
    startWith(''),
    map(value => this._filterForCountryCode(value))
  );
  this.filterBasedOptionsForCountryCodeProfestionalTab=this.clientProfestionalDetailsForm.controls['countryCode'].valueChanges.pipe(
    startWith(''),
    map(value => this._filterForCountryCode(value))
  );
  
  
    }
    else{
      this.router.navigateByUrl("/login");
    }
   
   
    /******* Following lines are sed for creating form for stepper  */
    
 
 }
 /***** used for filtering from country list array */
 private _filter(value: string): string[] {
   debugger;
   
  const filterValue = value.toLowerCase();
  return this.CountryList.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
}
ManageNameControl(index: any) {
  var arrayControl = this.coClientForm.get('coClientDetails') as FormArray;
  this.filterBasedOptionsForCountryCodeCoCLientTab[index] = arrayControl.at(index).get('countryCode').valueChanges
    .pipe(
    startWith(''),
    map(value => this._filterForCountryCode(value.toString()))
    );

}

/********** following method is used to add client, it is taking the value of form and puting into object of client
 *  which will be sent to the server **/
AddClient() 
{

  this.clientDetails.ClientName=this.clientPersonalDetailsForm.controls['ClientName'].value;
  this.clientDetails.Address=this.clientPersonalDetailsForm.controls['Address'].value;
  this.clientDetails.Country=this.clientPersonalDetailsForm.controls['Country'].value;
  this.clientDetails.EmailID2=this.clientPersonalDetailsForm.controls['personalEmailId'].value;
  this.clientDetails.ClientPhone=this.clientPersonalDetailsForm.controls['personalContactNo'].value;
  this.clientDetails.countrytTelephoneCodeClient=this.clientPersonalDetailsForm.controls['countryCode'].value;
  this.clientDetails.CompanyName=this.clientProfestionalDetailsForm.controls['companyName'].value;
  this.clientDetails.CompanyAddress=this.clientProfestionalDetailsForm.controls['Address'].value;
  this.clientDetails.ClientCountry=this.clientProfestionalDetailsForm.controls['Country'].value;
  this.clientDetails.EmailID=this.clientProfestionalDetailsForm.controls['companyEmailId'].value;
  this.clientDetails.ClientCompanyFax=this.clientProfestionalDetailsForm.controls['companyFax'].value;
  this.clientDetails.CompanyPhone=this.clientProfestionalDetailsForm.controls['companyContactNo'].value;
   this.clientDetails.ClientCountryZip=this.clientProfestionalDetailsForm.controls['zip'].value; 
   this.clientDetails.countrytTelephoneCodeClientOffice=this.clientProfestionalDetailsForm.controls['countryCode'].value;
  var arrayControl = this.coClientForm.get('coClientDetails') as FormArray; // Creting reference of formArray object to access the values 
  for(var j=0;j<arrayControl.length;j++){ //    Loping through the formArray to gert values in formArray at diffrent index
    console.log(arrayControl.controls[j].value);
      let formArrayValue=new CoClientModal();
      formArrayValue.Name=arrayControl.controls[j].value.Name;
      formArrayValue.Address=arrayControl.controls[j].value.Address;
      formArrayValue.Email=arrayControl.controls[j].value.email;
      formArrayValue.Phone=arrayControl.controls[j].value.contactNo;
      formArrayValue.countryCode=arrayControl.controls[j].value.countryCode;
      this.clientDetails.CoClientDetails.push(formArrayValue);
  }
  console.log(this.clientDetails);
  //Calling service to Add the client details
  this.clientservice.AddClientDetails(this.clientDetails).subscribe(
    (suc:any)=>{
      debugger;
        if(suc.success){
          this.openSnackBar();
          this.router.navigate(['/client']);
        }
          }
  )
}
// usedd for open a snakbar to show message that client has been added Successfully
openSnackBar() {
  this.snackBar.open("Client Added Successfully'","Close", {
    duration: 500,
  });
}
// used for pussing form in form array when user demand it 
InitCoClientForm(){
  //this.ManageNameControl(4);
  return this.formBuilder.group({
    Name:['',Validators.pattern('^[a-zA-Z ]+$')],
    email:['',Validators.email],
    Address:['',Validators.pattern('^[a-zA-Z0-9 ]+$')],
    contactNo:['',Validators.pattern('^[0-9]+$')],
    countryCode: ['',[Validators.required]]
  });
  
}
// used for restricating user not to add mor than 4 co client 
AddNewCoCLientForm(){
 // this.ManageNameControl(4);
  if(this.flag>4){}
  const control = <FormArray>this.coClientForm.controls['coClientDetails'];
    // add new formgroup
    control.push(this.InitCoClientForm());
    this.flag+=1;

}
// used to delete a specific co client form 
deleteRow(index: number) {
  debugger;
  // control refers to your formarray
  const control = <FormArray>this.coClientForm.controls['coClientDetails'];
  // remove the chosen row
  
  if(this.flag>0){
    control.removeAt(index);
    this.flag-=1;
  }
  else{
    this.coClientForm.reset();
    this.showCoClientForm=false;
  }
   
  }
// used to check that when to show Add another button 
CheckFlag(){
  
  if(this.flag==3){
    return false;
  }else if(this.flag==-1){
    this.showCoClientForm=false;
    this.flag=0;
    return false;
  }
  else{
    return true;
  }
}
// 
// ShowCoClient(){
//   if(this.showCoClientForm){
//     this.showCoClientForm=false;
//   }else{
//     this.showCoClientForm=true;
//   }

// }
// used to validate input field do not cointain whitespace at begenning 
CheckForWhiteSpace(contraolName:any,FormName:string,i:number){
  debugger;
  
  switch(FormName){
    case 'clientPersonalDetailsForm': if(this.clientPersonalDetailsForm.controls[contraolName].value<=0){
                                        return this.clientPersonalDetailsForm.controls[contraolName].setErrors({ pattern: true });
                                       }
                                       else{
                                        this.clientPersonalDetailsForm.controls[contraolName].setValue(this.clientPersonalDetailsForm.controls[contraolName].value.trim());
                                       }
                                       break;

    case 'clientProfestionalDetailsForm': if(this.clientProfestionalDetailsForm.controls[contraolName].value<=0){
                                              return this.clientProfestionalDetailsForm.controls[contraolName].setErrors({ pattern: true });
                                          }
                                          else{
                                                this.clientProfestionalDetailsForm.controls[contraolName].setValue(this.clientProfestionalDetailsForm.controls[contraolName].value.trim());
                                          }
                                          break;      
                                          
    case 'coClientForm':  var arrayControl = this.coClientForm.get('coClientDetails') as any ;
    this.ManageNameControl(4);
                          switch(contraolName){
                            case 'Name' : 
                                         if(arrayControl.controls[i].value.Name<=0){
                            
                                            return arrayControl.controls[i].controls.Name.setErrors({ pattern: true });
                                          }
                                          else{
                                              arrayControl.controls[i].controls.Name.setValue(arrayControl.controls[i].value.Name.trim());
                                          }
                                          break;  

                            case 'Address' : 
                                            if(arrayControl.controls[i].value.Address<=0){                            
                                                return arrayControl.controls[i].controls.Address.setErrors({ pattern: true });
                                            }
                                           else{
                                                arrayControl.controls[i].controls.Address.setValue(arrayControl.controls[i].value.Address.trim());
                                            }
                                            break;  
                            }
  
                           break;  
       

  }
}
private _filterForCountryCode(value: string): string[] {
  debugger;
  const filterValueForCountryCode = value.toLowerCase();
  return this.countriesCode.filter(option => option.toLowerCase().indexOf(filterValueForCountryCode) === 0);
}
}
