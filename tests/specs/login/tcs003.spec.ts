import { test } from '@playwright/test';
import { TestFixtures, testData } from '../test-fixture';

let fixtures: TestFixtures;

test.beforeEach(async ({ page }, testInfo) => {
  testInfo.annotations.push(
    {type: 'Test Case ID', description: '163272, 163273'}
  )
  fixtures = new TestFixtures(page);

  await fixtures.loginPage.goto();
});

test('TCS003_Verify error message when user login with locked out user', {tag: ['@login', '@smoke']}, async ({ page }) => {
    await fixtures.loginPage.verifyWelcomeText();
    await fixtures.loginPage.inputUsername(testData.users.lockedOutUse);
    await fixtures.loginPage.inputPassword(testData.users.validPassword);
    await fixtures.loginPage.clickLoginButton();
    await fixtures.loginPage.verifyErrorMessage(testData.errorMessage.lockedOutUse);

});