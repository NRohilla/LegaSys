import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource, MatDialog, MatSnackBar } from '@angular/material';
import { ShiftsService } from './shifts.service';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { DialogComponent } from '../dialog/dialog.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.scss']
})

export class ShiftsComponent implements OnInit {

  shiftForm = new FormGroup({
    weekOff1: new FormControl('', [Validators.required]), //Validators.email
    weekOff2: new FormControl(''),
    weekOff3: new FormControl(''),
    startTimeIST: new FormControl('', [Validators.required]),
    endTimeIST: new FormControl('', [Validators.required])
  });
  selectedRowIndex: number = -1;
  dataSource: any = [];
  displayedColumns: string[] = ['WeekOff1', 'WeekOff2', 'StartTimeIST', 'EndTimeIST', 'IsActive'];
  weekList: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday', 'Sunday'];
  timeList: string[] = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'];
  formType: string = "Add";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(public shiftsService: ShiftsService, public dialog: MatDialog, public snackBar: MatSnackBar, private titleService: Title) {
    this.dataSource = new MatTableDataSource(this.dataSource);
    titleService.setTitle("LegaSys - Shifts");
  }

  getErrorMessage(fieldName: string) {
    switch (fieldName) {
      case "weekOff1": {
        return this.shiftForm.get('weekOff1').hasError('required') ? 'Please select a Week Off.' : '';
      }
      case "startTimeIST": {
        return this.shiftForm.get('startTimeIST').hasError('required') ? 'Please select a start time.' : '';
      }
      case "endTimeIST": {
        return this.shiftForm.get('endTimeIST').hasError('required') ? 'Please select an end time.' : '';
      }
    }
  }

  onSubmit(formData: any, formDirective: FormGroupDirective) {
    var shift = new Shift();
    shift.WeekOff1 = this.shiftForm.controls['weekOff1'].value;
    shift.WeekOff2 = this.shiftForm.controls['weekOff2'].value;
    shift.WeekOff3 = this.shiftForm.controls['weekOff3'].value;
    shift.StartTimeIST = this.shiftForm.controls['startTimeIST'].value;
    shift.EndTimeIST = this.shiftForm.controls['endTimeIST'].value;
    shift.ShiftID = this.selectedRowIndex;
    let start = shift.StartTimeIST.replace(':', '')
    let end = shift.EndTimeIST.replace(':', '')
    if (+end - (+start) == 900) {
      if (this.formType == "Add") {
        this.shiftsService.createShift(shift).subscribe(res => {
          if (res) {
            this.snackBar.open("Shift added successfully", "Ok", {
              duration: 2000,
            });
            this.ngOnInit();
          }
        });
      }
      else {
        this.shiftsService.updateShift(shift).subscribe(res => {
          if (res) {
            this.snackBar.open("Shift updated successfully", "Ok", {
              duration: 2000,
            });
            this.formType = "Add";
            this.ngOnInit();
          }
        });
      }

      formDirective.resetForm();
      this.shiftForm.reset();
    }
    else {
      this.snackBar.open("Error: Shift must be 9 hours working", "Ok", {
        duration: 2000,
      });
    }
  }

  ngOnInit() {
    this.RenderDataTable();
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
    this.shiftsService.changeStatus(id).subscribe(res => { this.ngOnInit(); });
  }

  formReset(formData: any, formDirective: FormGroupDirective) {
    formDirective.resetForm();
    this.shiftForm.reset();
    this.formType = "Add";
  }

  highlight(row) {
    this.selectedRowIndex = row.ShiftID;
    this.formType = "Update";
    this.shiftForm.setValue({ weekOff1: row.WeekOff1, weekOff2: row.WeekOff2, weekOff3: row.WeekOff3, startTimeIST: row.StartTimeIST, endTimeIST: row.EndTimeIST });
    //this.shiftForm.patchValue({ weekOff1: row.WeekOff1 });
  }

  RenderDataTable() {
    this.shiftsService.getAllShifts()
      .subscribe(
        res => {
          this.dataSource = new MatTableDataSource<Shift>();
          this.dataSource.data = res;

          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error => {
          console.log('There was an error while retrieving data !!!' + error);
        });
  }

}

export class Shift {
  ShiftID: number;
  WeekOff1: string;
  WeekOff2: string;
  WeekOff3: string;
  StartTimeIST: string;
  EndTimeIST: string;
  IsActive: boolean;
}
