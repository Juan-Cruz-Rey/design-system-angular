import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'buttons',
    loadComponent: () => import('./components/button-showcase/button-showcase').then(m => m.ButtonShowcase)
  },
  {
    path: '',
    redirectTo: 'buttons',
    pathMatch: 'full'
  }
];
