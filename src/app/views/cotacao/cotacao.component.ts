import { Component, OnInit } from '@angular/core';
import apiCotacao from 'src/services/apiCotacao';
@Component({
  selector: 'app-cotacao',
  templateUrl: './cotacao.component.html',
  styleUrls: ['./cotacao.component.less']
})
export class CotacaoComponent implements OnInit {

  moedas:Array<any> = [];
  constructor() { }

  async carregarMoedas(): Promise<void> {
    try {
      let response = await apiCotacao.get('all');
      console.log(response.data);
      for(let i in response.data) {
        this.moedas.push(response.data[i]);
      }
    } catch (error) {
      console.log(error);
    }
  }
  ngOnInit(): void {
    this.carregarMoedas();
  }

}
