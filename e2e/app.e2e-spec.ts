import { TflHomestopAng4Page } from './app.po';

describe('tfl-homestop-ang4 App', () => {
  let page: TflHomestopAng4Page;

  beforeEach(() => {
    page = new TflHomestopAng4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
