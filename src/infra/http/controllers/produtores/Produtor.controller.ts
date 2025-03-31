import { Body, Controller, Param, Post, Put } from "@nestjs/common";
import { AtualizarProdutorDTO } from "src/application/dtos/produtores/atualizar-produtor-dto";
import { CriarProdutorDTO } from "src/application/dtos/produtores/criar-produtor-dto";
import { AtualizarProdutorUseCase } from "src/application/use-cases/produtores/atualizar-produtor-use-case";
import { CriarProdutorUseCase } from "src/application/use-cases/produtores/criar-produtor-use-case";

@Controller('produtores')
export class ProdutorController {
    constructor(
        private readonly criarProdutorUseCase: CriarProdutorUseCase,
        private readonly atualizarProdutorUseCase: AtualizarProdutorUseCase
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

}