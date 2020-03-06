import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShippersComponent } from './shippers/shippers.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'warehouses',
    loadChildren: () => import('./warehouse/warehouse.module').then(m => m.WarehouseModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShipperRoutingModule { }
