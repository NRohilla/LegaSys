import { Component, OnInit } from '@angular/core';
import {ClientServiceService} from '../client-service.service';
import{CurrentClientdataServiceService} from '../../../current-clientdata-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-details-personal-details',
  templateUrl: './client-details-personal-details.component.html',
  styleUrls: ['./client-details-personal-details.component.scss']
})

export class ClientDetailsPersonalDetailsComponent implements OnInit {

  /****** Created By Shubham Mishra on 14-Nov-2018 ************/
  disable:boolean=true; // this variable is used to bind the disabled attribute of input to make input fields editable and non editable
  currentClientDetails:any; // this varibale is used to hold the current client details of client selected by uesr
  currentClientDetailsBackup:any; // this variable will hold same data as varible currentClientDetails, if user click cancel button after edditing some field this varible is used to get the old data

  currentClientID:number;
    constructor(private clientService:ClientServiceService,private currentClientdataService:CurrentClientdataServiceService, private router: Router) { }
    /**** this function is used to get details of perticuler client, user has selected to view, this method is making a call to a service with client id as parameter */
  
    GetClientsWithID(ID){
debugger;
      this.clientService.GetDetailsOfClientwhoseID(ID).subscribe(
        suc => {
         this.currentClientDetails=suc;
         this.currentClientDetailsBackup = JSON.parse(JSON.stringify(suc));      
              
        },
        err =>{
          console.log(err);    
        }
        );
    }
    /****** This fuction is used to make the form field editable  */
    MakeFieldEditable()
    {
      this.disable=false;
    }
/****** This function is used to discard changes done by user, and replace changed data with previous data */
    DiscardChanges(){
      debugger;
      this.currentClientDetails=this.currentClientDetailsBackup;
      this.disable=true;
    }
  /***** This function is used to update details of a client, following fucntion is making a call to api and sending the modal as parameter */
 
    UpdateClient(){
     debugger;
      this.clientService.UpdateDetailsWithID(this.currentClientDetails).subscribe(
        suc => {
         this.currentClientDetails=suc;
         this.router.navigate(['/client-details']);              
        },
        err =>{
          console.log(err);    
        }
        );
    }
    ngOnInit() {
   
      this.currentClientID=this.currentClientdataService.currentClientID;
      this.GetClientsWithID(this.currentClientID);
     
      
      }
}
