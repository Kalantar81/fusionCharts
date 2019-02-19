import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MultiplyDatasetsFromServerService {

  constructor(private _http: Http) { }

  getData2Pnt(): Observable<IDataFromServer> {
    return this._http
      .get('assets/data/lossProflieDoc2Pnt.json')
      .map((response: Response) => <IDataFromServer>response.json());
  }

  getData10Pnt(): Observable<IDataFromServer> {
    return this._http
      .get('assets/data/lossProflieDoc10Pnt.json')
      .map((response: Response) => <IDataFromServer>response.json());
  }

  getData100Pnt(): Observable<IDataFromServer> {
    return this._http
      .get('assets/data/lossProflieDoc100Pnt.json')
      .map((response: Response) => <IDataFromServer>response.json());
  }

  getData1000Pnt(): Observable<IDataFromServer> {
    return this._http
      .get('assets/data/lossProflieDoc1000Pnt.json')
      .map((response: Response) => <IDataFromServer>response.json());
  }

  getData10000Pnt(): Observable<IDataFromServer> {
    return this._http
      .get('assets/data/lossProflieDoc10000Pnt.json')
      .map((response: Response) => <IDataFromServer>response.json());
  }

  getDataMaxPnt(): Observable<IDataFromServer> {
    return this._http
      .get('assets/data/lossProflieDocLong.json')
      .map((response: Response) => <IDataFromServer>response.json());
  }
}

export interface IDataFromServer {
  xAxisData: Array<number>;

  /** helps to build a first trendline */
  downing: Array<number>;
  /** Ground (blue) */
  profileDataWithDowning: Array<number>;

  /** Red line */
  lineOfSightWithDowning: Array<number>;

  /** Fernel curve */
  fernelEllipseWithDowning: Array<number>;

  /** not included if RFLOS = false */
  tooltipClearance: Array<number>;

  /** not included if RFLOS = false */
  tooltipFersnelPenetrationPerc: Array<number>;

  tooltipCoordinates:  Array<string>;

  profileTotalMinHeightMeters: number;
  profileTotalMaxHeightMeters: number;

  /** for know an xaxis gaps */
  profileDistanceMeters: number;

  /** unused */
  profileIncrementMeters: number;

  /**  */
  RFLOS: boolean;
}

