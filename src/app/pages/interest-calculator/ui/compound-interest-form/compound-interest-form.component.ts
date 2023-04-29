import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-compound-interest-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgxMaskDirective, FormsModule],
  templateUrl: './compound-interest-form.component.html',
  styleUrls: ['./compound-interest-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNgxMask()]
})
export class CompoundInterestFormComponent implements OnInit {
  form!: FormGroup;
  constructor(private readonly fb: FormBuilder) {}
  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.fb.group({
      value: [null, Validators.required]
    });
  }
}
