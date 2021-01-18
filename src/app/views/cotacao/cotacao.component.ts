import { Component, OnInit } from '@angular/core';
import apiCotacao from 'src/services/apiCotacao';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-cotacao',
  templateUrl: './cotacao.component.html',
  styleUrls: ['./cotacao.component.less']
})
export class CotacaoComponent implements OnInit {

  moedas:Array<any> = [];
  constructor(
    private toastService: ToastService
  ) { }

  async carregarMoedas(): Promise<void> {
    try {
      let response = await apiCotacao.get('all');
      for(let i in response.data) {
        this.moedas.push(response.data[i]);
      }
    } catch (error) {
      this.toastService.error('Não foi possível carregar os dados das cotações');
    }
  }
  ngOnInit(): void {
    this.carregarMoedas();
  }

}
