import {Page}  from '@playwright/test'


export interface IBasePage{
    page: Page;
    navigate?():Promise<void>
}