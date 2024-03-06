import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
})
export class CalculadoraPage {
  display: string = '0';
  operator: string = '';
  firstOperand: number = 0;
  waitingForSecondOperand: boolean = false;

  addNumber(num: number) {
    if (this.waitingForSecondOperand) {
      this.display = num.toString();
      this.waitingForSecondOperand = false;
    } else {
      this.display = this.display === '0' ? num.toString() : this.display + num;
    }
  }

  addDecimal() {
    if (!this.display.includes('.')) {
      this.display += '.';
    }
  }

  addOperator(op: string) {
    if (this.firstOperand === 0) {
      this.firstOperand = parseFloat(this.display);
      this.operator = op;
      this.waitingForSecondOperand = true;
    } else {
      this.calculate();
      this.operator = op;
    }
  }

  clear() {
    this.display = '0';
    this.operator = '';
    this.firstOperand = 0;
    this.waitingForSecondOperand = false;
  }

  calculate() {
    if (this.operator && !this.waitingForSecondOperand) {
      const secondOperand = parseFloat(this.display);
      let result = 0;
      switch (this.operator) {
        case '+':
          result = this.firstOperand + secondOperand;
          break;
        case '-':
          result = this.firstOperand - secondOperand;
          break;
        case '*':
          result = this.firstOperand * secondOperand;
          break;
        case '/':
          result = this.firstOperand / secondOperand;
          break;
      }
      this.display = result.toString();
      this.firstOperand = result;
      this.operator = '';
      this.waitingForSecondOperand = true;
    }
  }
}
