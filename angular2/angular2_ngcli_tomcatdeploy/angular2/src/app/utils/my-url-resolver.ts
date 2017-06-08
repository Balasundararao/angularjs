import { Injectable } from '@angular/core';
import {UrlResolver} from "@angular/compiler";
console.log("Testing ");
@Injectable()
export class MyUrlResolver extends UrlResolver{
    resolve(baseUrl: string, url: string): string {
        console.log('inside My Url Resolver');
        if (url.startsWith('saleshubs')) {
            return super.resolve('http://localhost:4502/content/r/salesconnect/', url);
        }
        return super.resolve(baseUrl, url);
    }
}
