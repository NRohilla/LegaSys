import { Component, OnInit } from '@angular/core';
import {ClientServiceService} from '../client-service.service';
import{CurrentClientdataServiceService} from '../../../current-clientdata-service.service';
//import {ClientTestingService} from '../../clienttesting.service';


@Component({
  selector: 'app-client-details-personal-details',
  templateUrl: './client-details-personal-details.component.html',
  styleUrls: ['./client-details-personal-details.component.scss']
})
export class ClientDetailsPersonalDetailsComponent implements OnInit {
  disable:boolean=true;
  currentClientDetails:any;
  currentClientID:any;
    constructor(private clientService:ClientServiceService,private currentClientdataService:CurrentClientdataServiceService) { }
    GetClientsWithID(ID){

      this.clientService.GetDetailsOfClientwhoseID(ID).subscribe(
        suc => {
         console.log(suc);
         this.currentClientDetails=suc;
         console.log(this.currentClientDetails);
        
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
  
    UpdateClient(){
     
      this.clientService.UpdateDetailsWithID(this.currentClientDetails).subscribe(
        suc => {
         console.log(suc);
         this.currentClientDetails=suc;
         console.log(this.currentClientDetails);
        
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
