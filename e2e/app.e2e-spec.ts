import { MultipleLineChartPage } from './app.po';

describe('multiple-line-chart App', () => {
  let page: MultipleLineChartPage;

  beforeEach(() => {
    page = new MultipleLineChartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
