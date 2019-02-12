import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MatTableDataSource, MatDialog, MatSnackBar } from '@angular/material';
import { MatPaginator, MatSort } from '@angular/material';
import { ClientServiceService } from './client-service.service';
import { Router } from '@angular/router';
import { CurrentClientdataServiceService } from '../../current-clientdata-service.service';
import { Client } from './model/client.model';
import { DeleteDialog } from './deleteDialog';
import { TosterService } from '../../shared/services/toster.service';
// import { ActivateDialog } from './activateDialog';
// import { ClientActiveDialog } from './clientActiveDialloge';
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


  constructor(public dialog: MatDialog, private modalService: NgbModal, private clientService: ClientServiceService,
    private router: Router, private currentClientdataService: CurrentClientdataServiceService, public tosterService: TosterService, public snackBar: MatSnackBar) {


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
      (suc: any) => {
        if (suc.success) {
          debugger;
          this.isLoading = false;
          this.clientDetails = suc.data;
          this.clientDetails = new MatTableDataSource<Client>(this.clientDetails);
          this.clientDetails.paginator = this.paginator;
          this.clientDetails.sort = this.sort;
        }

      },
      err => {
        console.log(err);
      }
    );
  }
  applyFilter(filterValue: string) {
    debugger;
    this.clientDetails.filter = filterValue.trim().toLowerCase();
  }
  /*********** Writen By Shubham Mishra on 8 nov 2018 following method is used for deleteing a perticular client   */

  DeactivateClientHavingId(ID) {
    this.clientService.DeleteClient(ID).subscribe(
      (suc: any) => {
        if (suc.success) {
          this.tosterService.showSuccess("Client Deactivated  successfully");
          this.openSnackBar();
          //this.show();
          this.GetAllClients();
        } else {
          this.tosterService.showError("Something went wrong");
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
    sessionStorage.setItem("currentClientdailogID", dailogID);
    const dialogRef = this.dialog.open(DeleteDialog, {
      width: '370px',

      data: { status: "Deactive", confirm: true }
    });

    dialogRef.afterClosed().subscribe(result => {


      if (result)
        this.DeactivateClientHavingId(dailogID);
    });
  }
  OpenActivationDialog(dailogID): void {
    debugger;
    sessionStorage.setItem("currentClientdailogID", dailogID);
    const dialogRef = this.dialog.open(DeleteDialog, {
      width: '370px',

      data: { status: "Active", confirm: true }
    });

    dialogRef.afterClosed().subscribe(result => {


      if (result)
        this.ActivateClienthavingId(dailogID);
    });
  }
  ActivateClienthavingId(ID: any) {
    debugger;

    this.clientService.ActivateClienthavingId(parseInt(ID)).subscribe(

      (suc: any) => {
        debugger;
        if (suc.success) {
          this.tosterService.showSuccess("Client Activated successfully");
          this.openSnackBar();
          //this.show();
          this.GetAllClients();
        } else {
          this.tosterService.showError("Something Went Wrong, Please try After some time");
        }
      },
      err => {
        console.log(err);
      }
    )
  }

  ngOnInit() {
    // Following fuction will execute and call to client service to get all client from database
    this.GetAllClients();
  }
  openSnackBar() {
    this.snackBar.open("Client Deleted Successfully'", "Close", {
      duration: 500,
    });
  }
  GetStatus(element: boolean) {
    if (element) {
      return 'Active';
    } else {
      return 'In active';
    }
  }
}
