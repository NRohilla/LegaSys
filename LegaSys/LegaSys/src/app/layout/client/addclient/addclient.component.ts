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

  

   clientForm: FormGroup;
   openSnackBar(message: string) {
    this.snackBar.open(message);
  }
   ngOnInit() 
   {
   
     this.clientForm = this.formBuilder.group({
       //id: [],
       ClientName: ['',Validators.required],
       Country: ['',Validators.required],
       Address: ['',Validators.required],
       CoClient: ['',Validators.required],
       CoClient2: ['',Validators.required],
       EmailID: ['',[Validators.required, Validators.email]],
       EmailID2: ['',[Validators.required, Validators.email]]

     });
   
    }
    onSubmit() 
  {
    debugger;
   
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
