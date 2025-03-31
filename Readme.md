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

## Diferenciais Desejáveis

- Uso do framework **NestJS** ✅
- Aplicação de boas práticas como **SOLID**, **Clean Code**, **DDD**, **Arquitetura Hexagonal** ✅
- Cobertura de **testes** 
- Entrega com `docker-compose.yml` já configurando banco e servidor

---

## Intruções de utilização

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o banco de dados

Crie um arquivo `.env` com a seguinte variável:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco"
```

> ⚠️ Substitua `usuario`, `senha` e `nome_do_banco` conforme seu ambiente local.

### 4. Gere as migrations e aplique no banco

```bash
npx prisma migrate dev --name init
```

> Isso criará as tabelas no seu banco de dados.

### 5. Inicie a aplicação

```bash
npm run start:dev
```

O servidor será iniciado em:

📍 `http://localhost:3000`

---

## 📘 Documentação da API — Swagger

Após rodar o projeto, acesse:

🔗 [`http://localhost:3000/api`](http://localhost:3000/api)

Lá você verá todos os endpoints disponíveis com exemplos de requisição e resposta.

---

## 📬 Endpoints da API

| Método | Endpoint                 | Descrição                        |
|--------|--------------------------|----------------------------------|
| POST   | `/produtores`            | Cadastrar novo produtor          |
| GET    | `/produtores`            | Listar todos os produtores       |
| GET    | `/produtores/:cpfOuCnpj` | Buscar um produtor específico    |
| PUT    | `/produtores/:cpfOuCnpj` | Atualizar dados de um produtor   |
| DELETE | `/produtores/:cpfOuCnpj` | Remover um produtor              |
| GET    | `/produtores/indicadores` | Exibe total de fazendas, hectares e culturas por estado |


---

## 📎 Autor

Feito com 💻 por [Matheus Gonsalves](https://github.com/Matheusgonsalves)

