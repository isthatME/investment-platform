import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-compound-interest-form',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule, NgxMaskDirective],
  templateUrl: './compound-interest-form.component.html',
  styleUrls: ['./compound-interest-form.component.scss', '../../../../ui/components/button/button.scss', '../../../../ui/components/select/select.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNgxMask()]
})
export class CompoundInterestFormComponent {

  form: FormGroup = this.fb.group({
    initialValue: [null, Validators.required],
    monthlyValue: [null, Validators.required],
    interestRate: [null, Validators.required],
    period: [null, Validators.required]
  });

  constructor(private readonly fb: FormBuilder) {}

  onSubmit(): void{
    // form submission logic
  }
}

