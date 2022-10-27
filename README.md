# Boas-vindas ao repositório do projeto Talker Manager!
  - Uma API de cadastro e pesquisa de palestrantes (talkers).

## Intuito do projeto
  - Por em prática meus conhecimentos com express, node.js, MySQL
  - Desenvolver um CRUD em node.js com express

## Sumário

- [Titulo](https://github.com/DeividBorges93/project-talker-manager/tree/changes-in-the-readme#boas-vindas-ao-reposit%C3%B3rio-do-projeto-talker-manager)
- [Intuito do projeto](https://github.com/DeividBorges93/project-talker-manager/tree/changes-in-the-readme#intuito-do-projeto)
- [Sumário](https://github.com/DeividBorges93/project-talker-manager/tree/changes-in-the-readme#sumario)
- [Features](https://github.com/DeividBorges93/project-talker-manager/tree/changes-in-the-readme#features)
- [Extras features](https://github.com/DeividBorges93/project-talker-manager/tree/changes-in-the-readme#features-extras)
- [Prerequisites](https://github.com/DeividBorges93/project-talker-manager/tree/changes-in-the-readme#pr%C3%A9-requisitos-para-rodar-a-aplica%C3%A7%C3%A3o)
- [Running application without container](https://github.com/DeividBorges93/project-talker-manager/tree/changes-in-the-readme#rodando-a-aplica%C3%A7%C3%A3o-sem-container)
- [Running application with container](https://github.com/DeividBorges93/project-talker-manager/tree/changes-in-the-readme#com-container)

## Features

- [x] Criação de login
- [x] Cadastro de um palestrante
- [x] Editar as informações de um palestrante já cadastrado
- [x] Editar as informações de um palestrante já cadastrado
- [x] Buscar as informações de todos palestrantes já cadastrados
- [x] Buscar as informações de apenas um palestrante já cadastrado pelo id
- [x] Filtrar as informações de palestrantes já cadastrado pelo nome
- [x] Deletar as informações de apenas um palestrante já cadastrado pelo id

## Features extras
  Além do que foi solicitado no projeto pela Trybe, implementei algumas coisas e estou refatorando outras, abaixo vou lista-los e adicionando conforme tenha novidades...

- [x] Documentação da API [![Swagger](https://img.shields.io/badge/-Swagger-black?style=flat-square&logo=swagger)](https://swagger.io/)
- [ ] Arquitetura do código (separação em pastas)
  - [x] backend/frontend
  - [x] routes
  - [x] thunderClient collection e environment
  - [ ] Separar em camadas model, service e controller
- [ ] Criar o banco de dados [![MySQL Badge](https://img.shields.io/badge/-MySQL-black?style=flat-square&logo=mysql)](https://www.mysql.com/)
- [ ] Criar uma aplicação frontend [![React Badge](https://img.shields.io/badge/-React-black?style=flat-square&logo=react)](https://pt-br.reactjs.org/)

## Pré-requisitos para rodar a aplicação

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas: [![Git Badge](https://img.shields.io/badge/-Git-black?style=flat-square&logo=git)](https://git-scm.com) [![Nodejs Badge](https://img.shields.io/badge/-Nodejs-black?style=flat-square&logo=Node.js)](https://nodejs.org/en/)

- Clone o repositório
~~~Java
git@github.com:DeividBorges93/project-talker-manager.git
~~~

## Rodando a aplicação sem container

- Entre na pasta do backend
~~~Java
cd /project-talker-manager/app/backend
~~~
- Instale as dependencias
~~~Java
npm install
~~~
- Inicie a aplicação
~~~Java
npm start
~~~

## Com container

- Entre na pasta do backend
~~~Java
cd /project-talker-manager/app/backend
~~~
- De um UP no arquivo docker-compose.yml:
~~~Java
docker-compose up -d
~~~
- Entre no terminal do container:
~~~Java
docker exec -it talker_manager bash
~~~
