import { Injectable } from '@angular/core';
import { ICategory, IDataset, IData } from '../standart-line-chart/interfaces';

@Injectable()
export class SimpleLineService {

  constructor() { }

  initXaxisData(xAxisdata: Array<number>): Array<ICategory> {
    const category: Array<ICategory> = [];

    for (let i = 0; i < xAxisdata.length; i++) {
      category.push({label: xAxisdata[i].toString()});
    }
    return category;
  }

  public initTreadlines( yAxisTreadlines: Array<number>, xAxisData: number[],  yGap: number, basicTrendlineName: number): Array<IDataset>  {
    const treadlinesDataset: Array<IDataset> = [];
    const data: Array<IData> = [];
    let yGapCounter = yGap;
    let trendLineDatasetName = basicTrendlineName;
    const xGap = Math.round(yAxisTreadlines.length / 19);
    let xGapCounter = xGap;
    for (let i = 0; i < yAxisTreadlines.length; i++) {
      if ((xGap > 0) && (i === xGapCounter)) {
        data.push(
          {
            value: yAxisTreadlines[i],
            anchorRadius: 3,
            showValue: 1,
            displayValue: Math.floor(xAxisData[i]).toString(),
            tooltext: ' '
          }
        );
        xGapCounter = xGapCounter + xGap;
      } else {
        data.push(
          {
            value: yAxisTreadlines[i],
            anchorRadius: 0,
            showValue: 0,
            tooltext: ' '
          }
        );
      }
    }
    data[0].showValue = 1;
    data[0].displayValue = Math.floor(basicTrendlineName).toString();

    treadlinesDataset.push(
      {
        seriesname: 'zeroPoint',
        allowDrag: 0,
        includeInLegend: 0,
        data: data
      }
    );

    for (let i = 0; i < 4; i++) {
      trendLineDatasetName = Math.floor(trendLineDatasetName + yGap);
      treadlinesDataset.push(
        {
          seriesname: '',
          allowDrag: 0,
          includeInLegend: 0,
          dashed: 1,
          data: this._initDashedTrendlinesData(
                            yAxisTreadlines.map(value => value + yGapCounter),
                            trendLineDatasetName
                            )
        }
      );
      yGapCounter = yGapCounter + yGap;
    }

    return treadlinesDataset;
  }

  public initDataset(yAxisData:  Array<number>, seriesname: string): IDataset {
    const dataset = {
      seriesname: seriesname,
      allowDrag: 0,
      dashed: 0,
      includeInLegend: 1,
      data: this._initData(yAxisData)
    };
    return dataset;
  }

  private _initData(yAxisData: number[]): Array<IData> {
    const yData: Array<IData> = [];
     for (let i = 0; i < yAxisData.length; i ++) {
      yData.push({value: yAxisData[i], showValue: 0, anchorRadius: 0 });
    }
    console.log('ydata length: ' + yData.length);
    return yData;
  }

  private _initDashedTrendlinesData(yAxisData: number[], trendlineName: number): Array<IData> {
    const yDashedData: Array<IData> = [];
     for (let i = 0; i < yAxisData.length; i ++) {
      if ( i === 0) {
        yDashedData.push({value: yAxisData[i], showValue: 1, displayValue: trendlineName.toString(), anchorRadius: 0 });
      } else {
        yDashedData.push({value: yAxisData[i], showValue: 0, anchorRadius: 0, tooltext: ' '});
      }
    }
    // console.log('ydata length: ' + yDashedData.length);
    return yDashedData;
  }
}
