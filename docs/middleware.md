# Middleware
## Versionamento
| Data | Versão | Descrição | Autor(es) |
|:----:|:------:|:---------:|:---------:|
| 22/10/2020 | 0.1 | Criação do Documento | [Murilo Loiola](https://github.com/murilo-dan) |
| 26/10/2020 | 0.2 | Adição do tópico Introdução e Aplicação no projeto | [Murilo Loiola](https://github.com/murilo-dan) |
| 26/10/2020 | 0.3 | Adição de hyperlinks | [Murilo Loiola](https://github.com/murilo-dan) |

## Introdução

<p align="justify">&emsp;&emsp;O Middleware trata-se de uma implementação do padrão Chain of Responsability. Este padrão, por sua vez, realiza a transferência de solicitações ao longo de uma cadeia de handlers. Cada handler na cadeia lida com a solicitação e então decide se continua enviando a solicitação pela cadeia de handlers, ou se bloqueia a solicitação, caso ela seja considerada inválida. As funções de Middlware tem acesso ao objeto de solicitação (req), o objeto de resposta (res), e a próxima função (next) no ciclo de handlers, utilizando tais funções para realizar o tratamento de solicitações e a transferência entre os handlers.</p>

## Aplicação no projeto

<p align="justify">&emsp;&emsp;No projeto, o Middleware está sendo utilizado como autenticador de requisições. Ele foi implementado como responsável por fazer a autenticação de usuário, realizando a comunicação entre banco e aplicação através de funções de requisição/resposta em cadeia. Dessa forma, os middlewares controlam o fluxo de comunicação, barrando requisições inválidas. Seguem hyperlinks para os arquivos de código onde o Middleware foi implementado:</p>

#### Hyperlinks

* [Autenticação JWT](https://github.com/UnBArqDsw/2020.1_G5_Diario_da_Saude/blob/master/backend/DiarioSaude/middlewares/authJwt.js);
* [Autenticação Cadastro](https://github.com/UnBArqDsw/2020.1_G5_Diario_da_Saude/blob/master/backend/DiarioSaude/middlewares/verifySignUp.js)