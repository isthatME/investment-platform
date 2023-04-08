import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-compound-interest',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './compound-interest.component.html',
  styleUrls: ['./compound-interest.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompoundInterestComponent {

}
