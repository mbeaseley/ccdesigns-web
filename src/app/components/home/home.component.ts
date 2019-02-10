import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppGlobals } from '../../app.global';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  constructor(public global: AppGlobals) {
    this.global.locationBoolean = false;
  }
  ngOnInit() {
  }

}
