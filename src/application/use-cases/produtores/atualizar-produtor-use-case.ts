import { AtualizarProdutorDTO } from 'src/application/dtos/produtores/atualizar-produtor-dto';
import { Inject } from '@nestjs/common';
import { PRODUTOR_REPOSITORY, ProdutorRepository } from 'src/core/produtores/repositories/produtor.repository';
import { Produtor } from 'src/core/produtores/entities/Produtor.entity';

export class AtualizarProdutorUseCase {
  constructor(
    @Inject(PRODUTOR_REPOSITORY)
    private readonly produtorRepository: ProdutorRepository
  ) {}

  async execute(cpfOuCnpj: string, data: AtualizarProdutorDTO): Promise<void> {
    const produtor = new Produtor(
      cpfOuCnpj,
      data.nomeProdutor ?? '',
      data.nomeFazenda ?? '',
      data.cidade ?? '',
      data.estado ?? '',
      data.areaTotalHectares ?? 0,
      data.areaAgricultavel ?? 0,
      data.areaDeVegetacao ?? 0,
      data.culturasPlantadas ?? []
    );

    await this.produtorRepository.update(cpfOuCnpj, produtor);
  }
}
