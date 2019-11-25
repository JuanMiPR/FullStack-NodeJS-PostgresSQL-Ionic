import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
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
        path: 'buyPage',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../buyPage/buyPage.module').then(m => m.buyPageModule)
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
      },{
        path: 'providersPage',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../providersPage/providersPage.module').then(m => m.providersPageModule)
          }
        ]
      },{
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
        path: '',
        redirectTo: '/tabs/productListPage',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/productListPage',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
