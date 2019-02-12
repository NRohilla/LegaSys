import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { MatPaginator, MatSort, MatDialog, MatFormFieldControl, MatSnackBar, MatTableDataSource } from '@angular/material';
import { LocationsService } from './locations.service';
import { Title } from '@angular/platform-browser';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  value:any;
  locationForm = new FormGroup({
    locationAddress: new FormControl('', [Validators.required, Validators.maxLength(500)])
  });
  selectedRowIndex: number = -1;
  dataSource: any;
  displayedColumns: string[] = ['LocationAddress', 'IsActive'];
  formType: string = "Add";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(public locationsService: LocationsService, public dialog: MatDialog, public snackBar: MatSnackBar, private titleService: Title) {
    this.dataSource = new MatTableDataSource(this.dataSource);
    titleService.setTitle("LegaSys - Locations");
  }

  ngOnInit() {
    this.RenderDataTable();
  }

  onSubmit(formData: any, formDirective: FormGroupDirective) {
    var location = new LocationModel();
    location.LocationAddress = this.locationForm.controls['locationAddress'].value;
    location.LocationID = this.selectedRowIndex;

    if (this.formType == "Add") {
      this.locationsService.createLocation(location).subscribe(res => {
        if (res) {
          this.snackBar.open("Location added successfully", "Ok", {
            duration: 2000,
          });
          this.ngOnInit();
        }
      });
    }
    else {
      this.locationsService.updateLocation(location).subscribe(res => {
        if (res) {
          this.snackBar.open("Location updated successfully", "Ok", {
            duration: 2000,
          });
          this.formType = "Add";
          this.ngOnInit();
        }
      });
    }

    formDirective.resetForm();
    this.locationForm.reset();
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
    this.locationsService.changeStatus(id).subscribe(res => { this.ngOnInit(); });
  }

  formReset(formDirective: FormGroupDirective) {
    formDirective.resetForm();
    this.locationForm.reset();
    this.formType = "Add";
  }

  highlight(row) {
    this.selectedRowIndex = row.LocationID;
    this.formType = "Update";
    this.locationForm.setValue({ locationAddress: row.LocationAddress });
  }

  RenderDataTable() {
    this.locationsService.getAllLocations()
      .subscribe(
        res => {
          this.dataSource = new MatTableDataSource<LocationModel>();
          this.dataSource.data = res;

          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error => {
          console.log('There was an error while retrieving data !!!' + error);
        });
  }
}

export class LocationModel {
  LocationID: number;
  LocationAddress: string;
  IsActive: boolean;
}