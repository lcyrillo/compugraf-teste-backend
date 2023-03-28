import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pessoa } from "../models/pessoa.model";

@Injectable({
    providedIn: 'root'
})
export class PessoaService {
   readonly endpoint = 'http://localhost:5115/api/v1/Pessoa/';

   constructor(private http: HttpClient) {}

   getAllPeople(): Observable<Pessoa[]> {
        return this.http.get<Pessoa[]>(this.endpoint + 'GetAll');
   }
}