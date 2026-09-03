import{type Page, type  Locator}  from '@playwright/test'



export class LoginPage{

    readonly page: Page;
    readonly loginTitle : Locator;
    readonly usernameInput : Locator;
    readonly passwordInput : Locator;
    readonly loginButton : Locator;
    readonly headerTitle : Locator


    constructor(page: Page){
        this.page = page
        this.loginTitle =page.locator('.login-title')
     
    this.page.getByRole('textbox', { name: 'email@example.com' })
        this.usernameInput = page.getByRole('textbox', { name: 'email@example.com' })
        this.passwordInput = page.getByPlaceholder('enter your passsword')
        this.loginButton = page.getByRole('button', { name: 'Login' })
        this.headerTitle = page.getByRole('heading', {name:"Automation"})
    }

    async login():Promise<void>{
        // const user = process.env.ENTER_User_Name ||'';
        // const pass = process.env.password || '';

        // await this.usernameInput.clear();
        // await this.usernameInput.fill(user);
        
        // await this.passwordInput.clear();
        // await this.passwordInput.fill(pass);
        await this.usernameInput.fill(process.env.ENTER_User_Name!)
        await this.passwordInput.fill(process.env.password!)

    }

    async clickOnButton():Promise<void>{
        await this.loginButton.click()

    }







}