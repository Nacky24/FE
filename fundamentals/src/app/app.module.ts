import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BasicComponent} from "./basic.component";
import {NamesService} from "./names.service";
import { FaviconComponent } from './favicon/favicon.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    FaviconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    NamesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
