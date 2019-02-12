
import { Component, Inject} from '@angular/core';
import {MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { ClientServiceService } from './client-service.service';
import { Client } from './model/client.model';
@Component({
    selector: 'deleteDialog',
    templateUrl: 'deleteDialog.html',
  })
  export class DeleteDialog {

    currentClientDetails:Client;
    constructor(public dialogRef: MatDialogRef<DeleteDialog>,public dialog: MatDialog, private clientService: ClientServiceService, @Inject(MAT_DIALOG_DATA) public data: any ) {}
   
   
      onNoClick(): void {
      this.dialogRef.close();
    } 
    ngOnInit() {
      debugger;
      // Following fuction will execute and call to client service to get all client from database
      this.clientService.GetDetailsOfClientwhoseID(sessionStorage.getItem("currentClientdailogID")).subscribe(
        suc => {       
          this.currentClientDetails = suc;         
          this.currentClientDetails.ClientName
        
        },
        err => {
          console.log(err);
        }
      );
    } 
  }

