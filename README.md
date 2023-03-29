# Compugraf - Cadastro de Pessoa

# Tecnologias Utilizadas

- Angular 12
- .Net 7
- SQL Server

# Utilizacao

Para utilizar esse projeto você deverá executar os scripts da pasta "SQL", responsável por criar o banco e a tabela de pessoas.
Rodar o projeto "backend" que será executado na porta 5115. Esse projeto conta com a utilização do Swagger, o qual você irá visualizar no seu web browser. 
Rodar o projeto front-end em angular. Para rodar o projeto vá até a pasta "compugraf-cadastropessoa-front" e execute o comando "npm start" ou "ng serve". Ao finalizar o projeto poderá ser acessado na porta 4200 (http://localhost:4200/)

# Cadastro

O projeto conta com um cadastro de pessoas.

O formulário é responsável por gravar uma nova pessoa, validar se o CPF já existe, ou seja, o cpf já está cadastrado não permitindo assim o cadastro atual no mesmo cpf, uma listagem de todas as pessoas cadastradas, podendo ser editadas e excluidas atráves dos botões de ação na lista.