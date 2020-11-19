# Mapeamento de Rotas
## Versionamento
| Data | Versão | Descrição | Autor(es) |
|:----:|:------:|:---------:|:---------:|
| 19/11/2020 | 0.1 | Criação do Documento | [Gabriel Tiveron](https://github.com/GabrielTiveron) |

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

#### Adicionar questões no formulário
##### Requisição

  * POST - ```/form/:id```

#####


## Referência

