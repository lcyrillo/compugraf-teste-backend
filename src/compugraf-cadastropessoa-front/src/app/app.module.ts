import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponentComponent } from './components/cadastro-component/cadastro-component.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { FormComponentComponent } from './components/form-component/form-component.component';
import { PessoaService } from './shared/services/pessoa.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExternalService } from './shared/services/external.service';
import { MenuComponent } from './components/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastroComponentComponent,
    HeaderComponentComponent,
    FormComponentComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    PessoaService,
    ExternalService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
