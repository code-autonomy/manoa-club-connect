import { Selector } from 'testcafe';

const typeSelect = Selector('#add-type');
const typeOption = typeSelect.find('option');
class AddClub {
  constructor() {
    this.pageId = '#add-club-page';
    this.pageSelector = Selector(this.pageId);
  }

  async newClub(testController, organization, date, expiration, type, email, purpose) {
    await testController.typeText('#add-org', organization);
    await testController.typeText('#add-date-approved', date);
    await testController.typeText('#add-expiration', expiration);
    await testController.click(typeSelect);
    await testController.click(typeOption.withText(type));
    await testController.expect(typeSelect.value).eql(type);
    await testController.typeText('#add-email', email);
    await testController.typeText('#add-purpose', purpose);
    await testController.click('#add-club-submit');
  }
}

export const addClub = new AddClub();
