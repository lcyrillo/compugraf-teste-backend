import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Nacionalidade } from 'src/app/shared/models/nacionalidade.model';
import { Pessoa } from 'src/app/shared/models/pessoa.model';
import { PessoaEdit } from 'src/app/shared/models/pessoaEdit.model';
import { ExternalService } from 'src/app/shared/services/external.service';
import { PessoaService } from 'src/app/shared/services/pessoa.service';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent implements OnInit {
  @ViewChild('pessoaForm') pessoa : Pessoa;
  
  // formCadastro: FormGroup;
  public pessoas: Pessoa[];
  public nacionalidade: Nacionalidade[];
  public pessoaSelecionada: Pessoa[];
  public pessoaEditar: PessoaEdit = new PessoaEdit();
  public pessoaCpf: Pessoa;
  public cpfExistente: boolean;
  public loading: boolean;
  public editando: boolean;

  constructor(
    // private fb: FormBuilder,
    private pessoaService: PessoaService,
    private externalService: ExternalService
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
    this.pessoaEditar = this.pessoaSelecionada[0];
    this.editando = true;
  }

  public getAll() {
    this.pessoaService.getAll()
      .subscribe((data: Pessoa[]) => {
        this.pessoas = data;
      });
  }

  public savePessoa(data: Pessoa, form: NgForm) {
    this.loading = true;

    if (this.editando) {
      data.id = this.pessoaEditar.id;
      this.updatePessoa(data, form);
    } else {
      if (!this.pessoaCpf) {

        this.pessoaService.save(data)
          .subscribe(() => {
            this.loading = false;
            this.getAll();
          })
      }
    }

    this.resetForm(form);  
  }

  private updatePessoa(data: Pessoa, form: NgForm) {

    this.pessoaService.update(data)
      .subscribe(() => {
        this.loading = false;
        this.getAll();
      })
  }

  public deletePessoa(id: number): void {
    this.loading = true;

    this.pessoaService.delete(id)
      .subscribe(() => {
        this.loading = false;
      })

      this.getAll();
  }

  public getByCpf(cpf: string): void {
    this.cpfExistente = false;
    this.pessoaService.getByCpf(cpf)
      .subscribe((data: Pessoa) => {
        this.pessoaCpf = data;
        if(this.pessoaCpf !== undefined && this.pessoaCpf !== null)
          this.cpfExistente = true;
      })
  }

  resetForm(form: NgForm): void {
    form.resetForm();
    this.editando = false;
  }

  getEnderecoByCep(cep: string, form: NgForm): void {
     this.externalService.getCep(cep)
      .subscribe((dados) => this.fillEndereco(dados, form))
 }

  fillEndereco(dados: any, form: any) {
    this.pessoaEditar.cep = dados.cep;
    this.pessoaEditar.logradouro = dados.logradouro;
    this.pessoaEditar.cidade = dados.localidade;
    this.pessoaEditar.estado = dados.uf;
  }

}
