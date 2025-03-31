import { Inject, NotFoundException } from '@nestjs/common';
import { PRODUTOR_REPOSITORY, ProdutorRepository } from 'src/core/produtores/repositories/produtor.repository';
import { Produtor } from 'src/core/produtores/entities/Produtor.entity';

export class BuscarProdutorUseCase {
  constructor(
    @Inject(PRODUTOR_REPOSITORY)
    private readonly produtorRepository: ProdutorRepository,
  ) {}

  async execute(cpfOuCnpj: string): Promise<Produtor> {
    const produtor = await this.produtorRepository.findByCpfOuCnpj(cpfOuCnpj);

    if (!produtor) {
      throw new NotFoundException('Produtor não encontrado');
    }

    return produtor;
  }
}
