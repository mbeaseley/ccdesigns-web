import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.pug',
  styleUrls: ['./portfolio.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PortfolioComponent {
  dataContent = `[ { id: 'portfolioTech', image: 'https://images.ctfassets.net/43i5e5k8e66i/40tOAeppYCPR8oRCH3QmHh/2e92360a982e9c2b7cd260532cd07790/portfolio-tech.svg', alt: 'Image of tech currently handled and used in portfolio'}, { id: 'logo', image: 'https://images.ctfassets.net/43i5e5k8e66i/3QV5A6g6Jai2uykcCK8Coy/6d9073683813fe60a83d1ff57a5bb550/ccdesign_logo_design-min.jpg', alt: 'Image of CCDesign Logo'}, { id: 'androidScreenPic', image: 'https://images.ctfassets.net/43i5e5k8e66i/3JfTj0C6VOcom8684eu6A8/ba42b62a2f1dd8d96cc80ba25331d078/fyp_mobile_app.jpeg', alt: 'Image of Android Screen'} ]`;
}
