import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'usuario',
    loadComponent: () =>
      import('./features2/components/usuarios-panel/usuarios-panel.component'),
    children: [
      {
        path: ':id/p',
        loadComponent: () =>
          import(
            './features2/components/usuario-detalle/usuario-detalle.component'
          ),
      },
      {
        path: 'lista',
        loadComponent: () =>
          import('./features2/components/usuario/usuario.component'),
      },
    ],
  },
  {
    path: 'rol',
    loadComponent: () => import('./features2/components/rol/rol.component'),
  },
  {
    path: '',
    redirectTo: 'usuario/lista',
    pathMatch: 'full',
  },
];
