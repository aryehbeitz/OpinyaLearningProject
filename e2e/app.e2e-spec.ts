import { OpinyaLearningProjectPage } from './app.po';

describe('opinya-learning-project App', () => {
  let page: OpinyaLearningProjectPage;

  beforeEach(() => {
    page = new OpinyaLearningProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to aryeh!');
  });
});
