import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


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
    path: 'dealers',
    loadChildren: () => import('./dealer/dealer.module').then(m => m.DealerModule)
  },
  {
    path: 'warehouses',
    loadChildren: () => import('./warehouse/warehouse.module').then(m => m.WarehouseModule)
  },
  {
    path: 'drivers',
    loadChildren: () => import('./driver/driver.module').then(m => m.DriverModule)
  },
  {
    path: 'trips',
    loadChildren: () => import('./trip/trip.module').then(m => m.TripModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
  },
  {
    path: 'reports',
    loadChildren: () => import('./reporting/reporting.module').then(m => m.ReportingModule)
  },
  {
    path: 'vehicles',
    loadChildren: () => import('./vehicle/vehicle.module').then(m => m.VehicleModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
