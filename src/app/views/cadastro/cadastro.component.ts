import { Component, OnInit } from '@angular/core';
import api from 'src/services/api';

import { UsuarioDtoCadastro } from 'src/models/DTO/UsuarioDtoCadastro.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.less']
})
export class CadastroComponent implements OnInit {

  nome:String;
  email:String;
  senha:String;
  constructor(
  ) { }


  async cadastrarNovoUsuario() {
    try {
      let usuario = new UsuarioDtoCadastro(this.nome, this.email, this.senha);
      await api.post('/usuarios/criar', usuario);
      console.log('Usuario cadastrado com sucesso: ', usuario);
    } catch (error) {
      console.log(error);
    }
  }
  ngOnInit(): void {
  }

}
