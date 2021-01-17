import { APP_INITIALIZER, Component, Input, OnInit } from '@angular/core';
import api from 'src/services/api';


@Component({
  selector: 'app-dialog-edicao-variavel',
  templateUrl: './dialog-edicao-variavel.component.html',
  styleUrls: ['./dialog-edicao-variavel.component.less']
})
export class DialogEdicaoVariavelComponent implements OnInit {

  id:number = 0;
  @Input() descricao:string = '';
  @Input() quantia:number = 0;

  async preencherDados(): Promise<void> {
    try {
      let response = await api.get(`variaveis/variavel/${this.id}`);
      this.descricao = response.data.descricacao;
      this.quantia = response.data.quantia;
    } catch (error) {
      console.log(error);
    }
  }

  async atualizarDados(): Promise<void> {
    const modelo = {
      descricacao: this.descricao,
      quantia: this.quantia
    }
    try {
      let response = await api.put(`variaveis/atualizar/${this.id}`, modelo);
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
