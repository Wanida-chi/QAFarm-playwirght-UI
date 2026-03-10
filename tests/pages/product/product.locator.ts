import { Page, Locator } from "@playwright/test";

export class ProductLocator {
    constructor(private page: Page) {}

    txt_productPage = () => this.page.getByTestId('title');
    txt_productName = () => this.page.getByTestId('inventory-item-name');
    btn_addToCart   = (index: number = 0) => this.page.getByRole('button', {name: 'Add to cart'}).nth(index);
    icon_cart       = () => this.page.getByTestId('shopping-cart-link');
    icon_cartBadge  = () => this.page.getByTestId('shopping-cart-badge');

}