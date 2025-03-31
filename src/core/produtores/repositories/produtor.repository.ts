import { AtualizarProdutorDTO } from "src/application/dtos/produtores/atualizar-produtor-dto";
import { Produtor } from "../entities/Produtor.entity";
import { IndicadoresDTO } from "src/application/dtos/produtores/indicadores-dto";

export const PRODUTOR_REPOSITORY = 'PRODUTOR_REPOSITORY';

export interface ProdutorRepository {
    save (produtor: Produtor): Promise<void>;
    update(cpfOuCnpj: string, produtor: AtualizarProdutorDTO): Promise<void>;
    delete(cpfOuCnpj: string): Promise<void>;
    findAll(): Promise<Produtor[]>;
    findByCpfOuCnpj(cpfOuCnpj: string): Promise<Produtor | null>;
    gerarIndicadores(): Promise<IndicadoresDTO>;
}