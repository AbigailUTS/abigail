import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JuegodememoriaPageRoutingModule } from './juegodememoria-routing.module';

import { JuegodememoriaPage } from './juegodememoria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JuegodememoriaPageRoutingModule
  ],
  declarations: [JuegodememoriaPage]
})
export class JuegodememoriaPageModule {}
