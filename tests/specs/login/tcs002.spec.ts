import { test } from '@playwright/test';
import { TestFixtures, testData } from '../test-fixture';

let fixtures: TestFixtures;

test.beforeEach(async ({ page }) => {
  fixtures = new TestFixtures(page);

  await fixtures.loginPage.goto();
});

test('TCS002_Verify error message when user login without password', {tag: ['@login', '@negative']}, async ({ page }) => {
    await fixtures.loginPage.verifyWelcomeText();
    await fixtures.loginPage.inputUsername(testData.users.validUser);
    await fixtures.loginPage.clickLoginButton();
    await fixtures.loginPage.verifyErrorMessage(testData.errorMessage.withoutPassword);

});