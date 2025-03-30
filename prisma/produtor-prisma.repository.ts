import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ProdutorRepository } from "src/core/produtores/repositories/produtor.repository";
import { PrismaService } from "./prisma.service";
import { Produtor } from "src/core/produtores/entities/Produtor.entity";

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

  async update(cpfOuCnpj: string, produtor: Partial<Produtor>): Promise<void> {
    
    console.log('Iniciando update para CPF:', cpfOuCnpj);

    const produtorExistente = await this.prismaService.produtor.findFirst({
      where: { cpfOuCnpj },
    });
  
    if (!produtorExistente) {
      throw new HttpException('Produtor não encontrado', HttpStatus.NOT_FOUND);
    }

    console.log('Produtor encontrado?', produtorExistente);

    console.log(typeof produtorExistente.id, produtorExistente.id)
    await this.prismaService.produtor.update({
      where: { id: produtorExistente.id },
      data: {
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
}

export { ProdutorPrismaRepository };
