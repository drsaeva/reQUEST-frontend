import { Component, OnInit } from '@angular/core';
import { RequestComponent } from '../request/request.component';
import { RequestViewerComponent } from '../request-viewer/request-viewer.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
