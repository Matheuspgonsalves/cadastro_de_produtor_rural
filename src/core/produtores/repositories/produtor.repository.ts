import { Produtor } from "../entities/Produtor.entity";

export const PRODUTOR_REPOSITORY = 'PRODUTOR_REPOSITORY';

export interface ProdutorRepository {
    save (produtor: Produtor): Promise<void>;
    update(cpfOuCnpj: string, produtor: Produtor): Promise<void>;
}