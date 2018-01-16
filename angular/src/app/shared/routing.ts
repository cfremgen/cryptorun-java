
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from '../app.component';
import { PricesComponent } from '../prices/prices.component';

const routes: Routes = [
    { path: '', redirectTo: '/prices', pathMatch: 'full' },
    {
        path: 'prices', component: PricesComponent, data: {
            title: "PricesComponent"
        }
    }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });