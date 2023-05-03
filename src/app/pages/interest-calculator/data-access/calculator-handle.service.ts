import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorHandleService {
  compoundInterestHandle(
    initialValue: number,
    monthlyValue: number,
    interestRate: { value: number; type: string },
    period: { value: number; type: string }
  ): number {
    return (initialValue * (Math.pow((1 + interestRate.value / 100), period.value))) - initialValue;
  }
}
