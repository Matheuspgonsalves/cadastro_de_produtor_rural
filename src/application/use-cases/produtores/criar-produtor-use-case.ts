import { CriarProdutorDTO } from 'src/application/dtos/produtores/criar-produtor-dto';
import { Cultura } from 'src/core/produtores/entities/cultura.enum';
import { Produtor } from 'src/core/produtores/entities/Produtor.entity';
import { ProdutorRepository } from 'src/core/produtores/repositories/produtor.repository';
import { documentIsValid } from 'src/core/produtores/validators/documento.validator';

export class CriarProdutorUseCase {
    produtorRepository: ProdutorRepository;

    constructor(produtorRepository: ProdutorRepository){
        this.produtorRepository = produtorRepository;
    }

    public execute(data: CriarProdutorDTO) {
        if(!(documentIsValid(data.cpfOuCnpj))) {
            throw new Error('Documento Inválido: CPF ou CNPJ não é válido.');
        }

        const produtor = new Produtor(
            data.cpfOuCnpj,
            data.nomeProdutor,
            data.nomeFazenda,
            data.cidade,
            data.estado,
            data.areaTotalHectares,
            data.areaAgricultavel,
            data.areaDeVegetacao,
            data.culturasPlantadas
        );        

        this.produtorRepository.save(produtor);
    }
}
