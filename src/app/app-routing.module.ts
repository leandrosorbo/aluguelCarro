import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), canActivate:[AuthGuard] //Authguard trava acesso para home
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'reservation',
    loadChildren: () => import('./reservation/reservation.module').then( m => m.ReservationPageModule), canActivate:[AuthGuard] //Authguard trava acesso para reservas
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'fleet',
    loadChildren: () => import('./fleet/fleet.module').then( m => m.FleetPageModule), canActivate:[AuthGuard] //Authguard trava acesso para frota
  },
  {
    path: 'store',
    loadChildren: () => import('./store/store.module').then( m => m.StorePageModule), canActivate:[AuthGuard] //Authguard trava acesso para lojas
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
