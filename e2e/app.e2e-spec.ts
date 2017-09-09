import { DirEventPage } from './app.po';

describe('dir-event App', function() {
  let page: DirEventPage;

  beforeEach(() => {
    page = new DirEventPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
