import LoginPage from '../pages/loginPage';
const generateRandomString = require('../utils/randomString');

describe('Login Negative Test Cases', () => {
  const loginPage = new LoginPage();
  const username = 'm.azwad.rashid@gmail.com';
  const password = 'D_Sr.aJ6w#z#Dg4';
  const randomUsername = generateRandomString(8);
  const randomPassword = generateRandomString(12);

  it('Input wrong email', () => {
    loginPage.visit();
    loginPage.login(randomUsername, password);

    cy.get('.styles_errorDisplayInnerContainer_3R2ni-zSvPIKWfKXiviJhH')
      .should('be.visible')
      .and(
        'contain',
        "We didn't recognize that email and/or password.Need help?"
      );
  });

  it('Input wrong password', () => {
    loginPage.visit();
    loginPage.login(username, randomPassword);

    cy.get('.styles_errorDisplayInnerContainer_3R2ni-zSvPIKWfKXiviJhH')
      .should('be.visible')
      .and(
        'contain',
        "We didn't recognize that email and/or password.Need help?"
      );
  });

  it('Input wrong details', () => {
    loginPage.visit();
    loginPage.login(randomUsername, randomPassword);

    cy.get('.styles_errorDisplayInnerContainer_3R2ni-zSvPIKWfKXiviJhH')
      .should('be.visible')
      .and(
        'contain',
        "We didn't recognize that email and/or password.Need help?"
      );
  });
});
