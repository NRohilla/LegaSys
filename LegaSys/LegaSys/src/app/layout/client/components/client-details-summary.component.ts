import { Component, OnInit, OnChanges, Injectable, Input } from '@angular/core';
import { ClientServiceService } from '../client-service.service';
import { CurrentClientdataServiceService } from '../../../current-clientdata-service.service';
@Component({
  selector: 'app-client-details-summary',
  templateUrl: './client-details-summary.component.html',
  styleUrls: ['./client-details-summary.component.scss']
})

export class ClientDetailsSummaryComponent implements OnInit {
  /****** Created By Shubham Mishra on 19-Nov-2018 ************/  
  @Input('currentClientDetails') currentClientDetails: any; // this property will hold the all details of client selected by user
  @Input('clientProjectsList') clientProjectsList:any;
  resourseCount:number=0;
  
  constructor() {}
  ngOnInit() {
    debugger;
   this.currentClientDetails.CoClientDetails.length
   for(var i=0;i<this.clientProjectsList.length;i++){
    this.resourseCount+=this.clientProjectsList[i].No_of_resource;
   }
   
   
  }

}
