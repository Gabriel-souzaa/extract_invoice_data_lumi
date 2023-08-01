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
    <a >Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a > Descrição</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a >Passo a Passo do projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a>Clone o projeto e acesse a pasta do repositório</a>
  </p>

</div>

## 📘 Sobre o projeto

- <p>Extrair dados de uma nota fiscal</p>

## Descrição

- <p>Basicamente o projeto tem o intuito de extrair dados uma nota fiscal e listar essas informações extraidas em algum sistema ou site. </p>


## Passo a Passo do projeto

1. Extração de Dados:
Você deve desenvolver um scrapper/parser para ler as faturas de energia elétrica
fornecidas (incluídas na pasta FATURAS) e extrair as informações relevantes. Estas
incluem, mas não estão limitadas a:
 - No DO CLIENTE,
 - Mês de referência,
 - Data de Vencimento,
 - Energia Elétrica (kWh, Preço Unit e Valor R$),
 - Energia injetada HFP (kWh, Preço Unit e Valor R$),
 - En comp. s/ ICMS (kWh, Preço Unit e Valor R$),
 - Contrib Ilum Publica Municipal (R$)
 - Valor Total (R$)

2. Banco de Dados:
Os dados extraídos devem ser organizados de maneira estruturada em um banco de
dados PostgreSQL. Lembre-se de garantir que os dados sejam facilmente recuperáveis
e que a integridade dos mesmos seja mantida.

3. Aplicação:
Os dados armazenados no banco de dados devem ser acessíveis e visualizáveis por meio
de uma aplicação web, utilizando React e um back-end com Node. Esta aplicação será
composta por duas páginas, a primeira delas é a Dashboard que irá condensar os dados
extraídos e a segunda Histórico de Faturas que irá dispor estas faturas por UC e mês de
referência. As telas deverão ser elaboradas no Figma e disponibilizadas no README do
repositório via link.

## Clone o projeto e acesse a pasta do repositório

```bash
# git clone REPOSITÓRIO_PROJETO && cd/NOME_PROJETO
$ git clone https://github.com/Gabriel-souzaa/extract_invoice_data_lumi.git && cd extract_invoice_data_lumi
```