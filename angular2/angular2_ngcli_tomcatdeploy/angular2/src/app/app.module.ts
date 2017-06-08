import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { UrlResolver } from "@angular/compiler";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from 'app/homepage/homepage.component';
import { ExebriefcasepageComponent } from 'app/exebriefcasepage/exebriefcasepage.component';
import { ExploreprogramcompComponent } from 'app/exploreprogramcomp/exploreprogramcomp.component';
import { NewseventscompComponent, NewseventsService } from 'app/newseventscomp';
import { QuotecompComponent } from './quotecomp/quotecomp.component';
import { SuccessstoriescompComponent, SuccessstoryserviceService } from './successstoriescomp';
import { HubspagesComponent } from 'app/hubspages/hubspages.component';

import { Logger } from './utils/logger';
import { DCEErrorHandler } from './utils/errorHandler';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    ExebriefcasepageComponent,
    ExploreprogramcompComponent,
    NewseventscompComponent,
    QuotecompComponent,
    SuccessstoriescompComponent,
    HubspagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    Logger, 
    DCEErrorHandler,
    NewseventsService,
    SuccessstoryserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
