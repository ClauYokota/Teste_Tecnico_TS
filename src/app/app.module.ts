import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Exercicio1Component } from './components/exercicio1/exercicio1.component';
import { Exercicio2Component } from './components/exercicio2/exercicio2.component';
import { Exercicio3Component } from './components/exercicio3/exercicio3.component';
import { Exercicio4Component } from './components/exercicio4/exercicio4.component';
import { Exercicio5Component } from './components/exercicio5/exercicio5.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MaterialModule } from './material/material.module';
import { PerguntasComponent } from './components/perguntas/perguntas.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Exercicio1Component,
    Exercicio2Component,
    Exercicio3Component,
    Exercicio4Component,
    Exercicio5Component,
    PerguntasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
