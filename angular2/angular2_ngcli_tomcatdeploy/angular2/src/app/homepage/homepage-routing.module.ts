import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from 'app/homepage/homepage.component';

export const HomepageRoutes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'home', component: HomepageComponent },
    { path: '**', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(HomepageRoutes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }