import { Injectable } from '@angular/core';
import { ICategory, IDataset, IData, ITrendLines, ILine } from './interfaces';

@Injectable()
export class StandartLineChartService {

  constructor() { }

    initXaxisData(xAxisdata: Array<number>, yAxisTreadlines: Array<number>, reduceCounter: number): Array<ICategory> {
      const category: Array<ICategory> = [];
      const gapValuesArray: Array<any> = [];
      let labelCounter = 0;

      for (let i = 0; i < xAxisdata.length; i = i + reduceCounter) {
        if (i === 0) {
          category.push(
            {
              label: Math.floor(xAxisdata[i] / 1000).toString() + 'km',
              vline: true,
              linePosition: 0.5,
              alpha: 100,
              color: '#000000',
              dashed: 1,
              // labelPosition: Math.abs(yAxisTreadlines[i]) / 10000 + 0.4
              labelPosition: Math.abs(yAxisTreadlines[i]) / 5000 + 0.4
            }
          );
        }
        if (labelCounter === i) {
          category.push({label: xAxisdata[i].toString()});
          category.push(
            {
              label: Math.floor(xAxisdata[i] / 1000).toString() + 'km',
              vline: true,
              linePosition: 0.5,
              alpha: 0,
              color: '#000000',
              dashed: 1,
              // labelPosition: Math.abs(yAxisTreadlines[i]) / 10000 + 0.4
              labelPosition: Math.abs(yAxisTreadlines[i]) / 5000 + 0.2
            }
          );

          labelCounter = labelCounter + 5000;

          gapValuesArray.push(
            {
              yAxisValue: (Math.abs(yAxisTreadlines[i])/100).toString(),
              i: i
            }
          );
        } else {
          category.push({label: xAxisdata[i].toString()});
        }
      }
      category.push(
        {
          label: '70',
          vline: true,
          linePosition: 0.5,
          alpha: 20,
          color: '#ff0000',
          dashed: 1,
          labelPosition: 0.61
        }
      );
      console.log('gapValuesArray: ' + gapValuesArray);
      return category;
  }

  initTreadlines(xAxisTreadlines: Array<number>, yAxisTreadlines: Array<number>, reduceCounter: number): Array<IDataset> {
    let treadlinesDataset: Array<IDataset> = [];
    let basicTreadlinesDataset: IDataset;
    const data: Array<IData> = [];
    let gapValue = 200;
    let counter = 5000;
    for (let i = 0; i < yAxisTreadlines.length; i = i + reduceCounter) {
      if (counter === i) {
        data.push(
          {
            value: yAxisTreadlines[i],
            showValue: 1,
            anchorRadius: 0,
            displayValue: Math.floor(xAxisTreadlines[i] / 1000).toString() + 'km',
          }
        );
        counter = counter + 5000;
      } else {
        data.push({value: yAxisTreadlines[i], showValue: 0, anchorRadius: 0});
      }
    }
    data[100].showValue = 1;
    data[100].displayValue = xAxisTreadlines[0].toString();

    basicTreadlinesDataset = {
      seriesname: 'zeroPoint',
      allowDrag: 0,
      includeInLegend: 0,
      data: data
    };
    treadlinesDataset.push(basicTreadlinesDataset);
    console.log('points amount: ' + yAxisTreadlines.length );
    for (let i = 0; i < 4; i++ ) {
      treadlinesDataset = treadlinesDataset.concat(this.initDashedTreadline(yAxisTreadlines.map(value => value + gapValue), reduceCounter));
      gapValue = gapValue + 200;
    }

    return treadlinesDataset;
  }

  initDashedTreadline(yAxisTreadline:  Array<number>, reduceCounter: number): Array<IDataset> {
    const dataset: Array<IDataset> = [];
      dataset.push({
        seriesname: 'dashedTrendLine',
        allowDrag: 0,
        dashed: 1,
        includeInLegend: 0,
        seriesNameInToolTip: 0,
        lineThickness: 1,
        data: this._initData(yAxisTreadline, reduceCounter)
      });
    return dataset;
  }

  initDataset(yAxisTreadline:  Array<number>, seriesname: string, reduceCounter: number): IDataset {
    const dataset = {
        seriesname: seriesname,
        allowDrag: 0,
        dashed: 0,
        includeInLegend: 1,
        data: this._initData(yAxisTreadline, reduceCounter)
      };
    return dataset;
  }

  public initTrendlineNames(startValue: number, displayValue: number, gapValue: number): Array<ITrendLines> {
    const trendlineNames: Array<ITrendLines> = [];
    const lines: Array<ILine> = [];
    let value = startValue;

    for (let i = 0; i < 5; i++) {
      lines.push(
        {
          startValue: value,
          displayValue: displayValue.toString(),
          thickness: 0,
          color: '#000000'
        }
      );
      value = value + gapValue;
      displayValue = displayValue + gapValue;
    }
      trendlineNames.push(
        {
          line: lines
        }
      );
    return trendlineNames;
  }

  private _initData(yAxisData: number[],  reduceCounter: number): Array<IData> {
    const yData: Array<IData> = [];
    for (let i = 0; i < yAxisData.length; i = i + reduceCounter) {
      if (yAxisData[i] === -151.46) {
        yData.push({value: null, showValue: 0, anchorRadius: 0 });
      } else {
        yData.push(
          {
            value: yAxisData[i],
            showValue: 0,
            anchorRadius: 0,
            // tslint:disable-next-line:max-line-length
            tooltext: 'Location: ' + yAxisData[i].toString() + ' , ' + yAxisData[i].toString() + '. ' + 'Height: ' + i.toString() + 'Height: ' + i.toString() +'Height: ' + i.toString() +'Height: ' + i.toString()
          }
        );
      }
  }
  //console.log('ydata length: ' + yData.length);
    return yData;
  }

}
