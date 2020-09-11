# Introspecção
## Versionamento
| Data | Versão | Descrição | Autor(es) |
|:----:|:------:|:---------:|:---------:|
| 11/09/2020 | 0.1 | Criação do Documento | [Gustavo Carvalho](https://github.com/gustavocarvalho1002) |
| 11/09/2020 | 0.2 | Adição de introspecção | [Gustavo Carvalho](https://github.com/gustavocarvalho1002) |
| 11/09/2020 | 0.3 | Listagem dos requisitos levantandos | [Gustavo Carvalho](https://github.com/gustavocarvalho1002) |
| 11/09/2020 | 0.4 | Adicionando Personas 4 a 6 | [Ian Rocha](https://github.com/IanPSRocha) |

## Introdução

Introspecção consiste em entender o que o sistema deve possuir atráves do processo de se imaginar no lugar de uma pessoa ficticia, onde a mesma seria usuária do sistema.

Através da criação de **personas**, é possível até mesmo descrever um contexto para enriquecer o processo, tornando o levantamenti de requisitos menos subjetivo e mais direcionado.

## Instrospecção
### Persona 1
| Persona | Ana Maria |
|:----:|:------:|
|Profissão| Dona de casa|
|História de contexto| Ana Maria, é hipertensa, participa do grupo de hipertensos da UBS próxima de sua casa. Todo dia, ela afere sua pressão e toma seus remédios diariamente.|
|O que ele(a) acha que poderia mudar:| Eu gostaria de poder anotar minha pressão arterial em algum lugar para que eu possa saber se durante a semana ela variou muito, e talvez quem sabe anotar também outros aspectos da minha condição|

### Persona 2
| Persona | João Guilherme |
|:----:|:------:|
|Profissão| Médico Generalista|
|História de contexto| João atende na UBS 07 da região administrativa de taguatinga. Usa o aplicativo Diário da Saúde para acompanhar seus pacientes diabéticos, mas está mudando de trabalho e indo para um hospital na rede privada.|
|O que ele(a) acha que poderia mudar:| Eu queria poder excluir minha conta, uma vez que não vou estar mais acompanhando os pacientes da UBS 07. |

### Persona 3
| Persona | Genoveva Sousa|
|:----:|:------:|
|Profissão| Aposentada |
|História de contexto| Genoveva é idosa, moradora do Gama, tem muitas tarefas diárias pra deixar a sua casa sempre arrumada e fazer seu cafézinho sempre gostoso. Por consequência, ela acaba não tendo uma memória muito boa para as outras coisas do seu dia e acaba quase sempre esquecendo a senha para poder entrar no Diário da Saúde|
|O que ele(a) acha que poderia mudar:| Eu gostaria muito que eu pudesse resgatar a minha senha de alguma maneira. |

### Persona 4
| Persona | Aroldo Silva|
|:----:|:------:|
|Profissão| Aposentado |
|História de contexto| Aroldo tem muita dificuldade em lembra senha e números, e frequentemente acaba esquecendo até mesmo da senha do seu cartão do banco.|
|O que ele(a) acha que poderia mudar:| Eu queria poder ter um jeito de recuperar minha senha de acesso ao aplicativo através de um jeito fácil e rápido, pois não tenho muito domínio em tecnologia. |

### Persona 5
| Persona | José Cleiton|
|:----:|:------:|
|Profissão| Médico Geral |
|História de contexto| José é um médico que preza bastante pela praticidade e agilidade nos seus afazeres desde que se formou na faculdade de medicina em 1988. Utilizando o aplicativo Diário da Saúde, ele achou que a aplicação poderia fornecer vários atalhos|
|O que ele(a) acha que poderia mudar:| Eu acharia bastante interessante se eu conseguisse ter acesso a algumas funcionalidades não específicas através de uma sidebar |

### Persona 6
| Persona | Renata Dutra|
|:----:|:------:|
|Profissão| Vendedora Ambulante |
|História de contexto| Renata sempre se sentiu uma grande empreendedora e por isso gerencia sozinha uma lojinha de cosméticos na rodoviária do Plano Piloto. Desde que descobriu que tem hipertensão, começou a utilizar o aplicativo Diário da Saúde por recomendação de seu médico. Entretanto, conforme ela usava, descobria várias coisas que poderiam melhorar no aplicatico graças a sua experiência de lidar com clientes, mas nunca soube como entrar em contato com os desenvolvedores|
|O que ele(a) acha que poderia mudar:| Eu gostaria de entrar em contato com os desenvolvedores do aplicativo para eu poder dar algumas idéias ou sugestões de como melhorar a aplicação deles |

## Requisitos Elicitados
### Requisitos Funcionais
| Código | Descrição | Prioridade |
| -- | -- | -- |
|RF01|Deve existir a opção de fazer logout da conta do aplicativo|Must|
|RF02|Deve existir um meio de excluir conta de usuário|Should|
|RF03|Deve existir um jeito de recuperar a senha por SMS|Could|
|RF04|Sistema deve disponalizar questionário de preenchimento diário para os pacientes de um grupo.|Should|
|RF05|Aplicativo deve Possuir uma Sidebar para facilitar a vida do usuário|Could|
|RF06|Aplicativo deve possuir um botão para qualquer usuário entrar em contato com os desenvolvedores|Would|