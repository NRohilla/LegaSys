import { Component, OnInit } from '@angular/core';
import {ClientServiceService} from '../client-service.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';





@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.scss']
})
export class AddclientComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private clientservice: ClientServiceService, private router: Router) { }

  

   clientForm: FormGroup;
   ngOnInit() 
   {
   
     this.clientForm = this.formBuilder.group({
       //id: [],
       ClientName: [''],
       Country: ['',],
       Address: ['',],
       CoClient: ['',],
       CoClient2: ['',],
       EmailID: ['',],
       EmailID2: ['',]

     });
   
    }
    onSubmit() 
  {
    
   
      this.clientservice.AddClientDetails(this.clientForm.value)
      .subscribe( data => {
        this.router.navigate(['viewclient']);
        });
  }
 
 

}
