import { Component, OnInit } from '@angular/core';
import { AppGlobals } from '../../app.global';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imageUrls = [
    {url: 'https://images.ctfassets.net/43i5e5k8e66i/3s2QTQy7ryM46G2ewIesO2/98e50163a5281ceda24048302fdb3b6e/profile_new.jpg'},
    {url: 'https://images.ctfassets.net/43i5e5k8e66i/57QD3oI2tiUMOmwqyOgI42/aa1f6fc07bd425a6a7cba65f84f10710/profile_station2.jpg'},
    {url: 'https://images.ctfassets.net/43i5e5k8e66i/2tbgM7o5Wk6208QeuQM6o0/e40591acca2af7f3eb835a1d3bc57fc2/profile_pic.jpg'}
  ];

  constructor(public global: AppGlobals) {
    this.global.locationBoolean = false;
  }
  ngOnInit() {
  }

}
