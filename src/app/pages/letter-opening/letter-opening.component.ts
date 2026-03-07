import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-letter-opening',
  templateUrl: './letter-opening.component.html',
  styleUrls: ['./letter-opening.component.scss']
})
export class LetterOpeningComponent {

  isOpening = false;

  constructor(private router: Router) {}

  openEnvelope() {
    // Prevent multiple clicks
    if (this.isOpening) return;

    this.isOpening = true;

    // 1️⃣ Wait for flap opening animation (2 sec)
    setTimeout(() => {

      // 2️⃣ Add fade-out effect
      document.body.classList.add('fade-out');

      // 3️⃣ After fade animation, navigate
      setTimeout(() => {
        this.router.navigate(['/wedding']);
      }, 800);

    }, 2000);
  }

}