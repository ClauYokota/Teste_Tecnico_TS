import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-exercicio2',
  templateUrl: './exercicio2.component.html',
  styleUrls: ['./exercicio2.component.css']
})
export class Exercicio2Component {
  formValor: FormGroup = this.fb.group({
    valor: ['', [Validators.required]]
  })

  resposta: string = '';

  constructor(
    private fb: FormBuilder
  ) { }

  check() {
    let valor1 = 0;
    let valor2 = 1;
    let v = 0;
    let valorEscolhido = this.formValor.value.valor
    while (v < valorEscolhido) {
      v = valor1 + valor2;
      valor1 = valor2;
      valor2 = v;
      if (valorEscolhido === v) {
        this.resposta = `O número ${valorEscolhido} pertence à sequência de Fibonacci.`
      } else {
        this.resposta = `O número ${valorEscolhido} não pertence à sequência de Fibonacci`
      }
    }
  }
}
