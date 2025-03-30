import { Injectable } from "@nestjs/common";
import { ProdutorRepository } from "src/core/produtores/repositories/produtor.repository";
import { PrismaService } from "./prisma.service";
import { Produtor } from "src/core/produtores/entities/Produtor.entity";

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

  async update(id: string, data: Partial<Produtor>): Promise<void> {
    await this.prismaService.produtor.update({
      where: { id },
      data: {
        nomeProdutor: data.nomeProdutor,
        nomeFazenda: data.nomeFazenda,
        cidade: data.cidade,
        estado: data.estado,
        areaTotalHectares: data.areaTotalHectares,
        areaAgricultavel: data.areaAgricultavel,
        areaDeVegetacao: data.areaDeVegetacao,
        culturasPlantadas: data.culturasPlantadas,
      },
    });
  }
}

export { ProdutorPrismaRepository };
