import { Component, OnInit } from "@angular/core";
import { Meta } from '@angular/platform-browser';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  
  constructor(private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: 'Personal CV based Website'},
      {name: 'author', content: 'Michael Beaseleyt'},
      {name: 'image', content: 'https://images.ctfassets.net/43i5e5k8e66i/4H1rYzMHlYygico2icMSSQ/067d1fc831f04c96ab48e16583f0b979/web_portfolio.JPG'},
    ]);
  }

  ngOnInit() {}
}
