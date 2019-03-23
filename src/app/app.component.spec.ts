import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FypProjectComponent } from './components/portfolio/portfolio-projects/fyp-project/fyp-project.component';
// tslint:disable-next-line:max-line-length
import { WebcomponentProjectComponent } from './components/portfolio/portfolio-projects/webcomponent-project/webcomponent-project.component';
import { WebsiteProjectComponent } from './components/portfolio/portfolio-projects/website-project/website-project.component';
import { ContactComponent } from './components/contact/contact.component';
import { routes } from './routes';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [
        AppComponent,
        HomeComponent,
        PortfolioComponent,
        FypProjectComponent,
        WebcomponentProjectComponent,
        WebsiteProjectComponent,
        ContactComponent
     ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Router: App', () => {
    beforeEach(() => {
      router = TestBed.get(Router);
      location = TestBed.get(Location);
      router.initialNavigation();
    });

    it('fakeAsync works', fakeAsync(() => {
      const promise = new Promise((resolve) => {
        setTimeout(resolve, 10);
      });
      let done  = false;
      promise.then(() => (done = true));
      tick(50);
      expect(done).toBeTruthy();
    }));

    it('navigate to "" redirects to /', fakeAsync(() => {
      router.navigate(['']);
      tick();
      expect(location.path()).toBe('/');
    }));

    it('navigate to "portfolio" takes you to /portfolio', fakeAsync(() => {
      router.navigate(['portfolio']);
      tick();
      expect(location.path()).toBe('/portfolio');
    }));

    it('navigate to "fyp-project" takes you to /portfolio/fyp-project', fakeAsync(() => {
      router.navigate(['portfolio/fyp-project']);
      tick();
      expect(location.path()).toBe('/portfolio/fyp-project');
    }));

    it('navigate to "website-project" takes you to /portfolio/website-project', fakeAsync(() => {
      router.navigate(['portfolio/website-project']);
      tick();
      expect(location.path()).toBe('/portfolio/website-project');
    }));

    it('navigate to "webcomponent-project" takes you to /portfolio/webcomponent-project', fakeAsync(() => {
      router.navigate(['portfolio/webcomponent-project']);
      tick();
      expect(location.path()).toBe('/portfolio/webcomponent-project');
    }));

    it('navigate to "contact" takes you to /contact', fakeAsync(() => {
      router.navigate(['contact']);
      tick();
      expect(location.path()).toBe('/contact');
    }));
  });

  describe('MetaData: App', () => {
    let titleService: Title;
    let metaService: Meta;

    it('the page title should be correct', (() => {
      titleService = TestBed.get(Title);
      expect(titleService.getTitle()).toEqual('CCDesigns');
    }));

    it('should render meta tags correctly', () => {
      metaService = TestBed.get(Meta);
      expect(metaService.getTags('name').length > 0).toBeTruthy();
      expect(metaService.getTags('name = "viewport"')).toBeTruthy();
      expect(metaService.getTags('name = "description"')).toBeTruthy();
      expect(metaService.getTags('name = "og:description"')).toBeTruthy();
      expect(metaService.getTags('name = "author"')).toBeTruthy();
      expect(metaService.getTags('name = "og:author"')).toBeTruthy();
      expect(metaService.getTags('name = "og:image"')).toBeTruthy();
      expect(metaService.getTags('name = "og:url"')).toBeTruthy();
      expect(metaService.getTags('name = "twitter:card"')).toBeTruthy();
      expect(metaService.getTags('name = "theme-color"')).toBeTruthy();
    });
  });
});
