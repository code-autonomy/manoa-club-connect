import { Selector } from 'testcafe';

const typeSelect = Selector('#edit-type');
const typeOption = typeSelect.find('option');
class EditClubInfoPage {
  constructor() {
    this.pageId = '#edit-club-page';
    this.pageSelector = Selector(this.pageId);
  }

  async editClubInfo(testController, organization, date, expiration, type, email, purpose) {
    await testController.typeText('#edit-org', organization, { replace: true });
    await testController.typeText('#edit-approval', date, { replace: true });
    await testController.typeText('#edit-expiration', expiration, { replace: true });
    await testController.typeText('#edit-email', email, { replace: true });
    await testController.click(typeSelect);
    await testController.click(typeOption.withText(type));
    await testController.expect(typeSelect.value).eql(type);
    await testController.typeText('#edit-purpose', purpose, { replace: true });
    await testController.click('#submit-edit');
    await testController.pressKey('enter');
  }
}

export const editClubInfo = new EditClubInfoPage();
