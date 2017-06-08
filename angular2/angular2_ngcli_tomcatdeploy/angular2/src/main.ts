import { enableProdMode, COMPILER_OPTIONS } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { UrlResolver } from "@angular/compiler";
import { MyUrlResolver } from './app/utils';
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic([{
    provide: COMPILER_OPTIONS,
    useValue: {providers: [{provide: UrlResolver, useClass: MyUrlResolver}]},
    multi: true
}]).bootstrapModule(AppModule);
