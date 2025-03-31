import { ApiProperty } from "@nestjs/swagger";

export class IndicadoresDTO {
  @ApiProperty()
  totalFazendas: number;

  @ApiProperty()
  totalHectares: number;

  @ApiProperty({
    example: {
      GO: { Soja: 5, Milho: 3 },
      DF: { Café: 2 }
    }
  })
  culturasPorEstado: Record<string, Record<string, number>>;
}
