import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'ui-banner',
  template: `
    <div class="banner-wrapper">
        <article>
            <h1>Calculadora de investimentos</h1>
            <h2>Calcule quanto os seus investimentos irão render. O cálculo é feito utilizando a formula de juros compostos.</h2>
        </article>
        <div class="image-wrapper">
        <img src="../../../assets/svg-icons/calculator.svg" alt="calculator-image"/>
        </div>
    </div>
  `,
  styleUrls: ['banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent {
}
