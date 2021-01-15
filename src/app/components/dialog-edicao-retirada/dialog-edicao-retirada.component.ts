import { Component, Input, OnInit } from '@angular/core';
import api from 'src/services/api';

@Component({
  selector: 'app-dialog-edicao-retirada',
  templateUrl: './dialog-edicao-retirada.component.html',
  styleUrls: ['./dialog-edicao-retirada.component.less']
})
export class DialogEdicaoRetiradaComponent implements OnInit {

  @Input() descricao: string = '';
  @Input() id: number = 0;
  constructor() { }

  async carregarDados(_id: number): Promise<void> {
    try {
      let res = await api.get(`retiradas/retirada/${_id}`);
      this.descricao = res.data.descricao;
    } catch (error) {
      console.log(error);
    }
  }
  async atualizarDescricao(): Promise<void> {
    let descricaoAtualizada = {
      descricao: this.descricao
    }
    try {
      let res = await api.put(`/retiradas/atualizar/${this.id}`, descricaoAtualizada);
      alert(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  ngOnInit(): void {
    this.carregarDados(this.id);
  }

}
