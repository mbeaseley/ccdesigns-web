import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(path: string) {
    return browser.get(`${path}`);
  }

  getElement(selector: string) {
    return element.all(by.tagName(`${selector}`));
  }

  getElementText(textType: string) {
    return element(by.tagName(`${textType}`)).getText();
  }

  getElementCount(selector: string) {
    return element.all(by.tagName(`${selector}`)).count();
  }
}
