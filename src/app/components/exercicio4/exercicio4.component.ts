import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio4',
  templateUrl: './exercicio4.component.html',
  styleUrls: ['./exercicio4.component.css']
})
export class Exercicio4Component implements OnInit {
  faturamento = [
    {
      "estado": "SP",
      "valor": 67836.43
    },
    {
      "estado": "RJ",
      "valor": 36678.66
    },
    {
      "estado": "MG",
      "valor": 29229.88
    },
    {
      "estado": "ES",
      "valor": 27165.48
    },
    {
      "estado": "Outros",
      "valor": 19849.53
    }
  ]

  percentualFaturamento: any = []

  ngOnInit(): void {
    this.percentual();
  }

  percentual() {
    let soma = 0
    for (let i in this.faturamento) {
      soma += this.faturamento[i].valor;
    }

    let percentual: any[] = []
    for (let j = 0; j < this.faturamento.length; j++) {
      percentual.push(this.faturamento[j].valor / soma)
    }
    this.percentualFaturamento = percentual;

  }



}
