import { Component, OnInit } from '@angular/core';
import api from 'src/services/api';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

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
  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
   }

}
