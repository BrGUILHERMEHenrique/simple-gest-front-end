import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/models/Usuario.model';
import api from 'src/services/api';


@Component({
  selector: 'app-dialog-despesa-variavel',
  templateUrl: './dialog-despesa-variavel.component.html',
  styleUrls: ['./dialog-despesa-variavel.component.less']
})
export class DialogDespesaVariavelComponent implements OnInit {

  usuario:Usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
  @Input() descricao:string = '';
  @Input() quantia:number = 0;
  
  constructor() { }

  async criarDespesa(): Promise<void> {
    const modelo = {
      usuario: this.usuario.id,
      descricacao: this.descricao,
      quantia: this.quantia
    }
    try {
      let response = await api.post('variaveis/criar', modelo);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  ngOnInit(): void {
  }

}
