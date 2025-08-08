import { Routes } from '@angular/router';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((m) => m.LoginComponent),
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
    pathMatch: 'full',
    canActivate:[authGuard]
  },

  {
    path: 'product-list',
    loadComponent: () =>
      import('./product-list/product-list.component').then(
        (m) => m.ProductListComponent
      ),
    pathMatch: 'full',
  },
  {
    path: 'add-product',
    loadComponent: () =>
      import('./add-product/add-product.component').then(
        (m) => m.AddProductComponent
      ),
    pathMatch: 'full',
  },
  {
    path: 'pipe',
    loadComponent: () =>
      import('./pipe/pipe.component').then((m) => m.PipeComponent),
    canActivate:[authGuard],
  },
  {
    path: 'template-form',
    loadComponent: () =>
      import('./template/template/template.component').then(
        (m) => m.TemplateComponent
      ),
  },
];
