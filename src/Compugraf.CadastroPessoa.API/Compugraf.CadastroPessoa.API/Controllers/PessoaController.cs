using Compugraf.CadastroPessoa.Business.Interfaces.Services;
using Compugraf.CadastroPessoa.Business.RequestModel;
using Microsoft.AspNetCore.Mvc;

namespace Compugraf.CadastroPessoa.API.Controllers;

[Route("api/v1/[controller]")]
[ApiController]
public class PessoaController : Controller
{
    private readonly IPessoaService _pessoaService;

    public PessoaController(IPessoaService pessoaService)
    {
        _pessoaService = pessoaService;
    }

    [HttpGet]
    [Route("[action]")]
    public async Task<IActionResult> GetAll()
    {
        var result = await _pessoaService.GetAll();

        if (result != null)
            return Ok(result);

        return NoContent();
    }

    [HttpGet]
    [Route("[action]")]
    public async Task<IActionResult> GetPessoaById([FromQuery] int id)
    {
        var result = await _pessoaService.GetById(id);

        if (result != null)
            return Ok(result);

        return NoContent();
    }

    [HttpGet]
    [Route("[action]")]
    public async Task<IActionResult> GetPessoaByName([FromQuery] string name)
    {
        var result = await _pessoaService.GetByName(name);

        if (result != null)
            return Ok(result);

        return NoContent();
    }

    [HttpPost]
    [Route("[action]")]
    public IActionResult AddPessoa([FromBody] PessoaRequestModel pessoaRequest)
    {
        if (pessoaRequest != null)
        {
            _pessoaService.Add(pessoaRequest);

            return StatusCode(StatusCodes.Status201Created, pessoaRequest);
        }

        return BadRequest(pessoaRequest);
    }

    [HttpPut]
    [Route("[action]")]
    public IActionResult UpdatePessoa([FromBody] PessoaRequestModel pessoaRequest)
    {
        if (pessoaRequest != null)
        {
            _pessoaService.Update(pessoaRequest);

            return Ok(pessoaRequest);
        }

        return BadRequest(pessoaRequest);
    }

    [HttpDelete]
    [Route("[action]/{id}")]
    public async Task<IActionResult> DeletePessoa(int id)
    {
        if (id != 0)
        {
            var result = await _pessoaService.Delete(id);

            return Ok(result);
        }

        return BadRequest();
    }

}