import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { evaluate } from 'mathjs'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
});

export class Tab2Page {

  public calculo = '';  //variavel de calculo vazia
  public resultado: string; //variavel que obriga o resultado a aparecer
  private ponto = false; //variavel bollean do ponto
  public result: number; 

  private operacoes = ['+', '-', '*', '/'];

  constructor(public alertController: AlertController) { }


  //metodo que o usario escolhe um numero
  adicionarNumero(valor: string) {
    if(this.resultado){
      this.apagarTudo();
    }
    this.calculo = this.calculo + valor;
  }
   
  //metodo que dá para add ponto ao numero
  adicionarPonto() {

    if (this.ponto) {
      return; // "return vazio" quer dixer que não vai executar mais nenhuma operação
    }


    this.calculo += ".";
    this.ponto = true;
  }

  //metodo que o usuario faz a operação que quiser
  adicionarOperacao(operador: string) {
    if (this.resultado) {
      this.calculo = this.resultado.toString();
      this.resultado = null;
    }


    const ultimo = this.calculo.slice(-1);
    if (this.operacoes.indexOf(ultimo) > -1) {
      return;
    }

    this.calculo += operador;
    this.ponto = false;
  }

  //metodo que apaga a operaçao 
  public apagarTudo() {
    this.calculo = '';
    this.resultado = null;
    this.ponto = false;
  }

  resultadoTotal() {

  }

  //metodo que apaga o ultimo numero digitado pelo usuario
  apagarUltimo() {
    const ultimo = this.calculo.slice(-1);
    if (ultimo == '.') {
      this.ponto = false;
    }

    this.calculo = this.calculo.substring(0, (this.calculo.length - 1));
  }

  //metodo que calcula o resultado da operacao
  calcularResultado() {
    try {
      this.resultado = evaluate(this.calculo);
    }catch (e) {
      this.resultado = '';
      this.presentAlert('ERRO!!','Cáculo inválido, verifique!'); //mensagem que aparecerá no alert
    }
  } 

  //metodo que cria o alerta
  async presentAlert(titulo: string, mensagem: string) {
    const alert = await this.alertController.create({

      header: titulo,
      message: mensagem,
      buttons: ['OK']
    });

    await alert.present();
}
}
