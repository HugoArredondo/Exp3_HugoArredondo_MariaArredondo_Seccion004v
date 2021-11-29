import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MetodologiaPageRoutingModule } from './metodologia-routing.module';

import { MetodologiaPage } from './metodologia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MetodologiaPageRoutingModule
  ],
  declarations: [MetodologiaPage]
})
export class MetodologiaPageModule {}
