import { Inject } from "@nestjs/common";
import { IndicadoresDTO } from "src/application/dtos/produtores/indicadores-dto";
import { PRODUTOR_REPOSITORY, ProdutorRepository } from "src/core/produtores/repositories/produtor.repository";

export class GerarIndicadoresUseCase {
    constructor(
        @Inject(PRODUTOR_REPOSITORY)
        private readonly produtorRepository: ProdutorRepository
    ) {}

    async execute(): Promise<IndicadoresDTO> {
        return this.produtorRepository.gerarIndicadores();
    }
}
