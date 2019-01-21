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
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { DemoServerService } from 'assets/server/demo-server.service';
import { AreaSingleDragableComponent } from './charts/area-single-dragable/area-single-dragable.component';
import { CurvelinesComponent } from './charts/curvelines/curvelines.component';
import { CurveService } from './charts/curvelines/curvelines.service';
import { InvisibleDatasetComponent } from './charts/invisible-dataset/invisible-dataset.component';
import { InvisibleDatasetService } from './charts/invisible-dataset/invisible-dataset.service';



// Use fcRoot function to inject FusionCharts library, and the modules you want to use
FusionChartsModule.fcRoot(FusionCharts, Dragline, Dragarea);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LineChartComponent,
    AreaSingleDragableComponent,
    CurvelinesComponent,
    InvisibleDatasetComponent
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
    DemoServerService,
    CurveService,
    InvisibleDatasetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
