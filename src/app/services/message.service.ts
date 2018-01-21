import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class MessageService {
    constructor(private _http: HttpClient) {}

    getMessage() {
        return this._http.get("/message");
    }
}