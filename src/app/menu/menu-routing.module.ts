import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule),
        canActivate: [AuthGuard] //Authguard trava acesso para home
      },
      {
        path: 'reservation',
        loadChildren: () => import('../reservation/reservation.module').then(m => m.ReservationPageModule),
        canActivate: [AuthGuard] //Authguard trava acesso para reservas
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'fleet',
        loadChildren: () => import('../fleet/fleet.module').then(m => m.FleetPageModule),
        canActivate: [AuthGuard] //Authguard trava acesso para frota
      },
      {
        path: 'store',
        loadChildren: () => import('../store/store.module').then(m => m.StorePageModule),
        canActivate: [AuthGuard] //Authguard trava acesso para lojas
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule { }
