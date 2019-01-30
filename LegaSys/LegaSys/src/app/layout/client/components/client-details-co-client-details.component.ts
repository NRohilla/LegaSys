import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { CurrentClientdataServiceService } from '../../../current-clientdata-service.service';
import { ClientServiceService } from '../client-service.service';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormArray } from "@angular/forms";
import { Client, CoClientModal } from '../model/client.model';

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


  /********************** Created By Shubham Mishra on 19-Nov-2018 **************/
  disable: boolean = true; //this variable is used to bind the disabled attribute of input to make input fields editable and non editable
  coClientForm: FormGroup;// this is form group for co client 
  client: Client; // This is model of client
  readOnly: boolean = true;
  showCoClientForm:boolean=false;
  flag:number=0;
  constructor(private clientService: ClientServiceService, private currentClientdataService: CurrentClientdataServiceService, private formBuilder: FormBuilder) {

  }
  /****** This fuction is used to make the form field editable  */
  MakeFieldEditable() {
    if (this.disable) {
      this.disable = false;
      this.readOnly = false;
    }
    else {
      this.disable = true;
      this.readOnly = true;
    }
  }
  /****** This function is used to discard changes done by user, and replace changed data with previous data */
  /*** modified on 27 Nov 2018  By Shubham Mishra *****/
  DiscardChanges() {
    this.currentClientDetails = this.currentClientDetailsBackup;
    this.LoadCoClientForm();
    this.onCancel.emit(this.currentClientDetails);
    this.MakeFieldEditable();
  }
  /***** This function is used to update details of a client, following fucntion is emiting a event  */
  UpdateClient() {
    debugger;
    var arrayControl = this.coClientForm.get('coClientDetails') as FormArray;
    for(var j=0;j<arrayControl.length;j++){
      console.log(arrayControl.controls[j].value);
      if(j<this.currentClientDetails.CoClientDetails.length && this.currentClientDetails.CoClientDetails[j].IsActive!=false){
        this.currentClientDetails.CoClientDetails[j].Name=arrayControl.controls[j].value.Name
        this.currentClientDetails.CoClientDetails[j].Address=arrayControl.controls[j].value.Address
        this.currentClientDetails.CoClientDetails[j].Phone=arrayControl.controls[j].value.contactNo
        this.currentClientDetails.CoClientDetails[j].Email=arrayControl.controls[j].value.email
      }
      else{
        let formArrayValue=new CoClientModal();
              formArrayValue.Name=arrayControl.controls[j].value.Name;
        formArrayValue.Address=arrayControl.controls[j].value.Address;
        formArrayValue.Email=arrayControl.controls[j].value.email;
        formArrayValue.Phone=arrayControl.controls[j].value.contactNo;
        this.currentClientDetails.CoClientDetails.push(formArrayValue);
      }
     }
     console.log(this.currentClientDetails);
    this.onClientDetailsChange.emit(this.currentClientDetails);
    this.MakeFieldEditable();
  }
  /***** Writen by Shubham  Mishra on 21 Nov 2018 ****
   * ******* This fucntion is used to create a reactive form ************/
  CreateCoClientForm() {
    this.coClientForm = this.formBuilder.group({
      coClient: ['', Validators.pattern('^[a-zA-Z ]+$')],
      coClient2: ['', Validators.pattern('^[a-zA-Z ]+$')],
      coClient3: ['', Validators.pattern('^[a-zA-Z ]+$')],
      coClient4: ['', Validators.pattern('^[a-zA-Z ]+$')]
    }, {
      validator: this.matchval // your validation method
    })
  }
  matchval(group: FormGroup){
    let c1=group.controls['coClient'].value;
    let c2=group.controls['coClient2'].value;
    let c3=group.controls['coClient3'].value;
    let c4=group.controls['coClient4'].value;
    if(c4!=undefined ){
      if(c3!=c4){
        return null;

 }
 else{
   return group.controls['coClient4'].setErrors({matchval: true});
   
 }
    }
    else{
      return null;
    }
  }
  /******** Created on 27 nov 2018 ********/
  /******** Following method will be used to get the place holder ********/
  GetPlaceHolder(controlName: string) {
    if (!this.readOnly) {
      switch (controlName) {
        case 'coClient': return "Primary Co client ";
        case 'coClient2': return "Secondary Co Client";
        case 'coClient3': return "Other Co Client ";
        case 'coClient4': return "Other Co Client ";
      }
    }
    else {
      return " ";
    }
  }
  ngOnInit() {
    debugger;
    if (this.currentClientDetails) {
      console.log(this.currentClientDetails);
      this.coClientForm=this.formBuilder.group({
        coClientDetails:this.formBuilder.array([this.InitCoClientForm()])
      });
       if(this.currentClientDetails.CoClientDetails.length>0){
         this.showCoClientForm=true;
         this.LoadCoClientForm();

       }
      
      // this.CreateCoClientForm();
      // this.LoadCoClientForm();
      // this.coClientForm.markAsTouched();
    }
  }
  /********** Writen on 27 Nov 2018 **/
  LoadCoClientForm() {
    debugger;
    var arrayControl = this.coClientForm.get('coClientDetails') as FormArray;
   for(var j=0;j<this.currentClientDetails.CoClientDetails.length;j++){
    //
    arrayControl.controls[j].setValue({Name:this.currentClientDetails.CoClientDetails[j].Name,Address:this.currentClientDetails.CoClientDetails[j].Address,
      contactNo:this.currentClientDetails.CoClientDetails[j].Phone,email:this.currentClientDetails.CoClientDetails[j].Email.trim()});
    if(j!=(this.currentClientDetails.CoClientDetails.length-1)){
      this.AddNewCoCLientForm();
    }
    
    //console.log(arrayControl.controls[j].value);
    // =this.currentClientDetails.CoClientDetails[j].Name;
    // console.log(arrayControl.controls[j].value);
    //   let formArrayValue=new CoClientModal();
    //   formArrayValue.Name=arrayControl.controls[j].value.Name;
    //   formArrayValue.Address=arrayControl.controls[j].value.Address;
    //   formArrayValue.Email=arrayControl.controls[j].value.email;
    //   formArrayValue.ContactNo=arrayControl.controls[j].value.contactNo;
    //   this.clientDetails.CoClientDetails.push(formArrayValue);
  

   }
  }
