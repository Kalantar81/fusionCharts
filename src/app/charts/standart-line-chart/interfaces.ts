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
  plotBinSize?: number;

  yAxisMaxValue?: number;
  yaxisMinValue?: number;

  drawCrossLine?: number;
  crossLineColor?: string;
  plotColorinTooltip?: number;

  labelFontSize?: number;
  trendValueFontSize?: number;
  showToolTipShadow?: number;
  tooltipBorderAlpha?: number;
  toolTipBorderColor?: string;

  valuePosition?: string;
  rotateValues?: number;

}

export interface ICategories {
   category: Array<ICategory>;
}

export interface ICategory {
  label: string;
  vline?: boolean;
  linePosition?: number;
  rotateVLineLabels?: number;
  labelPosition?: number;
  alpha?: number;
  color?: string;
  dashed?: number;
}


export interface IDataset {
    seriesname?: string;
    valuePosition?: string;
    allowDrag?: number;
    dashed?: number;
    lineThickness?: number;
    includeInLegend?: number;
    data: Array<IData>;

    seriesNameInToolTip?: number;
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
  trendlines?: Array<any>;
}

export interface ITrendLines {
  line: Array<ILine>;
}


export interface ILine {
  /** shows a zero point */
  vline?: boolean;

  /** Whether to show the trend line value on left side or right side of chart.
   * This is particularly useful when the trend line display values on the chart are colliding with divisional lines values on the chart.
   * Range: 0/1
   */
  valueOnRight?: number;

  /** Color of the trend line and its associated text.
   * Range: Hex Color Code
   */
  color?: string;

  /** Whether the trend will be displayed as a line or a zone (fill-colored rectangle).
   * Range: 0/1
   */
  isTrendZone?: number;

  /** Whether the trend line/zone would be displayed over data plots or behind them.
   * Range: 0/1
   */
showOnTop?: number;

/** If you have opted to show the trend as a line.
 * This attribute lets you define the thickness of trend line.
 * Range: In Pixels
 */
thickness?: number;

/** Alpha of the trend line.
 * Range: 0 - 100
 */
alpha?: number;

/** Whether the trendline should be rendered as dashed lines.
 * Default value: 0 (trendline rendered using straight lines).
 * Range: 0/1
 */
dashed?: number;

/** Sets the length of each dash when trendline is rendered as dashed lines.
 * Range: In pixels
 */
dashLen?: number;

/** Sets the gap between consecutive dashes when trendline is rendered as dashed lines.
 * Range: In pixels
 */
dashGap?: number;

/** The starting value for the trendline.
 * Say, if you want to plot a slanted trendline from value 102 to 109, the `startValue` would be 102.
 * Range: Numeric Value
 */
startValue: number;

/** The ending y-axis value for the trendline.
 * Say, if you want to plot a slanted trendline from value 102 to 109, the `endValue` would be 109.
 * If you do not specify a value for `endValue`, it would automatically assume the same value as @param startValue.
 * Range: Numeric Value
 */
endValue?: number;

/** If you want to display a string caption for the trend line by its side, you can use this attribute.
 * Example:` displayValue='Last Month High'`.
 * When you don't supply this attribute, it automatically takes the value of @param startValue.
 */
displayValue?: string;

/** Custom tool-text for this trendline/zone. */
toolText?: string;
}
