import { Selector } from 'testcafe';

class AdminPage {
  constructor() {
    this.pageId = '#admin-page';
    this.pageSelector = Selector(this.pageId);
  }

  async gotoAddClub(testController) {
    await testController.click('#add-club-button');
  }
}

export const adminPage = new AdminPage();