/****** Writen on 28 Jan 2019 ************/
/***** Following Function will be used for hidding/showing Co Clinet Form  */
ShowCoClient(){
  if(this.showCoClientForm){
    this.showCoClientForm=false;
  }else{
    this.showCoClientForm=true;
  }

}
InitCoClientForm(){
  return this.formBuilder.group({
    Name:['',Validators.pattern('^[a-zA-Z ]+$')],
    email:['',Validators.email],
    Address:[''],
    contactNo:['',Validators.pattern('^[0-9 ]+$')]
  });
}
AddNewCoCLientForm(){
  if(this.flag>4){}
  const control = <FormArray>this.coClientForm.controls['coClientDetails'];
    // add new formgroup
    control.push(this.InitCoClientForm());
    this.flag+=1;

}

deleteRow(index: number) {
  debugger;
  // control refers to your formarray
  const control = <FormArray>this.coClientForm.controls['coClientDetails'];
  // remove the chosen row
  control.removeAt(index);
  if(this.currentClientDetails.CoClientDetails.length>0){
    this.currentClientDetails.CoClientDetails[this.currentClientDetails.CoClientDetails.length-1].IsActive=false;
  }
  
  this.flag-=1;
  if(this.flag==-1){
    this.showCoClientForm=false;
  }

}
CheckFlag(){
  
  if(this.flag==3){
    return false;
  }else if(this.flag==-1){
    this.showCoClientForm=false;
    return false;
  }
  else{
    return true;
  }
}
show(coClientDetail:any){
  debugger;
console.log(coClientDetail);
}


}
