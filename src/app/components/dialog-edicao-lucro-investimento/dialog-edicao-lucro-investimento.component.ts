import { Component, OnInit } from '@angular/core';
import api from 'src/services/api';


@Component({
  selector: 'app-dialog-edicao-lucro-investimento',
  templateUrl: './dialog-edicao-lucro-investimento.component.html',
  styleUrls: ['./dialog-edicao-lucro-investimento.component.less']
})
export class DialogEdicaoLucroInvestimentoComponent implements OnInit {

  id:number = 0;
  lucro:number = 0;
  constructor() { }

  async carregarDados(): Promise<void> {
    try {
      let response = await api.get(`investimentos/investimento/${this.id}`);
      this.lucro = response.data.lucroAtual;
    } catch (error) {
      console.log(error);
    }
  }

  async atualizarLucro(): Promise<void> {
    try {
      let response = await api.put(`investimentos/atualizar/lucro/${this.id}?quantia=${this.lucro}`);
      alert(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  ngOnInit(): void {
    this.carregarDados();
  }

}
