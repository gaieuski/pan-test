import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { PanelModule } from 'primeng/panel';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { ImageModule } from 'primeng/image';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AddCustumerComponent } from './add-custumer/add-custumer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { IConfig, NgxMaskModule } from 'ngx-mask';

// import { NgxMaskModule } from 'ngx-mask'

const maskConfig: Partial<IConfig> ={
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AddCustumerComponent,
    EditCustomerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfig),

    CardModule,
    ButtonModule,
    DialogModule,
    DynamicDialogModule,
    PanelModule,
    ConfirmDialogModule,
    InputMaskModule,
    InputTextModule,
    ImageModule
    
  ],
  exports: [NgxMaskModule],
  providers: [HttpClient, DialogService, ConfirmationService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
