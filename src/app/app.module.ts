import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { StatsComponent } from './components/stats/stats.component';
import { ChecksComponent } from './components/checks/checks.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';
import { MainComponent } from './components/main/main.component';
import { CreateComponent } from './components/create/create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    StatsComponent,
    ChecksComponent,
    ErrorComponent,
    DetailComponent,
    MainComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
