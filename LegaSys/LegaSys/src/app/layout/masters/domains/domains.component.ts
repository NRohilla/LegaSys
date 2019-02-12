import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { MatPaginator, MatSort, MatDialog, MatSnackBar, MatTableDataSource } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { DialogComponent } from '../dialog/dialog.component';
import { DomainsService } from './domains.service';

@Component({
  selector: 'app-domains',
  templateUrl: './domains.component.html',
  styleUrls: ['./domains.component.scss']
})
export class DomainsComponent implements OnInit {
  value:any;
  domainForm = new FormGroup({
    domainName: new FormControl('', [Validators.required, Validators.maxLength(100)])
  });
  selectedRowIndex: number = -1;
  dataSource: any;
  displayedColumns: string[] = ['DomainName', 'IsActive'];
  formType: string = "Add";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(public domainsService: DomainsService, public dialog: MatDialog, public snackBar: MatSnackBar, private titleService: Title) {
    this.dataSource = new MatTableDataSource(this.dataSource);
    titleService.setTitle("LegaSys - Domains");
  }

  ngOnInit() {
    this.RenderDataTable();
  }

  onSubmit(formData: any, formDirective: FormGroupDirective) {
    var domain = new DomainModel();
    domain.DomainName = this.domainForm.controls['domainName'].value;
    domain.TechDomainID = this.selectedRowIndex;

    if (this.formType == "Add") {
      this.domainsService.createDomain(domain).subscribe(res => {
        if (res) {
          this.snackBar.open("Domain added successfully", "Ok", {
            duration: 2000,
          });
          this.ngOnInit();
        }
      });
    }
    else {
      this.domainsService.updateDomain(domain).subscribe(res => {
        if (res) {
          this.snackBar.open("Domain updated successfully", "Ok", {
            duration: 2000,
          });
          this.formType = "Add";
          this.ngOnInit();
        }
      });
    }

    formDirective.resetForm();
    this.domainForm.reset();
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
    this.domainForm.reset();
    this.formType = "Add";
  }

  highlight(row) {
    this.selectedRowIndex = row.TechDomainID;
    this.formType = "Update";
    this.domainForm.setValue({ domainName: row.DomainName });
  }

  RenderDataTable() {
    this.domainsService.getAllDomains()
      .subscribe(
        res => {
          this.dataSource = new MatTableDataSource<DomainModel>();
          this.dataSource.data = res;

          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error => {
          console.log('There was an error while retrieving data !!!' + error);
        });
  }
}

export class DomainModel {
  TechDomainID: number;
  DomainName: string;
  IsActive: boolean;
}