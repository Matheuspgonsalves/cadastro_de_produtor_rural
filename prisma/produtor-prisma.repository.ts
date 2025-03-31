import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ProdutorRepository } from "src/core/produtores/repositories/produtor.repository";
import { PrismaService } from "./prisma.service";
import { Produtor } from "src/core/produtores/entities/Produtor.entity";
import { AtualizarProdutorDTO } from "src/application/dtos/produtores/atualizar-produtor-dto";

@Injectable()
class ProdutorPrismaRepository implements ProdutorRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async save(produtor: Produtor): Promise<void> {
    const produtorExistente = await this.prismaService.produtor.findFirst({
      where: { cpfOuCnpj: produtor.cpfOuCnpj },
    });

    if (produtorExistente) {
      throw new Error('Produtor com este CPF/CNPJ já existe');
    }

    await this.prismaService.produtor.create({
      data: {
        cpfOuCnpj: produtor.cpfOuCnpj,
        nomeProdutor: produtor.nomeProdutor,
        nomeFazenda: produtor.nomeFazenda,
        cidade: produtor.cidade,
        estado: produtor.estado,
        areaTotalHectares: produtor.areaTotalHectares,
        areaAgricultavel: produtor.areaAgricultavel,
        areaDeVegetacao: produtor.areaDeVegetacao,
        culturasPlantadas: produtor.culturasPlantadas,
      },
    });
  }

  async update(cpfOuCnpj: string, produtor: AtualizarProdutorDTO): Promise<void> {
    console.log('>>> ENTROU NO MÉTODO CERTO');
    console.log('[UPDATE] Início do update para CPF/CNPJ:', cpfOuCnpj);

    const produtorExistente = await this.prismaService.produtor.findFirst({
      where: { cpfOuCnpj },
    });

    if (!produtorExistente) {
      console.error('[UPDATE] Produtor não encontrado com CPF/CNPJ:', cpfOuCnpj);
      throw new HttpException('Produtor não encontrado', HttpStatus.NOT_FOUND);
    }

    const checarId = await this.prismaService.produtor.findUnique({
      where: { id: produtorExistente.id },
    });

    if (!checarId) {
      console.error('[UPDATE] ID não encontrado na base de dados antes do update:', produtorExistente.id);
      throw new HttpException('Produtor desapareceu do banco antes do update', HttpStatus.INTERNAL_SERVER_ERROR);
    }

    const dataAtualizada = {
      nomeProdutor: produtor.nomeProdutor,
      nomeFazenda: produtor.nomeFazenda,
      cidade: produtor.cidade,
      estado: produtor.estado,
      areaTotalHectares: produtor.areaTotalHectares,
      areaAgricultavel: produtor.areaAgricultavel,
      areaDeVegetacao: produtor.areaDeVegetacao,
      culturasPlantadas: produtor.culturasPlantadas,
    };

    Object.keys(dataAtualizada).forEach((key) => {
      if (dataAtualizada[key] === undefined) {
        console.warn(`[UPDATE] Campo "${key}" está undefined e será removido`);
        delete dataAtualizada[key];
      }
    });

    console.log('[UPDATE] Dados que serão enviados no update:', dataAtualizada);
    console.log('[UPDATE] ID do produtor que será atualizado:', produtorExistente.id);

    await this.prismaService.produtor.update({
      where: { id: produtorExistente.id },
      data: dataAtualizada,
    });
  }
}

export { ProdutorPrismaRepository };
