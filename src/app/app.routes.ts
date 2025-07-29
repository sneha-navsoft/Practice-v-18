import { Routes } from '@angular/router';



export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then((m) => m.DashboardComponent),
    pathMatch:'full'
  },
  {
    path: 'product-list',
    loadComponent: () =>
      import('./product-list/product-list.component').then((m) => m.ProductListComponent),
    pathMatch:'full'
  },
  {
    path: 'add-product',
    loadComponent: () =>
      import('./add-product/add-product.component').then((m) => m.AddProductComponent),
    pathMatch:'full'
  },
]
