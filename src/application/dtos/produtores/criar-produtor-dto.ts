import { ApiProperty } from "@nestjs/swagger";
import { Cultura } from "src/core/produtores/entities/cultura.enum";

export class CriarProdutorDTO {
    @ApiProperty()
    cpfOuCnpj: string;

    @ApiProperty()
    nomeProdutor: string;

    @ApiProperty()
    nomeFazenda: string;    

    @ApiProperty()
    cidade: string;

    @ApiProperty()
    estado: string;

    @ApiProperty()
    areaTotalHectares: number;

    @ApiProperty()
    areaAgricultavel: number;

    @ApiProperty()
    areaDeVegetacao: number;

    @ApiProperty({isArray: true, enum: Cultura})
    culturasPlantadas: Cultura[];
}