import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkModeToggleComponent } from 'src/app/ui/components/dark-mode-toggle/dark-mode-toggle.component';
@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [CommonModule, DarkModeToggleComponent],
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppShellComponent {}
