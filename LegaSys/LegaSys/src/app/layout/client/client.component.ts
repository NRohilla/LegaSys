import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MatTableDataSource, MatDialog, MatSnackBar } from '@angular/material';
import { MatPaginator, MatSort } from '@angular/material';
import { ClientServiceService } from './client-service.service';
import { Router } from '@angular/router';
import { CurrentClientdataServiceService } from '../../current-clientdata-service.service';
import { Client } from './model/client.model';
import {DeleteDialog} from './deleteDialog';
import { TosterService } from '../../shared/services/toster.service';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
  animations: [routerTransition()]
})
export class ClientComponent implements OnInit {
  // Created By VE team on 05 Nov 2018 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // This is an array for Header in Grid displaying client details
  displayedColumns: string[] = ['ClientName', 'Email', 'Address', 'Country', 'CoClient', 'action'];
  clientDetails: any = [];  // This array will hold the all client details
  Message: boolean = false;
  successMessage: string;
  isLoading = true;// this varibale will be used to display progressive spinner


  constructor(public dialog: MatDialog,private modalService: NgbModal,private clientService: ClientServiceService, 
     private router: Router, private currentClientdataService: CurrentClientdataServiceService,public tosterService:TosterService,public snackBar: MatSnackBar) {
   

  }
  /*********** Writen By Shubham Mishra on 8 nov 2018 following method is used for geting selected client id from fornt end and 
   *********** it to a property in created in a service and redirecting user to a client details page   */
  ViewClientDetails(element: any) {
    //this.currentClientdataService.currentClientID = element;
    sessionStorage.setItem("currentClientID", element);    
    this.router.navigate(['/client-details']);
  }
  /*********** Writen By Shubham Mishra on 6 nov 2018 following method is used to gell all  client details from database   */
  GetAllClients() {
      this.clientService.GetClientDetails().subscribe(
      suc => {
        this.isLoading = false;
        this.clientDetails = suc;
        this.clientDetails = new MatTableDataSource<Client>(this.clientDetails);
        this.clientDetails.paginator = this.paginator;
        this.clientDetails.sort = this.sort;
      },
      err => {
        console.log(err);
      }
    );
  }
  applyFilter(filterValue: string) {
    this.clientDetails.filter = filterValue.trim().toLowerCase();
  }
  /*********** Writen By Shubham Mishra on 8 nov 2018 following method is used for deleteing a perticular client   */

  DeleteClientWithID(ID) {
    this.clientService.DeleteClient(ID).subscribe(
      suc => {
        if(suc=="Data deleted successfully!"){
        //  this.tosterService.showSuccess("Client Delete successfully");
          this.openSnackBar();
          //this.show();
           this.GetAllClients();          
        }else{
          //this.tosterService.showError("Client Deletion Failed");
        }

      
      },
      err => {
        console.log(err);
      }
    )
  }
  show() {
    this.Message = true;
    this.successMessage = "Client Deleted Succesfully";
    setTimeout(() => this.Message = false, 2500)
  }

/******* Created on 27 Nov 2018 By Vaibhav ******/
  openDialog(dailogID): void {
    sessionStorage.setItem("currentClientdailogID",dailogID);
    const dialogRef = this.dialog.open(DeleteDialog, {
      width: '370px',

      data: {confirm: true }
    });

    dialogRef.afterClosed().subscribe(result => {

      
      if (result)
      this.DeleteClientWithID(dailogID);
    });
  
  }
  ngOnInit() {
    // Following fuction will execute and call to client service to get all client from database
    this.GetAllClients();
  }
  openSnackBar() {
    this.snackBar.open("Client Deleted Successfully'","Close", {
      duration: 500,
    });
  }
}

@Component({
  selector: 'client-deletion',
  template: '<p class="example-pizza-party">Client Deleted Successfully </p>',
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
export class ClientUpdatedComponent {}
