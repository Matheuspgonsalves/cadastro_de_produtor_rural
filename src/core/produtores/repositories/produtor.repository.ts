import { Produtor } from "../entities/Produtor.entity";

export interface ProdutorRepository {
    save (produtor: Produtor): Promise<void>
}