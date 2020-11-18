# Documento de Arquitetura de Software

## Versionamento
| Data | Versão | Descrição | Autor(es) |
|:----:|:------:|:---------:|:---------:|
| 14/11/2020 | 0.1 | Criação do Documento | [Murilo Loiola](https://github.com/murilo-dan) |
| 16/11/2020 | 0.2 | Adição do tópico de Introdução | [Murilo Loiola](https://github.com/murilo-dan) |
| 16/11/2020 | 0.3 | Adição do tópico de Escopo | [Murilo Loiola](https://github.com/murilo-dan) |
| 17/11/2020 | 0.4 | Adição do tópico de Visão Geral na Introdução | [Murilo Loiola](https://github.com/murilo-dan) |
| 18/11/2020 | 0.5 | Adição do tópico de Tecnologias | [Murilo Loiola](https://github.com/murilo-dan) |

## Introdução

### Finalidade

<p align="justify">&emsp;&emsp;Este documento fornece uma visão arquitetural abrangente do sistema, utilizando-se de um número de diferentes visões arquiteturais para descrever diferentes aspectos do sistema. Seu propósito é capturar e transmitir as decisões arquiteturais mais importantes que foram tomadas em relação ao sistema.</p>

### Escopo

<p align="justify">&emsp;&emsp;Este Documento de Arquitetura de Software fornece uma visão arquitetural abrangente do sistema Diário da Saúde. O sistema em questão está sendo desenvolvido por alunos da UnB-FGA com o intuito de facilitar a comunicação entre paciente e profissional da saúde em grupos de acompanhamento de Unidades Básicas de Saúde (UBS).</p>

### Referências

### Visão Geral

<p align="justify">&emsp;&emsp;Este documento busca informar de maneira compreensiva a arquitetura geral, bem como prover links para especificações mais detalhadas, do aplicativo <strong>Diário da Saúde</strong>. O documento traz, primeiramente, uma visão geral do sistema no tópico de Representação Arquitetural, demonstrando uma relação de macro nível entre os módulos do sistema, onde também são descritas as tecnologias utilizadas. Em seguida, há o tópico de Metas e Restrições da Arquitetura, descrevendo os requisitos e objetivos que geram impacto significativo na arquitetura. Logo após, são descritas as visões pertinentes para a compreensão da arquitetura, sendo elas: Visão de Casos de Uso, Visão Lógica. Por último, os tópicos de Tamanho e Performance e Qualidade.</p>

## Representação Arquitetural

<p align="justify">&emsp;&emsp;Este documento apresenta a arquitetura como uma série de visões: Visão de Casos de Uso, Visão Lógica. Essas visões são descritas e detalhadas através de diagramas UML (<i>Unified Modeling Language</i>) acompanhados de descrições curtas.</p>

### Visão Geral

### Teconlogias

#### Front-End

* <p align="justify"><strong>Node.js</strong>: é um ambiente de execução JavaScript <i>server-side</i>, sem dependência com navegadores web. Sua utilização apresenta vantagens como alto fator de escalabilidade, taxa de transferência e flexibilidade</p>

#### Back-End

* <p align="justify"><strong>React Native</strong>: é um <i>framework</i> JavaScript para aplicações <i>mobile</i> desenvolvido pelo Facebook. Ele é utilizado para desenvolver aplicações móveis de forma nativa, permitindo aos desenvolvedores levar a aplicação para sistemas Android e iOS simultaneamente.</p>

#### Banco de Dados

* <p align="justify"><strong>MongoDB</strong>: é um programa de banco de dados não relacional. Utiliza documentos semelhantes ao JSON par organizar os dados, oferecendo alta variedade e flexibilidade.</p>

#### Outros

* <p align="justify"><strong>Docker</strong>: é uma ferramenta que utiliza virtualização de SO para entregar software em pacotes chamados contêineres. Os contêineres são isolados uns dos outros e possuem seus prórpios softwares, bibliotecas e arquivos de configuração. Está sendo utilizado tanto no back-end quanto no front-end, com o objetivo de facilitar o desenvolvimento em grupo.</p>

## Metas e Restrições Arquiteturais

## Visão de Casos de Uso

## Visão Lógica

## Tamanho e Performance

## Qualidade