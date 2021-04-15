import { BasePage, PageData } from './page';

describe('Abstract Page', () => {
  test('should work', async () => {
    const page = new ExamplePage();
    expect(page).toBeTruthy();
  });
});

class ExamplePage extends BasePage {
  data: PageData = { headline: false }
}
