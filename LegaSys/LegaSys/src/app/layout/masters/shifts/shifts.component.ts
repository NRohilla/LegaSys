import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { ShiftsService } from './shifts.service';

@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.scss']
})
export class ShiftsComponent implements OnInit {

  dataSource: any = [];
  displayedColumns: string[] = ['WeekOff1', 'WeekOff2', 'WeekOff3', 'StartTimeIST', 'EndTimeIST', 'IsActive'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(public shiftsService: ShiftsService) { }

  ngOnInit() {
    this.RenderDataTable();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  RenderDataTable() {
    debugger;
    this.shiftsService.getAllShifts()
    .subscribe(
        res => {
            this.dataSource = new MatTableDataSource<Shift>();
            this.dataSource.data = res;

             //this.dataSource.paginator = this.paginator;
             //this.dataSource.sort = this.sort;
        },
        error => {
            console.log('There was an error while retrieving data !!!' + error);
        });
        debugger;
  }

}

export class Shift {
  ShiftID: number;
  WeekOff1: string;
  WeekOff2: string;
  WeekOff3: string;
  StartTimeIST: string;
  EndTimeIST: string;
  IsActive:boolean;
}
