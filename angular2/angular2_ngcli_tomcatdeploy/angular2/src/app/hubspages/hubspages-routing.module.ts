import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HubspagesComponent } from 'app/hubspages/hubspages.component';

export const HubspagesRoutes: Routes = [
    { path: 'hubs/:hubsname/:catname/:pagename*', component: HubspagesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(HubspagesRoutes)],
  exports: [RouterModule]
})
export class HubspagesRoutingModule { }
