import { Component, OnInit } from '@angular/core';
import { IDataFromServer, MultiplyDatasetsFromServerService } from 'assets/server/multiply-datasets-from-server.service';
import { IDataSource, IChart, ICategories, IDataset, IData, ITrendLines, ICategory } from '../standart-line-chart/interfaces';
import { SimpleLineService } from './simple-line.service';
import { rootRoute } from '@angular/router/src/router_module';

@Component({
  selector: 'app-simple-line',
  templateUrl: './simple-line.component.html',
  styleUrls: ['./simple-line.component.css']
})
export class SimpleLineComponent implements OnInit {

  public dataSource: IDataSource;
  public chart: IChart;
  public categories: Array<ICategories>;
  public dataset: Array<IDataset>;
  public data: Array<IData>;
  public trendlines: Array<ITrendLines>;

  private _yGap: number;
  private _basicTrendlineName: number;

  private _dataFromServer: IDataFromServer;

  constructor(
    private _multiplyDatasetsFromServerService: MultiplyDatasetsFromServerService,
    private _simpleLineService: SimpleLineService
  ) { }

  ngOnInit() {
  }

  public dataFromServer2Pnt(): void {
    this._multiplyDatasetsFromServerService.getData2Pnt()
    .subscribe(
      data => {
        this._dataFromServer = data;
        console.log(this._dataFromServer);
        this._initChart();
      }
    );
  }

  public dataFromServer10Pnt(): void {
    this._multiplyDatasetsFromServerService.getData10Pnt()
    .subscribe(
      data => {
        this._dataFromServer = data;
        console.log(this._dataFromServer);
        this._initChart();
      }
    );
  }

  public dataFromServer100Pnt(): void {
    this._multiplyDatasetsFromServerService.getData100Pnt()
    .subscribe(
      data => {
        this._dataFromServer = data;
        console.log(this._dataFromServer);
        this._initChart();
      }
    );
  }

  public dataFromServer1000Pnt(): void {
    this._multiplyDatasetsFromServerService.getData1000Pnt()
    .subscribe(
      data => {
        this._dataFromServer = data;
        console.log(this._dataFromServer);
        this._initChart();
      }
    );
  }

  public dataFromServer10000Pnt(): void {
    this._multiplyDatasetsFromServerService.getData10000Pnt()
    .subscribe(
      data => {
        this._dataFromServer = data;
        console.log(this._dataFromServer);
        this._initChart();
      }
    );
  }

  public dataFromServerMaxPnt(): void {
    this._multiplyDatasetsFromServerService.getDataMaxPnt()
    .subscribe(
      data => {
        this._dataFromServer = data;
        console.log(this._dataFromServer);
        this._initChart();
      }
    );
  }

  private _initChart(): void {
    this._initChartSettings();
    this.initCategories();
    this.initTreadlines();
    this.initCurves();
    // this.initTrendlineNames();
    this.initDataSource();
   }

   private _initChartSettings(): void {
     const yDelta = this._dataFromServer.profileTotalMaxHeightMeters - this._dataFromServer.profileTotalMinHeightMeters;
     this._yGap = this._gapCalculator(yDelta, 4);
     this._basicTrendlineName = Math.floor(this._dataFromServer.profileTotalMinHeightMeters );
     let yAxisMinValue = (this._dataFromServer.profileTotalMinHeightMeters + this._dataFromServer.downing[0]);
     const yAxisMaxValue = this._yGap * 4 + this._dataFromServer.profileTotalMinHeightMeters;
     console.log( 'yGap: ' + this._yGap + ' xGap: ' + this._basicTrendlineName);
     console.log( 'yAxisMinValue: ' + yAxisMinValue + ' yAxisMaxValue: ' + yAxisMaxValue);

     yAxisMinValue = yAxisMinValue - yDelta / 8;
    this.chart = {
    caption: 'Line chart',
    xAxisName: 'distance',
    yAxisName: 'height',
    paletteColors: '#d9d9d9, #d9d9d9, #d9d9d9, #d9d9d9, #d9d9d9, #7f7f7f, #5b9bd5, ed7d31',
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

    valueFontSize: 10,
    showLegend: 1,
    showShadow: 0,
    // plotBinSize: 0.04,
    plotBinSize: 1,

    yAxisMaxValue: yAxisMaxValue,
    yaxisMinValue: yAxisMinValue,

    drawCrossLine: 1,
    crossLineColor: '#000000',
    plotColorinTooltip: 1,

    //seriesNameInToolTip: 1
    trendValueFontSize: 12,

    //vDivLineThickness: 0

    showToolTipShadow: 0,
    tooltipBorderAlpha: 0,
    toolTipBorderColor: '#ffffff',
    valuePosition: 'BELOW',
    rotateValues: 1

    };

    if (this._dataFromServer.xAxisData.length > 1100) {
      this.chart.plotBinSize = (1 / this._dataFromServer.xAxisData.length / 1100);
      console.log('plotBinSize: ' + this.chart.plotBinSize);
    }
  }

  public initCategories(): void {
    let category: Array<ICategory>;
    const categories: Array<ICategories> = [];
    category = this._simpleLineService.initXaxisData(this._dataFromServer.xAxisData);
    categories.push({category: category});
    this.categories = categories;
    console.log('categories: ' + this.categories);
  }

  public initTreadlines (): void {
    let dataset: Array<IDataset> = [];
    dataset = this._simpleLineService.initTreadlines(
      this._dataFromServer.downing.map(
        value => value + this._dataFromServer.profileTotalMinHeightMeters),
      this._dataFromServer.xAxisData,
      this._yGap,
      this._basicTrendlineName
      );

    this.dataset = dataset;
    console.log(this.dataset);
  }

  public initCurves(): void {
    const dataset: Array<IDataset> = [];
    dataset.push(
      this._simpleLineService.initDataset(
        this._dataFromServer.profileDataWithDowning,
        'aaa')
      );
    dataset.push(
      this._simpleLineService.initDataset(
        this._dataFromServer.lineOfSightWithDowning,
        'bbb'
      )
    );
    if (this._dataFromServer.RFLOS) {
      dataset.push(
        this._simpleLineService.initDataset(
          this._dataFromServer.fernelEllipseWithDowning,
          'ccc'
        )
      );
    }
    this.dataset = this.dataset.concat(dataset);
  }

  public initDataSource(): void {
    this.dataSource = {
      chart: this.chart,
      categories: this.categories,
      dataset: this.dataset
    };
  }

  private _gapCalculator(deltaMeters: number, gaps: number): number {
    const gapD = deltaMeters / gaps;
    let gap: number;

    if (deltaMeters < 100.0) {
      gap = gapD;
    } else {
      gap = (gapD / 10 + 0.5) * 10;
    }

    return gap;
  }
}
