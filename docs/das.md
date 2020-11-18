# Documento de Arquitetura de Software

## Versionamento
| Data | Versão | Descrição | Autor(es) |
|:----:|:------:|:---------:|:---------:|
| 14/11/2020 | 0.1 | Criação do Documento | [Murilo Loiola](https://github.com/murilo-dan) |
| 16/11/2020 | 0.2 | Adição do tópico de Introdução | [Murilo Loiola](https://github.com/murilo-dan) |
| 16/11/2020 | 0.3 | Adição do tópico de Escopo | [Murilo Loiola](https://github.com/murilo-dan) |
| 17/11/2020 | 0.4 | Adição do tópico de Visão Geral na Introdução | [Murilo Loiola](https://github.com/murilo-dan) |
| 18/11/2020 | 0.5 | Adição do tópico de Tecnologias | [Murilo Loiola](https://github.com/murilo-dan) |
| 18/11/2020 | 0.6 | Adição do tópico de Metas e Restrições Arquiteturais | [Murilo Loiola](https://github.com/murilo-dan) |
| 18/11/2020 | 0.7 | Adição do tópico de Visão de Casos de Uso | [Murilo Loiola](https://github.com/murilo-dan) |
| 18/11/2020 | 0.8 | Adição do tópico de Visão Lógica | [Murilo Loiola](https://github.com/murilo-dan) |
| 18/11/2020 | 0.9 | Adição do tópico de Visão de Dados | [Murilo Loiola](https://github.com/murilo-dan) |

## Introdução

### Finalidade

<p align="justify">&emsp;&emsp;Este documento fornece uma visão arquitetural abrangente do sistema, utilizando-se de um número de diferentes visões arquiteturais para descrever diferentes aspectos do sistema. Seu propósito é capturar e transmitir as decisões arquiteturais mais importantes que foram tomadas em relação ao sistema.</p>

### Escopo

<p align="justify">&emsp;&emsp;Este Documento de Arquitetura de Software fornece uma visão arquitetural abrangente do sistema Diário da Saúde. O sistema em questão está sendo desenvolvido por alunos da UnB-FGA com o intuito de facilitar a comunicação entre paciente e profissional da saúde em grupos de acompanhamento de Unidades Básicas de Saúde (UBS).</p>

### Referências

### Visão Geral

<p align="justify">&emsp;&emsp;Este documento busca informar de maneira compreensiva a arquitetura geral, bem como prover links para especificações mais detalhadas, do aplicativo <strong>Diário da Saúde</strong>. O documento traz, primeiramente, uma visão geral do sistema no tópico de Representação Arquitetural, demonstrando uma relação de macro nível entre os módulos do sistema, onde também são descritas as tecnologias utilizadas. Em seguida, há o tópico de Metas e Restrições da Arquitetura, descrevendo os requisitos e objetivos que geram impacto significativo na arquitetura. Logo após, são descritas as visões pertinentes para a compreensão da arquitetura, sendo elas: Visão de Casos de Uso, Visão Lógica e Visão de Dados. Por último, os tópicos de Tamanho e Performance e Qualidade.</p>

## Representação Arquitetural

<p align="justify">&emsp;&emsp;Este documento apresenta a arquitetura como uma série de visões: Visão de Casos de Uso, Visão Lógica. Essas visões são descritas e detalhadas através de diagramas UML (<i>Unified Modeling Language</i>) acompanhados de descrições curtas.</p>

### Visão Geral

*Inserir diagrama representando macro níveis do sistema.*

### Tecnologias

#### Front-End

* <p align="justify"><strong>Node.js</strong>: é um ambiente de execução JavaScript <i>server-side</i>, sem dependência com navegadores web. Sua utilização apresenta vantagens como alto fator de escalabilidade, taxa de transferência e flexibilidade.</p>

#### Back-End

* <p align="justify"><strong>React Native</strong>: é um <i>framework</i> JavaScript para aplicações <i>mobile</i> desenvolvido pelo Facebook. Ele é utilizado para desenvolver aplicações móveis de forma nativa, permitindo aos desenvolvedores levar a aplicação para sistemas Android e iOS simultaneamente.</p>

#### Banco de Dados

* <p align="justify"><strong>MongoDB</strong>: é uma ferramenta de banco de dados não relacional. Utiliza documentos semelhantes ao JSON par organizar os dados, oferecendo alta variedade e flexibilidade.</p>

#### Outros

* <p align="justify"><strong>Docker</strong>: é uma ferramenta que utiliza virtualização de SO para entregar software em pacotes chamados contêineres. Os contêineres são isolados uns dos outros e possuem seus prórpios softwares, bibliotecas e arquivos de configuração. Está sendo utilizado tanto no back-end quanto no front-end, com o objetivo de facilitar o desenvolvimento em grupo.</p>

## Metas e Restrições Arquiteturais

### Restrições

* É necessário ter conexão com a Internet para utilizar o aplicativo;
* A aplicação oferecerá suporte para Android e iOS;
* O escopo proposto deve ser terminado até a data estipulada para entrega;
* O software deve ser desenvolvido utilizando as tecnologias mencionadas anteriormente;

### Metas

* **Usabilidade**: o software deve ser de fácil utilização, com foco em aprendibilidade e simplicidade, buscando atender ao público (maioria de idade avançada) para o qual o software está sendo desenvolvido;
* **Segurança**: o software deve garantir a segurança dos dados dos usuários.
* **Manutenibilidade**: o software deve ser de fácil modificação posterior a finalização do trabalho, facilitando continuação;

## Visão de Casos de Uso

<p align="justify">&emsp;&emsp;Neste tópico há uma descrição da visualização dos casos de uso da arquitetura de software. Aqui são descritos cenários e/ou casos de uso que representam uma funcionalidade significativa para o sistema.</br>&emsp;&emsp;Os casos de uso deste sistema estão listados abaixo. Aqueles destacados em <strong>negrito</strong> possuem impacto significativo na arquitetura e são descritos posteriormente neste mesmo tópico.</p>

* **UC01 - Cadastro/Login**
* **UC02 - Visualizar lista de grupos**
* **UC03 - Acessar grupo**
* UC04 - Visualizar informações do grupo
* **UC05 - Responder formulário**
* UC06 - Editar perfil
* **UC07 - Gerenciar pacientes**
* UC08 - Adicionar pacientes
* UC09 - Excluir pacientes
* **UC10 - Gerar relatório**
* UC11 - Gerar relatório individual
* UC12 - Gerar relatório geral
* **UC13 - Criar grupo**
* **UC14 - Criar formulário**
* UC15 - Escolher perguntas

</br>

#### Casos de uso - Paciente
[![diagrama_caso_de_uso_paciente](./img/patient_use_case.png)](./img/patient_use_case.png)

#### Casos de uso - Profissional da Saúde
[![diagrama_caso_de_uso_profissional_da_saude](./img/health_professional_use_case.png)](./img/health_professional_use_case.png)

#### Descrição dos casos de uso significativos

* <p align="justify">UC01 - Cadastro/Login: este caso de uso ocorre quando o usuário realiza o cadastro ou login no sistema. Como há permanência de dados, o cadastro precisa ser realizado somente uma vez para cada usuário. É importante notar que o paciente e o profissional da saúde compartilham este caso de uso, sendo necessário a diferenciação (realizada pelo próprio usuário) para qual tipo de ator a conta se refere durante o cadastro.</p>

* <p align="justify">UC02 - Visualizar lista de grupos: este caso de uso ocorre assim que o usuário loga no aplicativo. A tela inicial apresenta a lista de grupos aos quais o usuário pertence (no caso de paciente) ou que o usuário possui (no caso de profissional da saúde).

* <p align="justify">UC03 - Acessar grupo: este caso de uso ocorre quando o usuário seleciona algum grupo específico da lista de grupos. Serão apresentadas informações do grupo e diferentes ações a serem tomadas, de acordo com o tipo de usuário.</p>

* <p align="justify">UC05 - Responder formulário: este caso de uso é exclusivo para o ator paciente e consiste em responder o formulário de determinado grupo. É importante notar que é possível responder o formulário tanto a partir da lista de grupos, quanto a partir da seleção de um grupo específico.</p>

* <p align="justify">UC07 - Gerenciar pacientes: este caso de uso é exclusivo para o ator profissional da saúde e consiste em gerenciar os pacientes de um grupo qualquer. É possível adicionar ou remover pacientes.</p>

* <p align="justify">UC10 - Gerar relatório: este caso de uso é exclusivo para o ator profissional da saúde e consiste em gerar um relatório dos dados obtidos a partir dos formulários. É possível gerar um relatório geral do grupo ou selecionar um paciente específico para obter um reltório individual.</p>

* <p align="justify">UC13 - Criar grupo: este caso de uso é exclusivo para o ator profissional da saúde e consiste em criar um novo grupo. Não é possível criar um grupo sem adicionar um formulário.</p>

* <p align="justify">UC14 - Criar formulário: este caso de uso é exclusivo para o ator profissional da saúde e consiste em criar o formulário de um grupo. O formulário é customizável a partir de uma gama de questões pré-existentes.</p>

## Visão Lógica

<p align="justify">&emsp;&emsp;Neste tópico há uma descrição das principais classes e pacotes que compõem o sistema. As descrições estão posicionadas logo após os diagramas.</p>

#### Diagrama de Classes

[![diagrama_de_classe](./img/class_diagram_gof_2.png)](./img/class_diagram_gof_2.png)

#### Principais classes

* <p align="justify"><i><strong>Person</i></strong>: a classe <i>Person</i> representa o usuário do sistema. Duas outras classes herdam dela, a classe <i>Patient</i> e a classe <i>HealthProfessional</i>. Essa estrutura de herança foi estabalecida devido a semelhança que as duas classes filhas possuem entre si, facilitando a modularização. Na classe pai estão descritos os atributos e métodos que ambas as classes filhas compartilham, enquanto em cada uma das classes filhas estão descritos os atributos e métodos exclusivos daquele tipo de usuário.</p>

* <p align="justify"><i><strong>Group</i></strong>: a classe <i>Group</i> representa os grupos. Os grupos são contituídos de vários usuários do tipo <i>Patient</i> e estão associados a um único <i>Form</i>.

* <p align="justify"><i><strong>Form</i></strong>: a classe <i>Form</i> representa os formulários de perguntas de cada grupo.

* <p align="justify"><i><strong>Question</i></strong>: a classe <i>Question</i> representa as perguntas existentes no sistema. Esta classe é uma interface, de forma que seu comportamento é definido de acordo com as classes filhas. As classes filhas são as perguntas registradas no sistema e que constituem um formulário.</p>

* <p align="justify"><i><strong>Report</i></strong>: a classe <i>Report</i> representa os relatórios individuais ou gerais.

#### Diagrama de Pacotes

## Visão de Dados

<p align="justify">&emsp;&emsp;Neste tópico há uma descrição do modelo de persistência de dados utilizado no sistema. Para a descrição do comportamento das entidades do sistema, utilizou-se o <a href="https://unbarqdsw.github.io/2020.1_G5_Diario_da_Saude/#der/">DE-R</a>. Para definir as regras de negócio entre cada tabela armazenada no banco de dados, utilizou-se o <a href="https://unbarqdsw.github.io/2020.1_G5_Diario_da_Saude/#dl/">Diagrama Lógico</a>.</p>

#### DE-R

[![diagrama_entidade_relacionamento](./img/diagrama_entidade_relacionamento.png)](./img/diagrama_entidade_relacionamento.png)

#### Diagrama Lógico

[![diagrama_lógico](./img/diagrama_logico.png)](./img/diagrama_logico.png)

## Tamanho e Performance

## Qualidade