import { IJsonApiError } from "./json-api-error.interface";

export class JsonApiError implements IJsonApiError {
    id: string;
    code: string;
    detail: string;
    links: any;
    meta: any;
    source: any;
    status: any;
    title: string;

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