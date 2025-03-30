import { AtualizarProdutorDTO } from 'src/application/dtos/produtores/atualizar-produtor-dto';
import { Inject } from '@nestjs/common';
import { PRODUTOR_REPOSITORY, ProdutorRepository } from 'src/core/produtores/repositories/produtor.repository';

export class AtualizarProdutorUseCase {
  constructor(
    @Inject(PRODUTOR_REPOSITORY)
    private readonly produtorRepository: ProdutorRepository
  ) {
  }

  async execute(cpfOuCnpj: string, data: AtualizarProdutorDTO): Promise<void> {
    await this.produtorRepository.update(cpfOuCnpj, data);
  }
}
