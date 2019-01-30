import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppGlobals } from '../../../../app.global';

@Component({
  selector: 'app-fyp-project',
  templateUrl: './fyp-project.component.html',
  styleUrls: ['./fyp-project.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FypProjectComponent implements OnInit {
  constructor(public global: AppGlobals) {
    this.global.locationBoolean = true;
  }

  ngOnInit() {}

}
