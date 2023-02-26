import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkModeToggleComponent } from 'src/app/ui/components/dark-mode-toggle/dark-mode-toggle.component';
import { BannerComponent } from "../ui/components/banner/banner.component";
@Component({
    selector: 'app-shell',
    standalone: true,
    templateUrl: './app-shell.component.html',
    styleUrls: ['./app-shell.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, DarkModeToggleComponent, BannerComponent]
})
export class AppShellComponent {}
