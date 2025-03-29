import { Body, Controller, Post } from "@nestjs/common";
import { CriarProdutorDTO } from "src/application/dtos/produtores/criar-produtor-dto";
import { CriarProdutorUseCase } from "src/application/use-cases/produtores/criar-produtor-use-case";

@Controller('produtor')
export class ProdutorController {
    constructor(private readonly criarProdutorUseCase: CriarProdutorUseCase){

    }

    @Post()
    async create(@Body() body: CriarProdutorDTO){
        return this.criarProdutorUseCase.execute(body);
    }

}