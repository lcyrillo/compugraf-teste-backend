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

  getAll() {
    this.pessoaService.getAll()
      .subscribe((data: Pessoa[]) => {
        this.pessoas = data;
      });
  }

  saveUser(data: Pessoa) {
    this.loading = true;

    this.pessoaService.save(data)
      .subscribe((result) => {
        console.warn(result);
        this.loading = false;
        this.getAll();
      })
  }

}
