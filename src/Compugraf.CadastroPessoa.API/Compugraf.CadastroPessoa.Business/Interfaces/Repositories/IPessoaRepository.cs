using Compugraf.CadastroPessoa.Business.RequestModel;
using Compugraf.CadastroPessoa.Business.ResponseModel;

namespace Compugraf.CadastroPessoa.Business.Interfaces.Repositories;

public interface IPessoaRepository
{
    public Task<List<PessoaResponseModel>> GetAll();
    public Task<PessoaResponseModel> GetById(int id);
    public Task<List<PessoaResponseModel>> GetByName(string name);
    public void Add(PessoaRequestModel pessoaRequestModel);
    public void Update(PessoaRequestModel pessoaRequestModel);
    public void Delete(int id);
    public Task<PessoaResponseModel> GetByCpf(string cpf);
}
