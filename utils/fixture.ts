import { test as base } from '@playwright/test';
import { RequestHandler } from '../utils/request-handler.js'
import { APILogger } from './logger.js';
import { setCustomExpectLogger } from './custom-expectation.js';
import { config } from '../api-test.config.js';


export type MyFixtures = {
    api: RequestHandler;
    config : typeof config

}

export const test = base.extend <MyFixtures>({
    api : async({request}, use) =>{
        const baseUrl = apiUrl
        const logger = new APILogger()
        setCustomExpectLogger(logger)
        const requestHandler = new RequestHandler(request, baseUrl,logger)
        await use(requestHandler)

    },

    config: async({}, use) =>{
        await use(config)
    }




})