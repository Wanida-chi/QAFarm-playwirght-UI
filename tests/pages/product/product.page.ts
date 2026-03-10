import {Page, expect} from '@playwright/test';
import { ProductLocator } from './product.locator';

export class ProductPage {
    private locator: ProductLocator

    constructor(page: Page) {
        this.locator = new ProductLocator(page);
    }

    async verifyProductPage(){
        await expect(this.locator.txt_productPage()).toContainText('Products');
    }

    async verifyProductName(productName: string){
        await expect(this.locator.txt_productName().filter({ hasText: productName})).toBeVisible();
    }

    async verifyAddToCartButton(){
        await expect(this.locator.btn_addToCart()).toBeVisible();
    }

    async verifyCartIcon(){
        await this.locator.icon_cart().isVisible();
    }

    async clickAddToCartButton(index: number){
        this.locator.btn_addToCart(index).click();
    }

      async verifyCartBadgeIcon(){
        await expect(this.locator.icon_cartBadge()).toContainText('1');
    }
}