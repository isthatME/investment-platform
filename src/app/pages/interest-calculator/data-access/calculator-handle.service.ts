import { Injectable } from '@angular/core';
interface calculationResponse {
  totalAmount: number;
  interestAmount: number;
  totalAmountWithInterest: number;
}

@Injectable({
  providedIn: 'root',
})
export class CalculatorHandleService {
  compoundInterestHandle(
    initialValue: number,
    monthlyValue: number,
    interestRate: { value: number; type: string },
    period: { value: number; type: string }
  ): calculationResponse {
    let totalAmount = initialValue;
    let interestAmount = 0;
    const interestRateValue =
      interestRate.type === 'month'
        ? interestRate.value / 100
        : (interestRate.value / 12) / 100;
    const periodValue =
      period.type === 'month' ? period.value : period.value * 12;


    for (let i = 0; i < periodValue; i++) {
      interestAmount = initialValue * Math.pow(1 + interestRateValue, periodValue) - initialValue;
      totalAmount += monthlyValue + (i === 0 ? 0 : interestAmount);
      console.log(interestAmount, totalAmount)
    }

    return {
      totalAmount: totalAmount,
      interestAmount: interestAmount,
      totalAmountWithInterest: totalAmount + interestAmount,
    };
  }
}
