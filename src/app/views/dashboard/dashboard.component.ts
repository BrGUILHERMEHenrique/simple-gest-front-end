import { Component, OnInit } from '@angular/core';
import api from 'src/services/api';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { MatDialog } from '@angular/material/dialog';
import { DialogContaComponent } from 'src/app/components/dialog-conta/dialog-conta.component';
import { DialogRetiradaComponent } from 'src/app/components/dialog-retirada/dialog-retirada.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

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

  openDialogRetirada(): void {
    let dialogRef = this.dialog.open(DialogRetiradaComponent, {

    });

    dialogRef.afterClosed().subscribe(res => {
      console.log("Dialog de Retirada fechado");
    })
  }
  openDialogConta(): void {
    let dialogRef = this.dialog.open(DialogContaComponent, {

    });

    dialogRef.afterClosed().subscribe(res => {
      console.log("Dialog fechado");
    });
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
  constructor(public dialog: MatDialog) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
   }

}
