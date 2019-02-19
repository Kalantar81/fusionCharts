import { Component, OnInit } from '@angular/core';
import { DemoServerService, ITreadlinesData } from 'assets/server/demo-server.service';
import { StandartLineChartService } from './standart-line-chart.service';
import { IDataSource, IChart, ICategories, IDataset, IData, ICategory, ITrendLines } from './interfaces';

@Component({
  selector: 'app-standart-line-chart',
  templateUrl: './standart-line-chart.component.html',
  styleUrls: ['./standart-line-chart.component.css']
})
export class StandartLineChartComponent implements OnInit {

  public dataSource: IDataSource;
  // public chart: IChart;
  public chart: any;
  public categories: Array<ICategories>;
  public dataset: Array<IDataset>;
  public data: Array<IData>;
  public trendlines: Array<ITrendLines>;

  public reduceCounter = '1';

  private _dataFromServer: ITreadlinesData;

  constructor(
    private _demoServerService: DemoServerService,
    private _standartLineChartService: StandartLineChartService
  ) {
    this._getDataFromServer();
  }

  private _getDataFromServer() {
    this._demoServerService.getTreadlinesData()
    .subscribe(
      data => {
        this._dataFromServer = data;
        console.log(this._dataFromServer);
        this._initChart();
      }
    );
  }

  ngOnInit() {
  }

  private _initChart(): void {
    this._initChartSettings();
    this.initCategories();
    this.initTreadlines();
    this.initCurves();
    this.initTrendlineNames();
    this.initDataSource();
   }

   private _initChartSettings(): void {
    this.chart = {
    caption: 'Line chart',
    xAxisName: 'distance',
    yAxisName: 'height',
    paletteColors: '#a6a6a6, #a6a6a6, #a6a6a6, #a6a6a6, #a6a6a6, #0099ff, #cc0000, #ff9900',
    showalternatehgridcolor: 0,
    bgAlpha: 0,
    borderAlpha: 20,
    usePlotGradientColor: 0,
    canvasBorderAlpha: 0,
    legendBorderAlpha: 0,
    legendShadow: 0,
    // showXAxisLine: 1,
    showXAxisLine: 0,
    axisLineAlpha: 25,
    divLineAlpha: 25,
    showBorder: 0,

    divLineDashed: 1,
    divLineDashLen: 3,
    divLineDashGap: 2,

    adjustDiv: 0,
    numDivLines: 0,
    divLineColor: '#ffffff',

    // showLabels: 1,
    showLabels: 0,
    // showYAxisValues: 1,
    showYAxisValues: 0,

    valueFontSize: 14,
    showLegend: 1,
    showShadow: 0,
    // plotBinSize: 0.04,
    plotBinSize: 1,

    yAxisMaxValue: 1000,
    yaxisMinValue: -4000,

    drawCrossLine: 1,
    crossLineColor: '#000000',
    plotColorinTooltip: 1,

    //seriesNameInToolTip: 1
    trendValueFontSize: 12,

    vDivLineThickness: 0

    };
  }

  public initCategories(): void {
    let category: Array<ICategory>;
    const categories: Array<ICategories> = [];

      category = this._standartLineChartService.initXaxisData(
        this._dataFromServer.xAxisData,
        this._dataFromServer.yAxisMinTrendLine,
        Number(this.reduceCounter)
      );

      categories.push({category: category});
    this.categories = categories;
    console.log('categories: ' + this.categories);
  }

  public initTreadlines (): void {
    let dataset: Array<IDataset> = [];
    dataset = this._standartLineChartService.initTreadlines(
      this._dataFromServer.xAxisData,
      this._dataFromServer.yAxisMinTrendLine,
      Number(this.reduceCounter)
      );

    this.dataset = dataset;
    console.log(this.dataset);
  }

  public initCurves (): void {
    const dataset: Array<IDataset> = [];
    dataset.push(
      this._standartLineChartService.initDataset(
        this._dataFromServer.yAxisProfileGroundWithDowning,
        'curve', Number(this.reduceCounter))
      );
    console.log('ground length: ' + this._dataFromServer.ellipseWithDowningY.length);
    dataset.push(
      this._standartLineChartService.initDataset(
        this._dataFromServer.yAxisObstacles,
        'radar line',
        Number(this.reduceCounter))
        );
    console.log('radar line length: ' + this._dataFromServer.yAxisObstacles.length);
    dataset.push(
      this._standartLineChartService.initDataset(
        this._dataFromServer.ellipseWithDowningY,
        'elipce',
        Number(this.reduceCounter))
        );
    console.log('elipce length: ' + this._dataFromServer.ellipseWithDowningY.length);
    this.dataset = this.dataset.concat(dataset);
    console.log(this.dataset);
  }

  public initTrendlineNames(): void {
    const trendlines: Array<ITrendLines> = [];
    this.trendlines = this._standartLineChartService.initTrendlineNames(
      this._dataFromServer.yAxisMinTrendLine[0],
      Math.max.apply(null, this._dataFromServer.yAxisMinTrendLine),
      200
    );
  }

  public initDataSource(): void {
    this.dataSource = {
      chart: this.chart,
      categories: this.categories,
      dataset: this.dataset,
      trendlines: this.trendlines
    };
  }

}
