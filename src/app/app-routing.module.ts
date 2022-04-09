import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    // Use Lazy load routes
    path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    // Use Lazy load routes
    path: 'user', loadChildren: () => import('./pages/user/user.module').then(u => u.UserModule)
  },
  { path: '', pathMatch: 'full', redirectTo: 'user/login' }, // si la ruta es varia redireccionamos
  { path: '**', pathMatch: 'full', redirectTo: 'user/login' } // Si no encuentra la ruta redireccionamos
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
