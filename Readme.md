# Desafio Técnico — Cadastro de Produtor Rural

Este desafio tem como objetivo implementar uma API RESTful para o cadastro de produtores rurais, com funcionalidades de CRUD e geração de indicadores.

## Objetivo

Desenvolver um sistema backend que permita:

- Cadastrar, editar e excluir produtores rurais.
- Validar CPF ou CNPJ.
- Garantir integridade das áreas informadas.
- Gerar indicadores numéricos agregados sobre os dados.

## Dados do Produtor Rural

Cada produtor deve possuir os seguintes campos:

- CPF ou CNPJ
- Nome do produtor
- Nome da fazenda
- Cidade
- Estado
- Área total da fazenda (em hectares)
- Área agricultável (em hectares)
- Área de vegetação (em hectares)
- Culturas plantadas (lista contendo: Soja, Milho, Algodão, Café, Cana de Açúcar)

## Regras de Negócio

- A soma de área agricultável e vegetação **não pode ser maior** que a área total da fazenda.
- Cada produtor pode plantar **mais de uma cultura**.
- O sistema deve validar CPF e CNPJ inválidos.

## Indicadores Esperados

A API deverá disponibilizar endpoints que retornem:

- Total de fazendas cadastradas.
- Soma total de hectares de todas as fazendas.
- Total de culturas plantadas **por estado**.  
  *Exemplo:*  
  - DF: 10 fazendas com Soja, 20 com Milho  
  - GO: 50 com Algodão, 10 com Milho

## Requisitos Técnicos

Tecnologias obrigatórias:

- Node.js
- TypeScript
- PostgreSQL

## ✅ Diferenciais Desejáveis

- Uso do framework **NestJS**
- Aplicação de boas práticas como **SOLID**, **Clean Code**, **DDD**, **Arquitetura Hexagonal**
- Cobertura de **testes**
- Entrega com `docker-compose.yml` já configurando banco e servidor
