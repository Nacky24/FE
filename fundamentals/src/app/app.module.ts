import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BasicComponent} from "./basic.component";
import { WowComponent } from './wow/wow.component';
import {NamesService} from "./names.service";

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    WowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    NamesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
