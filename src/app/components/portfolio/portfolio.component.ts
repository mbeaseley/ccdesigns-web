import { Component, OnInit } from "@angular/core";
import { AppGlobals } from '../../app.global';

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.scss"]
})
export class PortfolioComponent implements OnInit {
  imageUrls = [
    {
      url:"https://images.ctfassets.net/43i5e5k8e66i/4O1Qth30iI6uOgQy88eoEi/9e82a8072453dadd927df09a146be1c2/website_pic.jpg"
    },
    {
      url:"https://images.ctfassets.net/43i5e5k8e66i/3JfTj0C6VOcom8684eu6A8/17441f5aab777055e63b1ce9c20339b3/d940d393-ac86-4516-9f6c-52bf33b05852.jpeg"
    }
  ];
  portfolioImages = [
    {
      name: "University Final Year Project",
      url:"https://images.ctfassets.net/43i5e5k8e66i/J6F5SWf6uWQ2yAGsSayMM/c0c9daa6fda2775a0494c71c0261770d/FYP_Logo.png",
      alt: "University Final Year Project",
      link: "/portfolio/fyp-project"
    },
    {
      name: "CCDesign Website Logo",
      url:"https://images.ctfassets.net/43i5e5k8e66i/3uqgEDpiPCCkgiaCYEc2AQ/808d4fe13f39001a05dc3872042016bc/ccdesign.png",
      alt: "CCDesign Website Logo",
      link: "/portfolio/website-project"
    }
  ];

  constructor(public global: AppGlobals) {
    this.global.locationBoolean = false;
  }
  ngOnInit() {}
}
