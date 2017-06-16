import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from './home/index';
import { BriefcaseRoutes } from './briefcase/index';

import { TodolistRoutes } from './todolist/index';

const appRoutes: Routes = [
    ...HomeRoutes,
    ...TodolistRoutes,
    ...BriefcaseRoutes
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
