import { Component, OnInit,ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {MatTableDataSource} from '@angular/material';
import {MatPaginator} from '@angular/material';
import {ClientServiceService} from './client-service.service'

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
  animations: [routerTransition()]
})
export class ClientComponent implements OnInit {
  // Created By VE team on 05 Nov 2018 

  clientDetails:any= [];  // This array will hold the all client details
  constructor(private modalService: NgbModal,private clientService:ClientServiceService ) { }

dataSource = new MatTableDataSource(this.clientDetails);

// this fuction is used for sorting the grid
applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
}


displayedColumns: string[] = ['ClientName', 'Email', 'Address', 'Country','CoClient','action']; // This is an aaray for Header in Grid displaying client details
  ngOnInit() {
    // Following fuction will execute and call to client service to get all client from database
    debugger;
    this.clientService.GetClientDetails().subscribe(
      suc => {
       console.log(suc);
       this.clientDetails=suc;
       console.log(this.clientDetails);
      
      },
      err =>{
        console.log(err);

      }
      );
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;

}
