import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { MatPaginator, MatSort, MatDialog, MatSnackBar, MatTableDataSource } from '@angular/material';
import { LeavesService } from './leaves.service';
import { Title } from '@angular/platform-browser';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.scss']
})
export class LeavesComponent implements OnInit {

  leaveForm = new FormGroup({
    statusName: new FormControl('', [Validators.required, Validators.maxLength(100)])
  });

  selectedRowIndex: number = -1;
  dataSource: any;
  displayedColumns: string[] = ['StatusName', 'IsActive'];
  formType: string = "Add";

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(public domainsService: LeavesService, public dialog: MatDialog, public snackBar: MatSnackBar, private titleService: Title) {
    titleService.setTitle("LegaSys - Leave Status");
  }

  ngOnInit() {
    debugger;
    this.RenderDataTable();
  }

  onSubmit(formDirective: FormGroupDirective) {
    var leave = new LeaveModel();
    leave.StatusName = this.leaveForm.controls['statusName'].value;
    leave.LeaveStatusID = this.selectedRowIndex;

    if (this.formType == "Add") {
      this.domainsService.createLeave(leave).subscribe(res => {
        if (res) {
          this.snackBar.open("Leave added successfully", "Ok", {
            duration: 2000,
          });
          this.ngOnInit();
        }
      });
    }
    else {
      this.domainsService.updateLeave(leave).subscribe(res => {
        if (res) {
          this.snackBar.open("Leave updated successfully", "Ok", {
            duration: 2000,
          });
          this.formType = "Add";
          this.ngOnInit();
        }
      });
    }

    formDirective.resetForm();
    this.leaveForm.reset();
  }

  status(id, isActive): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '325px',
      data: { status: isActive ? "Deactivate" : "Activate", confirm: true }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) { this.changeStatus(id); }
    });
  }

  changeStatus(id) {
    this.domainsService.changeStatus(id).subscribe(res => { this.ngOnInit(); });
  }

  formReset(formDirective: FormGroupDirective) {
    formDirective.resetForm();
    this.leaveForm.reset();
    this.formType = "Add";
  }

  highlight(row) {
    this.selectedRowIndex = row.LeaveStatusID;
    this.formType = "Update";
    this.leaveForm.setValue({ statusName: row.StatusName });
  }

  RenderDataTable() {
    this.domainsService.getAllLeaves()
      .subscribe(
        res => {
          this.dataSource = new MatTableDataSource<LeaveModel>(this.dataSource);
          this.dataSource.data = res;
          
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error => {
          console.log('There was an error while retrieving data !!!' + error);
        });
  }
}

export class LeaveModel {
  LeaveStatusID: number;
  StatusName: string;
  IsActive: boolean;
}