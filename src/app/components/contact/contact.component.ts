import { Component, OnInit } from '@angular/core';
import { SlideshowModule } from 'ng-simple-slideshow';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  imageUrls = [
    {url: 'https://images.ctfassets.net/43i5e5k8e66i/57QD3oI2tiUMOmwqyOgI42/00fc39a5f487a669472d74ff0b2d8667/profile_station2.jpg'},
    {url: 'https://images.ctfassets.net/43i5e5k8e66i/3s2QTQy7ryM46G2ewIesO2/01176aa8aedb1e2faa185bfe1bb32b19/profile_new.jpg'},
    {url: 'https://images.ctfassets.net/43i5e5k8e66i/2tbgM7o5Wk6208QeuQM6o0/fa5ad3300b5da1235436ae75ac195386/profile_pic.jpg'},
    {url: 'https://images.ctfassets.net/43i5e5k8e66i/pj0mHN9DtQUg4gOuqm8KE/77f738415e509ddcbca4786797a9bed9/profile_station.jpg'},
    {url: 'https://images.ctfassets.net/43i5e5k8e66i/3CNwk7GcU8eEyQUcg4EsOg/16882f10db8b23fbea629b4ed733b946/Profle_pic_Carousel.jpg'},
  ];

  ngOnInit() {}
}
