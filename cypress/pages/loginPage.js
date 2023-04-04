import { typeOrSet } from '../utils/typeOrSet';

class LoginPage {
  visit() {
    cy.visit('https://www.hudl.com/login?forward=%2Flibrary%2F320073');
  }

  getEmailInput() {
    return cy.get('input[type=email]');
  }

  getPassInput() {
    return cy.get('input[type=password]');
  }

  getLoginBtn() {
    return cy.get('button[type="submit"]');
  }

  login(email, password) {
    typeOrSet(this.getEmailInput(), email);
    typeOrSet(this.getPassInput(), password);
    this.getLoginBtn().click();
  }
}

export default LoginPage;
