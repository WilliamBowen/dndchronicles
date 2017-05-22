import { Angular2FinalProjectPage } from './app.po';

describe('angular2-final-project App', function() {
  let page: Angular2FinalProjectPage;

  beforeEach(() => {
    page = new Angular2FinalProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
