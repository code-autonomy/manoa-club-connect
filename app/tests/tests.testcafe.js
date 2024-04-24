import { landingPage } from './landing.page.js';
import { signinPage } from './signin.page.js';
import { signoutPage } from './signout.page.js';
import { navBar } from './navbar.component.js';
import { adminPage } from './admin.page.js';
import { addClub } from './addClub.page.js';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const userCredentials = { username: 'john@foo.com', password: 'changeme' };
const adminCredentials = { username: 'admin@foo.com', password: 'changeme' };
const superAdminCredentials = { username: 'superadmin@foo.com', password: 'changeme' };

const clubInfo = { organization: 'Asian Persuasion', dateApproved: 'April 1, 2024', expiration: 'April 1, 2025', type: 'Ethnic/Cultural', email: 'superadmin@foo.com', purpose: 'A place of Asian culture' };

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

test('Test that user can go to User Profile and Club Categories pages', async (testController) => {
  await landingPage.gotoSignInPage(testController);
  await signinPage.signin(testController, userCredentials.username, userCredentials.password);
  await landingPage.gotoUserProfile(testController);
  await navBar.gotoLandingPage(testController);
  await landingPage.gotoClubCategories(testController);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test that admin can login and access Club Host Page', async (testController) => {
  await landingPage.gotoSignInPage(testController);
  await signinPage.signin(testController, adminCredentials.username, adminCredentials.password);
  await navBar.gotoClubHostPage(testController);
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
