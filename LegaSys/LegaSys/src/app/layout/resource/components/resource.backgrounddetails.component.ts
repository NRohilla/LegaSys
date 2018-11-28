import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../resource.service';
import { MatTableDataSource } from '@angular/material';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Resource } from '../resource.model';
@Component({
  selector: 'app-resource-background',
  templateUrl: './resource.backgrounddetails.component.html',
  styleUrls: ['./resource.backgrounddetails.component.scss']
})
export class ResourceBackgrounddetailsComponent implements OnInit {

  value1 = '';
  value2 = '';
  value3 = null;
  value4 = null;
  value5 = '';
  searchForm: FormGroup;
  showExp: boolean = false;
  selected: any = 'false';
  isExp: boolean = true;
  exp: UserBackgrnd[] = [];
  dataSource: Resource;
  backgroundDetails: any;
  currentExp: any;
  displayedColumns: string[] = ['CompanyName', 'Designation', 'JoiningDate', 'LeavingDate', 'Duration'];

  constructor(public dataService: ResourceService) { }
  edit() {
    this.isExp = false;
  }

  ngOnInit() {
    debugger
    this.dataService.getResourceById(+localStorage.getItem('element')).subscribe(
      res => {
        debugger;
        this.dataSource = res;
        console.log(this.dataSource);
        //this.currentExp=this.dataSource.DateOfJoining-Date.now()

        this.currentExp = this.calcExperience(localStorage.getItem("DateOfJoining"), new Date());
        
        if (this.dataSource.IsExperienced) {
          this.selected = 'true';
          this.dataService.getBackGroundDetails(+localStorage.getItem('element')).subscribe(
            res => {
              debugger;
              this.showExp = true;

              this.backgroundDetails = new MatTableDataSource<UserBackgrnd>();
              this.backgroundDetails = res;

              var startDate = this.backgroundDetails[0].JoiningDate;
              var endDate = this.backgroundDetails[0].LeavingDate;
              var exp = this.calcExperience(startDate, endDate);
              console.log(exp);
            },
            err => {
              console.log(err);
            }
          );
        }
        else {
          this.selected = 'false';
        }




      },
      err => {
        console.log(err);
      }
    );
    // this.dataService.getBackGroundDetails(+localStorage.getItem('element')).subscribe(
    //   res => {     
    //     debugger; 

    // this.dataSource=new MatTableDataSource<UserBackgrnd>();           
    // this.dataSource=res; 

    // var startDate=  this.dataSource[0].JoiningDate;
    // var endDate=this.dataSource[0].LeavingDate;
    // var exp=this.calcExperience(startDate,endDate);
    //console.log(exp);
    //     },
    //     err => {
    //       console.log(err);
    //     }
    //   );
    // }
  }
  onChange($event) {
    debugger;
    if ($event == "true") {
      this.showExp = true;
    }
    else {
      this.showExp = false;
    }
  }
  addExperience() {
    this.exp.push({ CompanyName: this.value1, Designation: this.value2, JoiningDate: this.value3, LeavingDate: this.value4, Duration: this.value5 })
    //this.dataSource=new MatTableDataSource(this.exp);
  }
  calcExperience(sDate, eDate) {
    var startDate = new Date(sDate);
    var endDate = new Date(eDate);

    var Year = Math.round(endDate.getFullYear() - startDate.getFullYear()) + " Years ";
    var month = Math.round(endDate.getMonth() - startDate.getMonth()) + " Months ";
    var days = Math.round(endDate.getDate() - startDate.getDate()) + " Days ";

    return Year + ' ' + month + ' ' + days;
  }




}
export class UserBackgrnd {

  CompanyName: string;
  Designation: string;
  JoiningDate: Date;
  LeavingDate: Date;
  Duration: string;
}
