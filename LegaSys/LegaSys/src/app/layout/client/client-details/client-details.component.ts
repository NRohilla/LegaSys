import { Component, OnInit } from '@angular/core';
import { CurrentClientdataServiceService } from '../../../current-clientdata-service.service';
import { ClientServiceService } from '../client-service.service';
import { Client } from '../model/client.model';
import { TosterService } from '../../../shared/services/toster.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {

  /*********** Created on 19-Nov-2018 By Shubham Mishra **********/
  Message: boolean = false;
  successMessage: any;
  currentClientID: any;  // Property used for holding id of client selected by user
  currentClientDetails: Client; // property used for holding the details of client selecte dby user
  currentClientDetailsBackup: Client; // this property is used for as reference to previous data, it will be used to cancel button
  isLoading = true;
  clientProjectsList: any;
  constructor(private currentClientdataService: CurrentClientdataServiceService, private clientService: ClientServiceService,
    public toastr: ToastrManager,public tosterService:TosterService,public snackBar: MatSnackBar) { }

  /***** This method is used for Geting details of client selecte dby user. This method is calling client service with parameter ID which is ID of 
   ***** client selected by user to view *****************************************************************************************************/
  GetClientsWithID(ID: any) {
    this.clientService.GetDetailsOfClientwhoseID(ID).subscribe(
      suc => {
        debugger;
        this.isLoading = false;
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
        if(suc=="Data updated successfully!"){
         //this.tosterService.showSuccess("Client Updated Succesfully");
         //this.show(); 
          this.openSnackBar();
          this.currentClientDetails=client;
           //this.GetClientsWithID(this.currentClientID);
                     
        }
        else{
          //this.tosterService.showError("Client Updation Failed");
        }      
      },
      err => {
        console.log(err);
      }
    );
  }
  onCancel(client: any) {
    this.tosterService.showInfo("cancelled");
        this.currentClientDetails = client;
  }
  show() {
    this.Message = true;
    this.successMessage = "Client Updated Succesfully";
    setTimeout(() => this.Message = false, 20000)
  }
  ngOnInit() {
    this.currentClientID = sessionStorage.getItem("currentClientID");
    if (this.currentClientID != null && this.currentClientID != '') {
      this.GetClientsWithID(this.currentClientID);
      this.GetAllClientProject(parseInt(this.currentClientID));
    }
  }
  GetAllClientProject(id:number){
    
    this.clientService.GetClientAllProject(id).subscribe(
      suc=>{
        
        console.log(suc);
        this.clientProjectsList=suc;
      }
    );
  }
  openSnackBar() {
    this.snackBar.open("Client updated Successfully'","Close", {
      duration: 1000,
    });
  }


}

