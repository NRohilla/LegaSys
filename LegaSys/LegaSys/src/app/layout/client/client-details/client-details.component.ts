import { Component, OnInit } from '@angular/core';
import { CurrentClientdataServiceService } from '../../../current-clientdata-service.service';
import { ClientServiceService } from '../client-service.service';
import{Client} from '../model/client.model';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {

  /*********** Created on 19-Nov-2018 By Shubham Mishra **********/
  Message:boolean=false;
  successMessage:any;
  currentClientID: any;  // Property used for holding id of client selected by user
  currentClientDetails: Client; // property used for holding the details of client selecte dby user
  currentClientDetailsBackup: Client; // this property is used for as reference to previous data, it will be used to cancel button
  isLoading=true;
  constructor(private currentClientdataService: CurrentClientdataServiceService, private clientService: ClientServiceService) { }

  /***** This method is used for Geting details of client selecte dby user. This method is calling client service with parameter ID which is ID of 
   ***** client selected by user to view *****************************************************************************************************/

  GetClientsWithID(ID: any) {
    this.clientService.GetDetailsOfClientwhoseID(ID).subscribe(
      suc => {
        this.isLoading=false;
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
     this.clientService.UpdateDetailsWithID(client).subscribe(
      suc => {
        this.GetClientsWithID(this.currentClientID);
       // alert("Client Details Updeted Successfully ");
       this.show();


      },
      err => {
        console.log(err);
      }
    );


  }
  onCancel(client:any){
    this.currentClientDetails=client;
   
   
  }
  show(){
    this.Message=true;
    this.successMessage="Client Updated Succesfully";
    setTimeout(() => this.Message = false, 20000)
  }

  ngOnInit() {
    this.currentClientID =sessionStorage.getItem("currentClientID");  
    if (this.currentClientID != null && this.currentClientID != '') {
      this.GetClientsWithID(this.currentClientID);
    }
  }


}
