import {MAT_DIALOG_DATA,MatDialog, MatDialogRef} from '@angular/material';
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
  //testing 27/11/2018
    // constructor(public dialogRef: MatDialogRef<AddComponent>,
    constructor(
        //@Inject(MAT_DIALOG_DATA) public data: Project,
        public dataService: SharedService, private fb: FormBuilder, private router: Router) {
            this.regiForm = fb.group({
                'Title' : ["", Validators.required],
                'Description' :  ["", Validators.compose([Validators.required,  Validators.maxLength(500)])],
               
                'DomainName' : [null, Validators.required],
               
                'Client_ID' : [0, Validators.required],
                'ProjectDomain_ID' : [0, Validators.required],
              });
            this.getClient();
            //this.GetAllDomain();
            this.GetAllTechdomains();
         }
    clientdetails: any;
    technologydetails: any;
    technologylist: any;

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
onSelect(id) {  
    debugger;
     this.dataService.GetAllTechnologyByDomain(id).subscribe(
        res=>{
            this.technologylist=res;
        
        }
    );  
} 
onFormSubmit(form: NgForm) {
    debugger;
    if(form['Title']!=""&&form['Client_ID']!= 0 &&form['ProjectDomain_ID']!=null)
    {
        this.dataService.addProject(form).subscribe(
            res => {
    
                this.dataService.getAllProject();
               this.router.navigate(['project']);
            });
    }
    else
    return;
    
 
}

public getClient() {
    this.dataService.GetClient().subscribe(
res => {
    this.clientdetails = res;
    });
}
public GetAllTechdomains() {
    this.dataService.getalltechdomains().subscribe(
res => {
    this.technologydetails = res;    
    });
}

onNoClick(): void {
    this.router.navigate(['project']);
}
}


////redited/testing for push on git 27/11/2018
