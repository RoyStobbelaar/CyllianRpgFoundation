import { CyllianWorldsRpgPage } from './app.po';

describe('cyllian-worlds-rpg App', () => {
  let page: CyllianWorldsRpgPage;

  beforeEach(() => {
    page = new CyllianWorldsRpgPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
