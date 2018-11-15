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
  /****** Created By Shubham Mishra on 14-Nov-2018 ************/
currentClientDetails:any;// this variable is used to bind the disabled attribute of input to make input fields editable and non editable

currentClientID:any;// this varibale is used to hold the current client details of client selected by uesr

  constructor(private clientService:ClientServiceService,private currentClientdataService:CurrentClientdataServiceService) { }
  /**** this function is used to get details of perticuler client, user has selected to view, this method is making a call to a service with client id as parameter */
 
  GetClientsWithID(ID){
      debugger;
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
