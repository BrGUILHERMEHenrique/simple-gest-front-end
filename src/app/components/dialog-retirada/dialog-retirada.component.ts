import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { RetiradaDto } from 'src/models/DTO/RetiradaDto.model';
import { Usuario } from 'src/models/Usuario.model';
import api from 'src/services/api';

@Component({
  selector: 'app-dialog-retirada',
  templateUrl: './dialog-retirada.component.html',
  styleUrls: ['./dialog-retirada.component.less']
})
export class DialogRetiradaComponent implements OnInit {

  @Input() descricao:String = '';
  @Input() tipoGasto:String = '';
  @Input() quantia:Number = 0;

  usuarioSalvo = window.localStorage.getItem('usuario');
  usuario:Usuario = JSON.parse(this.usuarioSalvo !== null ? this.usuarioSalvo : '');
  // usuario:Usuario = new Usuario(1, "Guilherme", "açlfgha@gmail.com", "senha", 2000);
  listaTiposGastos:Array<String> = [];

  constructor() { }

  async carregarListTiposGastos(): Promise<void> {
    try {
      let response = await api.get('/tipo');
      this.listaTiposGastos = response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async cadastrarNovaRetirada() :Promise<void> {
    let retirada:RetiradaDto = new RetiradaDto(this.descricao, this.tipoGasto, this.quantia, this.usuario.id)
    try {
      await api.post('/retiradas/retirar', retirada);
      console.log("Retirada: ", retirada)
      console.log('Funcionando retirada');
    } catch (error) {
      console.log(error);
    }
  }
  ngOnInit(): void {
    this.carregarListTiposGastos();
  }

}
