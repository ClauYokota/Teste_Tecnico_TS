import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-exercicio5',
  templateUrl: './exercicio5.component.html',
  styleUrls: ['./exercicio5.component.css']
})
export class Exercicio5Component {
  formPalavra: FormGroup = this.fb.group({
    palavra: ['', [Validators.required]]
  })

  resposta: any = ''

  constructor(
    private fb: FormBuilder
  ) { }

  revert() {
    let palavra = this.formPalavra.value.palavra;
    let palavraArray = palavra.split('')
    let palavraReversa = ''
    
    for (let i = palavra.length - 1; i >= 0; i--) {
      palavraReversa += palavraArray[i]
    }

    this.resposta = palavraReversa
  }
}
