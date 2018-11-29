import { Component, OnInit } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { ViewChild } from '@angular/core';
import { Taskmodel } from '../taskmodel.model';
import { TaskServiceService } from '../taskservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})

export class ListTaskComponent implements OnInit {
  constructor(public dataService: TaskServiceService,private router:Router) { }

  dataSource: any = []



 

  displayedColumns: string[] = ['TaskTitle', 'Description', 'Updated_By', 'Updated_Date', 'Project_Title','Project_Description' ,'Action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  ngOnInit() {
 
  
    this.FetchDataTable();
    

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

//  Method to get data from database
  FetchDataTable()
   {


    this.dataService.GetAllProjectsTask().subscribe(
      res => {
        this.dataSource = new MatTableDataSource<Taskmodel>();
        this.dataSource.data = res;
        // console.log("I am in list task component");
        // console.log(this.dataSource.data);

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => {
        console.log('There was an error while retrieving data !!!' + error);
      });




   }
      //send id
    ViewTask(ID)
    {
       sessionStorage.setItem("currentId",ID);
       this.router.navigate(['/EditTasksPath']);

    }

}
