import { Component, OnInit } from '@angular/core';
import api from 'src/services/api';

@Component({
  selector: 'app-dialog-conta',
  templateUrl: './dialog-conta.component.html',
  styleUrls: ['./dialog-conta.component.less']
})
export class DialogContaComponent implements OnInit {


  listaTiposGastos:Array<String> = [];
  constructor(
    ) { }

    async pegarTipoGastos(): Promise<void> {
      try {
        let response = await api.get('/tipo');
        this.listaTiposGastos = response.data;
        console.log('Tipo gatos lista: ', this.listaTiposGastos);
      } catch (error) {
        console.log(error);
      }
    }
    async cadastrarNovaConta(): Promise<void> {
      try {
        let response = await api.post('/contas/criar', )
      } catch (error) {
        
      }
    }
  ngOnInit(): void {
    this.pegarTipoGastos();
  }

}
