import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { APP_PROVIDERS } from './app.providers';
import { AppComponent } from './app.component';
import { appRoutingProviders, routing } from './app.routing';

import { HomeModule } from './home/home.module';
import { BriefcaseModule } from './briefcase/briefcase.module';

import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';



@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HomeModule,
        BriefcaseModule,
        HeaderModule,
        FooterModule,
        routing,
    ],
    providers: [ APP_PROVIDERS, appRoutingProviders ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
