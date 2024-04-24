import { Selector } from 'testcafe';

class LandingPage {
  constructor() {
    this.pageId = '#landing-page';
    this.pageSelector = Selector(this.pageId);
  }

  async ensureLogout(testController) {
    const loggedInUser = await Selector('#navbar-sign-out').exists;
    if (loggedInUser) {
      await testController.click('#navbar-sign-out');
    }
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async gotoSignInPage(testController) {
    await this.ensureLogout(testController);
    const visible = await Selector('#slide-1').visible;
    if (visible) {
      await testController.click('#login-button-sign-in');
    }
  }

  async gotoUserProfile(testController) {
    const visible = await Selector('#slide-1').visible;
    if (visible) {
      await testController.click('#user-profile-nav');
    }
  }

  async gotoClubCategories(testController) {
    const visible = await Selector('#slide-1').visible;
    if (visible) {
      await testController.click('#clubs-nav');
    }
  }

  /* Check that specified user is logged in */
  async isLoggedIn(testController, username) {
    const visible = await Selector('#basic-navbar-nav').visible;
    if (!visible) {
      await testController.click('button.navbar-toggler');
    }
    const loggedInUser = Selector('navbar-current-user').innerText;
    await testController.expect(loggedInUser).eql(username);
  }

  async logout(testController) {
    const visible = await Selector('#basic-navbar-nav').visible;
    if (!visible) {
      await testController.click('button.navbar-toggler');
    }
    await testController.expect(Selector('#navbar-current-user').exists).ok();
    await testController.click('#navbar-current-user');
    await testController.click('#navbar-sign-out');
  }

  async gotoSignUpPage(testController) {
    await this.ensureLogout(testController);
    const visible = await Selector('#slide-1').visible;
    if (visible) {
      await testController.click('#login-button-sign-up');
    }
  }
}

export const landingPage = new LandingPage();
