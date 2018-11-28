import { Component, OnInit } from '@angular/core';
import {ClientServiceService} from '../client-service.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.scss']
})
export class AddclientComponent implements OnInit {
  Message: boolean=false;
  successMessage: string;

  constructor(private formBuilder: FormBuilder,private clientservice: ClientServiceService, private router: Router,public snackBar: MatSnackBar) { }

  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';// this regex will be used to validate email pattern
  CountryList: string[] = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"];
  filteredOptions: Observable<string[]>;// this variable will hold the returned list of autocomplete


   clientForm: FormGroup;

   GetEmailErrorMessage(){
    if(this.clientForm.controls['EmailID'].errors.required){
      return "Primary Email can not be empty";
    }
    if(this.clientForm.controls['EmailID'].errors.pattern){
      return "Please enter valid Email";
    }
  }

  GetClientNameErrorMessage(){
    if(this.clientForm.controls['ClientName'].errors.required){
      return "Client name can not be empty";
    }
    if(this.clientForm.controls['ClientName'].errors.pattern){
      return "Client name can only contails text";
    }
  }

  GetPrimaryCoClientErrorMessage(){
    if(this.clientForm.controls['CoClient'].errors.required){
      return "Primary CoClient name can not be empty";
    }
    if(this.clientForm.controls['CoClient'].errors.pattern){
      return "can only contails text";
    }
  }
   ngOnInit() 
   {
   
     this.clientForm = this.formBuilder.group({
      
       ClientName: ['',[Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
       Country: ['',Validators.required],
       Address: ['',Validators.required],
       CoClient: ['',[Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
       CoClient2: ['', Validators.pattern('^[a-zA-Z ]+$')],
       CoClient3: ['', Validators.pattern('^[a-zA-Z ]+$')],
       EmailID: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
       EmailID2: ['', Validators.pattern(this.emailPattern)],
       EmailID3: ['', Validators.pattern(this.emailPattern)]

     });
     this.filteredOptions = this.clientForm.controls['Country'].valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
     
   
    }
    private _filter(value: string): string[] {
      const filterValue = value.toLowerCase();
      return this.CountryList.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    }
    show() {
      this.Message = true;
      this.successMessage = "Client Added Succesfully";
      setTimeout(() => this.Message = false, 2500)
    }
    onSubmit() 
  {
  
      this.clientservice.AddClientDetails(this.clientForm.value)
      .subscribe(        
        suc=>{
                if(suc>0)
                {
                 this.show();
                }
                else{
                  alert("Client could not been Added ");
                }
        },
        err=>{
              alert("Client could not been Added ");
        }
       
        );
  }

  
 

}
