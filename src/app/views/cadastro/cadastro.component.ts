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
      let response = await api.post('/usuarios/criar', usuario);
      window.localStorage.setItem('email', JSON.stringify(atob(response.data.split('.')[1])));
      window.localStorage.setItem('94a08da1fecbb6e8b46990538c7b50b2', JSON.stringify(response.data));
      this.router.navigate(['']);
    } catch (error) {
      console.log(error);
    }
  }
  ngOnInit(): void {
  }

}
