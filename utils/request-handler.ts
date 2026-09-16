import type { APIRequestContext } from "@playwright/test";
import { expect } from "@playwright/test";
import type { APILogger } from "./logger.js";

export class RequestHandler {
  private request: APIRequestContext
  private logger : APILogger
  private baseUrl: string = '';
  private defaultbaseUrl: string 
  private apiPath: string = '';
  private queryParams: object = {};
  private apiHeaders: Record<string, string> = {};
  private apiBody: object = {};

  constructor(request: APIRequestContext, apiBaseUrl: string,   logger : APILogger) {
    this.request = request
    this.defaultbaseUrl = apiBaseUrl
    this.logger = logger
  }


  url(url: string) {
    this.baseUrl = url;
    return this;
  }

  path(path: string) {
    this.apiPath = path;
    return this;
  }

  params(params: object) {
    this.queryParams = params;
    return this;
  }

  headers(headers: Record<string, string>) {
    this.apiHeaders = headers;
    return this;
  }

  body(body: object) {
    this.apiBody = body;
    return this;
  }
  async getRequest(statusCode: number): Promise<any> {
    const url = await this.getFullUrl()
    this.logger.logRequest('GET',url,this.apiHeaders)
    const response = await this.request.get(url, {
      headers: this.apiHeaders
    })

    const actualStatus = response.status()
    const responseJSON = await response.json()
    this.logger.logResponse(actualStatus,responseJSON)
    this.statusCodevalidator(actualStatus,statusCode,this.getRequest)
    

    return responseJSON
  }

  async postRequest(statusCode: number): Promise<any> {
    const url = await this.getFullUrl()
    this.logger.logRequest('POST',url,this.apiHeaders,this.apiBody)
    const response = await this.request.post(url, {
      headers: this.apiHeaders,
      data: this.apiBody
    })
    const actualStatus = response.status()
    const responseJSON = await response.json()

    this.logger.logResponse(actualStatus,responseJSON)
   this.statusCodevalidator(actualStatus,statusCode,this.postRequest)
   
    return responseJSON
  }

  async putRequest(statusCode: number): Promise<any> {
    const url = await this.getFullUrl()
     this.logger.logRequest('PUT',url,this.apiHeaders,this.apiBody)
    const response = await this.request.put(url, {
      headers: this.apiHeaders,
      data: this.apiBody
    })
    
    const actualStatus = response.status()
    const responseJSON = await response.json()

    this.logger.logResponse(actualStatus,responseJSON)
   this.statusCodevalidator(actualStatus,statusCode,this.putRequest)
   
    return responseJSON
  }

  async deleteRequest(statusCode: number): Promise<any> {
    const url = await this.getFullUrl()
     this.logger.logRequest('DELETE',url,this.apiHeaders,this.apiBody)
    const response = await this.request.delete(url, {
      headers: this.apiHeaders
    })
    const actualStatus = response.status()
     this.logger.logResponse(actualStatus)
     this.statusCodevalidator(actualStatus,statusCode,this.deleteRequest )


  }

  private async getFullUrl(): Promise<string> {
    const base = this.baseUrl || this.defaultbaseUrl
    const url = new URL(`${base}${this.apiPath}`);
    //  console.log(url.href)
    //const urlString = `${this.baseUrl ?? this.defaultbaseUrl} ${this.apiPath}`;
    for (const [key, value] of Object.entries(this.queryParams)) {
      url.searchParams.append(key, String(value))
    }
    console.log(url.href);
    return url.href
  }

  private statusCodevalidator(actualStatus:number,expectStatus:number,callingMethod:Function){
    if(actualStatus !== expectStatus){
      const logs = this.logger.getRecentLogs()
      const error = new Error(`Expected status ${expectStatus} but got ${actualStatus}\n\nRecent API Activity : \n${logs}`)
      Error.captureStackTrace(error,callingMethod)
      throw error
    }
  }

  private cleanupFields(){
      this.apiBody= {}
      this.apiHeaders ={}
      this.apiPath = {}
      this.baseUrl = {}
  }
}