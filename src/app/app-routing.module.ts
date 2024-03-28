import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DatabindingPage } from './databinding/databinding.page';
import { DashboardPage } from './dashboard/dashboard.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'assignment1',
    loadChildren: () => import('./assignment1/assignment1-module').then( m => m.Assignment1Module)
  },
  {
    path: '',
    redirectTo: 'databinding',
    pathMatch: 'full'
  },
  {
    path: 'databinding',
    component: DatabindingPage
  },
  {
    path: 'dashboard',
    component: DashboardPage
  },
  {
    path: 'component',
    loadChildren: () => import('./component/component.module').then( m => m.ComponentPageModule)
  },
  {
    path: 'databinding',
    loadChildren: () => import('./databinding/databinding.module').then( m => m.DatabindingPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'calculator',
    loadChildren: () => import('./calculator/calculator.module').then( m => m.CalculatorPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }