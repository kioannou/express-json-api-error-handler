import { IJsonApiError } from './json-api-error.interface';

export class JsonApiError implements IJsonApiError {
  private static getId(obj: any) {
    return obj && obj.hasOwnProperty('id') ? obj.id : null;
  }

  private static getTitle(obj: any) {
    return obj && obj.hasOwnProperty('title') ? obj.title : null;
  }

  private static getStatus(obj: any) {
    return obj && obj.hasOwnProperty('status') ? obj.status : null;
  }

  private static getSource(obj: any) {
    return obj && obj.hasOwnProperty('source') ? obj.source : null;
  }

  private static getMeta(obj: any) {
    return obj && obj.hasOwnProperty('meta') ? obj.meta : null;
  }

  private static getLinks(obj: any) {
    return obj && obj.hasOwnProperty('links') ? obj.links : null;
  }

  private static getDetail(obj: any) {
    return obj && obj.hasOwnProperty('detail') ? obj.detail : null;
  }

  private static getCode(obj: any) {
    return obj && obj.hasOwnProperty('code') ? obj.code : null;
  }

  public id: string;
  public code: string;
  public detail: string;
  public links: any;
  public meta: any;
  public source: any;
  public status: any;
  public title: string;

  constructor(obj?: any) {
    this.id = JsonApiError.getId(obj);
    this.code = JsonApiError.getCode(obj);
    this.detail = JsonApiError.getDetail(obj);
    this.links = JsonApiError.getLinks(obj);
    this.meta = JsonApiError.getMeta(obj);
    this.source = JsonApiError.getSource(obj);
    this.status = JsonApiError.getStatus(obj);
    this.title = JsonApiError.getTitle(obj);
  }
}
