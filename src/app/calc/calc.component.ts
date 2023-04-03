import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {
  num1: number;
  num2: number;
  soma: number;
  resultado: number = 0;

  somar() {
    this.resultado = this.num1 + this.num2;
  }
  subtrair() {
    this.resultado = this.num1 - this.num2;
  }
  multiplicar() {
    this.resultado = this.num1 * this.num2;
  }
  dividir() {
    this.resultado = this.num1 / this.num2;
  }
}
