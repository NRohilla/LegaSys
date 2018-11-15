import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator , MatSort} from '@angular/material';
import { ClientServiceService } from './client-service.service';
import { Router } from '@angular/router';
import { CurrentClientdataServiceService } from '../../current-clientdata-service.service';
import { Client } from './model/client.model';
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
   // This is an aaray for Header in Grid displaying client details
  displayedColumns: string[] = ['ClientName', 'Email', 'Address', 'Country', 'CoClient', 'action'];
  clientDetails:any=[];  // This array will hold the all client details
  
  constructor(private modalService: NgbModal, private clientService: ClientServiceService, private router: Router, private currentClientdataService: CurrentClientdataServiceService) {
 
  }
   /*********** Writen By Shubham Mishra on 8 nov 2018 following method is used for geting selected client id from fornt end and 
    *********** it to a property in created in a service and redirecting user to a client details page   */
  ViewClientDetails(element: any) {
    this.currentClientdataService.currentClientID = element;
    this.router.navigate(['/client-details']);
  }
 /*********** Writen By Shubham Mishra on 6 nov 2018 following method is used to gell all  client details from database   */
  GetAllClients(){
    this.clientService.GetClientDetails().subscribe(
      suc => {
        console.log(suc);
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

 /*********** Writen By Shubham Mishra on 8 nov 2018 following method is used for deleteing a perticular client   */

  DeleteClientWithID(ID){
    debugger;
    this.clientService.DeleteClient(ID).subscribe(
      suc=>{
        console.log(suc);
        this.GetAllClients(); 
      },
      err=>{
        console.log(err);
      }
    )
  }
  ngOnInit() {
    // Following fuction will execute and call to client service to get all client from database
     this.GetAllClients();   
  
  }
}