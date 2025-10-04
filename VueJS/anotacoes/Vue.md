# Vue JS

## O que é:
- Framework Front-End que combina os benefícios principais do Angular e do React
- Facilita a manipulação do DOM (document object model), que é basicamente uma árvore estrutural que segue a hierarquia de tags do arquivo HTML, e com isso permite o JavaScript poder ter acesso e fazer alterações nos elementos que estão dentro das tags HTML. Em resumo: permite o JavaScript mexer no conteúdo HTML através de, por exemplo
```<body> <h1 id="titulo">Olá, visitante!</h1> </body>```
```<script> const titulo = document.getElementById("titulo"); </script>```
- Trabalha com single file component: trabalha com os três blocos (HTML, JavaScript e CSS) tudo dentro de um mesmo arquivo

## Extensões:
Vetur - facilita a criação e desenvolvimento de aplicações VueJS
Live Server - cria um servidor local para a aplicação dentro do próprio VSCode, permitindo fazer requisições HTTP

## Link da documentação do VueJS:
https://pt.vuejs.org/guide/introduction.html

## Instalação e rodar (via CLI)
1. npm install -g @vue/cli
2. vue create app
3. cd app
4. npm run serve