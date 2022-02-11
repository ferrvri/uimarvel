import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CanActivateHomeRoute } from './shared/route/can.activate.route';
import { HeaderModule } from './shared/components/app-header/app-header.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpLocalInterceptor } from './shared/http-interceptor/http-interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastModule,
    HeaderModule,
    HttpClientModule
  ],
  providers: [
    MessageService,
    CanActivateHomeRoute,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpLocalInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
