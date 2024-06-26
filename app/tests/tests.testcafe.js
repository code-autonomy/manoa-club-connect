import { landingPage } from './landing.page.js';
import { signinPage } from './signin.page.js';
import { signoutPage } from './signout.page.js';
import { navBar } from './navbar.component.js';
import { adminPage } from './admin.page.js';
import { addClub } from './addClub.page.js';
import { editClub } from './editClub.page.js';
import { editClubInfo } from './editClubInfo.page.js';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const userCredentials = { username: 'john@foo.com', password: 'changeme' };
const adminCredentials = { username: 'admin@foo.com', password: 'changeme' };
const superAdminCredentials = { username: 'superadmin@foo.com', password: 'changeme' };

const clubInfo = { organization: 'Asian Persuasion', dateApproved: 'April 1, 2024', expiration: 'April 1, 2025', type: 'Ethnic/Cultural', email: 'superadmin@foo.com', purpose: 'A place of Asian culture' };
const newClubInfo = { organization: 'Baldur\'s Gate 3', dateApproved: 'May 4, 2024', expiration: 'May 4, 2025', type: 'Ethnic/Cultural', email: 'admin@foo.com', purpose: 'We love to Bald the Gate' };

fixture('manoa-club-connect localhost test with default db')
  .page('http://localhost:3000');

test('Test that landing page shows up', async (testController) => {
  await landingPage.isDisplayed(testController);
});

test('Test that signin and signout work', async (testController) => {
  await landingPage.gotoSignInPage(testController);
  await signinPage.signin(testController, userCredentials.username, userCredentials.password);
  await navBar.isLoggedIn(testController, userCredentials.username);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test that user can go to User Profile, Club Categories, and Club List pages', async (testController) => {
  await landingPage.gotoSignInPage(testController);
  await signinPage.signin(testController, userCredentials.username, userCredentials.password);
  await landingPage.gotoUserProfile(testController);
  await navBar.gotoLandingPage(testController);
  await landingPage.gotoClubCategories(testController);
  await navBar.gotoClubList(testController);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test that admin can login, access Club Home Page and Club Host Page, and edit their club.', async (testController) => {
  await landingPage.gotoSignInPage(testController);
  await signinPage.signin(testController, adminCredentials.username, adminCredentials.password);
  await navBar.gotoClubAdminHome(testController);
  await navBar.gotoClubHostPage(testController);
  await editClub.gotoEditClub(testController);
  await editClubInfo.editClubInfo(testController, newClubInfo.organization, newClubInfo.dateApproved, newClubInfo.expiration, newClubInfo.type, newClubInfo.email, newClubInfo.purpose);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test that superadmin can login, access admin page, and add a club', async (testController) => {
  await landingPage.gotoSignInPage(testController);
  await signinPage.signin(testController, superAdminCredentials.username, superAdminCredentials.password);
  await navBar.gotoAdmin(testController);
  await adminPage.gotoAddClub(testController);
  await addClub.newClub(testController, clubInfo.organization, clubInfo.dateApproved, clubInfo.expiration, clubInfo.type, clubInfo.email, clubInfo.purpose);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});
