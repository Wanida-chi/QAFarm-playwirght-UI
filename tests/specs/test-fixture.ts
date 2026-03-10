import { Page } from '@playwright/test';
import { LoginPage } from '../pages/login/login.page';
import { ProductPage } from '../pages/product/product.page';
import { users, errorMessage } from '../test-data/login.json';
import { productName } from '../test-data/product.json';


export class TestFixtures {
  loginPage: LoginPage;
  productPage: ProductPage;

  constructor(page: Page) {
    this.loginPage      = new LoginPage(page);
    this.productPage    = new ProductPage(page);
    
  }
}

export const testData = {
  users,
  errorMessage,
  productName
};