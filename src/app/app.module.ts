import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { ContrasenasPipe } from './pipes/contrasenas.pipe';
import { DomSanitizerPipe } from './pipes/dom-sanitizer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    ContrasenasPipe,
    DomSanitizerPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
