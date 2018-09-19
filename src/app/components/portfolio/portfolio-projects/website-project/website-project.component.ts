import { Component, OnInit } from '@angular/core';
import { AppGlobals } from '../../../../app.global';

@Component({
  selector: 'website-project',
  templateUrl: './website-project.component.html',
  styleUrls: ['./website-project.component.scss']
})
export class WebsiteProjectComponent implements OnInit {
  imageUrls = [
    {url: 'https://images.ctfassets.net/43i5e5k8e66i/3FmMgMOcOccuoM0M6ey2su/54aa1a454cb83a86bd5a86e1e0b86998/website_digital_plan.png'},
    {url: 'https://images.ctfassets.net/43i5e5k8e66i/3FmMgMOcOccuoM0M6ey2su/54aa1a454cb83a86bd5a86e1e0b86998/website_digital_plan.png'},
    {url: 'https://images.ctfassets.net/43i5e5k8e66i/3FmMgMOcOccuoM0M6ey2su/54aa1a454cb83a86bd5a86e1e0b86998/website_digital_plan.png'}
  ];

  constructor(public global: AppGlobals) {
    this.global.locationBoolean = true;
  }

  ngOnInit() {
  }

}
