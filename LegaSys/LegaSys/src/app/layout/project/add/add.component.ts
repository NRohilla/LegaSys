import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { Component, Inject, OnInit } from '@angular/core';
import { SharedService } from '../../Shared/shared.service';
import { FormControl, Validators } from '@angular/forms';
import { Project } from '../projenctModel';
import { routerTransition } from '../../../router.animations';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackBarComponentExampleComponent } from '../../project/snack-bar-component-example/snack-bar-component-example.component';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss'],
    animations: [routerTransition()],
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
    ClientName: string ;
    TechnologyName: string ;
    //testing 27/11/2018
    // constructor(public dialogRef: MatDialogRef<AddComponent>,
    constructor(
        //@Inject(MAT_DIALOG_DATA) public data: Project,
        public dataService: SharedService, private fb: FormBuilder, private router: Router, public snackBar: MatSnackBar) {
        this.regiForm = fb.group({
            'Title': ["", Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z_ ]+([a-zA-Z-_])*$')])],
            'Description': ["", Validators.compose([Validators.required, Validators.maxLength(500)])],

            //'DomainName' : [null, Validators.required],

            'Client_ID': [0, Validators.required],
            'ProjectDomain_ID': [0, Validators.required],
            'ProjectD_ID': [""]
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
    ngOnInit() {
        var cllientId = sessionStorage.getItem('cllientIdToAddProject');
        if (cllientId != null) {
            this.regiForm.controls['Client_ID'].setValue(parseInt(cllientId));
        }
    }
    getErrorMessage() {
        return this.formControl.hasError('required') ? 'Required field' :
            this.formControl.hasError('email') ? 'Not a valid email' :
                '';
    }
    // onSelect(id) {
    //     debugger;
    //     this.dataService.GetAllTechnologyByDomain(id).subscribe(
    //         res => {
    //             this.technologylist = res;

    //         }
    //     );
    // }
    onFormSubmit(form: NgForm) {
        this.GenerateProjectID();
        console.log(this.regiForm.value);

        debugger;
        if (form['Title'] != "" && form['Client_ID'] != 0 && form['ProjectDomain_ID'] != 0) {
            this.dataService.addProject(this.regiForm.value).subscribe(
                res => {

                    sessionStorage.setItem('message', 'added');
                    //this.openSnackBar();
                    this.snackBar.open('Project added successfully', 'ok', { duration: 2500 });
                    this.dataService.getAllProject();
                    this.router.navigate(['project']);
                });
        }
        else
            return;


    }
    GenerateProjectID() {
        var date = new Date;        
        //this.regiForm.controls.ProjectD_ID.setValue(this.TechnologyName.concat(this.ClientName).concat(date.getDate().toString()).concat(date.getMinutes().toString()).concat(date.getSeconds().toString()));
        this.regiForm.controls.ProjectD_ID.setValue(this.TechnologyName.concat(this.ClientName));
        console.log(this.regiForm.controls.ProjectD_ID.value);    
    }

    public getClient() {
        this.dataService.GetAllActiveClient().subscribe(
            (res: any) => {
                //debugger;
                this.clientdetails = res.data;
            });
    }
    public GetAllTechdomains() {
        debugger;
        this.dataService.getalltechdomains().subscribe(
            res => {
                this.technologydetails = res;
            });
    }

    onNoClick(): void {
        this.router.navigate(['project']);
    }
    openSnackBar() {
        this.snackBar.openFromComponent(SnackBarComponentExampleComponent, {
            duration: 2000,
        });
    }
    TrimString(str: string) {
        this.regiForm.controls[str].setValue(this.regiForm.controls[str].value.trim());
    }
    SetTechnology(str: string) {
        var matches = str.match(/\b(\w)/g); 
        this.TechnologyName = matches.join('');
    }
    SetClientName(str: string) {
        var matches = str.match(/\b(\w)/g); // ['J','S','O','N']
        this.ClientName = matches.join(''); // JSON        
    }
}


////reedited/testing for push on git 29/11/2018
