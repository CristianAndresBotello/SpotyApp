import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ArtistaComponent } from './artista/artista.component';
import { BuscarComponent } from './buscar/buscar.component';
import { ChatComponent } from './chat/chat.component';
import { MainComponent } from './main/main.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { SharedModule } from '../../components/shared/shared.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent,
    ArtistaComponent,
    BuscarComponent,
    ChatComponent,
    MainComponent,
    TarjetasComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
