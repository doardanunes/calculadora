import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public valor1: number; //variavel do primeiro valor
  public valor2: number; //variavel do segundo valor
  public resultado: number; //variavel que obriga o resultado a aparecer
  public adicao: number; // variavel que ira fazer a soma das operacoes
  public multiplicacao: number; // variavel que ira fazer a mutiplicar das operacoes
  public subtracao: number; // variavel que ira fazer a subtracao das operacoes
  public divisao: number; // variavel que ira fazer a divisao das operacoes
  public limpa: null; // variavel que ira limpar a operacao feita


  // metodo para realizar a operacao de soma
  public somar(){
    let adicao = this.valor1 + this.valor2;
    this.adicao = adicao;
  }

  //metodo para realizar a operacao de soma
  public multiplicar(){ 
    let multiplicacao = this.valor1 * this.valor2;
    this.multiplicacao = multiplicacao;
  }
  //metodo para realizar a operacao de subtração
  public subtrair(){
    let subtracao = this.valor1 - this.valor2;
    this.subtracao = subtracao;

  }
  //metodo para realizar a operacao de divisao
  public dividir(){
    let divisao = this.valor1 / this.valor2;
    this.divisao = divisao;

  }
   
  //metodo para limpar a calculadora
  public limpar(){
    let limpa = this.limpa;
    this.valor1 = limpa
    this.valor2 = limpa
    this.adicao = limpa
    this.multiplicacao = limpa
    this.subtracao = limpa
    this.divisao = limpa;
  }


}
