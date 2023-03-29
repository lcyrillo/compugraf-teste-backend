using Compugraf.CadastroPessoa.Business.Interfaces.Repositories;
using Compugraf.CadastroPessoa.Business.Interfaces.Services;
using Compugraf.CadastroPessoa.Business.RequestModel;
using Compugraf.CadastroPessoa.Business.ResponseModel;

namespace Compugraf.CadastroPessoa.Business.Services;

public class PessoaService : IPessoaService
{

    private readonly IPessoaRepository _pessoaRepository;

    public PessoaService(IPessoaRepository pessoaRepository)
    {
        _pessoaRepository = pessoaRepository;
    }

    public void Add(PessoaRequestModel pessoaRequestModel)
    {
        _pessoaRepository.Add(pessoaRequestModel);
    }

    public Task<PessoaResponseModel> Delete(int id)
    {
        var pessoa = _pessoaRepository.GetById(id);

        if (pessoa != null)
            _pessoaRepository.Delete(id);

        return pessoa;

    }

    public Task<List<PessoaResponseModel>> GetAll()
    {
        return _pessoaRepository.GetAll();
    }

    public Task<PessoaResponseModel> GetByCpf(string cpf)
    {
        return _pessoaRepository.GetByCpf(cpf);             
    }

    public Task<PessoaResponseModel> GetById(int id)
    {
        return _pessoaRepository.GetById(id);
    }

    public Task<List<PessoaResponseModel>> GetByName(string name)
    {
        return _pessoaRepository.GetByName(name);
    }

    public void Update(PessoaRequestModel pessoaRequestModel)
    {
        _pessoaRepository.Update(pessoaRequestModel);
    }
}