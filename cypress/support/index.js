import './commands';
import LoginPage from '../pages/LoginPage';

Cypress.on('window:before:load', (win) => {
  win.LoginPage = LoginPage;
});
