import { Cultura } from "./cultura.enum";

export class Produtor {
    private cpfOuCnpj: string;
    private nomeProdutor: string;
    private nomeFazenda: string;
    private cidade: string;
    private estado: string
    private areaTotalHectares: number
    private areaAgricultavel: number
    private areaDeVegetacao: number
    private culturasPlantadas: Cultura[]

    constructor(
        cpfOuCnpj: string, 
        nomeProdutor: string, 
        nomeFazenda: string, 
        cidade: string, 
        estado: string, 
        areaTotalHectares: number, 
        areaAgricultavel: number, 
        areaDeVegetacao: number, 
        culturasPlantadas: Cultura[]
    ) {
        this.cpfOuCnpj = cpfOuCnpj
        this.nomeProdutor = nomeProdutor
        this.nomeFazenda = nomeFazenda
        this.cidade = cidade
        this.estado = estado
        this.areaTotalHectares = areaTotalHectares
        this.areaAgricultavel = areaAgricultavel
        this.areaDeVegetacao = areaDeVegetacao
        this.culturasPlantadas = culturasPlantadas 
        this.validarAreas();
    }    

    private validarAreas(): void {
        const excedeAreaTotal: boolean = (this.areaAgricultavel + this.areaDeVegetacao) > this.areaTotalHectares;
        if(excedeAreaTotal){
            throw new Error('Error: A soma das áreas não pode ser maior que a área total da fazenda.');
        } 
    } 
}
