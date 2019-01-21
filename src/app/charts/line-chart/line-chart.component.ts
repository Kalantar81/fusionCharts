import { Component, OnInit } from '@angular/core';
import { IData, IDataset, IChart, IDataSource } from '../area-single-dragable/area-single-dragable.component';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  dataSource: IDataSource;
  chart: IChart;
  // categories: Array<ICategories>;
  categories: any;
  dataset: Array<IDataset>;
  appleData: Array<IData>;
  samsungData: Array<IData>;
  blablaData: Array<IData>;

  constructor() {
    this.appleData = [
      {
          value: 1200
      },
      {
          value: 1500
      },
      {
          value: 1300
      },
      {
          value: 900
      }
    ];
    this.samsungData = [
      {
          value: 500
      },

      {
        value: 1200
      },
    ];

    this.chart = {
      caption: 'Quarterly Sales Projections',
      subCaption: 'iPhone vs Samsung Galaxy',
      xAxisName: 'Quarter',
      yAxisName: 'No. of Units',
      paletteColors: '#0075c2,#1aaf5d',
      showalternatehgridcolor: 0,
      bgAlpha: 0,
      borderAlpha: 20,
      usePlotGradientColor: 0,
      canvasBorderAlpha: 0,
      legendBorderAlpha: 0,
      legendShadow: 0,
      showShadow: 0,
      showXAxisLine: 1,
      axisLineAlpha: 25,
      divLineAlpha: 25,
      showBorder: 0
  };

  this.categories = [
    {
      category: [
            {
                label: 'Q1'
            },
            {
                label: 'Q2'
            },
            {
                label: 'Q3'
            },
            {
                label: 'Q4'
            }
        ],
    },
    {
      category: [
      {
        label: 'Q1'
      },
      {
        label: 'Q4'
      }
    ]
  }
];

this.dataset = [
  {
      seriesname: 'Apple',
      valuePosition: 'ABOVE',
      allowDrag: 0,
      data: this.appleData
  },
  {
      seriesname: 'Samsung',
      allowDrag: 0,
      data: this.samsungData
    }
  ];
  }

  ngOnInit() {
    this.dataSource = {
      chart: this.chart,
      categories: this.categories,
      dataset: this.dataset
    };
  }


}

// export interface IDataSource {
//   chart: IChart;
//   categories: Array<ICategories>;
//   dataset: Array<IDataset>;
// }

// export interface IChart {
//   caption?: string;
//   subCaption?: string;
//   xAxisName?: string;
//   yAxisName?: string;
//   paletteColors?: string;
//   showalternatehgridcolor?: number;
//   bgAlpha?: number;
//   borderAlpha?: number;
//   usePlotGradientColor?: number;
//   canvasBorderAlpha?: number;
//   legendBorderAlpha?: number;
//   legendShadow?: number;
//   showShadow?: number;
//   showXAxisLine?: number;
//   axisLineAlpha?: number;
//   divLineAlpha?: number;
//   showBorder?: number;
// }

// export interface ICategories {
//    category: Array<ICategory>;
// }

// export interface ICategory {
//   label: string;
// }


// export interface IDataset {
//     seriesname?: string;
//     valuePosition?: string;
//     allowDrag?: number;
//     data: Array<IData>;
//   }

// export interface IData {
//   value: number;
//   dashed?: number;
//   allowDrag?: number;
//   showvalue?: number;
//   tooltext?: string;
//   color?: string;
//   alpha?: number;
//   anchorRadius?: number;
//   displayValue?: string;
// }
