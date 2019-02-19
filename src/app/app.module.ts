import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '../../node_modules/@angular/common/http';

// Import angular-fusioncharts
import { FusionChartsModule } from 'angular-fusioncharts';

// Import FusionCharts library
import FusionCharts from 'fusioncharts/core';

// Load FusionCharts Individual Charts
import Dragline from 'fusioncharts/viz/dragline';
import Dragarea from 'fusioncharts/viz/dragarea';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { MultiplyDatasetsFromServerService } from 'assets/server/multiply-datasets-from-server.service';
import { DemoServerService } from 'assets/server/demo-server.service';
import { StandartLineChartComponent } from './charts/standart-line-chart/standart-line-chart.component';
import { SimpleLineComponent } from './charts/simple-line/simple-line.component';
import { StandartLineChartService } from './charts/standart-line-chart/standart-line-chart.service';
import { SimpleLineService } from './charts/simple-line/simple-line.service';


// Use fcRoot function to inject FusionCharts library, and the modules you want to use
FusionChartsModule.fcRoot(FusionCharts, Dragline, Dragarea);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    StandartLineChartComponent,
    SimpleLineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    FusionChartsModule
  ],
  providers: [
    MultiplyDatasetsFromServerService,
    DemoServerService,
    StandartLineChartService,
    SimpleLineService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
