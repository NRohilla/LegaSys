import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Title } from '@angular/platform-browser';
import { DashbordService } from './dashbord.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    activeClientCount:number=0;
    inActiveClientCount:number=0;
    totalClientCount:number;
    link:string='client';
    constructor(private titleService: Title,private dashBord:DashbordService) {
        this.sliders.push(
            {
                imagePath: 'assets/images/slider1.jpg',
                label: 'First slide label',
                text:
                    'Nulla vitae elit libero, a pharetra augue mollis interdum.'
            },
            {
                imagePath: 'assets/images/slider2.jpg',
                label: 'Second slide label',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                imagePath: 'assets/images/slider3.jpg',
                label: 'Third slide label',
                text:
                    'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
            }
        );

        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            },
            {
                id: 2,
                type: 'warning',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            }
        );

        this.titleService.setTitle("LegaSys - Dashboard");
    }

    ngOnInit() { 
        this.dashBord.GetClientDetails().subscribe(
            (suc:any)=>{
                if(suc.success){
                 for(let i=0;i<suc.data.length;i++){
                     if(suc.data[i].IsActive){
                         this.activeClientCount+=1;
                     }
                     else{
                         this.inActiveClientCount+=1;
                     }
                 }
                 this.totalClientCount=this.activeClientCount+this.inActiveClientCount;
                }
            }
        )
    }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
