import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExebriefcasepageComponent } from './exebriefcasepage.component';

export const ExebriefcasepageRoutes: Routes = [
    { path: 'briefcase', component: ExebriefcasepageComponent },
];

/** 
@NgModule({
  imports: [RouterModule.forChild(HomepageRoutes)],
  exports: [RouterModule]
})
export class  ExebriefcasepageRoutingModule { }
*/
