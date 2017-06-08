import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HubspagesRoutingModule } from './hubspages-routing.module';
import { HubspagesComponent } from './hubspages.component';

@NgModule({
  imports: [
    CommonModule,
    HubspagesRoutingModule
  ],
  declarations: [HubspagesComponent]
})
export class HubspagesModule { }
