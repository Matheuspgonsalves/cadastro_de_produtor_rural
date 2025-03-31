import { Inject } from "@nestjs/common";
import { PRODUTOR_REPOSITORY, ProdutorRepository } from "src/core/produtores/repositories/produtor.repository";

export class DeletarProdutorUseCase {
  constructor(
    @Inject(PRODUTOR_REPOSITORY)
    private readonly produtorRepository: ProdutorRepository
  ) {}

  async execute(cpfOuCnpj: string): Promise<void> {
    await this.produtorRepository.delete(cpfOuCnpj);
  }
}
