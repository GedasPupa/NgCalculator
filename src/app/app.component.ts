import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'NgCalculator';
  text = 'Placeholder text...';
  number1 = 0;
  number2 = 0;
  output = 0;

  sum() {
    this.output = this.number1 + this.number2;
  }
  sub() {
    this.output = this.number1 - this.number2;
  }
  mul() {
    this.output = this.number1 * this.number2;
  }
  div() {
    this.output = this.number1 / this.number2;
  }
}

//      <!-- Dvikryptis: -->
// <input [(ngModel)]='text'>
// <p>{{ text }}</p>
// <!-- 2 vienkrypičai -->
// <input (input)="userInput($event)" [value]="text">
// <p>{{ text }}</p>
