import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { evaluate } from 'mathjs'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public calculo = '';
  public resultado: string;
  private ponto = false;
  public result: number;

  private operacoes = ['+', '-', '*', '/'];

  constructor(public alertController: AlertController) { }

  adicionarNumero(valor: string) {
    if(this.resultado){
      this.apagarTudo();
    }
    this.calculo = this.calculo + valor;
  }

  adicionarPonto() {

    if (this.ponto) {
      return;
    }


    this.calculo += ".";
    this.ponto = true;
  }

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

  public apagarTudo() {
    this.calculo = '';
    this.resultado = null;
    this.ponto = false;
  }

  resultadoTotal() {

  }

  apagarUltimo() {
    const ultimo = this.calculo.slice(-1);
    if (ultimo == '.') {
      this.ponto = false;
    }

    this.calculo = this.calculo.substring(0, (this.calculo.length - 1));
  }

  calcularResultado() {
    try {
      this.resultado = evaluate(this.calculo);
    }catch (e) {
      this.resultado = '';
      this.presentAlert('ERRO!!','Cáculo inválido, verifique!');
    }
  } 
  async presentAlert(titulo: string, mensagem: string) {
    const alert = await this.alertController.create({

      header: titulo,
      message: mensagem,
      buttons: ['OK']
    });

    await alert.present();
}
}
