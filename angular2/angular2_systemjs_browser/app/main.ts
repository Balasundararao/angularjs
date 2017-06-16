/***
import { COMPILER_OPTIONS } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic([{
    provide: COMPILER_OPTIONS,
    useValue: {providers: [{provide: UrlResolver, useClass: MyUrlResolver}]},
    multi: true
}]).bootstrapModule(AppModule);

**/


import {bootstrap} from 'angular2/platform/browser';
import { AppModule } from './app.module';

import {HTTP_PROVIDERS} from 'angular2/http';
import {ContactsList} from './app.component';
import {UserDataService} from './service';


bootstrap(ContactsList, [HTTP_PROVIDERS, UserDataService]);

