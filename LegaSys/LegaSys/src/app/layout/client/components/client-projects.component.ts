import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ClientProject } from '../model/client.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-projects',
  templateUrl: './client-projects.component.html',
  styleUrls: ['./client-projects.component.scss']
})
export class ClientProjectsComponent implements OnInit {

  @Input('clientProjectsList') clientProjectsList: any;
  //@ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['Title', 'Description', 'action'];
 
  constructor(private router:Router) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    debugger;
    
      console.log(this.clientProjectsList);
      this.clientProjectsList = new MatTableDataSource<ClientProject>(this.clientProjectsList);
          this.clientProjectsList.paginator = this.paginator;
         

        
  }
  ViewProjectDetails(ProjectID:any){
    this.router.navigate(['./project/edit',ProjectID]);
  }
}
