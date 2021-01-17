import { Component, Input, OnInit } from '@angular/core';
import api from 'src/services/api';


@Component({
  selector: 'app-dialog-edicao-descricao-investimento',
  templateUrl: './dialog-edicao-descricao-investimento.component.html',
  styleUrls: ['./dialog-edicao-descricao-investimento.component.less']
})
export class DialogEdicaoDescricaoInvestimentoComponent implements OnInit {

  id:number = 0;
  @Input() descricao:string = '';
  constructor() { }

  async carregarDados(): Promise<void> {
    try {
      let response = await api.get(`/investimentos/investimento/${this.id}`);
      this.descricao = response.data.descricao;
    } catch (error) {
      console.log(error);
    }
  }

  async atualizarDescricao(): Promise<void> {
    const modelo = {
      descricao: this.descricao
    }
    try {
      let response = await api.put(`/investimentos/atualizar/${this.id}`, modelo);
      alert(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  ngOnInit(): void {
    this.carregarDados();
  }

}
