import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LivreComponent } from './biblio/livre/livre.component';
import { ListlivresComponent } from './biblio/listlivres/listlivres.component';

@NgModule({
  declarations: [
    AppComponent,
    LivreComponent,
    ListlivresComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
