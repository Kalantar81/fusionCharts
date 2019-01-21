import { Injectable } from '@angular/core';
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

  getTreadlinesData(): Observable<IServerData> {
    return this._http
      .get('assets/data/treadlinesData.json')
      .map((response: Response) => <IServerData>response.json());
  }

}

export interface IServerData {
  xAxisParams: Array<number>;
  yAxisParams: Array<number>;
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

