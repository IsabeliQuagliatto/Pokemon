import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PokemonComponent } from './pokemon-component/pokemon-component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [App, PokemonComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
  ],

  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
  ],

  bootstrap: [App],
})
export class AppModule {}
