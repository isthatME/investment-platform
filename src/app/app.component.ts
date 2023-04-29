import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppShellComponent } from './pages/app-shell/app-shell.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
export const APP_COMPONENT_IMPORTS = [RouterModule, AppShellComponent];
@Component({
  selector: 'app-root',
  template: `
    <app-shell>
      <router-outlet></router-outlet>
    </app-shell>
  `,
  standalone: true,
  imports: [
    BrowserModule,
    APP_COMPONENT_IMPORTS,
    BrowserAnimationsModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
}
