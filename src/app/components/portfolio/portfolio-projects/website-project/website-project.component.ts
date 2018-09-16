import { Component, OnInit } from '@angular/core';
import { AppGlobals } from '../../../../app.global';

@Component({
  selector: 'website-project',
  templateUrl: './website-project.component.html',
  styleUrls: ['./website-project.component.scss']
})
export class WebsiteProjectComponent implements OnInit {
  imageUrls = [
    {url: 'https://images.ctfassets.net/43i5e5k8e66i/2olnrwDLIgUEggOMEKOOCo/3fe87a89706a21865de5e16e3ce8b697/fyp_development_process.png'},
    {url: 'https://images.ctfassets.net/43i5e5k8e66i/19NvMzaVtOS8IsKkYeAwGi/1b266aca6a171f9f99a7708aa722c2c9/fyp_software_development.png'},
    {url: 'https://images.ctfassets.net/43i5e5k8e66i/6OIgcSCzzGe0ck6EeSQCww/19d9b65f92eeffcc7179cdd7293a42ee/fyp_cpu_testing.png'}
  ];

  constructor(public global: AppGlobals) {
    this.global.locationBoolean = true;
  }

  ngOnInit() {
  }

}
