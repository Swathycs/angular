import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @ViewChild('element') element: any;

  constructor() { }
  // defined the array of data
  public data: string[] = ['Snooker', 'Tennis', 'Cricket', 'Football', 'Rugby'];



  ngOnInit(): void {
  }

}
