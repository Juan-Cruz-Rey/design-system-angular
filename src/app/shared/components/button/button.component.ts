import { Component, ViewEncapsulation, output, input } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatButton, MatIconButton } from '@angular/material/button';
import { ButtonType, ButtonUI } from './button.enum';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [MatProgressSpinner, MatButton, MatIconButton, NgTemplateOutlet],
  templateUrl: './button.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  readonly typeUI = input<ButtonUI>(ButtonUI.primary);
  readonly type = input<ButtonType>(ButtonType.button);
  readonly disabled = input(false);
  readonly loading = input(false);
  readonly customClasses = input<string>('');
  readonly clickEvent = output<void>();

  buttonTypeUI = ButtonUI;
  buttonType = ButtonType;

  private readonly directiveMap = new Map<ButtonUI, string>([
    [ButtonUI.icon, 'mat-icon-button'],
    [ButtonUI.elevated, 'mat-raised-button'],
    [ButtonUI.outlined, 'mat-stroked-button'],
    [ButtonUI.secondary, 'mat-stroked-button'],
    [ButtonUI.text, 'mat-button'],
    [ButtonUI.tertiary, 'mat-button'],
    [ButtonUI.primary, 'mat-flat-button'],
    [ButtonUI.filled, 'mat-flat-button'],
    [ButtonUI.tonal, 'mat-flat-button'],
  ]);

  private readonly classMap = new Map<ButtonUI, string>([
    [ButtonUI.primary, 'primary'],
    [ButtonUI.secondary, 'secondary'],
    [ButtonUI.tertiary, 'tertiary'],
    [ButtonUI.text, 'text'],
    [ButtonUI.elevated, 'elevated'],
    [ButtonUI.outlined, 'outlined'],
    [ButtonUI.filled, 'filled'],
    [ButtonUI.tonal, 'mat-tonal-button'],
    [ButtonUI.icon, 'icon'],
  ]);

  get matDirective(): string {
    return this.directiveMap.get(this.typeUI()) ?? 'mat-flat-button';
  }

  get cssClass(): string {
    return this.classMap.get(this.typeUI()) ?? 'primary';
  }

  onClick() {
    if (!this.loading() && !this.disabled()) {
      this.clickEvent.emit();
    }
  }
}
