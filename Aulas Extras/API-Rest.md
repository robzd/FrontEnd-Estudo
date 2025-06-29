# API Rest (Application Programming Interface)

## O que faz:
- Simplifica o desenvolvimento por não precisar de telas feitas para fazer requisições
- Integração fácil com sistemas, dando respostas com base no que for preciso
- Melhora a performance por causa das requisições rápidas realizadas (menos dados são solicitados,
  cada dado busca informações de um endpoint em específico e não todo o conjunto de informações contida em um projeto)
## Tipos:
- API Pública: sem autenticação, qualquer um pode acessar (ex: GitHub REST API, OpenWeatherMap API)
- API Privada: requer autenticação, serve para quando uma empresa quer privacidade dos dados, com informações custosas ou sensíveis (ex: APIs de processamento de pagamentos interno)
- API de Terceiros: requer autenticação, é quando uma empresa fornece uma API como produto/serviço, então para usar ela geralmente tem que pagar pelo uso (ex: Google Maps)
## Comunicação:
- As requisições e respostas são feitas através do protocolo HTTP
- XML: baseado em tags, pouco utilizada em comparação ao JSON
```
<usuario>
  <nome>Robson</nome>
  <idade>25</idade>
  <ativo>true</ativo>
</usuario>
```
- JSON: baseado em chave-valor
```
{
"nome": "Robson",
"idade": 25,
"ativo": true
}
```
# Uso do HTTP
- As requisições são feitas para o servidor utilizando URLs chamadas de Endpoints através de métodos (ou verbos)

| Método   | O que faz           | Utilização                    | Exemplo |
| -------- | ------------------- | ----------------------------- | - |
| `GET`    | Ler (buscar)        | Buscar dados de algo          | ```const responseLiderProjeto = await axiosInstance.get("/lider_projeto/")```
| `POST`   | Criar               | Enviar dados para criar algo  | ```await axiosInstance.post(`/setor/`, setorData);```
| `PUT`    | Atualizar (total)   | Substituir algo por inteiro   | ```await axiosInstance.put(`/tema_area/${formData.id}/`, payload)```
| `PATCH`  | Atualizar (parcial) | Alterar parte de algo         | ```await axiosInstance.patch(`/projeto/${projectId}/`, { ods: [], ods_metas: [], });```
| `DELETE` | Excluir             | Remover algo                  | ```await axiosInstance.delete(`/pls/${plano.id}/`);```

## Endpoints
- São basicamente URLs, acompanham o domínio da API e alguma "página" específica, sofrem alterações quando são passadas com o uso dos métodos HTTP
  
  ```
  const baseURL = "http://134.209.81.146:2020/"
  ```
# REST
- É um padrão de arquitetura presente em APIs que utiliza o protocolo HTTP
- Uma API é _Restful_ quando apresenta 6 conceitos:
  
| Nº | Princípio                     | Descrição                                                                 |
|----|-------------------------------|---------------------------------------------------------------------------|
| 1  | Interface Uniforme            | Uso consistente de métodos HTTP, URLs claras, e formatos como JSON/XML.  |
| 2  | Separação Cliente-Servidor    | Cliente e servidor funcionam de forma independente.                      |
| 3  | Sem Estado (Stateless)        | Cada requisição é única e contém todas as informações necessárias.        |
| 4  | Cacheável                     | Respostas devem indicar se podem ou não ser armazenadas em cache.       |
| 5  | Sistema em Camadas            | A API pode ser composta por camadas (ex: proxy, autenticação, cache).    |
| 6  | Código sob Demanda (opcional) | O servidor pode enviar código (como JS) que o cliente executa.           |

# Postman (plataforma)
- Utilizada para testes de APIs (permite teste de endpoint, métodos para inserir dados, editar, deletar, etc.)
