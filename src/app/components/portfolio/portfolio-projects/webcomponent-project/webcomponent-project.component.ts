import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppGlobals } from '../../../../app.global';

@Component({
  selector: 'app-webcomponent-project',
  templateUrl: './webcomponent-project.component.html',
  styleUrls: ['./webcomponent-project.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WebcomponentProjectComponent implements OnInit {
  constructor(public global: AppGlobals) {
    this.global.locationBoolean = true;
  }

  ngOnInit() {}

}
