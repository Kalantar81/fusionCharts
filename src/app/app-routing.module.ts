import { NgModule } from '../../node_modules/@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { AreaSingleDragableComponent } from './charts/area-single-dragable/area-single-dragable.component';
import { CurvelinesComponent } from './charts/curvelines/curvelines.component';
import { InvisibleDatasetComponent } from './charts/invisible-dataset/invisible-dataset.component';







const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'}, // '' will render to home component
  {path: 'home', component: HomeComponent},
  {path: 'lineChart', component: LineChartComponent},
  {path: 'areaSingleDragable', component: AreaSingleDragableComponent},
  {path: 'treadlines', component: CurvelinesComponent},
  {path: 'invisibleDataset', component: InvisibleDatasetComponent},
  {path: '**', component: HomeComponent}  // '**' something goes wrong, will render to home component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
