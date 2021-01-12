import { Component, Input, OnInit } from '@angular/core';
import { DateAdapter, MatNativeDateModule } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { ContaDtoCadastro } from 'src/models/DTO/ContaDtoCadastro.model';
import { Usuario } from 'src/models/Usuario.model';
import api from 'src/services/api';

@Component({
  selector: 'app-dialog-conta',
  templateUrl: './dialog-conta.component.html',
  styleUrls: ['./dialog-conta.component.less'],
  providers: [
    MatNativeDateModule,
    MatDatepicker,
  ]
})
export class DialogContaComponent implements OnInit {

  @Input() descricao:String = '';
  @Input() dataVencimento:Date = new Date();
  @Input() tipoGasto:String = '';
  @Input() preco:Number = 0;
  usuarioSalvo = window.localStorage.getItem('usuario');
  // usuario:Usuario = JSON.parse(this.usuarioSalvo !== null ? this.usuarioSalvo : '');
  usuario:Usuario = new Usuario(1, "Guilherme", "açlfgha@gmail.com", "senha");
  listaTiposGastos:Array<String> = [];
  constructor(
    ) { }

    async pegarTipoGastos(): Promise<void> {
      try {
        let response = await api.get('/tipo');
        this.listaTiposGastos = response.data;
      } catch (error) {
        console.log(error);
      }
    }
    async cadastrarNovaConta(): Promise<void> {
      // let data:String = `${this.dataVencimento.getFullYear()}-${this.dataVencimento.getMonth()}-${this.dataVencimento.getDate()}`;
      const conta = new ContaDtoCadastro(this.descricao, this.usuario.id, this.tipoGasto, this.preco, this.dataVencimento);
      try {
        let response = await api.post('/contas/criar', conta);
        console.log(conta);
      } catch (error) {
        console.log(error);
      }
    }
  ngOnInit(): void {
    this.pegarTipoGastos();
  }

}
