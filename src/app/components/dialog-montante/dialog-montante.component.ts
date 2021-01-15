import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/models/Usuario.model';
import api from 'src/services/api';

@Component({
  selector: 'app-dialog-montante',
  templateUrl: './dialog-montante.component.html',
  styleUrls: ['./dialog-montante.component.less']
})
export class DialogMontanteComponent implements OnInit {

  @Input() quantia:Number = 0;

  usuarioSalvo = window.localStorage.getItem('usuario');
  usuario:Usuario = JSON.parse(this.usuarioSalvo !== null ? this.usuarioSalvo : '');
  // usuario:Usuario = new Usuario(1, "Guilherme", "açlfgha@gmail.com", "senha", 2000);
  constructor() { }

  async adicionarMontante(): Promise<void> {
    try {
      let response = await api.put(`/usuarios/adicionar/${this.usuario.id}/${this.quantia}`);
      alert(response.data);
    } catch (error) {
      console.log(error)
    }
  }
  ngOnInit(): void {
  }

}
