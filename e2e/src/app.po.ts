import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo(): Promise<any> {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  getDecimalTextBox(): ElementFinder {
    return element(by.xpath('//*[@id="decimal-number"]'));
  }
  getBinaryResultSpan(): ElementFinder {
    return element(
      by.xpath(
        '/html/body/div/app-root/div[2]/div/app-custom-pipe/div/div/div[2]/div/div/strong/span'
      )
    );
  }
}
