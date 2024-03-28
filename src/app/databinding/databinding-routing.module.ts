import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatabindingPage } from './databinding.page';

const routes: Routes = [
  {
    path: '',
    component: DatabindingPage,
    children: [
      {
      path: 'component',
      loadChildren: () =>
      import('../component/component.module').then((m) => m.ComponentPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatabindingPageRoutingModule {}
