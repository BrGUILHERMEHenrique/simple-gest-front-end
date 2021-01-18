import { Component, Input, OnInit } from '@angular/core';

import { ChartOptions, ChartType, ChartColor } from 'chart.js';
import { Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, SingleDataSet, Color, Colors } from 'ng2-charts';


@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.less']
})
export class GraficoComponent implements OnInit {

  constructor() { 
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  pieChartOptions: ChartOptions = {
    responsive: true
  };

  pieChartLegend = true;
  pieChartPlugins = [];
  colors: Color[] = [ {
    backgroundColor: [
    '#6495ED',
    '#87CEFA',
    '#00FF7F',
    '#008080',
    '#228B22',
    '#FFA500',
    '#FFD700',
    '#00BFFF',
    '#DDA0DD']
  }
    
  ]
  pieChartType: ChartType = 'pie';
  @Input() pieChartData: SingleDataSet = [];
  @Input() pieChartLabels: Label[] = [];

  ngOnInit(): void {
  }

}
