import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/autn.routes';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {
    path: 'gym-style',
    component: PagesComponent,
    loadChildren: () => import('./pages/pages.routes').then( m => m.PagesRoutingModule )
  }, 
  {
      path: '',
      redirectTo: '/gym-style/home',
      pathMatch: 'full'
    }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
