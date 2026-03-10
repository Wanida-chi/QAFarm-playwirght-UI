import { test } from '@playwright/test';
import { TestFixtures, testData } from '../test-fixture';

let fixtures: TestFixtures;

test.beforeEach(async ({ page }) => {
  fixtures = new TestFixtures(page);

  await fixtures.loginPage.goto();
});

test('TCS001_Verify user login the system with valid username and password successfully', async ({ page }) => {
    await fixtures.loginPage.verifyWelcomeText();
    await fixtures.loginPage.inputUsername(testData.users.validUser);
    await fixtures.loginPage.inputPassword(testData.users.validPassword);
    await fixtures.loginPage.clickLoginButton();

});