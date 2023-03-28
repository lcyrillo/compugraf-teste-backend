import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponetComponent } from './components/cadastro-componet/cadastro-componet.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { FormComponentComponent } from './components/form-component/form-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponetComponent,
    HeaderComponentComponent,
    FormComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
