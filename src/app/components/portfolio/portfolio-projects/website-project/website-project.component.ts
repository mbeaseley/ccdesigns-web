import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppGlobals } from '../../../../app.global';

@Component({
  selector: 'app-website-project',
  templateUrl: './website-project.component.html',
  styleUrls: ['./website-project.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WebsiteProjectComponent implements OnInit {
  constructor(public global: AppGlobals) {
    this.global.locationBoolean = true;
  }

  ngOnInit() {
  }

}
