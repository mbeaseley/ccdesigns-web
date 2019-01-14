import { Component, OnInit } from '@angular/core';
import { AppGlobals } from '../../../../app.global';

@Component({
  selector: 'app-website-project',
  templateUrl: './website-project.component.html',
  styleUrls: ['./website-project.component.scss']
})
export class WebsiteProjectComponent implements OnInit {
  contentfulUrl = 'https://images.ctfassets.net/43i5e5k8e66i/';

  imageUrls = [
    {url: this.contentfulUrl + '3QV5A6g6Jai2uykcCK8Coy/5e7ec2714aebc0a7e821a59f154541dc/ccdesign_logo_design.jpg'},
    {url: this.contentfulUrl + '3FmMgMOcOccuoM0M6ey2su/54aa1a454cb83a86bd5a86e1e0b86998/website_digital_plan.png'}
  ];

  constructor(public global: AppGlobals) {
    this.global.locationBoolean = true;
  }

  ngOnInit() {
  }

}
