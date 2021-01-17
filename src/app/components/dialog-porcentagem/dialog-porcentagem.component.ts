import { Component, OnInit } from '@angular/core';
import api from 'src/services/api';


@Component({
  selector: 'app-dialog-porcentagem',
  templateUrl: './dialog-porcentagem.component.html',
  styleUrls: ['./dialog-porcentagem.component.less']
})
export class DialogPorcentagemComponent implements OnInit {

  id:number = 0;
  porcentagem:string = '';
  constructor() { }

  async carregarPorcentagem(): Promise<void> {
    try {
      let response = await api.get(`investimentos/porcentagem/${this.id}`);
      this.porcentagem = response.data;
    } catch (error) {
      console.log(error);
    }
  }
  ngOnInit(): void {
    this.carregarPorcentagem();
  }

}
