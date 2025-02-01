
import { BrowserModule } from '@angular/platform-browser';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { MainModule } from './modules/main/main.module';
import { HelperModule } from './pipes/helpers.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { DragDropModule  } from '@angular/cdk/drag-drop';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';




export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}


@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HelperModule,
    MainModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })

  ],
  providers: [
   
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: LocationStrategy, useClass: HashLocationStrategy }  // HashLocationStrategy  to use # and remove # PathLocationStrategy
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA  ]
})
export class AppModule { }
