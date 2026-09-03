import type { APIRequestContext } from "@playwright/test";
import { expect } from "@playwright/test";

export class RequestHandler {
  private request: APIRequestContext
  private baseUrl: string = '';
  private defaultbaseUrl: string
  private apiPath: string = '';
  private queryParams: object = {};
  private apiHeaders: Record<string, string> = {};
  private apibody: object = {};

  constructor(request: APIRequestContext, apiBaseUrl: string) {
    this.request = request
    this.defaultbaseUrl = apiBaseUrl
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
    this.apibody = body;
    return this;
  }
  async getRequest(statusCode: number): Promise<any> {
    const url = await this.getFullUrl()
    const response = await this.request.get(url, {
      headers: this.apiHeaders
    })
    expect(response.status()).toEqual(statusCode)
    const responseJSON = await response.json()
    return responseJSON
  }

  async postRequest(statusCode: number): Promise<any> {
    const url = await this.getFullUrl()
    const response = await this.request.post(url, {
      headers: this.apiHeaders,
      data: this.apibody
    })
    expect(response.status()).toEqual(statusCode)
    const responseJSON = await response.json()
    return responseJSON
  }

  async putRequest(statusCode: number): Promise<any> {
    const url = await this.getFullUrl()
    const response = await this.request.put(url, {
      headers: this.apiHeaders,
      data: this.apibody
    })
    expect(response.status()).toEqual(statusCode)
    const responseJSON = await response.json()
    return responseJSON
  }

  async deleteRequest(statusCode: number): Promise<any> {
    const url = await this.getFullUrl()
    const response = await this.request.delete(url, {
      headers: this.apiHeaders
    })
    expect(response.status()).toEqual(statusCode)


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
}