import { AppPage } from './app.po';
import { browser } from 'protractor';
import { createPublicKey } from 'crypto';
// import {  } from '@angular/core/testing';

describe('ccdesigns-web App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // E2E Tests - Homepage
  describe('ccdesign-web homepage', () => {
    beforeEach(() => {
      page.navigateTo('/');
    });

    it('should display only one h1', () => {
      expect(page.getElementCount('h1')).toEqual(1);
      expect(page.getElementText('h1')).toEqual('MY\nNAME\nIS:');
    });

    it('should container 3 separators', () => {
      expect(page.getElementCount('ccdesign-separator')).toEqual(3);
    });

    it('should container 3 images in carousel component', () => {
      expect(page.getElement('ccdesign-carousel')).toBeTruthy();
      expect(page.getElementCount('ccdesign-carousel .carousel .slides')).toEqual(3);
    });
  });

  // E2E Tests - Portfolio
  describe ('ccdesign-web portfolio', () => {
    beforeEach(() => {
      page.navigateTo('/portfolio');
    });

    it('should display only one h1', () => {
      expect(page.getElementCount('h1')).toEqual(1);
      expect(page.getElementText('h1')).toEqual('PORTFOLIO');
    });

    it('should contain 3 image cards', () => {
      expect(page.getElementCount('ccdesign-image-card')).toEqual(3);
    });

    it('should container 3 images in carousel component', () => {
      expect(page.getElement('ccdesign-carousel')).toBeTruthy();
      expect(page.getElementCount('ccdesign-carousel .carousel .slides')).toEqual(3);
    });
  });

  // E2E Tests - Portfolio Children
  // E2E Tests - Webcomponent project
  describe ('ccdesign-web webcomponent-project', () => {
    beforeEach(() => {
      page.navigateTo('/portfolio/webcomponent-project');
    });

    it('should display only one h1', () => {
      expect(page.getElementCount('h1')).toEqual(1);
      expect(page.getElementText('h1')).toEqual('CCDesign Web Component Library');
    });

    it('should have back button in navbar', () => {
      expect(page.getElement('#chevron-left')).toBeDefined();
    });
  });

  // E2E Tests - Website project
  describe ('ccdesign-web website project', () => {
    beforeEach(() => {
      page.navigateTo('/portfolio/website-project ');
    });

    it('should display only one h1', () => {
      expect(page.getElementCount('h1')).toEqual(1);
      expect(page.getElementText('h1')).toEqual('Personal Website Project');
    });

    it('should have back button in navbar', () => {
      expect(page.getElement('#chevron-left')).toBeDefined();
    });
  });

  // E2E Tests - Final Year Project
  describe ('University FYP Project', () => {
    beforeEach(() => {
      page.navigateTo('/portfolio/fyp-project');
    });

    it('should display only one h1', () => {
      expect(page.getElementCount('h1')).toEqual(1);
      expect(page.getElementText('h1')).toEqual('Final Year Project');
    });

    it('should have back button in navbar', () => {
      expect(page.getElement('#chevron-left')).toBeDefined();
    });
  });

  // E2E Tests - Contact
  describe ('ccdesign-web contact', () => {
    beforeEach(() => {
      page.navigateTo('/contact');
    });

    it('should display only one h1', () => {
      expect(page.getElementCount('h1')).toEqual(1);
      expect(page.getElementText('h1')).toEqual('CONTACT ME');
    });

    it('should container 3 images in carousel component', () => {
      expect(page.getElement('ccdesign-carousel')).toBeTruthy();
      expect(page.getElementCount('ccdesign-carousel .carousel .slides')).toEqual(3);
    });
  });
});
