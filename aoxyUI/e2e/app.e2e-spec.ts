import { AoxyUIPage } from './app.po';

describe('aoxy-ui App', function() {
  let page: AoxyUIPage;

  beforeEach(() => {
    page = new AoxyUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
