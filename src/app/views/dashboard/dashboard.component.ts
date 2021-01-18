import { Component, Input, OnInit } from '@angular/core';
import api from 'src/services/api';

import { DialogContaComponent } from 'src/app/components/dialog-conta/dialog-conta.component';
import { DialogRetiradaComponent } from 'src/app/components/dialog-retirada/dialog-retirada.component';
import { DialogMontanteComponent } from 'src/app/components/dialog-montante/dialog-montante.component';
import { Usuario } from 'src/models/Usuario.model';
import { DialogEdicaoRetiradaComponent } from 'src/app/components/dialog-edicao-retirada/dialog-edicao-retirada.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  token = window.localStorage.getItem('94a08da1fecbb6e8b46990538c7b50b2');
  subject: any = JSON.parse(localStorage.getItem('email') || '');
  email: string = JSON.parse(this.subject).sub;
  usuario: Usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
  @Input() quantia: number = 0;

  title = 'Dasboard';
  contas: any[] = [];
  retiradas: any[] = [];
  entradas: any[] = [];
  data: any[] = [];
  labels: any[] = [];
  tipos: string[] = [];
  tiposEntrada: string[] = [];
  dataEntrada: any[] = [];
  labelsEntrada: any[] = [];

  displayedColumns: string[] = ['descricao', 'tipoGasto', 'dataVencimento', 'preco', 'acoes'];
  displayedColumnsRetiradas: string[] = ['descricao', 'tipoGasto', 'quantia', 'acoes'];
  displayedColumnsEntradas: string[] = ['descricao', 'tipoEntrada', 'quantia', 'acoes'];

  constructor(public dialog: MatDialog) {

  }

  fazerCalculosEntradas(): void {
    let listaFormato: { tipo:String, quantia:number }[] = [];
    let modelo = {
      tipo: '',
      quantia: 0,
    };
    for (const tipo of this.tiposEntrada) {
      modelo = {
        ...modelo,
        tipo: tipo,
      }
      listaFormato.push(modelo);
    }

    for(let i = 0; i < this.entradas.length; i++) {
      for(let j = 0; j < listaFormato.length; j++) {
        if(this.entradas[i].tipoEntrada === listaFormato[j].tipo) {
          listaFormato[j].quantia += this.entradas[i].quantia
        }
      }
    }

    this.labelsEntrada = listaFormato.map(mod => mod.tipo);
    this.dataEntrada = listaFormato.map(mod => mod.quantia);

    console.log("lista formato: ", listaFormato);
  };
  fazerCalculosRetiradas(): void {
    let listinha: { tipo: string, quantia: number }[] = [];
    let modelo = {
      tipo: '',
      quantia: 0,
    };
    for (let tipo of this.tipos) {
      modelo = {
        ...modelo,
        tipo: tipo,
      }
      listinha.push(modelo);
    }
    //verifica os dados da lista de contas para somar as quantias
    for (let i = 0; i < this.contas.length; i++) {
      for (let j = 0; j < listinha.length; j++) {
        if (this.contas[i].tipoGasto === listinha[j].tipo) {
          listinha[j].quantia += this.contas[i].preco;
        }
      }
    }
    //Verifica os dados da lista de retiradas para somar as quantias
    for (let i = 0; i < this.retiradas.length; i++) {
      for (let j = 0; j < listinha.length; j++) {
        if (this.retiradas[i].tipoGasto === listinha[j].tipo) {
          listinha[j].quantia += this.retiradas[i].quantia;
        }
      }
    }
    this.labels = listinha.map(mod => mod.tipo);
    this.data = listinha.map(mod => mod.quantia);
    console.log("listinha: ", listinha);
  }

  abrirDialogEdicaoRetirada(_id: number): void {
    let dialogRef = this.dialog.open(DialogEdicaoRetiradaComponent, {

    });
    dialogRef.componentInstance.id = _id;
    dialogRef.afterClosed().subscribe(res => {
      this.getRetiradas();
    })
  }

  openDialogRetirada(): void {
    let dialogRef = this.dialog.open(DialogRetiradaComponent, {

    });

    dialogRef.afterClosed().subscribe(res => {
      this.getRetiradas();
      this.carregarDadosUsuario();
      console.log("Dialog de Retirada fechado");
    })
  }
  abrirDialogConta(): void {
    let dialogRef = this.dialog.open(DialogContaComponent, {

    });

    dialogRef.afterClosed().subscribe(res => {
      this.getContas();
      console.log("Dialog fechado");
    });
  }

  abrirDialogMontante(): void {
    let dialogRef = this.dialog.open(DialogMontanteComponent, {

    });

    dialogRef.afterClosed().subscribe(res => {
      this.carregarDadosUsuario();
      console.log("dialog finalizado");
    })
  }

  async apagarConta(id: Number): Promise<void> {
    try {
      const response = await api.delete(`/contas/apagar/${id}`);
      alert(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      this.getContas();
    }
  };
  async apagarRetirada(id: Number): Promise<void> {
    try {
      const response = await api.delete(`/retiradas/apagar/${id}`);
      alert(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      this.getRetiradas();
    }
  };

  async apagarEntrada(id:number) :Promise<void> {
    try {
      let response = await api.delete(`entradas/apagar/${id}`);
      alert(response.data);
      this.carregarEntradas();
    } catch (error) {
      console.log(error);
    }
  }
  async pagarConta(id: Number): Promise<void> {
    let modeloConta = {
      idConta: id,
      idUsuario: this.usuario.id
    }
    try {
      let response = await api.put(`/contas/pagar`, modeloConta);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      this.carregarDadosUsuario();
      this.getContas();
    }
  };
  async carregarDadosUsuario(): Promise<void> {
    try {
      let response = await api.post(`/usuarios/usuario/${this.email}`);
      this.usuario = response.data;
      console.log('usuario: ', response.data)
      localStorage.setItem('usuario', JSON.stringify(this.usuario));
    } catch (error) {
      console.log(error);
    }
  };

  async getContas() {
    try {
      let response = await api.get(`/contas/${this.usuario.id}`)
      this.contas = response.data;
    } catch (error) {
      console.log(error)
    }
  };

  async getRetiradas() {
    let response;
    try {
      response = await api.get(`/retiradas/${this.usuario.id}`);
      console.log(response.data);
      this.retiradas = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  async carregarEntradas(): Promise<void> {
    try {
      let response = await api.get(`/entradas/${this.usuario.id}`);
      this.entradas = response.data;
      console.log(response.data);
      this.fazerCalculosEntradas();
    } catch (error) {
      console.log(error);
    }
  }

  async carregarTipos(): Promise<void> {
    try {
      let response = await api.get('/tipo');
      this.tipos = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  async carregarTiposEntrada(): Promise<void> {
    try {
      let response = await api.get('/tipoEntrada');
      this.tiposEntrada = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  async carregarDadosRetiradaConta(): Promise<void> {
    try{
      await this.getRetiradas();
      await this.getContas();
    } catch (error) {
      console.log(error);
    } finally {
      this.fazerCalculosRetiradas();
    }
  }

  formatarData(value: string): String {
    const data = new Date(value);
    return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
  };


  ngOnInit(): void {
    this.carregarDadosUsuario();
    this.carregarTipos();
    this.carregarTiposEntrada();
    this.carregarDadosRetiradaConta();
    this.carregarEntradas();
  }

}
