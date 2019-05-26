import { browser, logging } from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title as "Math Functions"', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Math Functions');
  });

  it('should convert 10 to 1010 in decimal to binary convertor', () => {
    page.getDecimalTextBox().sendKeys(10);
    expect(page.getBinaryResultSpan().getText()).toEqual('1010');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser
      .manage()
      .logs()
      .get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
