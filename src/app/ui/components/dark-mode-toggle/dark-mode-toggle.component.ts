import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

@Component({
  standalone: true,
  selector: 'ui-dark-mode-toggle',
  template: `
    <div class="dark-mode-toggle" (click)="toggleTheme()">
  
    </div>
  `,
  styleUrls: ['dark-mode-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DarkModeToggleComponent {
  constructor(@Inject(DOCUMENT) private document: Document) {}
  readonly toggleTheme = () => this.document.body.classList.toggle('dark')
}
