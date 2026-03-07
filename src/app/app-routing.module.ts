import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LetterOpeningComponent } from './pages/letter-opening/letter-opening.component';
import { WeddingLandingComponent } from './pages/wedding-landing/wedding-landing.component';

const routes: Routes = [
  { path: '', component: LetterOpeningComponent },
  { path: 'wedding', component: WeddingLandingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}