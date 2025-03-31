import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ProdutorRepository } from "src/core/produtores/repositories/produtor.repository";
import { PrismaService } from "./prisma.service";
import { Produtor } from "src/core/produtores/entities/Produtor.entity";
import { AtualizarProdutorDTO } from "src/application/dtos/produtores/atualizar-produtor-dto";

@Injectable()
class ProdutorPrismaRepository implements ProdutorRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async save(produtor: Produtor): Promise<void> {
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
    const produtorExistente = await this.prismaService.produtor.findFirst({
      where: { cpfOuCnpj },
    });

    if (!produtorExistente) {
      throw new HttpException('Produtor não encontrado', HttpStatus.NOT_FOUND);
    }

    const checarId = await this.prismaService.produtor.findUnique({
      where: { id: produtorExistente.id },
    });

    if (!checarId) {
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
        delete dataAtualizada[key];
      }
    });

    await this.prismaService.produtor.update({
      where: { id: produtorExistente.id },
      data: dataAtualizada,
    });
  }
}

export { ProdutorPrismaRepository };
