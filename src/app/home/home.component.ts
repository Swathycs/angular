import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  @ViewChild('element') element:any;
  public position = { X: 'Right' };

  onCreate($event:any) {
this.element.show();
  }
  
  gotoproject($event:any)
  {
    this.element.show();
    this.router.navigate(['project'])
  }

//   btnClick($event:any) {
// this.element.show();
//   }


  constructor(private router: Router) { }

  ngOnInit(): void {
  }


}
