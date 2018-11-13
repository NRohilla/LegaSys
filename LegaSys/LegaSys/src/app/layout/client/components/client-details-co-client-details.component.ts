import { Component, OnInit } from '@angular/core';
import{CurrentClientdataServiceService} from '../../../current-clientdata-service.service';
import {ClientServiceService} from '../client-service.service';

@Component({
  selector: 'app-client-details-co-client-details',
  templateUrl: './client-details-co-client-details.component.html',
  styleUrls: ['./client-details-co-client-details.component.scss']
})
export class ClientDetailsCoClientDetailsComponent implements OnInit {
  disable:boolean=true;
  currentClientDetails:any;
  currentClientID:any;
  currentClientDetailsBackup:any;
    constructor(private clientService:ClientServiceService,private currentClientdataService:CurrentClientdataServiceService) { }
    GetClientsWithID(ID){
    
      this.clientService.GetDetailsOfClientwhoseID(ID).subscribe(
        suc => {
         console.log(suc);
         this.currentClientDetails=suc; 
         this.currentClientDetailsBackup = JSON.parse(JSON.stringify(suc));                 
        },
        err =>{
          console.log(err);
    
        }
        );
    }

    MakeFieldEditable()
    {
      this.disable=false;
    }
    DiscardChanges(){
      debugger;
      console.log(this.currentClientDetailsBackup);
      this.currentClientDetails=this.currentClientDetailsBackup;
      console.log(this.currentClientDetails);
      this.disable=true;
    }
  
    UpdateClient(){
     
      this.clientService.UpdateDetailsWithID(this.currentClientDetails).subscribe(
        suc => {
         this.currentClientDetails=suc;              
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
