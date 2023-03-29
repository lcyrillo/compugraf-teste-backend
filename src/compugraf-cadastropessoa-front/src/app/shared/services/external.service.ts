import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Endereco } from "../models/endereco.model";
import { Pessoa } from "../models/pessoa.model";

@Injectable({
    providedIn: 'root'
})
export class ExternalService {
   
   constructor(private http: HttpClient) {}

   getCep(cep: string) {
    return this.http.get(`//viacep.com.br/ws/${cep}/json`);
   }
}