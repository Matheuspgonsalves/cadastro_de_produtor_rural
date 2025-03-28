import { Cultura } from "src/core/produtores/entities/cultura.enum";

export class CriarProdutorDTO {
    cpfOuCnpj: string;
    nomeProdutor: string;
    nomeFazenda: string;
    cidade: string;
    estado: string
    areaTotalHectares: number
    areaAgricultavel: number
    areaDeVegetacao: number
    culturasPlantadas: Cultura[]
}