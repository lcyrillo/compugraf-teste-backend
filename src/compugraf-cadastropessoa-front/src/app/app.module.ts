import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponetComponent } from './components/cadastro-componet/cadastro-componet.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { FormComponentComponent } from './components/form-component/form-component.component';
import { PessoaService } from './shared/services/pessoa.service';
import { FormsModule } from '@angular/forms';
import { ExternalService } from './shared/services/external.service';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponetComponent,
    HeaderComponentComponent,
    FormComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PessoaService,
    ExternalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
