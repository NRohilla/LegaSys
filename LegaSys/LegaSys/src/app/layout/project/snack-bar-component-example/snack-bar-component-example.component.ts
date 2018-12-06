import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snack-bar-component-example',
  templateUrl: './snack-bar-component-example.component.html',
  styleUrls: ['./snack-bar-component-example.component.scss']
})
export class SnackBarComponentExampleComponent implements OnInit {
 data:string=sessionStorage.getItem('message');
  constructor() { }

  ngOnInit() {
  }

}
