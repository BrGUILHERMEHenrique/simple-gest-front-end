import { Component, Input, OnInit } from '@angular/core';
import api from 'src/services/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  @Input() email: String = '';
  @Input() senha: String = '';

  constructor() { }

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
      let response = await api.post('usuarios/login', modelo)
      window.localStorage.setItem('usuario', JSON.stringify(response.data));
      console.log("Login funcionou")
    } catch (error) {
      console.log(error);
    }
  }
  ngOnInit(): void {
  }

}
