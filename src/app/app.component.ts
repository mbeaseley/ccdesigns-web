import { Component, OnInit } from "@angular/core";
import { Meta } from '@angular/platform-browser';
import { AppGlobals } from './app.global';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [AppGlobals]
})
export class AppComponent implements OnInit {



  constructor(private meta: Meta, private global: AppGlobals) {
    this.meta.addTags([
      {name: 'description', content: 'Personal CV based Website'},
      {name: 'author', content: 'Michael Beaseley'},
      {name: 'image', content: 'https://images.ctfassets.net/43i5e5k8e66i/4H1rYzMHlYygico2icMSSQ/067d1fc831f04c96ab48e16583f0b979/web_portfolio.JPG'},
    ]);
  }

  ngOnInit() {}
}
