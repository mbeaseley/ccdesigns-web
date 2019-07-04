import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FypProjectComponent } from './components/portfolio/portfolio-projects/fyp-project/fyp-project.component';
import { WebsiteProjectComponent } from './components/portfolio/portfolio-projects/website-project/website-project.component';
import { TalktalkAzureComponent } from './components/portfolio/portfolio-projects/talktalk-azure/talktalk-azure.component';
import { TalktalkComponentComponent } from './components/portfolio/portfolio-projects/talktalk-component/talktalk-component.component';
import { TalktalkSalesComponent } from './components/portfolio/portfolio-projects/talktalk-sales/talktalk-sales.component';
// tslint:disable-next-line
import { WebcomponentProjectComponent } from "./components/portfolio/portfolio-projects/webcomponent-project/webcomponent-project.component";
import { routes } from './routes';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    FypProjectComponent,
    WebsiteProjectComponent,
    WebcomponentProjectComponent,
    TalktalkAzureComponent,
    TalktalkComponentComponent,
    TalktalkSalesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
