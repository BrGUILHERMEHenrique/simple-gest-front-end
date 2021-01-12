import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import api from 'src/services/api';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { MatDialog } from '@angular/material/dialog';
import { DialogContaComponent } from 'src/app/components/dialog-conta/dialog-conta.component';
import { DialogRetiradaComponent } from 'src/app/components/dialog-retirada/dialog-retirada.component';
import { DialogMontanteComponent } from 'src/app/components/dialog-montante/dialog-montante.component';
import { Usuario } from 'src/models/Usuario.model';

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

  pieChartData: ChartDataSets[] = [];

  pieChartLabels: Label[] = [];

  pieChartOptions: ChartOptions = {
    responsive: true
  };

  pieChartLegend = true;
  pieChartPlugins = [];
  pieChartType: ChartType = 'line';

  constructor(public dialog: MatDialog, private ref:ChangeDetectorRef) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
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
      response = await api.get('retirar/1');
      this.retiradas = response.data;
    } catch (error) {
      console.log(error);
    } 
  };

  gerarGrafico() {
    this.pieChartData = this.retiradas.map(retirada => retirada.quantia);
    this.pieChartLabels = this.retiradas.map(retirada => retirada.tipoGasto);
  }
  ngOnInit(): void {
    this.getContas();
    this.getRetiradas();
    this.gerarGrafico();
    console.log(this.retiradas);
    console.log(this.pieChartData);
  }


}
