import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { CalculatorHandleService } from '../../data-access/calculator-handle.service';

@Component({
  selector: 'app-base-interest-form',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule, NgxMaskDirective],
  templateUrl: './base-interest-form.component.html',
  styleUrls: ['./base-interest-form.component.scss', '../../../../ui/components/button/button.scss', '../../../../ui/components/select/select.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNgxMask()]
})
export class BaseInterestFormComponent {

  form: FormGroup = this.fb.group({
    initialValue: [1000, Validators.required],
    monthlyValue: [100, Validators.required],
    interestRate: this.fb.group({
      value: [1, Validators.required],
      type: ['month', Validators.required]
    }),
    period:  this.fb.group({
      value: [1, Validators.required],
      type: ['month', Validators.required]
    }),
    calculatorType: ['compound-interest', Validators.required],
  });

  constructor(private readonly fb: FormBuilder) {}
  private readonly calculatorHandle = inject(CalculatorHandleService);
  onSubmit(): void{
    this.calculatorHandle.compoundInterestHandle(this.form.value.initialValue, this.form.value.monthlyValue, this.form.value.interestRate, this.form.value.period)
  }
  formFieldChangeHandler(event: any): void {
    this.form.patchValue({[event.target.name]: event.target.value}, {onlySelf: true})
  }
}
