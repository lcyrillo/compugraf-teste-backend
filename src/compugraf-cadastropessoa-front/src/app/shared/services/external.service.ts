import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ExternalService {
   
   constructor(private http: HttpClient) {}

   getCep(cep: string) {
    return this.http.get(`//viacep.com.br/ws/${cep}/json`);
   }

   getPaises() { debugger;
    return this.http.get(`//servicodados.ibge.gov.br/api/v1/paises/`);
   }
}