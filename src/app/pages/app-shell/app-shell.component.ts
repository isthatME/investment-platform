import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkModeToggleComponent } from 'src/app/ui/components/dark-mode-toggle/dark-mode-toggle.component';
import { BannerComponent } from "../../ui/components/banner/banner.component";
import { BaseInterestFormComponent } from '../interest-calculator/ui/base-interest-form/base-interest-form.component';
@Component({
    selector: 'app-shell',
    standalone: true,
    templateUrl: './app-shell.component.html',
    styleUrls: ['./app-shell.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, DarkModeToggleComponent, BannerComponent, BaseInterestFormComponent]
})
export class AppShellComponent {}
