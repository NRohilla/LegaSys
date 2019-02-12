import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSnackBar, MatSort } from '@angular/material';
import { ClientProject, Client } from '../model/client.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientServiceService } from '../client-service.service';

@Component({
  selector: 'app-client-projects',
  templateUrl: './client-projects.component.html',
  styleUrls: ['./client-projects.component.scss']
})
export class ClientProjectsComponent implements OnInit {
/********* Created by Shubham Kumar Mishra on 26*** DEC 2018 */
  @Input('clientProjectsList') clientProjectsList: any;
  @Input('currentClientDetails') currentClientDetails: any; // used to hold current client details comming from parent controller i.e child details
  //@ViewChild(MatPaginator) paginator: MatPaginator;
  timeSpan:any
  displayedColumns: string[] = ['Title', 'start_date','End_date','duration','assign_type', 'service_type','action'];
  selectedRowIndex: number = -1;
  projectDetailsForm:FormGroup;
  showProjectDetailsForm:boolean=false;
  selected:any
 
  constructor(private router:Router,private formBuilder:FormBuilder,private clientService: ClientServiceService,private snackBar:MatSnackBar) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {      
       this.timeSpan=this.calcTotExp(this.currentClientDetails.Created_Date,new Date());
      this.clientProjectsList = new MatTableDataSource<ClientProject>(this.clientProjectsList);      
          this.clientProjectsList.paginator = this.paginator; 
          this.clientProjectsList.sort = this.sort; 
       
  }
  /******** This method will be called when user click on view the details of the project. this will redirect to project Details page  */
    ViewProjectDetails(ProjectID: any) {
        this.router.navigate(['./project/edit', ProjectID]);
    }
    /*********** Created on 7 jan 2019 this method will be used display client and project sataus *******/
    // GetStatus(Status:any){
  
    //     if(parseInt(Status)==0 ){
    //       return 'Active';
    //     }
    //     else{
    //       return 'Inactive';
    //     }
    // }
 GetStatus(endDate:Date){
  
        if(endDate==undefined ){
          return 'Active';
        }
        else{
          return 'Inactive';
        }
    }

    /*** Created on 7 jan 2019 this function will be used to calculate duration provoiding start date and end date *********/
    calcTotExp(sDate, eDate){
    
      var startDate = new Date(sDate);
      var endDate;
      if(eDate==undefined){
        endDate = new Date();
      }
      else{
        endDate = new Date(eDate);
      }
      
      var increment;    
      /// new Array<Duraaastion>(); 
  
      var Days = parseInt((endDate.getDate() - startDate.getDate()).toString().replace('-', ''));
      var month;
      if ((startDate.getMonth()) > endDate.getMonth()) {
        month = (endDate.getMonth() + 12) - (startDate.getMonth());
        increment = 1;
      }
      else {
        month = (endDate.getMonth()) - (startDate.getMonth());
        increment = 0
      }
      var Year = endDate.getFullYear() - (startDate.getFullYear() + increment);
  
    //  var tottalExpy=tottalExpy+Year;
    //  var tottalExpm=tottalExpm+month;
    //  if(tottalExpm>12){
    //  tottalExpy+=1;
    //    tottalExpm=tottalExpm-12;
    //  }
    //  var tottalExpd=tottalExpd+Days;
    //  {
    //    if(tottalExpd>30){
    //   tottalExpm+=1;
    //     tottalExpd=tottalExpd-30;
    //    }
    //  }       
      var duration=Year+" Year(s) "+month+" Month(s) "+Days+" Day(s)";
      return duration;
       
    }
    /************ Created on 8 Jan 2019 ********** */

