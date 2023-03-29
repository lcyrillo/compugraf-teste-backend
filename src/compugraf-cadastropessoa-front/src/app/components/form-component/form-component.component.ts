import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Nacionalidade } from 'src/app/shared/models/nacionalidade.model';
import { Pessoa } from 'src/app/shared/models/pessoa.model';
import { PessoaService } from 'src/app/shared/services/pessoa.service';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent implements OnInit {
  // formCadastro: FormGroup;
  public pessoas: Pessoa[];
  public nacionalidade: Nacionalidade[];
  public pessoaSelecionada: Pessoa[];
  public pessoaCpf: Pessoa;
  public cpfExistente: boolean;
  public loading: boolean;

  constructor(
    // private fb: FormBuilder,
    private pessoaService: PessoaService
    ) { }

  ngOnInit(): void {
    // this.formCadastro = this.fb.group({
    //   nome: ['', [Validators.required]],
    //   sobrenome: ['', [Validators.required]],
    //   nacionalidade: ['', [Validators.required]],
    //   cep: ['', [Validators.required]],
    //   estado: ['', [Validators.required]],
    //   cidade: ['', [Validators.required]],
    //   logradouro: ['', [Validators.required]],
    //   email: ['', [Validators.required]],
    //   telefone: ['', [Validators.required]],
    // })
  }

  ngAfterViewInit(): void {
    this.getAll();
  }

  public getPessoa(id: number): void {
    this.pessoaSelecionada = this.pessoas.filter(filter => filter.id === id);
  }

  public getAll() {
    this.pessoaService.getAll()
      .subscribe((data: Pessoa[]) => {
        this.pessoas = data;
      });
  }

  public savePessoa(data: Pessoa) {
    this.loading = true;

    if (!this.pessoaCpf) {

      this.pessoaService.save(data)
        .subscribe(() => {
          this.loading = false;
          this.getAll();
        })
    }
  }

  public deletePessoa(id: number): void {  debugger;
    this.loading = true;

    this.pessoaService.delete(id)
      .subscribe(() => {
        this.loading = false;
      })

      this.getAll();
  }

  public getByCpf(cpf: string) {
    this.cpfExistente = false;
    this.pessoaService.getByCpf(cpf)
      .subscribe((data: Pessoa) => {
        this.pessoaCpf = data;
        if(this.pessoaCpf !== undefined && this.pessoaCpf !== null)
          this.cpfExistente = true;
      })
  }

}
