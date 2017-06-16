import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HomepageRoutes } from 'app/homepage/homepage-routing.module';
// import { ExebriefcasepageRoutes } from 'app/exebriefcasepage/exebriefcasepage-routing.module';
// import { HubspagesRoutes } from 'app/hubspages/hubspages-routing.module';

const routes: Routes = [
 // ...ExebriefcasepageRoutes,
 // ...HubspagesRoutes,
 // ...HomepageRoutes,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
