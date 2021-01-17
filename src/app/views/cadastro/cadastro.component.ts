import { Component, OnInit } from '@angular/core';
import api from 'src/services/api';

import { UsuarioDtoCadastro } from 'src/models/DTO/UsuarioDtoCadastro.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.less']
})
export class CadastroComponent implements OnInit {

  nome:String = '';
  email:String = '';
  senha:String = '';
  constructor(
    private router: Router
  ) { }


  async cadastrarNovoUsuario() {
    try {
      let usuario = new UsuarioDtoCadastro(this.nome, this.email, this.senha);
      await api.post('/usuarios/criar', usuario);
      this.router.navigate(['login']);
      alert("Faça o seu primeiro login para validar sua conta!");
    } catch (error) {
      console.log(error);
    }
  }
  ngOnInit(): void {
  }

}
