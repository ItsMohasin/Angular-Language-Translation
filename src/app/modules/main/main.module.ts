import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { MainRoutingModule } from './main-routing.module';
import { MainPageComponent } from '../main/fnd/main-page/main-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { HelperModule } from '../../pipes/helpers.module';




import { DashboardComponent } from '../main/fnd/dashboard/dashboard.component';
import {DataTablesModule} from 'angular-datatables';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(httpClient: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(httpClient);
}


@NgModule({
  declarations: [
    MainPageComponent, PageNotFoundComponent, LayoutComponent,
     DashboardComponent,
   // buildercomponents
 
 
  ],
  // entryComponents: [DoughnutChartComponent, LineChartComponent, RadarChartComponent, BarChartComponent, BubbleChartComponent, DynamicChartComponent, ScatterChartComponent, PolarChartComponent, PieChartComponent, FinancialChartComponent, ToDoChartComponent,
  //   TextAreaComponent,ImgFieldComponent,LineFieldComponent,QrCodeComponent,TableFieldComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HelperModule,
    MainRoutingModule,
    HttpClientModule,
    DataTablesModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MainModule { }