import { Component, OnInit } from '@angular/core';
import { CurrentClientdataServiceService } from '../../../current-clientdata-service.service';
import { ClientServiceService } from '../client-service.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {

  /*********** Created on 19-Nov-2018 By Shubham Mishra **********/

  currentClientID: any;  // Property used for holding id of client selected by user
  currentClientDetails: Object; // property used for holding the details of client selecte dby user
  currentClientDetailsBackup: object; // this property is used for as reference to previous data, it will be used to cancel button
  constructor(private currentClientdataService: CurrentClientdataServiceService, private clientService: ClientServiceService) { }

  /***** This method is used for Geting details of client selecte dby user. This method is calling client service with parameter ID which is ID of 
   ***** client selected by user to view *****************************************************************************************************/

  GetClientsWithID(ID: any) {
    this.clientService.GetDetailsOfClientwhoseID(ID).subscribe(
      suc => {
        
        this.currentClientDetails = suc;
        this.currentClientDetailsBackup = JSON.parse(JSON.stringify(suc));
      
      },
      err => {
        console.log(err);
      }
    );
  }
  /***** This method is used for updating  details of client modified by  user. This method is calling client service with parameter model *****************************************************************************************************/

  updateClent(client: any) {
    debugger;
    this.clientService.UpdateDetailsWithID(client).subscribe(
      suc => {
        this.GetClientsWithID(this.currentClientID);

      },
      err => {
        console.log(err);
      }
    );

    console.log(this.currentClientDetails);
  }

  ngOnInit() {
    this.currentClientID =sessionStorage.getItem("currentClientID");  
    if (this.currentClientID != null && this.currentClientID != '') {
      this.GetClientsWithID(this.currentClientID);
    }
  }


}
