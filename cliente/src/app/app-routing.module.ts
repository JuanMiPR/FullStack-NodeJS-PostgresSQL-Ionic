import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: '/home/adminPage', pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.homeModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'warehouses-list',
    loadChildren: () => import('./pages/warehouses-list/warehouses-list.module').then( m => m.WarehousesListPageModule)
  },
  {
    path: 'add-warehouse',
    loadChildren: () => import('./pages/add-warehouse/add-warehouse.module').then( m => m.AddWarehousePageModule)
  },
  {
    path: 'add-product',
    loadChildren: () => import('./pages/add-product/add-product.module').then( m => m.AddProductPageModule)
  },
  {
    path: 'products-list',
    loadChildren: () => import('./pages/products-list/products-list-Admin.module').then( m => m.ProductsListPageModuleAdmin)
  },
  {
    path: 'add-user',
    loadChildren: () => import('./pages/add-user/add-user.module').then( m => m.AddUserPageModule)
  },
  {
    path: 'update-user',
    loadChildren: () => import('./pages/update-user/update-user.module').then( m => m.UpdateUserPageModule)
  },
  {
    path: 'user-list',
    loadChildren: () => import('./pages/user-list/user-list.module').then( m => m.UserListPageModule)
  },
  {
    path: 'item-details/:id',
    loadChildren: () => import('./pages/item-details/item-details.module').then( m => m.ItemDetailsPageModule)
  },
  {
    path: 'cart-page',
    loadChildren: () => import('./pages/cart-page/cart-page.module').then( m => m.CartPagePageModule)
  },
  {
    path: 'buy-details/:id',
    loadChildren: () => import('./pages/buy-details/buy-details.module').then( m => m.BuyDetailsPageModule)
  },
  {
    path: 'update-product/:id',
    loadChildren: () => import('./pages/update-product/update-product.module').then( m => m.UpdateProductPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
