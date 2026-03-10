import { Page, Locator } from "@playwright/test";

export class LoginLocator {
    constructor(private page: Page) {}

    txt_welcomeText = () => this.page.locator('.login_logo');
    ent_username    = () => this.page.getByPlaceholder('Username');
    ent_password    = () => this.page.getByPlaceholder('Password');
    btn_login       = () => this.page.getByRole('button', { name: 'Login' });
    txt_error       = () => this.page.getByTestId('error');

}