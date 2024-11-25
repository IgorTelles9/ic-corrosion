## Aplicação
Essa é uma aplicação node. Se você não tem node instalado, acesse https://nodejs.org/en e siga o passo a passo. 
Eu usei WSL como terminal, mas acredito que o terminal do vscode funcione tão bem quanto. 

## Passo a passo para rodar a aplicação web

### Servidor 
1. Acesse a pasta `server` e na linha de comando execute 
```
npm i
```
para instalar as dependências. 
2. Vá no arquivo `src/server.ts` e mude a variável `dbName` para o nome do seu banco, definido no mongodb. 

3. Execute 
```
npm start
```
no terminal. Se o seu mongo estiver ligado, o servidor deve começar a executar. 


### Web 
1. Acesse a pasta `web` e na linha de comando execute 
```
npm i
```
2. Execute 
```
npm start
```
no terminal. Uma aba deve abrir automaticamente no seu navegador com um formulário. 

![Screenshot do formulário](./screenshot.png?raw=true "Formulário")