import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrodatosPage } from './registrodatos.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrodatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrodatosPageRoutingModule {}
