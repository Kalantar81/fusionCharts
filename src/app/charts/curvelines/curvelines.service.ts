import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICategory, IDataset, IData } from './interfaces';


@Injectable()
export class CurveService {

  constructor(private _http: HttpClient) {}


  initXaxisData(xAxisdata: Array<number>): Array<ICategory> {
      const category: Array<ICategory> = [];
      for (let i = 0; i < xAxisdata.length; i++) {
        category.push({label: xAxisdata[i].toString()});
      }
      return category;
  }


  initCurvelines(xAxisTreadlines: Array<number>, yAxisTreadlines: Array<number>): Array<IDataset> {
    const curvelinesDataset: Array<IDataset> = [];
    let basicCurvelinesDataset: IDataset;
    const data: Array<IData> = [];
    const showValueArray: Array<{index: number, valueInYAxis: number, gap: number}> = [];
    let gap = 0;
    for (let i = 0; i < yAxisTreadlines.length; i++) {
      if (i === gap) {
        data.push({
            value: yAxisTreadlines[i],
            showValue: 1,
            displayValue: Math.floor(xAxisTreadlines[i] / 100).toString(),
            anchorRadius: 0
          });
          showValueArray.push({
            index: i,
            valueInYAxis: yAxisTreadlines[i],
            gap: gap
          });
          gap = gap + 500;
      } else {
        data.push({value: yAxisTreadlines[i], showValue: 0, anchorRadius: 0});
      }
    }

    console.log('Array with positions of visable values: ' + showValueArray);

    basicCurvelinesDataset = {
      seriesname: 'zeroPoint',
      allowDrag: 0,
      includeInLegend: 0,
      data: data
    };
    curvelinesDataset.push(basicCurvelinesDataset);
    return curvelinesDataset;
  }
}


