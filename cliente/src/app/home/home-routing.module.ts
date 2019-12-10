import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { home } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: home,
    children: [
      {
        path: 'productListPage',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../productListPage/productListPage.module').then(m => m.productListPageModule)
          }
        ]
      },
      {
        path: 'buyListPage',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../buyListPage/buyListPage.module').then(m => m.buyListPageModule)
          }
        ]
      },
      {
        path: 'adminPage',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../adminPage/adminPage.module').then(m => m.adminPageModule)
          }
        ]
      },
      {
        path: 'profilePage',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../profilePage/profilePage.module').then(m => m.profilePageModule)
          }
        ]
      },
      {
        path: 'home',
        redirectTo: '/home/productListPage',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'home',
    redirectTo: '/home/productListPage',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class homeRoutingModule { }
