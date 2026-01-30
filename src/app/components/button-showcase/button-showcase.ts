import { Component, signal, effect } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { ButtonUI } from '../../shared/components/button/button.enum';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-button-showcase',
  imports: [ButtonComponent, MatSlideToggle],
  templateUrl: './button-showcase.html',
  styleUrl: './button-showcase.scss',
})
export class ButtonShowcase {
  buttonTypeUI = ButtonUI;
  isDarkMode = signal(false);

  constructor() {
    effect(() => {
      if (this.isDarkMode()) {
        document.documentElement.classList.add('dark-theme');
      } else {
        document.documentElement.classList.remove('dark-theme');
      }
    });
  }

  toggleTheme() {
    this.isDarkMode.set(!this.isDarkMode());
  }
}
