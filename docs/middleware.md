# Middleware
## Versionamento
| Data | Versão | Descrição | Autor(es) |
|:----:|:------:|:---------:|:---------:|
| 22/10/2020 | 0.1 | Criação do Documento | [Murilo Loiola](https://github.com/murilo-dan) |
| 26/10/2020 | 0.2 | Adição do tópico Introdução e Aplicação no projeto | [Murilo Loiola](https://github.com/murilo-dan) |
| 26/10/2020 | 0.3 | Adição de hyperlinks | [Murilo Loiola](https://github.com/murilo-dan) |
| 26/10/2020 | 0.4 | Adição de Detalhe | [Gabriel Tiveron](https://github.com/GabrielTiveron) |
| 26/10/2020 | 0.5 | Adição de Referência | [Gabriel Tiveron](https://github.com/GabrielTiveron) |
| 26/10/2020 | 0.6 | Adicionando código | [Murilo Loiola](https://github.com/murilo-dan), [Gabriel Tiveron](https://github.com/GabrielTiveron) |

## Introdução

<p align="justify">&emsp;&emsp;O Middleware trata-se de uma implementação do padrão Chain of Responsability. Este padrão, por sua vez, realiza a transferência de solicitações ao longo de uma cadeia de handlers. Cada handler na cadeia lida com a solicitação e então decide se continua enviando a solicitação pela cadeia de handlers, ou se bloqueia a solicitação, caso ela seja considerada inválida. As funções de Middlware tem acesso ao objeto de solicitação (req), o objeto de resposta (res), e a próxima função (next) no ciclo de handlers, utilizando tais funções para realizar o tratamento de solicitações e a transferência entre os handlers.</p>

## Aplicação no projeto

<p align="justify">&emsp;&emsp;No projeto, o Middleware está sendo utilizado como autenticador de requisições. Ele foi implementado como responsável por fazer a autenticação de usuário, realizando a comunicação entre banco e aplicação através de funções de requisição/resposta em cadeia. Dessa forma, os middlewares controlam o fluxo de comunicação, barrando requisições inválidas. Seguem hyperlinks para os arquivos de código onde o Middleware foi implementado:</p>

### Detalhes

<p align="justify">&emsp;&emsp;O Middleware implementado tem como principal objetivo o controle de acesso as rotas predefinida, onde cada tipo de usuário, no contexto do projeto "Patient" e "HealthProfessional", tem permissões para enviar ou receber informações. Para isso é utilizado um token JWT para a identificação da sessão do usuário e de sua função na aplicação. Dessa forma, em toda requisição feita pelo usuário é necessária a presença do header "access-control", para que assim possa ser dada ou não a permissão de acesso à rota desejada.</p>

#### Hyperlinks

* [Autenticação JWT](https://github.com/UnBArqDsw/2020.1_G5_Diario_da_Saude/blob/master/backend/DiarioSaude/middlewares/authJwt.js);

```
const jwt     = require("jsonwebtoken"),
      config  = require("../config/auth.config.js"),
      db      = require("../index"),
      healthProfessional = db.healthProfessional;

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if(!token){
    return res.status(403).send({message: "No token provided!"});
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if(err){
      return res.status(401).send({message: "Unauthorized!"});
    }
    req.userId = decoded.id;
    next();
  })
}

module.exports = {
  verifyToken
}
```
</br>

* [Autenticação Cadastro](https://github.com/UnBArqDsw/2020.1_G5_Diario_da_Saude/blob/master/backend/DiarioSaude/middlewares/verifySignUp.js)

```
const db = require("../models");
const ROLES = db.ROLES;
const healthProfessional = db.healthProfessional;
const patient = db.patient

checkDuplicateUsernameOrEmail = (req, res, next) => {
    const User = req.body.roles[0] === "patient" ? patient : healthProfessional;
    // Email
    User.findOne({
      cpf: req.body.cpf
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (user) {
        res.status(400).send({ message: "Failed! Email is already in use!" });
        return;
      }

      next();
    });
};

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: `Failed! Role ${req.body.roles[i]} does not exist!`
        });
        return;
      }
    }
  }

  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted
};

module.exports = verifySignUp;
```

### Referência

1. Mongoose Token Based Authentication. Disponível em: <a>https://bezkoder.com/node-js-mongodb-auth-jwt/</a>. Acesso em: 26/10/2020.
