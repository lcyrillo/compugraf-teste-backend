import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, NgForm, Validators } from '@angular/forms';
import { Pais } from 'src/app/shared/models/pais.model';
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

  pessoaForm!: UntypedFormGroup;

  public pessoas: Pessoa[];
  public pessoaSelecionada: Pessoa[];
  public pessoaEditar: PessoaEdit = new PessoaEdit();
  public pessoaCpf: Pessoa;
  public cpfExistente: boolean;
  public loading: boolean;
  public editando = false;
  public listaPaises: Pais[] = [];
  public pais: Pais = new Pais();

  constructor(
    private pessoaService: PessoaService,
    private externalService: ExternalService
    ) { }

  ngOnInit(): void {
    this.pessoaForm = new UntypedFormGroup({
      nome: new UntypedFormControl('', Validators.required),
      sobrenome: new UntypedFormControl('', Validators.required),
      nacionalidade: new UntypedFormControl('', Validators.required),
      cep: new UntypedFormControl('', Validators.required),
      estado: new UntypedFormControl('', Validators.required),
      cidade: new UntypedFormControl('', Validators.required),
      logradouro: new UntypedFormControl('', Validators.required),
      email: new UntypedFormControl('', Validators.required),
      telefone: new UntypedFormControl('', Validators.required),
      cpf: new UntypedFormControl('', Validators.required),
    });

  }

  get nome() {
    return this.pessoaForm.get('nome')!;
  }

  get sobrenome() {
    return this.pessoaForm.get('sobrenome')!;
  }

  get nacionalidade() {
    return this.pessoaForm.get('nacionalidade')!;
  }

  get cep() {
    return this.pessoaForm.get('cep')!;
  }

  get estado() {
    return this.pessoaForm.get('estado')!;
  }

  get cidade() {
    return this.pessoaForm.get('cidade')!;
  }

  get logradouro() {
    return this.pessoaForm.get('logradouro')!;
  }

  get email() {
    return this.pessoaForm.get('email')!;
  }

  get telefone() {
    return this.pessoaForm.get('telefone')!;
  }

  get cpf() {
    return this.pessoaForm.get('cpf')!;
  }

  ngAfterViewInit(): void {
    this.getAll();
  }

  save() {
    if (!this.pessoaForm.invalid) {
      this.savePessoa(this.pessoaForm.value);
    } else {
      return;
    }
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

  public async savePessoa(data: Pessoa) { debugger;
    this.loading = true;

    if (this.editando) {
      data.id = this.pessoaEditar.id;
      this.updatePessoa(data);
    } else {
      if (!this.pessoaCpf) {
        this.pessoaService.save(data)
          .subscribe(() => {
            this.loading = false;
            this.getAll();
          })
      }
    }

    this.resetForm();
  }

  private async updatePessoa(data: Pessoa) {
    this.loading = true;

    await this.pessoaService.update(data)
      .subscribe(() => {
        this.loading = false;
        this.getAll();
      })
  }

  public async deletePessoa(id: number) {
    this.loading = true;

    await this.pessoaService.delete(id)
      .subscribe(() => {
        this.loading = false;
        this.getAll();
      });
  }

  public getByCpf(cpf: string): void {
    this.cpfExistente = false;
    this.pessoaService.getByCpf(cpf)
      .subscribe((data: Pessoa) => {
        this.pessoaCpf = data;
        if(this.pessoaCpf !== undefined && this.pessoaCpf !== null) {
          this.cpfExistente = true;
          this.pessoaForm.invalid;
        }
      })
  }

  resetForm(): void {
    this.pessoaForm.reset();
    this.editando = false;
  }

  getEnderecoByCep(cep: string): void {
     this.externalService.getCep(cep)
      .subscribe((dados) => this.fillEndereco(dados))
  }

  private fillEndereco(dados: any) {
    this.pessoaEditar.cep = dados.cep;
    this.pessoaEditar.logradouro = dados.logradouro;
    this.pessoaEditar.cidade = dados.localidade;
    this.pessoaEditar.estado = dados.uf;
  }

  getPaises(): void {
    this.externalService.getPaises()
     .subscribe((dados) => {
        this.fillPaises(dados);
     });
  }

  private fillPaises(dados: any) {
    dados.forEach((element: any) => {
      this.pais = new Pais();
      this.pais.id = element.id;
      this.pais.nome = element.nome;
      this.listaPaises.push(this.pais);
    });

  }

}
