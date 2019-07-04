import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('%cSTOP!', 'font-weight: bold; font-size: 50px;color: red;');
    console.log('%cThis is a browser feature intended for developers.', 'font-size: 18px; color: white;');
  }
}
