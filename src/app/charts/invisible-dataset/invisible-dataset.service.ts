import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDataset, IData, ICategory } from '../curvelines/interfaces';

@Injectable()
export class InvisibleDatasetService {

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

    for (let i = 0; i < yAxisTreadlines.length; i++) {
      if (yAxisTreadlines[i] < -15) {
        data.push({
            value: yAxisTreadlines[i],
            showValue: 0,
            anchorRadius: 0,
            color: '#ffffff'
          });
      } else {
        data.push({value: yAxisTreadlines[i], showValue: 0, anchorRadius: 0});
      }
    }

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


