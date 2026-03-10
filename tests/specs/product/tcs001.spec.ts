import { test } from '@playwright/test';
import { TestFixtures, testData } from '../test-fixture';

let fixtures: TestFixtures

test.beforeEach(async ({ page }) => {
  fixtures = new TestFixtures(page);

  await fixtures.loginPage.goto();
});

test('TCS001_Verify product name and add product to cart successfully', async () => {
    await fixtures.loginPage.loginWithValidUsernameAndPassword(testData.users.validUser, testData.users.validPassword);
    await fixtures.productPage.verifyProductPage();
    await fixtures.productPage.verifyProductName(testData.productName.item1);
    await fixtures.productPage.verifyAddToCartButton();
    await fixtures.productPage.verifyCartIcon();
    await fixtures.productPage.clickAddToCartButton(0);
    await fixtures.productPage.verifyCartBadgeIcon();

});