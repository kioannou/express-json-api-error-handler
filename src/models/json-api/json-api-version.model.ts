import { IJsonApiVersion } from './json-api-version.interface';

export class JsonApiVersion implements IJsonApiVersion {
  private static getVersion(obj: any) {
    return obj && obj.hasOwnProperty('version') ? obj.version : '1.0.0';
  }

  public version: string;

  constructor(obj?: any) {
    this.version = JsonApiVersion.getVersion(obj);
  }
}
