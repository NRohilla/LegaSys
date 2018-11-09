import { Component, OnInit } from '@angular/core';
import {ClientServiceService} from '../client-service.service';
import{CurrentClientdataServiceService} from '../../../current-clientdata-service.service';
//import {ClientTestingService} from '../../clienttesting.service';
@Component({
  selector: 'app-client-details-summary',
  templateUrl: './client-details-summary.component.html',
  styleUrls: ['./client-details-summary.component.scss']
})
//public clientservicetesting:ClientTestingService
export class ClientDetailsSummaryComponent implements OnInit {
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

  ngOnInit() {
    
    this.currentClientID=this.currentClientdataService.currentClientID;
    this.GetClientsWithID(this.currentClientID);
   
    
    }

}
