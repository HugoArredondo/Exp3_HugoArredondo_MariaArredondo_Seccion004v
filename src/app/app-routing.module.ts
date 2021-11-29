import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadosGuard } from './guards/ingresados.guard';
import { NoIngresadosGuard } from './guards/no-ingresados.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate: [IngresadosGuard],
  },
  {
    path: 'tipo',
    loadChildren: () => import('./pages/tipo/tipo.module').then( m => m.TipoPageModule),
    canActivate: [IngresadosGuard],
  },
  {
    path: 'niveles',
    loadChildren: () => import('./pages/niveles/niveles.module').then( m => m.NivelesPageModule),
    canActivate: [IngresadosGuard],
  },
  {
    path: 'metodologia',
    loadChildren: () => import('./pages/metodologia/metodologia.module').then( m => m.MetodologiaPageModule),
    canActivate: [IngresadosGuard],
  },
  {
    path: 'suscripcion',
    loadChildren: () => import('./pages/suscripcion/suscripcion.module').then( m => m.SuscripcionPageModule),
    canActivate: [IngresadosGuard],
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule),
    canActivate: [NoIngresadosGuard],
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [NoIngresadosGuard],
  },
  {
    path: 'info',
    loadChildren: () => import('./pages/info/info.module').then( m => m.InfoPageModule),
    canActivate: [IngresadosGuard],
  },
  {
    path: 'registrodatos',
    loadChildren: () => import('./pages/registrodatos/registrodatos.module').then( m => m.RegistrodatosPageModule),
    canActivate: [IngresadosGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
