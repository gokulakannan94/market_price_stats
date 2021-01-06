import { Records } from "./records";

export class Response {
    title: string;
    org_type: string;
    org: string[];
    sector: string[];
    source: string;
    created_date: Date;
    updated_date: Date;
    records: Records[];

    constructor(){
        this.title = '';
        this.org_type = '';
        this.org = [];
        this.sector = [];
        this.source = '';
        this.created_date = new Date();
        this.updated_date = new Date();
        this.records = [];
    }
}
