import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject, OnInit} from '@angular/core';
import {SharedService} from '../../Shared/shared.service';
import {FormControl, Validators} from '@angular/forms';
import {Project} from '../projenctModel';
import { routerTransition } from '../../../router.animations';
import {Observable} from 'rxjs';
import { FormBuilder, FormGroup, FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  animations: [routerTransition()] ,
})
export class AddComponent implements OnInit {
    selectedValue: String = '';
    regiForm: FormGroup;
  FirstName: String = '';
  LastName: String = '';
  Address: String = '';
  DOB: Date = null;
  Gender: String = '';
  Blog: String = '';
  Email: String = '';
  IsAccepted: Number = 0;
    // constructor(public dialogRef: MatDialogRef<AddComponent>,
    constructor(
        //@Inject(MAT_DIALOG_DATA) public data: Project,
        public dataService: SharedService, private fb: FormBuilder, private router: Router) {
            this.regiForm = fb.group({
                'Title' : [null, Validators.required],
                'Description' :  [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
                // 'DomainName' : [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
                'DomainName' : [null, Validators.required],
                //'DOB' : [null, Validators.required],
                //'Gender': [null, Validators.required],
               // 'Blog': [null, Validators.required],
               // 'Email': [null, Validators.compose([Validators.required, Validators.email])],
                //'IsAccepted': [null],
                'Client_ID' : [null, Validators.required],
                'ProjectDomain_ID' : [null, Validators.required],
              });
            this.getClient();
            this.GetAllTechnology();
         }
    clientdetails: any;
    technologydetails: any;

formControl = new FormControl('', [
Validators.required
// Validators.email,
]);
ngOnInit() {}
getErrorMessage() {
return this.formControl.hasError('required') ? 'Required field' :
this.formControl.hasError('email') ? 'Not a valid email' :
  '';
}
onFormSubmit(form: NgForm) {
    this.dataService.addProject( form).subscribe(
        res => {

            this.dataService.getAllProject();
           this.router.navigate(['project']);
        });
  //console.log(form);
}
// onNoClick(): void {
// this.dialogRef.close();
// }
public getClient() {
    this.dataService.GetClient().subscribe(
res => {
    this.clientdetails = res;
    });
}
public GetAllTechnology() {
    this.dataService.getalltechnology().subscribe(
res => {
    this.technologydetails = res;
    });
}
onNoClick(): void {
    this.router.navigate(['project']);
}
}
