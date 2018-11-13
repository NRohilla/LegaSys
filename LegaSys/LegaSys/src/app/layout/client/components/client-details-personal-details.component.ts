import { Component, OnInit } from '@angular/core';
import {ClientServiceService} from '../client-service.service';
import{CurrentClientdataServiceService} from '../../../current-clientdata-service.service';
import { Router } from '@angular/router';
//import {ClientTestingService} from '../../clienttesting.service';


@Component({
  selector: 'app-client-details-personal-details',
  templateUrl: './client-details-personal-details.component.html',
  styleUrls: ['./client-details-personal-details.component.scss']
})
export class ClientDetailsPersonalDetailsComponent implements OnInit {
  disable:boolean=true;
  currentClientDetails:any;
  currentClientDetailsBackup:any;
  currentClientID:any;
    constructor(private clientService:ClientServiceService,private currentClientdataService:CurrentClientdataServiceService, private router: Router) { }
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
    MakeFieldEditable()
    {
      this.disable=false;
    }

    DiscardChanges(){
      debugger;
      this.currentClientDetails=this.currentClientDetailsBackup;
      this.disable=true;
    }
  
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
