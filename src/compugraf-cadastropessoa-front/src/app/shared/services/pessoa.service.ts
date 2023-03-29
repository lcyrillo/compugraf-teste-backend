import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pessoa } from "../models/pessoa.model";

@Injectable({
    providedIn: 'root'
})
export class PessoaService {
   readonly endpoint = 'http://localhost:5115/api/v1/Pessoa/';

   private data:JSON;

   constructor(private http: HttpClient) {}

   getAll(): Observable<Pessoa[]> {
        return this.http.get<Pessoa[]>(`${this.endpoint}GetAll`);
   }

   getById(id: number): Observable<Pessoa> {
        return this.http.get<Pessoa>(`${this.endpoint}GetPessoaById?id=${id}`);
   }

   getByCpf(cpf: string): Observable<Pessoa> {
        return this.http.get<Pessoa>(`${this.endpoint}GetPessoaByCpf?cpf=${cpf}`);
   }

   save(user: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(`${this.endpoint}AddPessoa`, user);
   }

   delete(id: number): Observable<Pessoa> {
     return this.http.delete<Pessoa>(`${this.endpoint}DeletePessoa/${id}`);
   }
}