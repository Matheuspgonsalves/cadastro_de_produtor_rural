import { Module } from '@nestjs/common';
import { PrismaModule } from './infra/database/prisma/prisma.module';
import { ProdutorController } from './infra/http/controllers/produtores/Produtor.controller';
import { CriarProdutorUseCase } from './application/use-cases/produtores/criar-produtor-use-case';
import { ProdutorPrismaRepository } from './infra/database/prisma/produtor-prisma.repository';
import { PRODUTOR_REPOSITORY, ProdutorRepository } from './core/produtores/repositories/produtor.repository';
import { AtualizarProdutorUseCase } from './application/use-cases/produtores/atualizar-produtor-use-case';

@Module({
  imports: [PrismaModule], 
  controllers: [ProdutorController], 
  providers: [
    CriarProdutorUseCase,
    AtualizarProdutorUseCase,
    {
      provide: PRODUTOR_REPOSITORY, 
      useClass: ProdutorPrismaRepository, 
    },
  ],
})
export class AppModule {}
