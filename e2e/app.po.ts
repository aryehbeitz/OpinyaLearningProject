import { browser, by, element } from 'protractor';

export class OpinyaLearningProjectPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('aryeh-root h1')).getText();
  }
}
