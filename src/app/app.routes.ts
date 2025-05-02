import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'usuario',
    loadComponent: ()  => import('./features2/components/usuario/usuario.component')
  },
  {
    path: 'rol',
    loadComponent: ()  => import('./features2/components/rol/rol.component')
  }
];
