import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormControl, FormGroupDirective } from '@angular/forms';
import { MatPaginator, MatSort, MatDialog, MatSnackBar, MatTableDataSource } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { DialogComponent } from '../dialog/dialog.component';
import { RolesService } from './roles.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  roleForm = new FormGroup({
    role: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    description: new FormControl('', [Validators.maxLength(100)]),
  });
  selectedRowIndex: number = -1;
  dataSource: any = [];
  displayedColumns: string[] = ['Role', 'Description', 'IsActive'];
  formType: string = "Add";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(public rolesService: RolesService, public dialog: MatDialog, public snackBar: MatSnackBar, private titleService: Title) {
    this.dataSource = new MatTableDataSource(this.dataSource);
    titleService.setTitle("LegaSys - Roles");
  }

  ngOnInit() {
    this.RenderDataTable();
  }

  RenderDataTable() {
    this.rolesService.getAllRoles()
      .subscribe(
        res => {
          this.dataSource = new MatTableDataSource<RoleModel>();
          this.dataSource.data = res;

          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error => {
          console.log('There was an error while retrieving data !!!' + error);
        });
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
    this.rolesService.changeStatus(id).subscribe(res => { this.ngOnInit(); });
  }

  formReset(formData: any, formDirective: FormGroupDirective) {
    formDirective.resetForm();
    this.roleForm.reset();
    this.formType = "Add";
  }

  highlight(row) {
    this.selectedRowIndex = row.UserRoleID;
    this.formType = "Update";
    this.roleForm.setValue({ role: row.RoleName, description: row.Description });
  }

  onSubmit(formDirective: FormGroupDirective) {
    var role = new RoleModel();
    role.RoleName = this.roleForm.controls['role'].value;
    role.Description = this.roleForm.controls['description'].value;
    role.UserRoleID = this.selectedRowIndex;
    if (this.formType == "Add") {
      this.rolesService.createRole(role).subscribe(res => {
        if (res) {
          this.snackBar.open("Role added successfully", "Ok", {
            duration: 2000,
          });
          this.ngOnInit();
        }
      });
    }
    else {
      this.rolesService.updateRole(role).subscribe(res => {
        if (res) {
          this.snackBar.open("Role updated successfully", "Ok", {
            duration: 2000,
          });
          this.formType = "Add";
          this.ngOnInit();
        }
      });
    }

    formDirective.resetForm();
    this.roleForm.reset();
  }
}

export class RoleModel {
  UserRoleID: number;
  RoleName: string;
  Description: string;
  IsActive: boolean;
}
