import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LetterOpeningComponent } from './pages/letter-opening/letter-opening.component';
import { WeddingLandingComponent } from './pages/wedding-landing/wedding-landing.component';

@NgModule({
  declarations: [
    AppComponent,
    LetterOpeningComponent,
    WeddingLandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
