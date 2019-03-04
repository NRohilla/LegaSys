import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
// import { link } from 'fs';

@Component({
    selector: 'app-stat',
    templateUrl: './stat.component.html',
    styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {
    @Input() bgClass: string;
    @Input() icon: string;
    @Input() count: number;
    @Input() label: string;
    @Input() count1: number;
    @Input() label1: string;
    @Input() count2: number;
    @Input() label2: string;
    @Input() count3: number;
    @Input() label3: string;
    @Input() count4: number;
    @Input() label4: string;
    @Input() total: string;
    @Input() totalcount: number;
    @Input() tag: string;
    @Input() data: number;
     @Input() link: string;
    
    @Output() event: EventEmitter<any> = new EventEmitter();

    constructor(private router:Router ) {}

    ngOnInit() {
        console.log(this.link);
    }
    Redirect(){
      debugger;
     
        this.router.navigate(['/'+this.link]);
    }
}
