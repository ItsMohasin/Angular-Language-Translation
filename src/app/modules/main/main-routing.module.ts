


import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from '../main/fnd/main-page/main-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { LayoutComponent } from './layout/layout.component';

import { DashboardComponent } from '../main/fnd/dashboard/dashboard.component';





const routes: Routes = [
   //Important: The sequence of path is important as the router go over then in sequential manner
   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: LayoutComponent,
//  canActivate: [AuthGuard],
    children: [
      // { path: '', redirectTo: 'user', pathMatch: 'full' },
      { path: 'main', component: MainPageComponent },
      {path: '', component:DashboardComponent,pathMatch: 'full'

    },
            { path: '**', component: PageNotFoundComponent },
      ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }