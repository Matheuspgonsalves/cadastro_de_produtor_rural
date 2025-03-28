import { cpf, cnpj } from "cpf-cnpj-validator";

export function documentIsValid(documento: string): boolean {
    return cpf.isValid(documento) || cnpj.isValid(documento);
}
