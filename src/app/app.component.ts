import { Component, OnInit, Input } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(private meta: Meta, private titleService: Title) {
    this.meta.addTags([
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        name: 'description',
        content: 'Personal CV based Website. See any previous projects. Get to know who is Michael Beaseley and what he has got to offer.'
      },
      {
        name: 'og:description',
        content: 'Personal CV based Website. See any previous projects. Get to know who is Michael Beaseley and what he has got to offer.'
      },
      {
        name: 'author',
        content: 'Michael Beaseley'
      },
      {
        name: 'og:author',
        content: 'Michael Beaseley'
      },
      {
        name: 'og:image',
        content: 'https://images.ctfassets.net/43i5e5k8e66i/4O1Qth30iI6uOgQy88eoEi/9e82a8072453dadd927df09a146be1c2/website_pic.jpg'
      },
      {
        name: 'og:url',
        content: 'http://ccdesign.me.uk/'
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'theme-color',
        content: '#000000'
      }
    ]);
    this.titleService.setTitle('CCDesigns');
  }

  ngOnInit() {
    console.log('%cSTOP!', 'font-weight: bold; font-size: 50px;color: red;');
    console.log('%cThis is a browser feature intended for developers.', 'font-size: 18px; color: white;');
  }
}
