<p align="center">
  <a href="https://vitejs.dev/" target="blank"><img src="./public/logo192.png" width="200" alt="Logo React" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# <p align="center">FRONT-IOT</p>

## 💻 Sobre o projeto

Front IOT é uma aplicação React Typescript com Vite para consumo dos dados da aplicação [Api Iot](https://github.com/andersonaguia/api-iot).

## 🚧 Funcionalidades

- [ ] Criar um usuário
- [ ] Fazer login
- [ ] Alterar senha do usuário
- [ ] Cadastrar um controlador
- [ ] Cadastrar um termistor
- [x] Verificar leitura atual do termistor

---

## ⚠️ Pré-requisitos

- Ter o [NodeJS](https://nodejs.org/en/) instalado na máquina;
- Ter o projeto [Api Iot](https://github.com/andersonaguia/api-iot) configurado e rodando na máquina ou em um servidor externo.

#

## ⚙️ Configuração da aplicação em modo desenvolvimento

1. Realizar o clone desse projeto

```
git clone https://github.com/andersonaguia/front-iot.git
```

2. Instalar as dependências;

```
npm install
```

3. Renomear o arquivo `.env_example` para `.env` e inserir a URL do servidor da API;

Exemplo:

```
VITE_BASE_URL=http://localhost:3001
```

4. Servir a aplicação em modo de desenvolvimento

```
npm run dev
```
#

## ⚙️ Configuração da aplicação com [Docker](https://www.docker.com/) e [Nginx](https://www.nginx.com/)

1. Realizar o clone desse projeto
```
git clone https://github.com/andersonaguia/front-iot.git
```
2. Acesse a pasta do projeto;
```
cd front-iot
```
3. Instalar as dependências;
```
npm install
```
4. Renomear o arquivo `.env_example` para `.env`;
```
sudo mv .env-example .env
``` 
5. Inserir a URL do servidor da API no arquivo .env;

Exemplo:

```
VITE_BASE_URL=http://localhost:3001
```
6. Construa a aplicação;
```
npm run build
```
7. Caso não possua o [Docker](https://www.docker.com/) realize a instalação do mesmo antes de continuar;

Para verificar se o Docker está instalado basta inserir no terminal o comando abaixo:

```
docker version
```
8. Realize a construção do container docker;
```
sudo docker compose build
```
9. Inicie o container docker em segundo plano;
```
sudo docker compose up -d
```

10. Verifique o status do container criado no Docker;
```
docker ps -a
```

#

## 🛠 Tecnologias

<div style="display: flex; gap: 1rem;">
<a href="https://www.typescriptlang.org/" target="_blank">
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="logo typescript" >
</a>
<a href="https://www.npmjs.com/" target="_blank">
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="logo npm" >
</a>
<a href="https://react.dev/" target="_blank">
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="logo react" >
</a>
<a href="https://www.docker.com/" target="_blank">
<img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" alt="logo docker" >
</a>
</div>
<a href="https://www.nginx.com/" target="_blank">
<img src="https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white" alt="logo nginx">
</a>
<a href="https://vitejs.dev/" target="_blank">
<img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="logo vite">
</a>
<a href="https://www.markdownguide.org/" target="_blank">
<img src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white" alt="logo markdown">
</a>
<a href="https://reactrouter.com/en/main" target="_blank">
<img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="logo react router">
</a>
<a href="https://styled-components.com/" target="_blank">
<img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="logo styled components">
</a>
</div>

## 🦸 Autor

<div style="display: flex; flex-direction: column; align-items: center">
<h3>Anderson Aguiar</h3>
<a href="https://www.linkedin.com/in/andersonlaguiar/" target="_blank">
<img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="logo linkedin" style="width: 150px; height: 30px;">
</a>
</div>

## 📝 Licença

Este projeto está sob a licença [MIT](./LICENSE).
