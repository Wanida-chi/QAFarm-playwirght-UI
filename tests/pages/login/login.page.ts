import {Page, expect} from '@playwright/test';
import { LoginLocator } from './login.locator';

export class LoginPage {
    private locator: LoginLocator;

    constructor(private page: Page) {
        this.locator = new LoginLocator(page);
    }

    async goto(){
        await this.page.goto('/');
    }

    async verifyWelcomeText(){
        await expect(this.locator.txt_welcomeText()).toContainText('Swag Labs');
    }

    async inputUsername(username: string){
        await this.locator.ent_username().fill(username);
    }

    async inputPassword(password: string){
        await this.locator.ent_password().fill(password);
    }

    async clickLoginButton(){
        await this.locator.btn_login().click();
    }

    async verifyErrorMessage(errorMessage: string){
        await expect(this.locator.txt_error()).toContainText(errorMessage);
    }

    async loginWithValidUsernameAndPassword(username: string, password: string){
        await expect(this.locator.txt_welcomeText()).toContainText('Swag Labs');
        await this.locator.ent_username().fill(username);
        await this.locator.ent_password().fill(password);
        await this.locator.btn_login().click();
    }
    
}
