import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Exercicio1Component } from '../exercicio1/exercicio1.component';
import { Exercicio2Component } from '../exercicio2/exercicio2.component';
import { Exercicio3Component } from '../exercicio3/exercicio3.component';
import { Exercicio4Component } from '../exercicio4/exercicio4.component';
import { Exercicio5Component } from '../exercicio5/exercicio5.component';

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.component.html',
  styleUrls: ['./perguntas.component.css']
})
export class PerguntasComponent {

  constructor(
    private dialog: MatDialog
  ) { }

  open1(): void {
    const dialog = this.dialog.open(Exercicio1Component);
    dialog.afterClosed().subscribe(
      (boolean) => {
        this.dialog.closeAll();
      }
    )
  }
  open2(): void {
    const dialog = this.dialog.open(Exercicio2Component, {
      width: '500px',
      height: 'auto'
    });
    dialog.afterClosed().subscribe(
      (boolean) => {
        this.dialog.closeAll();
      }
    )
  }
  open3(): void {
    const dialog = this.dialog.open(Exercicio3Component);
    dialog.afterClosed().subscribe(
      (boolean) => {
        this.dialog.closeAll();
      }
    )
  }
  open4(): void {
    const dialog = this.dialog.open(Exercicio4Component, {
      width: '250px',
      height: 'auto'
    });
    dialog.afterClosed().subscribe(
      (boolean) => {
        this.dialog.closeAll();
      }
    )
  }
  open5(): void {
    const dialog = this.dialog.open(Exercicio5Component, {
      width: '500px',
      height: 'auto'
    });
    dialog.afterClosed().subscribe(
      (boolean) => {
        this.dialog.closeAll();
      }
    )
  }

}
