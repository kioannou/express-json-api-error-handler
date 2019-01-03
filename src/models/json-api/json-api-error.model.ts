import { IJsonApiError } from './json-api-error.interface';

export class JsonApiError implements IJsonApiError {
  public id: string;
  public code: string;
  public detail: string;
  public links: any;
  public meta: any;
  public source: any;
  public status: any;
  public title: string;

  constructor(obj?: any) {
    this.id = (obj && obj.id) || null;
    this.code = (obj && obj.code) || null;
    this.detail = (obj && obj.detail) || null;
    this.links = (obj && obj.links) || null;
    this.meta = (obj && obj.meta) || null;
    this.source = (obj && obj.source) || null;
    this.status = (obj && obj.status) || null;
    this.title = (obj && obj.title) || null;
  }
}
