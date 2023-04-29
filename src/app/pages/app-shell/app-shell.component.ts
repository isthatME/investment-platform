import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkModeToggleComponent } from 'src/app/ui/components/dark-mode-toggle/dark-mode-toggle.component';
import { BannerComponent } from "../../ui/components/banner/banner.component";
import { CompoundInterestFormComponent } from '../interest-calculator/ui/compound-interest-form/compound-interest-form.component';
@Component({
    selector: 'app-shell',
    standalone: true,
    templateUrl: './app-shell.component.html',
    styleUrls: ['./app-shell.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, DarkModeToggleComponent, BannerComponent, CompoundInterestFormComponent]
})
export class AppShellComponent {}
