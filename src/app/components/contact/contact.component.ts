import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent implements OnInit {
  contentfulUrl = 'https://images.ctfassets.net/43i5e5k8e66i/';

  imageUrls = [
    {url: this.contentfulUrl +  '2tbgM7o5Wk6208QeuQM6o0/e40591acca2af7f3eb835a1d3bc57fc2/profile_pic.jpg'},
    {url: this.contentfulUrl +  'pj0mHN9DtQUg4gOuqm8KE/c4b222cd1703b4f608d68fabc4ccef0a/profile_station.jpg'},
  ];

  constructor() {}

  ngOnInit() {}
}
