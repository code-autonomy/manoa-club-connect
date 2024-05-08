import { Selector } from 'testcafe';

class EditClub {
  constructor() {
    this.pageId = '#club-host-page';
    this.pageSelector = Selector(this.pageId);
  }

  async gotoEditClub(testController) {
    await testController.click('#edit-club');
  }
}

export const editClub = new EditClub();
