import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { AtualizarProdutorDTO } from "src/application/dtos/produtores/atualizar-produtor-dto";
import { CriarProdutorDTO } from "src/application/dtos/produtores/criar-produtor-dto";
import { IndicadoresDTO } from "src/application/dtos/produtores/indicadores-dto";
import { AtualizarProdutorUseCase } from "src/application/use-cases/produtores/atualizar-produtor-use-case";
import { BuscarProdutorUseCase } from "src/application/use-cases/produtores/buscar-produtor-use-case";
import { CriarProdutorUseCase } from "src/application/use-cases/produtores/criar-produtor-use-case";
import { DeletarProdutorUseCase } from "src/application/use-cases/produtores/deletar-produtor-use-case";
import { GerarIndicadoresUseCase } from "src/application/use-cases/produtores/gerar-indicadores-use-case";
import { ListarProdutoresUseCase } from "src/application/use-cases/produtores/listar-produtores-use-case";

@ApiTags('Produtores')
@Controller('produtores')
export class ProdutorController {
    constructor(
        private readonly criarProdutorUseCase: CriarProdutorUseCase,
        private readonly atualizarProdutorUseCase: AtualizarProdutorUseCase,
        private readonly deletarProdutorUseCase: DeletarProdutorUseCase,
        private readonly listarProdutoresUseCase: ListarProdutoresUseCase,
        private readonly buscarProdutorUseCase: BuscarProdutorUseCase,
        private readonly gerarIndicadoresUseCase: GerarIndicadoresUseCase,
    ){

    }

    @Post()
    async create(@Body() body: CriarProdutorDTO){
        return this.criarProdutorUseCase.execute(body);
    }

    @Put(':cpfOuCnpj')
    async update(
        @Param('cpfOuCnpj') cpfOuCnpj: string, 
        @Body() body: AtualizarProdutorDTO) {
        console.log('CPF recebido no controller:', cpfOuCnpj);
        return this.atualizarProdutorUseCase.execute(cpfOuCnpj, body)
    }

    @Delete(':cpfOuCnpj')
        async delete(@Param('cpfOuCnpj') cpfOuCnpj: string) {
        return this.deletarProdutorUseCase.execute(cpfOuCnpj);
    }

    @Get()
        async findAll() {
        return this.listarProdutoresUseCase.execute();
    }

    @Get('indicadores')
    @ApiOkResponse({ type: IndicadoresDTO })
    async gerarIndicadores() {
      return this.gerarIndicadoresUseCase.execute();
    }

    @Get(':cpfOuCnpj')
    async findByCpf(@Param('cpfOuCnpj') cpfOuCnpj: string) {
        return this.buscarProdutorUseCase.execute(cpfOuCnpj);
    }



}