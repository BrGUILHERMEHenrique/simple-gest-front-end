import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogDespesaFixaComponent } from 'src/app/components/dialog-despesa-fixa/dialog-despesa-fixa.component';
import { DialogDespesaVariavelComponent } from 'src/app/components/dialog-despesa-variavel/dialog-despesa-variavel.component';
import { DialogEdicaoFixaComponent } from 'src/app/components/dialog-edicao-fixa/dialog-edicao-fixa.component';
import { DialogEdicaoVariavelComponent } from 'src/app/components/dialog-edicao-variavel/dialog-edicao-variavel.component';
import { Usuario } from 'src/models/Usuario.model';
import api from 'src/services/api';

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.less']
})
export class DespesasComponent implements OnInit {

  despesasFixas: Array<any> = [];
  despesasVariaveis: Array<any> = [];
  displaedColumnsVariaveis: Array<string> = [];
  displayedColumns: Array<string> = ['descricao', 'quantia', 'acoes']
  usuario: Usuario = JSON.parse(localStorage.getItem('usuario') || '{}');

  async carregarDespesasFixas(): Promise<void> {
    try {
      let response = await api.get(`fixas/${this.usuario.id}`);
      this.despesasFixas = response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async carregarDespesasVariaveis(): Promise<void> {
    try {
      let response = await api.get(`variaveis/${this.usuario.id}`);
      this.despesasVariaveis = response.data;
    } catch (error) {
      console.log(error);
    }
  }

  abrirDialogDespesaFixa(): void {
    let dialogRef = this.dialiog.open(DialogDespesaFixaComponent, {

    });

    dialogRef.afterClosed().subscribe(res => {
      this.carregarDespesasFixas();
    })
  }

  abrirDialogDespesaVariavel(): void {

    let dialogRef = this.dialiog.open(DialogDespesaVariavelComponent, {

    });

    dialogRef.afterClosed().subscribe(res => {
      this.carregarDespesasVariaveis();
    })
  }

  abrirDialogEdicaoFixa(id: number): void {
    let dialogRef = this.dialiog.open(DialogEdicaoFixaComponent, {

    });

    dialogRef.componentInstance.id = id;

    dialogRef.afterClosed().subscribe(res => {
      this.carregarDespesasFixas();
    });
  }

  abrirDialogEdicaoVariavel(id: number): void {
    let dialogRef = this.dialiog.open(DialogEdicaoVariavelComponent, {

    });

    dialogRef.componentInstance.id = id;

    dialogRef.afterClosed().subscribe(res => {
      this.carregarDespesasVariaveis();
    });
  };

  async apagarDespesaFixa(id:number): Promise<void>{
    try {
      let response = await api.delete(`fixas/apagar/${id}`);
      alert(response.data);
      this.carregarDespesasFixas();
    } catch (error) {
      console.log(error);
    }
  }
  async apagarDespesaVariavel(id:number): Promise<void>{
    try {
      let response = await api.delete(`variaveis/apagar/${id}`);
      alert(response.data);
      this.carregarDespesasVariaveis();
    } catch (error) {
      console.log(error);
    }
  }

  constructor(public dialiog: MatDialog) { }

  ngOnInit(): void {
    this.carregarDespesasFixas();
    this.carregarDespesasVariaveis();
  }

}
