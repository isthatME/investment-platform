import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppShellComponent } from './pages/app-shell/app-shell.component';
export const APP_COMPONENT_IMPORTS = [RouterModule, AppShellComponent];
@Component({
  selector: 'app-root',
  template: `
    <app-shell>
      <router-outlet></router-outlet>
    </app-shell>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
}
