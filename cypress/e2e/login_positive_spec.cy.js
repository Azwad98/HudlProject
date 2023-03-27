import LoginPage from '../pages/loginPage';

describe('Login Positive Test', () => {
  it('Successfully logs in', () => {
    // creates object for login page
    const loginPage = new LoginPage();

    // instructs browser to visit login page
    loginPage.visit();

    // Sets login credential
    const email = 'm.azwad.rashid@gmail.com';
    const password = 'D_Sr.aJ6w#z#Dg4';
    const newUrl = '/new_library/t/320073';
    const userIconTag = '.hui-globaluseritem';

    loginPage.login(email, password);

    // assertion to check successful login
    cy.url().should('include', newUrl); // Check change in URL
    cy.get(userIconTag).should('exist'); // Check that User Icon is present on new page
  });
});
