import LoginPage from '../pages/loginPage';
const config = require('../config/config');
const generateRandomString = require('../utils/randomString');

describe('Login Negative Test Cases', () => {
  const loginPage = new LoginPage();
  const randomUsername = generateRandomString(8);
  const randomPassword = generateRandomString(12);

  it('Input wrong email', () => {
    loginPage.visit();
    loginPage.login(randomUsername, config.password);

    cy.get(config.errorMessageSelector)
      .should('be.visible')
      .and('contain', config.errorMessage);
  });

  it('Input wrong password', () => {
    loginPage.visit();
    loginPage.login(config.username, randomPassword);

    cy.get(config.errorMessageSelector)
      .should('be.visible')
      .and('contain', config.errorMessage);
  });

  it('Input wrong details', () => {
    loginPage.visit();
    loginPage.login(randomUsername, randomPassword);

    cy.get(config.errorMessageSelector)
      .should('be.visible')
      .and('contain', config.errorMessage);
  });

  it('Missing email with correct password', () => {
    loginPage.visit();
    loginPage.login('', config.password);

    cy.get(config.errorMessageSelector)
      .should('be.visible')
      .and('contain', config.errorMessage);
  });

  it('Missing password with correct email', () => {
    loginPage.visit();
    loginPage.login(config.username, '');

    cy.get(config.errorMessageSelector)
      .should('be.visible')
      .and('contain', config.errorMessage);
  });

  it('Missing fields', () => {
    loginPage.visit();
    loginPage.getLoginBtn().click();

    cy.get(config.errorMessageSelector)
      .should('be.visible')
      .and('contain', config.errorMessage);
  });
});
