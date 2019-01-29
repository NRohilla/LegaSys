import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { MatPaginator, MatSort, MatDialog, MatSnackBar, MatTableDataSource } from '@angular/material';
import { LeavetypeService } from './leavetype.service';
import { Title } from '@angular/platform-browser';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-leavetype',
  templateUrl: './leavetype.component.html',
  styleUrls: ['./leavetype.component.scss']
})
export class LeavetypeComponent implements OnInit {

  leavetypeForm = new FormGroup({
    typeName: new FormControl('', [Validators.required, Validators.maxLength(100)])
  });

  selectedRowIndex: number = -1;
  dataSource: any;
  displayedColumns: string[] = ['TypeName', 'IsActive'];
  formType: string = "Add";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(public leavetypeService: LeavetypeService, public dialog: MatDialog, public snackBar: MatSnackBar, private titleService: Title) {
    this.dataSource = new MatTableDataSource(this.dataSource);
    titleService.setTitle("LegaSys - Leave Types");
  }

  ngOnInit() {
    this.RenderDataTable();
  }

  onSubmit(formDirective: FormGroupDirective) {
    var leavetype = new LeavetypeModel();
    leavetype.TypeName = this.leavetypeForm.controls['typeName'].value;
    leavetype.LeaveTypeID = this.selectedRowIndex;

    if (this.formType == "Add") {
      this.leavetypeService.createLeavetype(leavetype).subscribe(res => {
        if (res) {
          this.snackBar.open("Leave type added successfully", "Ok", {
            duration: 2000,
          });
          this.ngOnInit();
        }
      });
    }
    else {
      this.leavetypeService.updateLeavetype(leavetype).subscribe(res => {
        if (res) {
          this.snackBar.open("Leave type updated successfully", "Ok", {
            duration: 2000,
          });
          this.formType = "Add";
          this.ngOnInit();
        }
      });
    }

    formDirective.resetForm();
    this.leavetypeForm.reset();
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
    this.leavetypeService.changeStatus(id).subscribe(res => { this.ngOnInit(); });
  }

  formReset(formDirective: FormGroupDirective) {
    formDirective.resetForm();
    this.leavetypeForm.reset();
    this.formType = "Add";
  }

  highlight(row) {
    this.selectedRowIndex = row.LeaveTypeID;
    this.formType = "Update";
    this.leavetypeForm.setValue({ typeName: row.TypeName });
  }

  RenderDataTable() {
    this.leavetypeService.getAllLeavetype()
      .subscribe(
        res => {
          this.dataSource = new MatTableDataSource<LeavetypeModel>();
          this.dataSource.data = res;

          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error => {
          console.log('There was an error while retrieving data !!!' + error);
        });
  }

}

export class LeavetypeModel {
  LeaveTypeID: number;
  TypeName: string;
  IsActive: boolean;
}