import { CommonModule, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  imports: [CommonModule, MatIconModule],
  selector: 'ui-dark-mode-toggle',
  template: `
    <div class="dark-mode-toggle" (click)="toggleTheme()">
      <mat-icon
        aria-hidden="false"
        aria-label="Example home icon"
        class="material-symbols-outlined"
        fontIcon="dark_mode"
      ></mat-icon>
    </div>
  `,
  styleUrls: ['dark-mode-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DarkModeToggleComponent {
  constructor(@Inject(DOCUMENT) private document: Document) {}
  toggleTheme(): void {
    this.document.body.classList.toggle('dark');
  }
}
