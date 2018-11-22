import { Component, OnInit } from '@angular/core';
import {ClientServiceService} from '../client-service.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.scss']
})
export class AddclientComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private clientservice: ClientServiceService, private router: Router,public snackBar: MatSnackBar) { }

  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';// this regex will be used to validate email pattern

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
       EmailID: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
       EmailID2: ['', Validators.pattern(this.emailPattern)]

     });
   
    }
    onSubmit() 
  {
      this.clientservice.AddClientDetails(this.clientForm.value)
      .subscribe( 
        
        suc=>{
                if(suc>0)
                {
                 alert("Client Added Succesfully");
                  //this.openSnackBar("Client Added Succesfully");
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
