import { Routes } from '@angular/router';

import { PageComponent } from './components/page/page.component';

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
    component: PageComponent,
    data: {
      content: 'portfolio-fyp-project',
    },
  },
  {
    path: 'portfolio/website-project',
    component: PageComponent,
    data: {
      content: 'portfolio-website-project',
    },
  },
  {
    path: 'portfolio/webcomponent-project',
    component: PageComponent,
    data: {
      content: 'portfolio-webcomponent-project',
    },
  },
  {
    path: 'portfolio/talktalk-azure',
    component: PageComponent,
    data: {
      content: 'portfolio-talktalk-azure',
    },
  },
  {
    path: 'portfolio/talktalk-component',
    component: PageComponent,
    data: {
      content: 'portfolio-talktalk-component',
    },
  },
  {
    path: 'portfolio/talktalk-sales',
    component: PageComponent,
    data: {
      content: 'portfolio-talktalk-sales',
    },
  },
  {
    path: '**',
    redirectTo: '',
  },
];