    /****** This method will be used to highlight selected row  */
    highlight(row:any) {
 
      this.selectedRowIndex = row.ProjectID;
      this.CreateProjectDetailsForm();
      this.showProjectDetailsForm=true;
      this.projectDetailsForm.controls['title'].setValue(row.Title);
      this.projectDetailsForm.controls['startDate'].setValue(row.Start_Date);
     this.projectDetailsForm.controls['endDate'].setValue(row.End_Date);
     //this.projectDetailsForm.controls['assignType'].setValue(row.End_Date);
     
   this.projectDetailsForm.controls['serviceType'].setValue(this.GetStatus(row.Status));
      }

      /******** This method will be used to create projectDetaiosForm */
      CreateProjectDetailsForm(){
        this.projectDetailsForm = this.formBuilder.group({
          title: ['',[Validators.required,Validators.pattern('^[a-zA-Z ]+$')]],
          startDate: ['',Validators.required],
          endDate: ['',],
          assignType:[''],
          serviceType:['']
        }, {
          validator: this.CompareDates // your validation method
        });
       
        
      }
      /******** This method will be used to update project details  */
      UpdateProjectDetails(){
        debugger;
        var flag=0;
        for(var i=0;i<this.clientProjectsList.data.length;i++){
          if(this.clientProjectsList.data[i].Title==this.projectDetailsForm.controls['title'].value && this.clientProjectsList.data[i].ProjectID!=(this.selectedRowIndex)){
              flag=1;
          }
        }
        if(flag==0){
          const data=this.clientProjectsList.data;
         for(var i=0;i<data.length;i++){
           if(data[i].ProjectID==this.selectedRowIndex){
             data[i].Title=this.projectDetailsForm.controls['title'].value;
             data[i].Start_Date=this.projectDetailsForm.controls['startDate'].value;
             data[i].End_Date=this.projectDetailsForm.controls['endDate'].value;
             console.log(this.projectDetailsForm.controls['serviceType'].value);
             if(this.projectDetailsForm.controls['endDate'].value==undefined){
               data[i].Status=0;
             }
             else{
              data[i].Status=1;
             }       
             this.clientService.UpdateClientProjectWithId(data[i]).subscribe(
               suc=>{
            if(suc){
             
              this.projectDetailsForm.reset();
              this.selectedRowIndex=-1;
              this.showProjectDetailsForm=false;
              this.openSuccessSnackBar();
              this.projectDetailsForm.markAsPristine;
            }
               }
             )     
           }
        } 
              
        }
        else{
          this.openErrorSnackBar();
        }
            
      }
      /********** This function will be used to clear the content of projectdetils form and hide the form  */
      ClearSection(){
        this.projectDetailsForm.reset();
        this.selectedRowIndex=-1;
        this.showProjectDetailsForm=false;
      }
      openSuccessSnackBar() {
        this.snackBar.open("Project  updated Successfully'","Close", {
          duration: 1000,
        });
      }
      openErrorSnackBar() {
        this.snackBar.open("Project Title could not be same'","Close", {
          duration: 10000,
        });
      }
      
  CompareDates(group: FormGroup) {
        debugger;
 
    let s_date = group.controls['startDate'].value;
    let e_date = group.controls['endDate'].value;
    if(e_date==null){
      return null;

    }
    else if (e_date> s_date) {
      // alert("done");
      return null;

    }
    else {
      return group.controls['endDate'].setErrors({ CompareDates: true });

    }
  }
  getToday(){
    return new Date().toISOString().split('T')[0]
  }
  GetClientCreationDate(){
    return new Date(this.currentClientDetails.Created_Date).toISOString().split('T')[0]
  }
  AddPrject(){
    debugger;
    sessionStorage.setItem('cllientIdToAddProject',sessionStorage.getItem('currentClientID'));
    this.router.navigate(['./project/add']);
  }
  CheckForWhiteSpace(contraolName:string){
    debugger;
    
    if(this.projectDetailsForm.controls[contraolName].value<=0){
      return this.projectDetailsForm.controls[contraolName].setErrors({ pattern: true });
    }
    else{
      this.projectDetailsForm.controls[contraolName].setValue(this.projectDetailsForm.controls[contraolName].value.trim());
    }
  }

  
  
  
}

