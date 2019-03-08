import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SPEXT_COMPONENTS } from './components';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SHARED_COMPONENTS } from './shared';
import { SHARED_PIPES } from './shared';

import { Ng4FilesModule } from 'angular4-files-upload';
import { ToastModule, ToastOptions } from 'ng2-toastr';
import { CustomToastOption } from './providers/toast-options';
import { SPEXT_PROVIDERS } from './providers';

@NgModule({
  declarations: [SPEXT_COMPONENTS, SHARED_COMPONENTS, SHARED_PIPES, AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Ng4FilesModule,
    BrowserAnimationsModule,
    ToastModule.forRoot()
  ],
  providers: [{ provide: ToastOptions, useClass: CustomToastOption }, SPEXT_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {}
