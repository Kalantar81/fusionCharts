import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DemoServerService {

  // constructor(private _http: HttpClient) { }
  constructor(private _http: Http) { }

  getData(): Observable<IDataFromServer> {
    return this._http
      .get('assets/data/lossProflieDocUpdated.json')
      .map((response: Response) => <IDataFromServer>response.json());
  }

  getTreadlinesData(): Observable<ITreadlinesData> {
    return this._http
      .get('assets/data/maxDataset.json')
      .map((response: Response) => <ITreadlinesData>response.json());
  }

}

export interface ITreadlinesData {
  levelsAmount?: number;
  gapValue?: number;
  xAxisData?: Array<number>;
  yAxisProfileGroundWithDowning?: Array<number>;
  ellipseWithDowningY?: Array<number>;
  yAxisObstacles?: Array<number>;
  yAxisMinTrendLine?: Array<number>;
}


export interface IDataFromServer {
  xAxisDataset?: Array<IXAxisDataset>;
  yAxisDataset?: Array<IYAxisDataset>;
  yAxisTreadLines?: Array<ITreadlines>;
}

export interface IXAxisDataset {
  name: string;
  params: Array<number>;
}

export interface IYAxisDataset {
  name: string;
  params: Array<number>;
}

export interface ITreadlines {
  name: string;
  params: Array<number>;
}

