import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [
    { path: '', loadChildren: () => import('./features/default/default.module').then(m => m.DefaultModule) },
    { path: 'lazy', loadChildren: () => import('./features/lazy/lazy.module').then(m => m.LazyModule) }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
