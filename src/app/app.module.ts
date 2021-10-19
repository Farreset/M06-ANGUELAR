import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DbzModule } from "./dbz/dbz.module";
import { ContadorModule } from "./contador/contador.modules";
import { HeroeComponent } from './Heroes/Heroe/heroe.component';
import { ListadoComponent } from './Heroes/listado/listado.component';
import { MainPageComponent } from './dbz/main-page/main-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroeComponent,
    ListadoComponent,
 
  ],
  imports: [
    BrowserModule,
    ContadorModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent,HeroeComponent,ListadoComponent]
  
})
export class AppModule { }
