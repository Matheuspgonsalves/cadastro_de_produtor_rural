import { Inject } from '@nestjs/common';
import { Produtor } from 'src/core/produtores/entities/Produtor.entity';
import { PRODUTOR_REPOSITORY, ProdutorRepository } from 'src/core/produtores/repositories/produtor.repository';

export class ListarProdutoresUseCase {
  constructor(
    @Inject(PRODUTOR_REPOSITORY)
    private readonly produtorRepository: ProdutorRepository
  ) {}

  async execute(): Promise<Produtor[]> {
    return this.produtorRepository.findAll();
  }
}
