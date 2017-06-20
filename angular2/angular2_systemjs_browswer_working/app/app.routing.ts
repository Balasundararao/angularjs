import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from './home/index';
import { BriefcaseRoutes } from './briefcase/index';


const appRoutes: Routes = [
    ...HomeRoutes,
    ...BriefcaseRoutes
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes,{ useHash: true });
