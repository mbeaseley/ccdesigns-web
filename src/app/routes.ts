import { Routes } from '@angular/router';

import { PageComponent } from './components/page/page.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FypProjectComponent } from './components/portfolio/portfolio-projects/fyp-project/fyp-project.component';
import { WebsiteProjectComponent } from './components/portfolio/portfolio-projects/website-project/website-project.component';
import { TalktalkAzureComponent } from './components/portfolio/portfolio-projects/talktalk-azure/talktalk-azure.component';
import { TalktalkComponentComponent } from './components/portfolio/portfolio-projects/talktalk-component/talktalk-component.component';
import { TalktalkSalesComponent } from './components/portfolio/portfolio-projects/talktalk-sales/talktalk-sales.component';
// tslint:disable-next-line:max-line-length
import { WebcomponentProjectComponent } from './components/portfolio/portfolio-projects/webcomponent-project/webcomponent-project.component';

export const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    data: {
      content: 'home',
    },
  },
  {
    path: 'portfolio',
    component: PageComponent,
    data: {
      content: 'portfolio',
    },
  },
  {
    path: 'portfolio/fyp-project',
    component: FypProjectComponent,
  },
  {
    path: 'portfolio/website-project',
    component: WebsiteProjectComponent,
  },
  {
    path: 'portfolio/webcomponent-project',
    component: WebcomponentProjectComponent,
  },
  {
    path: 'portfolio/talktalk-azure',
    component: TalktalkAzureComponent,
  },
  {
    path: 'portfolio/talktalk-component',
    component: TalktalkComponentComponent,
  },
  {
    path: 'portfolio/talktalk-sales',
    component: TalktalkSalesComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
