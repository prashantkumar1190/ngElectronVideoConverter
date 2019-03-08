import { NGSpext } from './app.po';

describe('ng-spext App', () => {
  let page: NGSpext;

  beforeEach(() => {
    page = new NGSpext();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
