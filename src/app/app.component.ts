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
      {name: 'image', content: ''},
    ]);
  }

  ngOnInit() {}
}
