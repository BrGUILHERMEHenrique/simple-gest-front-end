import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/models/Usuario.model';
import api from 'src/services/api';

@Component({
  selector: 'app-dialog-montante',
  templateUrl: './dialog-montante.component.html',
  styleUrls: ['./dialog-montante.component.less']
})
export class DialogMontanteComponent implements OnInit {

  tipos:string[] = [];
  @Input() tipoEntrada:string = '';
  @Input() quantia:number = 0;
  @Input() descricao:string = '';


  usuarioSalvo = window.localStorage.getItem('usuario');
  usuario:Usuario = JSON.parse(this.usuarioSalvo !== null ? this.usuarioSalvo : '{}');
  constructor() { }

  async adicionarMontante(): Promise<void> {
    const modelo = {
      usuario: this.usuario.id,
      descricao: this.descricao,
      tipoEntrada: this.tipoEntrada,
      quantia: this.quantia
    }
    try {
      let response = await api.post(`/entradas/criar`, modelo);
      alert("Saldo adicionado com sucesso");
    } catch (error) {
      console.log(error)
    }
  }

  async carregarTipos() :Promise<void> {
    try {
      let response = await api.get(`tipoEntrada`);
      this.tipos = response.data;
    } catch(error) {
      console.log(error)
    }
  }
  ngOnInit(): void {
    this.carregarTipos();
  }

}
