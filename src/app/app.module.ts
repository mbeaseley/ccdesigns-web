import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { PortfolioComponent } from "./components/portfolio/portfolio.component";
import { ContactComponent } from "./components/contact/contact.component";

const routes: Routes = [
  {  
    path: "", 
    redirectTo: "home", 
    pathMatch: "full" 
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "portfolio",
    component: PortfolioComponent
  },
  {
    path: "contact",
    component: ContactComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    ContactComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
