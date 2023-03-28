using Compugraf.CadastroPessoa.Business.Interfaces.Repositories;
using Compugraf.CadastroPessoa.Business.RequestModel;
using Compugraf.CadastroPessoa.Business.ResponseModel;
using Dapper;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;

namespace Compugraf.CadastroPessoa.Repository.Repositories;

public class PessoaRepository : IPessoaRepository
{
    private readonly IConfiguration _config;

    public PessoaRepository(IConfiguration config)
    {
        _config = config;
    }

    public async void Add(PessoaRequestModel pessoaRequestModel)
    {
        using var connection = new SqlConnection(_config.GetConnectionString("SqlServer"));
        await connection.ExecuteAsync(@"INSERT INTO PESSOA 
                                        (NOME, SOBRENOME, NACIONALIDADE, CEP, ESTADO, CIDADE, LOGRADOURO, EMAIL, TELEFONE)
                                       VALUES
                                        (@Nome, @Sobrenome, @Nacionalidade, @Cep, @Estado, @Cidade, @Logradouro, @Email, @Telefone)", pessoaRequestModel);
    }

    public async void Delete(int id)
    {
        using var connection = new SqlConnection(_config.GetConnectionString("SqlServer"));
        await connection.ExecuteAsync("DELETE FROM PESSOA WHERE ID = @Id", new { Id = id });
    }

    public async Task<List<PessoaResponseModel>> GetAll()
    {
        using var connection = new SqlConnection(_config.GetConnectionString("SqlServer"));
        var pessoa = await connection.QueryAsync<PessoaResponseModel>("SELECT * FROM PESSOA");

        return pessoa.ToList();
    }

    public async Task<PessoaResponseModel> GetById(int id)
    {
        using var connection = new SqlConnection(_config.GetConnectionString("SqlServer"));
        var pessoa = await connection.QueryFirstOrDefaultAsync<PessoaResponseModel>("SELECT * FROM PESSOA WHERE ID = @Id", new { Id = id });

        return pessoa;
    }

    public async Task<List<PessoaResponseModel>> GetByName(string name)
    {
        using var connection = new SqlConnection(_config.GetConnectionString("SqlServer"));
        var pessoa = await connection.QueryAsync<PessoaResponseModel>("SELECT * FROM PESSOA WHERE NOME LIKE @Name", new { Name = @"%name%" });

        return pessoa.ToList();
    }

    public async void Update(PessoaRequestModel pessoaRequestModel)
    {
        using var connection = new SqlConnection(_config.GetConnectionString("SqlServer"));
        await connection.ExecuteAsync(@"UPDATE PESSOA SET NOME = @Nome, SOBRENOME = @Sobrenome, NACIONALIDADE = @Nacionalidade, 
                                                CEP = @Cep, ESTADO = @Estado, CIDADE = @Cidade, LOGRADOURO = @Logradouro, EMAIL = @Email, TELEFONE = @Telefone", pessoaRequestModel);
    }
}
