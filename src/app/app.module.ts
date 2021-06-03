import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TareaCreateComponent } from './components/tarea-create/tarea-create.component';
import { TareaDetailsComponent } from './components/tarea-details/tarea-details.component';
import { TareaListComponent } from './components/tarea-list/tarea-list.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TareaCreateComponent,
    TareaDetailsComponent,
    TareaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
