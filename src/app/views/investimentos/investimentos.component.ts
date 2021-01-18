import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogEdicaoDescricaoInvestimentoComponent } from 'src/app/components/dialog-edicao-descricao-investimento/dialog-edicao-descricao-investimento.component';
import { DialogEdicaoLucroInvestimentoComponent } from 'src/app/components/dialog-edicao-lucro-investimento/dialog-edicao-lucro-investimento.component';
import { DialogInvestimentoComponent } from 'src/app/components/dialog-investimento/dialog-investimento.component';
import { DialogPorcentagemComponent } from 'src/app/components/dialog-porcentagem/dialog-porcentagem.component';
import { Usuario } from 'src/models/Usuario.model';
import { ToastService } from 'angular-toastify'
import api from 'src/services/api';


@Component({
  selector: 'app-investimentos',
  templateUrl: './investimentos.component.html',
  styleUrls: ['./investimentos.component.less']
})
export class InvestimentosComponent implements OnInit {

  investimentos:Array<any> = [];
  displayedColumns:Array<string> = ['descricao', 'valorRetirada', 'lucroAtual', 'acoes'];
  usuario:Usuario = JSON.parse(localStorage.getItem('usuario') || '{}');

  constructor(
    public dialog: MatDialog,
    ) { }

  abrirDialogInvestimento(): void {
    let dialogRef = this.dialog.open(DialogInvestimentoComponent, {

    });

    dialogRef.afterClosed().subscribe(res => {
      this.carregarInvestimentos();
    })
  }

  async carregarInvestimentos(): Promise<void> {
    try {
      let response = await api.get(`investimentos/${this.usuario.id}`);
      this.investimentos = response.data;
    } catch (error) {
      console.log(error);
    }
  }

  abrirDialogEdicaoDescricao(id:number): void {
    let dialogref = this.dialog.open(DialogEdicaoDescricaoInvestimentoComponent, {

    });
    dialogref.componentInstance.id = id;
    dialogref.afterClosed().subscribe(res => {
      this.carregarInvestimentos();
    });
  };

  abrirDialogEdicaoLucro(id:number): void {
    let dialogref = this.dialog.open(DialogEdicaoLucroInvestimentoComponent, {

    });
    dialogref.componentInstance.id = id;
    dialogref.afterClosed().subscribe(res => {
      this.carregarInvestimentos();
    });
  };

  abrirDialogPorcentagem(id:number): void {
    let dialogref = this.dialog.open(DialogPorcentagemComponent, {

    });
    dialogref.componentInstance.id = id;
    dialogref.afterClosed().subscribe(res => {
    });
  };

  async apagarInvestimento(id:number): Promise<void> {
    try {
      let response = await api.delete(`/investimentos/apagar/${id}`);
      alert(response.data);
      this.carregarInvestimentos();
    } catch (error) {
      alert("Não foi possível excluir o investimento");
    }
  }
  
  ngOnInit(): void {
    this.carregarInvestimentos();
  }

}
