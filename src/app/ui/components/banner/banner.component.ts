import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'ui-banner',
  template: `
    <div class="banner-wrapper">
        <article>
            <h1>Calcule seus investimentos</h1>
            <h2>Maximize seu Potencial de lucro: Desbloqueie o Poder dos Juros Compostos com Nossa Ferramenta Avançada de Cálculo de Juros Compostos</h2>
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