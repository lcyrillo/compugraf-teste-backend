using Compugraf.CadastroPessoa.Business.RequestModel;
using Compugraf.CadastroPessoa.Business.ResponseModel;

namespace Compugraf.CadastroPessoa.Business.Interfaces.Services;

public interface IPessoaService
{
    public Task<List<PessoaResponseModel>> GetAll();
    public Task<PessoaResponseModel> GetById(int id);
    public Task<List<PessoaResponseModel>> GetByName(string name);
    public Task<PessoaResponseModel> Add(PessoaRequestModel pessoaRequestModel);
    public Task<PessoaResponseModel> Update(PessoaRequestModel pessoaRequestModel);
    public Task<PessoaResponseModel> Delete(int id);
}
