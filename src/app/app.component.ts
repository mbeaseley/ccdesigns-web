import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  private width: any;
  
  ngOnInit() {
    this.width = window.innerWidth;
    console.log(window.innerWidth);
  }
}
