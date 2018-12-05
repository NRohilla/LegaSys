import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { MatPaginator, MatSort, MatDialog, MatSnackBar, MatTableDataSource } from '@angular/material';
import { TechnologiesService } from './technologies.service';
import { Title } from '@angular/platform-browser';
import { DialogComponent } from '../dialog/dialog.component';
import { DomainModel } from '../domains/domains.component';
import { DomainsService } from '../domains/domains.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {

  technologyForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    master_DomainID: new FormControl('', [Validators.required])
  });
  selectedRowIndex: number = -1;
  domainList: DomainModel[];
  dataSource: any;
  displayedColumns: string[] = ['Name', 'Master_DomainName', 'IsActive'];
  formType: string = "Add";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(public technologyService: TechnologiesService, private domainService: DomainsService, public dialog: MatDialog, public snackBar: MatSnackBar, private titleService: Title) {
    this.dataSource = new MatTableDataSource(this.dataSource);
    titleService.setTitle("LegaSys - Technologies");
  }

  ngOnInit() {
    this.RenderDataTable();
    this.RenderDomainList();
  }

  RenderDataTable() {
    this.technologyService.getAllTechnologies()
      .subscribe(
        res => {
          this.dataSource = new MatTableDataSource<TechnologiesModel>();
          this.dataSource.data = res;

          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error => {
          console.log('There was an error while retrieving data !!!' + error);
        });
  }

  RenderDomainList() {
    this.domainService.getAllActiveDomains()
      .subscribe(
        res => {
          this.domainList = res;
        },
        error => {
          console.log('There was an error while retrieving data !!!' + error);
        });
  }

  onSubmit(formData: any, formDirective: FormGroupDirective) {
    var technology = new TechnologiesModel();
    technology.Name = this.technologyForm.controls['name'].value;
    technology.Master_DomainID = this.technologyForm.controls['master_DomainID'].value;
    technology.TechnologyID = this.selectedRowIndex;

    if (this.formType == "Add") {
      this.technologyService.createTechnology(technology).subscribe(res => {
        if (res) {
          this.snackBar.open("Technology added successfully", "Ok", {
            duration: 2000,
          });
          this.ngOnInit();
        }
      });
    }
    else {
      this.technologyService.updateTechnology(technology).subscribe(res => {
        if (res) {
          this.snackBar.open("Technology updated successfully", "Ok", {
            duration: 2000,
          });
          this.formType = "Add";
          this.ngOnInit();
        }
      });
    }

    formDirective.resetForm();
    this.technologyForm.reset();
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
    this.technologyService.changeStatus(id).subscribe(res => { this.ngOnInit(); });
  }

  formReset(formDirective: FormGroupDirective) {
    formDirective.resetForm();
    this.technologyForm.reset();
    this.formType = "Add";
  }

  highlight(row) {
    this.selectedRowIndex = row.TechnologyID;
    this.formType = "Update";
    this.technologyForm.setValue({ name: row.Name, master_DomainID: row.Master_DomainID });
  }

}

export class TechnologiesModel {
  TechnologyID: number;
  Name: string;
  Master_DomainID: number;
  Master_DomainName: string;
  IsActive: boolean;
}