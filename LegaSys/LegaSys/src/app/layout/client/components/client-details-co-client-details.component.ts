import { Component, OnInit, EventEmitter, Output, Input, ViewChild } from '@angular/core';
import { CurrentClientdataServiceService } from '../../../current-clientdata-service.service';
import { ClientServiceService } from '../client-service.service';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormArray } from "@angular/forms";
import { Client, CoClientModal } from '../model/client.model';
import { MatTableDataSource, MatDialog, MatSort } from '@angular/material';
import { DialogComponent } from '../../masters/dialog/dialog.component';

@Component({
  selector: 'app-client-details-co-client-details',
  templateUrl: './client-details-co-client-details.component.html',
  styleUrls: ['./client-details-co-client-details.component.scss']
})
export class ClientDetailsCoClientDetailsComponent implements OnInit {
  @Output('onClientDetailsChange') onClientDetailsChange = new EventEmitter<any>(); //used  to emit event to parent controller 
  @Output('onCancel') onCancel = new EventEmitter<any>(); //used  to emit event to parent controller 
  @Input('currentClientDetails') currentClientDetails: Client; // used to hold current client details comming from parent controller i.e child details
  @Input('currentClientDetailsBackup') currentClientDetailsBackup: Client;// used to hold current client details comming from parent controller i.e child details this will be used when we need to change the update data to previous one
  @ViewChild(MatSort) sort: MatSort;

  /********************** Created By Shubham Mishra on 8-feb-2019 **************/
  disable: boolean = true; //this variable is used to bind the disabled attribute of input to make input fields editable and non editable
  coClientForm: FormGroup;// this is form group for co client 
  client: Client; // This is model of client
  readOnly: boolean = true;
  showCoClientForm:boolean=false;
  flag:boolean=true;
  displayedColumns: string[] = ['Name', 'Email', 'Address', 'Contact_no','Action']; // to display values in data table 
  dataSource:any; 
  selectedRowIndex:number=-1;
  dataSourceBackup:any;
  ids:number=-2;
  showUpdateForm:boolean=true;
  constructor(private clientService: ClientServiceService, private currentClientdataService: CurrentClientdataServiceService,
     private formBuilder: FormBuilder,public dialog: MatDialog) {

  }
  
  ngOnInit() {
   this.RenderDataTable();   
    }
  
 // used  to render data in table 
RenderDataTable(){
  debugger;
  this.dataSource=new MatTableDataSource<CoClientModal>(this.currentClientDetails.CoClientDetails);
  this.dataSourceBackup=JSON.parse(JSON.stringify(this.currentClientDetails.CoClientDetails));
  this.dataSource.sort = this.sort;
   
  
}
// used for Creating form 
CreateCoClientForm(){
  this.coClientForm=this.formBuilder.group({
    name:['',[Validators.required,Validators.pattern('^[a-zA-Z ]+$')]],
    email:['',[Validators.required,Validators.email]],
    address:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9 ]+$')]],
    contactNo:['',[Validators.required,Validators.pattern('^[0-9]+$')]]
  });
}

ShowCoClientAddForm(){
  this.showCoClientForm=true;
  this.CreateCoClientForm();
 
}
// used for undo the changes in co client form 
ClearSelection(){
  this.coClientForm.reset();
  this.showCoClientForm=false;
  this.selectedRowIndex=-1;
}
// used for highlight the selected row
highlight(row:CoClientModal) {
 debugger;
  if(this.showUpdateForm){
    this.selectedRowIndex = row.CoClientID;
  this.CreateCoClientForm();
  this.showCoClientForm=true;
  this.coClientForm.controls['name'].setValue(row.Name);
  this.coClientForm.controls['address'].setValue(row.Address);
  this.coClientForm.controls['email'].setValue(row.Email.trim());
  this.coClientForm.controls['contactNo'].setValue(row.Phone);
  
  }
  else{
    this.showUpdateForm=true;
    
  }
  }
  // used to update co client information
  UpdateCoclient(){
    debugger;
    for(var i=0;i<this.dataSource.data.length;i++){
      if(this.dataSource.data[i].CoClientID==this.selectedRowIndex){
        this.dataSource.data[i].Name=this.coClientForm.controls["name"].value;
        this.dataSource.data[i].Email=this.coClientForm.controls["email"].value;
        this.dataSource.data[i].Address=this.coClientForm.controls["address"].value;
        this.dataSource.data[i].Phone=this.coClientForm.controls["contactNo"].value;
      }
    }
    for(var i=0;i<this.dataSourceBackup.length;i++){
      if(this.dataSourceBackup[i].CoClientID==this.selectedRowIndex){
        this.dataSourceBackup[i].Name=this.coClientForm.controls["name"].value;
        this.dataSourceBackup[i].Email=this.coClientForm.controls["email"].value;
        this.dataSourceBackup[i].Address=this.coClientForm.controls["address"].value;
        this.dataSourceBackup[i].Phone=this.coClientForm.controls["contactNo"].value;
      }
    }
    this.flag=false;
   this.ClearSelection();

  }
  // used to add another co client 
  AddCoClientRow(){
    debugger;
   const data=this.dataSource.data;
   data.push({
     CoClientID:this.ids,
     Name:this.coClientForm.controls["name"].value,
     Email:this.coClientForm.controls["email"].value,
     Address:this.coClientForm.controls["address"].value,
     Phone:this.coClientForm.controls["contactNo"].value

   });
   this.ids-=1;
   this.dataSource.data=data;
   this.flag=false;
   this.ClearSelection();   
     
  }
  // used to delete a specific coclient 
  DeleteCoClient(row:CoClientModal){
    debugger;
    this.showUpdateForm=false;
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '325px',
      data: { status: "Remove", confirm: true }
  });

  dialogRef.afterClosed().subscribe(result => {
      if (result) {
         debugger;
          const data = this.dataSource.data.filter(item => item.CoClientID !==row.CoClientID);
          this.dataSource.data = data;          
          for(var i=0;i<this.dataSourceBackup.length;i++){
            if(this.dataSourceBackup[i].CoClientID==row.CoClientID){
              this.dataSourceBackup[i].IsActive=false;
            ;
            }
          }
      }
  });
  }
  // used to final save newly add co client and update co client at once 
  SaveCoClientDetails(){
    debugger;
    for(var i=0;i<this.dataSource.data.length;i++){
      if(this.dataSource.data[i].CoClientID<0){
        this.dataSourceBackup.push(this.dataSource.data[i]);
      }
    }
    this.currentClientDetails.CoClientDetails=this.dataSourceBackup;
   
    this.onClientDetailsChange.emit(this.currentClientDetails);
    this.flag=true;
  }
  // used for restricating input boxes to except whitspace at beginning 
  CheckForWhiteSpace(contraolName:string){
    debugger;
    
    if(this.coClientForm.controls[contraolName].value<=0){
      return this.coClientForm.controls[contraolName].setErrors({ pattern: true });
    }
    else{
      this.coClientForm.controls[contraolName].setValue(this.coClientForm.controls[contraolName].value.trim());
    }
  }


}
