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

  usuarioSalvo = window.localStorage.getItem('usuario');
  usuario:Usuario = JSON.parse(this.usuarioSalvo !== null ? this.usuarioSalvo : '');
  @Input() quantia:Number = 0;

  title = 'Dasboard';
  contas:any[] = [];
  retiradas:any[] = [];
  data:any[] = [];
  labels:any[] = [];
  tipos:string[] = [];

  constructor(public dialog: MatDialog) {

   }

   fazerCalculos(): void {
     let listinha: {tipo:string, quantia:number}[] = [];
     let modelo = {
       tipo: '',
       quantia: 0,
     };
    for(let tipo of this.tipos) {
     modelo = {
       ...modelo,
       tipo : tipo,
     }
     listinha.push(modelo);
    } 
    //Verifica os dados da lista de retiradas para somar as quantias
    for(let i = 0; i < this.retiradas.length; i++) {
      for(let j = 0; j < listinha.length; j++) {
        if(this.retiradas[i].tipoGasto === listinha[j].tipo) {
          listinha[j].quantia += this.retiradas[i].quantia;
        } 
      }
    }

    //verifica os dados da lista de contas para somar as quantias
    for(let i = 0; i < this.contas.length; i++) {
      for(let j = 0; j < listinha.length; j++) {
        if(this.contas[i].tipoGasto === listinha[j].tipo) {
          listinha[j].quantia += this.contas[i].preco;
        } 
      }
    }
    this.labels = listinha.map(mod => mod.tipo);
    this.data = listinha.map(mod => mod.quantia);
      console.log("listinha: ", listinha);
    }
 
   abrirDialogEdicaoRetirada(_id:Number): void {
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
  openDialogConta(): void {
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

  async apagarConta(id:Number): Promise<void> {
    try {
      const response = await api.delete(`/contas/apagar/${id}`);
      alert(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      this.getContas();
    }
  }
  async apagarRetirada(id:Number): Promise<void> {
    try {
      const response = await api.delete(`/retiradas/apagar/${id}`);
      alert(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      this.getRetiradas();
    }
  }
  async pagarConta(id:Number): Promise<void> {
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
  }
  async carregarDadosUsuario(): Promise<void> {
    try {
      let response = await api.get(`/usuarios/${this.usuario.id}`);
      this.usuario = response.data;
      localStorage.setItem('usuario', JSON.stringify(this.usuario));
    } catch (error) {
      console.log(error);
    }
  }

  async getContas() {
    try {
      let response = await api.get('contas/1')
      this.contas = response.data;
    } catch (error) {
      console.log(error)
    }
  }

  async getRetiradas() {
    let response;
    try {
      response = await api.get(`/retiradas/${this.usuario.id}`);
      console.log(response.data);
      this.retiradas = response.data;
      this.fazerCalculos();
    } catch (error) {
      console.log(error);
    } 
  };

  async carregarTipos():Promise<void> {
    try {
      let response = await api.get('/tipo');
      this.tipos = response.data;
    } catch (error) {
      console.log(error);
    }
  }

  
  ngOnInit(): void {
    this.getContas();
    this.carregarTipos();
    this.getRetiradas();
    this.carregarDadosUsuario();
  }

}
