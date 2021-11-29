import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuscripcionPageRoutingModule } from './suscripcion-routing.module';

import { SuscripcionPage } from './suscripcion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SuscripcionPageRoutingModule
  ],
  declarations: [SuscripcionPage]
})
export class SuscripcionPageModule {}
