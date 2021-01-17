import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import api from 'src/services/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  @Input() email: String = '';
  @Input() senha: String = '';

  constructor(private router: Router) { }

  async fazerLogin(): Promise<void> {
    if(this.email === '' || this.senha === ''){
      alert('preencha todos os campos antes de fazer o login!');
      return;
    }
    const modelo = {
      email: this.email,
      senha: this.senha
    }
    try {
      let response = await api.post('usuarios/login', modelo);
      console.log(response);
      window.localStorage.setItem('email', JSON.stringify(atob(response.data.split('.')[1])));
      window.localStorage.setItem('94a08da1fecbb6e8b46990538c7b50b2', JSON.stringify(response.data));
      this.router.navigate(['']);
    } catch (error) {
      console.log(error);
    }
  };

  async carregarDadosUsuario(): Promise<void> {
    try {
      let response = await api.post(`/usuarios/usuario/${JSON.parse(localStorage.getItem('email') || '').sub}`);
      console.log('usuario: ',response.data);
      localStorage.setItem('usuario', JSON.stringify(response.data));
    } catch (error) {
      console.log(error);
    }
  };
  ngOnInit(): void {
  }

}
