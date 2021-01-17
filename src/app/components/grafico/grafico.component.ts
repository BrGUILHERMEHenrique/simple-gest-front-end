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
    '#008080',
    '#00FF7F',
    '#228B22',
    '#808000',
    '#DAA520',
    '#8B4513',
    '#BC8F8F',
    '#D2691E',
    '#DDA0DD']
  }
    
  ]
  pieChartType: ChartType = 'pie';
  @Input() pieChartData: SingleDataSet = [];
  @Input() pieChartLabels: Label[] = [];

  ngOnInit(): void {
  }

}
