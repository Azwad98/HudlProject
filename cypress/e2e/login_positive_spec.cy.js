import LoginPage from '../pages/loginPage';
const config = require('../config/config');

describe('Login Positive Test', () => {
  it('Successfully logs in', () => {
    // creates object for login page
    const loginPage = new LoginPage();

    // instructs browser to visit login page
    loginPage.visit();

    loginPage.login(config.username, config.password);

    // assertion to check successful login
    cy.url().should('include', config.dashboardUrl); // Check change in URL
    cy.get(config.userIconSelector).should('exist'); // Check that User Icon is present on new page
  });
});
