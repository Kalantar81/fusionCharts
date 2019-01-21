export interface IChart {
  caption?: string;
  subCaption?: string;
  xAxisName?: string;
  yAxisName?: string;
  paletteColors?: string;
  showalternatehgridcolor?: number;
  bgAlpha?: number;
  borderAlpha?: number;
  usePlotGradientColor?: number;
  canvasBorderAlpha?: number;
  legendBorderAlpha?: number;
  legendShadow?: number;
  showXAxisLine?: number;
  axisLineAlpha?: number;
  divLineAlpha?: number;
  showBorder?: number;
  divLineDashed?: number;
  divLineDashLen?: number;
  divLineDashGap?: number;

  adjustDiv?: number;
  numDivLines?: number;
  divLineColor?: string;

  showLabels?: number;
  showYAxisValues?: number;

  valueFontSize?: number;
  showLegend?: number;
  showShadow?: number;
}

export interface ICategories {
   category: Array<ICategory>;
}

export interface ICategory {
  label: string;
}


export interface IDataset {
    seriesname?: string;
    valuePosition?: string;
    allowDrag?: number;
    dashed?: number;
    includeInLegend?: number;
    data: Array<IData>;
  }

export interface IData {
  value: number;
  dashed?: number;
  allowDrag?: number;
  tooltext?: string;
  showValue?: number;
  anchorRadius?: number;
  displayValue?: string;
  color?: string;
}

export interface IDataSource {
  chart: IChart;
  categories: Array<ICategories>;
  dataset: Array<IDataset>;
}
