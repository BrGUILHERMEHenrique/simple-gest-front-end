import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/models/Usuario.model';
import api from 'src/services/api';


@Component({
  selector: 'app-dialog-investimento',
  templateUrl: './dialog-investimento.component.html',
  styleUrls: ['./dialog-investimento.component.less']
})
export class DialogInvestimentoComponent implements OnInit {

  usuario:Usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
  @Input() descricao:string = '';
  @Input() valorRetirada:number = 0;

  async criarInvestimento(): Promise<void> {
    if(!this.descricao || this.valorRetirada === 0) {
      alert("Por favor preencha todos os campos");
      return;
    }
    let modelo = {
      usuario: this.usuario.id,
      descricao: this.descricao,
      valorRetirada: this.valorRetirada
    }
    try {
      let response = await api.post('investimentos/criar', modelo);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
