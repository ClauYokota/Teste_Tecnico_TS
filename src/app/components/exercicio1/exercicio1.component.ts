import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio1',
  templateUrl: './exercicio1.component.html',
  styleUrls: ['./exercicio1.component.css']
})
export class Exercicio1Component implements OnInit {

  soma: number = 0;

  ngOnInit(): void {
    this.calculo();

  }

  calculo() {
    let indice = 13;
    let k = 0;
    let soma = 0;
    while (k < indice) {
      k = k + 1;
      soma = soma + k;
    }
    this.soma = soma;
  }

}
