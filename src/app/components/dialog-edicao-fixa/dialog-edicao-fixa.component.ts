import { Component, Input, OnInit } from '@angular/core';
import api from 'src/services/api';

@Component({
  selector: 'app-dialog-edicao-fixa',
  templateUrl: './dialog-edicao-fixa.component.html',
  styleUrls: ['./dialog-edicao-fixa.component.less']
})
export class DialogEdicaoFixaComponent implements OnInit {

  id:number = 0;
  @Input() descricao:string = '';
  @Input() quantia:number = 0;

  async preencherDados(): Promise<void> {
    try {
      let response = await api.get(`fixas/fixa/${this.id}`);
      this.descricao = response.data.descricao;
      this.quantia = response.data.quantia;
    } catch (error) {
      console.log(error);
    }
  }

  async atualizarDados(): Promise<void> {
    const modelo = {
      descricao: this.descricao,
      quantia: this.quantia
    }
    try {
      let response = await api.put(`fixas/atualizar/${this.id}`, modelo);
      alert(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  constructor() { }

  ngOnInit(): void {
    this.preencherDados();
  }

}
