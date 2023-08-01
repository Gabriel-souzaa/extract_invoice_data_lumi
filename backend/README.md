<div align="center">
	 <img alt="JSON" align="center" src="https://uploads-ssl.webflow.com/62f9249c43126cafce10bc33/62fd12497ffcb83b28ea3309_logo-lumi-white.svg" width="140px">
</div>

<div align="center">
  <h3>
    extract_invoice_data_lumi
  </h3>

  <p>
  Desagio Lumi
  <p>
    <a href="#-sobre-o-projeto">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-tecnologias-utilizadas"> Tecnologias utilizadas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-iniciando-o-projeto">Iniciando o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-detalhes-do-projeto">Detalhes do projeto</a>
  </p>

</div>

## 📘 Sobre o projeto

- <p>Extrair dados de uma nota fiscal</p>

#### Objetivo do projeto

Extrair dados de um arquivo pdf e listar em uma aplicação react.

#### Descrição detalhada de funcionamento

1. Extrair dados de uma nota fiscal

### Detalhes do projeto

## 🚀 Tecnologias utilizadas

- [Typescript](https://www.typescriptlang.org)
- [Nodejs](https://nodejs.org/en/ 'Nodejs')
- [Nestjs](https://nestjs.com/ 'Nestjs')
## 💻 Iniciando o projeto localmente

### Requerimentos

- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)

**Clone o projeto e acesse a pasta do repositório**

```bash
# git clone REPOSITÓRIO_PROJETO && cd/NOME_PROJETO
$ git clone https://github.com/Gabriel-souzaa/extract_invoice_data_lumi.git && cd extract_invoice_data_lumi
```

**Siga os passos**

```bash
# Instale as dependências
$ npm i

# Realize os testes para verificar se está tudo OK.
$ npm run test

# Rodar as migrações do prisma e gerar o database
$ npx prisma migrate dev
$ npx prisma generate

# inicie o projeto como dev
$ npm run start:dev

# Se todos os passos foram seguidos corretamente a api deve ser iniciada
```