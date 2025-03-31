import { Module } from '@nestjs/common';
import { PrismaModule } from './infra/database/prisma/prisma.module';
import { ProdutorController } from './infra/http/controllers/produtores/Produtor.controller';
import { CriarProdutorUseCase } from './application/use-cases/produtores/criar-produtor-use-case';
import { ProdutorPrismaRepository } from './infra/database/prisma/produtor-prisma.repository';
import { PRODUTOR_REPOSITORY, ProdutorRepository } from './core/produtores/repositories/produtor.repository';
import { AtualizarProdutorUseCase } from './application/use-cases/produtores/atualizar-produtor-use-case';
import { DeletarProdutorUseCase } from './application/use-cases/produtores/deletar-produtor-use-case';
import { ListarProdutoresUseCase } from './application/use-cases/produtores/listar-produtores-use-case';
import { BuscarProdutorUseCase } from './application/use-cases/produtores/buscar-produtor-use-case';

@Module({
  imports: [PrismaModule], 
  controllers: [ProdutorController], 
  providers: [
    CriarProdutorUseCase,
    AtualizarProdutorUseCase,
    DeletarProdutorUseCase,
    ListarProdutoresUseCase,
    BuscarProdutorUseCase,
    {
      provide: PRODUTOR_REPOSITORY, 
      useClass: ProdutorPrismaRepository, 
    },
  ],
})
export class AppModule {}
