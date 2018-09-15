import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { SlideshowModule } from "ng-simple-slideshow";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { PortfolioComponent } from "./components/portfolio/portfolio.component";
import { ContactComponent } from "./components/contact/contact.component";
import { FypProjectComponent } from './components/portfolio/portfolio-projects/fyp-project/fyp-project.component';
import { WebsiteProjectComponent } from './components/portfolio/portfolio-projects/website-project/website-project.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "portfolio",
    component: PortfolioComponent
  },
  {
    path: "portfolio/fyp-project",
    component: FypProjectComponent
  },
  {
    path: "portfolio/website-project",
    component: WebsiteProjectComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    ContactComponent,
    FypProjectComponent,
    WebsiteProjectComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), SlideshowModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
