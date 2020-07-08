import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

declare var gtag: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  headerContent = `[ { id: 'home', name: 'Home', url: '/' }, { id: 'portfolio', name: 'Portfolio', url: '/portfolio'} ]`;
  footerContent = `{ id: 'ccdesign footer', text: '© 2020 Copyright: Michael Beaseley', backgroundColor: 'dark-grey'}`;

  constructor(router: Router) {
    const navEndEvents = router.events.pipe(filter((event) => event instanceof NavigationEnd));
    navEndEvents.subscribe((event: NavigationEnd) => {
      gtag('config', 'UA-149499053-1', {
        'page-path': event.urlAfterRedirects,
      });
    });
  }

  ngOnInit() {
    console.log('%cSTOP!', 'font-weight: bold; font-size: 50px;color: red;');
    console.log(
      '%cThis is a browser feature intended for developers.',
      'font-size: 18px; color: white;',
    );
  }
}
