import { Component, OnInit } from '@angular/core';
import { SlideshowModule } from 'ng-simple-slideshow';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  imageUrls = [
    {url: 'https://images.ctfassets.net/43i5e5k8e66i/4H1rYzMHlYygico2icMSSQ/067d1fc831f04c96ab48e16583f0b979/web_portfolio.JPG'},
    {url: 'https://images.ctfassets.net/43i5e5k8e66i/3JfTj0C6VOcom8684eu6A8/17441f5aab777055e63b1ce9c20339b3/d940d393-ac86-4516-9f6c-52bf33b05852.jpeg'},
  ];

  ngOnInit() {
  }

}
