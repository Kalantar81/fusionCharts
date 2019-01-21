import { Component, OnInit } from '@angular/core';
import { IDataset, IDataSource, IChart, ICategories, IData, ICategory } from './interfaces';
import { DemoServerService, IServerData } from 'assets/server/demo-server.service';
import { CurveService } from './curvelines.service';

@Component({
  selector: 'app-curvelines',
  templateUrl: './curvelines.component.html',
  styleUrls: ['./curvelines.component.css']
})
export class CurvelinesComponent implements OnInit {
  public dataSource: IDataSource;
  private _dataFromServer: IServerData;

  public chartWidth: number;
  public chartHeight: number;

  constructor(
    private _demoServerService: DemoServerService,
    private _curveService: CurveService) {

    this.getDataFromServer();

    this.chartWidth = 700;
    this.chartHeight = 399;

    }

  ngOnInit() {
  }

  getDataFromServer() {
    this._demoServerService.getTreadlinesData()
    .subscribe(
      data => {
        this._dataFromServer = data;
        this.dataSource = {
          chart: this._initChartSettings(),
          categories: this.initCategories(),
          dataset: this.initDataset()
        };
      }
    );
  }



  public initCategories(): Array<ICategories> {
    let category: Array<ICategory>;
    const categories: Array<ICategories> = [];

    category = this._curveService.initXaxisData(this._dataFromServer.xAxisParams);
    categories.push({category: category});
    console.log('categories: ' + categories);
    return categories;
  }

  public initDataset (): Array<IDataset> {
    let dataset: Array<IDataset>;
    dataset = this._curveService.initCurvelines(
      this._dataFromServer.xAxisParams,
      this._dataFromServer.yAxisParams,
      );
      console.log('dataset: ' + dataset);
      return dataset;
  }


  private _initChartSettings(): IChart {
        const chart = {
        caption: 'Curve',
        xAxisName: 'X axis',
        yAxisName: 'Y axis',
        paletteColors: '#d9d9d9',
        showalternatehgridcolor: 0,
        bgAlpha: 0,
        borderAlpha: 20,
        usePlotGradientColor: 0,
        canvasBorderAlpha: 0,
        legendBorderAlpha: 0,
        legendShadow: 0,
        showXAxisLine: 1,
        // showXAxisLine: 0,
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
        showYAxisValues: 0,

        valueFontSize: 12,
        showLegend: 1,
        showShadow: 0
    };
  return chart;
  }


}
