import { NgModule } from '../../node_modules/@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StandartLineChartComponent } from './charts/standart-line-chart/standart-line-chart.component';
import { SimpleLineComponent } from './charts/simple-line/simple-line.component';








const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'}, // '' will render to home component
  {path: 'home', component: HomeComponent},
  {path: 'lineChart', component: StandartLineChartComponent},
  {path: 'differentDatasets', component: SimpleLineComponent},
  {path: '**', component: HomeComponent}  // '**' something goes wrong, will render to home component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
