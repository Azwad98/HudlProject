import LoginPage from '../pages/loginPage';

describe('Login Positive Test', () => {
  it('Successfully logs in', () => {
    const loginPage = new LoginPage();
    loginPage.visit();

    const email = 'm.azwad.rashid@gmail.com';
    const password = 'D_Sr.aJ6w#z#Dg4';

    loginPage.login(email, password);

    // Add assertions to check for successful login
  });
});
