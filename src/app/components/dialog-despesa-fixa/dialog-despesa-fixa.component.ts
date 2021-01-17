import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/models/Usuario.model';
import api from 'src/services/api';


@Component({
  selector: 'app-dialog-despesa-fixa',
  templateUrl: './dialog-despesa-fixa.component.html',
  styleUrls: ['./dialog-despesa-fixa.component.less']
})
export class DialogDespesaFixaComponent implements OnInit {

  usuario:Usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
  @Input() descricao:string = '';
  @Input() quantia:number = 0;
  constructor() { }

  async criarDespesa(): Promise<void> {
    const modelo = {
      usuario: this.usuario.id,
      descricao: this.descricao,
      quantia: this.quantia
    }
    try {
      let response = await api.post('fixas/criar', modelo);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  ngOnInit(): void {
  }

}
