# Mapeamento de Rotas
## Versionamento
| Data | Versão | Descrição | Autor(es) |
|:----:|:------:|:---------:|:---------:|
| 18/11/2020 | 0.1 | Criação do Documento | [Gabriel Tiveron](https://github.com/GabrielTiveron) |
| 19/11/2020 | 0.2 | Adição do mapeamento de Form, Question, Autenticação | [Gabriel Tiveron](https://github.com/GabrielTiveron) |
| 19/11/2020 | 0.3 | Adição do mapeamento de Group | [Gustavo Carvalho](https://github.com/gustavocarvalho1002) |
| 19/11/2020 | 0.4 | Adição do mapeamento de UBS | [Gustavo Carvalho](https://github.com/gustavocarvalho1002) |

## Definição

<p align="justify">&emsp;&emsp;O mapeamento de rotas se refere a endpoints do backend desenvolvido no projeto dessa forma é importante que seja documentada as formas que os dados são armazenados e extraídos para que facilite a compreensão da API para possíveis manutenções e implementações.</p>

## Mapeamento

<p align="justify">&emsp;&emsp;As rotas principais da API são as seguintes:</p>

* Form;
* Question
* Autenticação
* Grupo
* UBS 

### Form

#### Criação de formulário
##### Requisição

  * POST - ```/form```

##### Parametros recebidos
  * ```groupid``` - Referenciando qual grupo o formulário pertence.

##### Retorno enviado
  * ```message``` - Contendo uma mensagem de sucesso ou não.
  * ```id``` - Id do formulário que foi cirado, se houver sucesso.

##### Implementação

#### Adicionar questões no formulário
##### Requisição

  * POST - ```/form/:id```

##### Parâmetros recebidos

  * ```id``` - Id do form que as questões serão adicionadas
  * ```question_id``` - Lista de IDs de questões que serão adicionadas

##### Retorno enviado
  
  * ```message``` - Mensagem de sucesso ou não.

##### Implementação

### Questão

#### Tipos de questões

  * Glucose - [glucose]
  * Blood Pressure - [bloodpressure]
  * Well Being - [wellbeing]

##### Criar/Listar uma questão de tipo específico
###### Requisição

  * POST/GET - ```/question/tipo``` - onde _tipo_ é substituído pelo tipo da questão desejada que está entre colchetes na seção acima.

###### Parâmetros recebidos

  * _Nenhum parâmetro necessário para cadastrar_
  * ```id_questao``` - ID da questão desejada (Apenas para o método GET)

###### Retorno enviado

  * ```message``` - Mensagem de sucesso ou não
  * ```id``` - ID da questão cadastrada

### Autenticação
#### Fazer cadastro
  
  * POST - ```/auth/signup```

##### Parâmetros recebidos

  * ```name``` - Nome do usuário;
  * ```password``` - Senha do usuário;
  * ```cpf``` - CPF do usuário
  * ```roles``` - _[healthProfessional/patient]_ dependendo da função do usuário no sistema;
  
  Caso seja Profissional de saúde:
  * ```role``` - Profissão do profissional cadastrado;

  Caso seja paciente:
  * ```birthDate``` - Data de nascimento do paciênte;
  * ```gender``` - _[F/M/O]_ gênero do paciênte;

##### Retorno enviado

  * ```message``` - Mensagem de erro/sucesso;

#### Fazer Login

  * POST - ```/auth/signin```

##### Parâmetros recebidos

  * ```cpf``` - CPF do usuário;
  * ```password``` - Senha do usuário;

##### Retorno enviado
  
  * ```message``` - Mensagem de sucesso/falha
  * ```json
     user{
       "id":1,
       "name":"Ipsolum",
       "cpf":1234567890,
       "roles":"healthProfessional",
       "accessToken":"a15s1eASDwtnvb09D8dfgsdf8015EWRcA#123ASFSDv"
     }
    ``` 
### Grupo
#### Listar todos os grupos

  * GET - ```/group```

##### Parâmetros recebidos

  - Método GET não necessita de parâmetros

##### Retorno enviado

  * ```json
    {
      "users":[12,23,56,12],
      "_id":1,
      "groupName":"Lorem Ipsum",
      "idUBS":1
    },
    {
      "users":[12,23,56,12],
      "_id":1,
      "groupName":"Lorem Ipsum",
      "idUBS":1
    },
    ...
    ..
    .
    ```

#### Criar grupo

  * POST - ```/group```

##### Parâmetros recebidos
  
  * ```groupName``` - Nome do grupo
  * ```idUBS``` - ID da UBS ao qual o grupo é vinculado
  * ```idForm``` - Id do formulário ao qual aquele grupo deve responder
  * ```users``` - Lista de usuários pertencentes ao grupo

##### Retorno enviado
  
  * ```message``` - Mensagen de sucesso/falha
  * ```id``` - ID do grupo criado
  * ```json
    {
      "users":[12,45,67,12],
      "_id":2,
      "groupName":"Lorem Ipson",
      "idUBS":12
    }
    ```

### Listar grupo específico
  
  * GET - ```/group/:id```

##### Parâmetros recebidos
  
  * ```id``` - Id do grupo

##### Retorno enviado

  ```json
    {
      "users":[12,23,56,12]
      "_id":1,
      "groupName":"Lorem Ipsum",
      "idUBS":1
    }
  ```

### Atualizar grupo
  
  * PUT - ```/group/:groupId```

##### Parâmetros recebidos
  
  * ```groupId``` - Id do grupo
  * Objeto do tipo grupo do body da requisição:
   ```json
    {
      "groupName":"Lorem Ipsum",
      "idUBS":1,
      "idForm":1
    }
  ```

##### Retorno enviado

  ```json
    {
      "_id":1,
      "groupName":"Lorem Ipsum",
      "idUBS":1,
      "users":[12,23,56,12]
    }
  ```

### Deletar grupo
  
  * DELETE - ```/group/:groupId```

##### Parâmetros recebidos
  
  * ```groupId``` - Id do grupo

##### Retorno enviado

  ```json
    {
      "message":"Lorem ipsulu atmus cretos lirus"
    }
  ```

### UBS
#### Listar todas as UBS

  * GET - ```/ubs```

##### Parâmetros recebidos

  - Não necessita de parâmetros

##### Retorno enviado

  * ```json
    {
      "ubsName":"Posto de Saúde Nº 2",
      "city":"Samambaia",
      "state":"Distrito Federal",
      "cep":"70444250",
      "_id":1
    },
    {
      "ubsName":"Posto de Saúde Nº 8",
      "city":"Gama",
      "state":"Distrito Federal",
      "cep":"70000000",
      "_id":2
    },
    ...
    ..
    .
    ```
#### Listar UBS específica

  * GET - ```/ubs/:ubsId```

##### Parâmetros recebidos

  * ```ubsId``` - Id da UBS

##### Retorno enviado

   ```json
    {
      "ubsName":"Posto de Saúde Nº 2",
      "city":"Samambaia",
      "state":"Distrito Federal",
      "cep":"70444250",
      "_id":1
    }
  ```

