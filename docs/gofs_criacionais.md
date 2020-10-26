# GOF's Criacionais
## Versionamento
| Data | Versão | Descrição | Autor(es) |
|:----:|:------:|:---------:|:---------:|
| 22/10/2020 | 0.1 | Criação do Documento | [Murilo Loiola](https://github.com/murilo-dan) |
| 25/10/2020 | 0.2 | Adição da Introdução | [Rodrigo Dadamos](https://github.com/Rdadamos)|
| 26/10/2020 | 0.3 | Adição do Factory Method com definição e motivação | [Rodrigo Dadamos](https://github.com/Rdadamos)|
| 26/10/2020 | 0.4 | Adição de Referências | [Rodrigo Dadamos](https://github.com/Rdadamos)|

## Introdução

<p align="justify">&emsp;&emsp;De acordo com GAMMA et al. no livro <i>Design Patterns: Elements of Reusable Object-Oriented Software</i>, padrões de projeto são soluções consolidadas para um problema recorrente no desenvolvimento e manutenção de softwares orientados a objeto. A proposta é utilizar uma solução padronizada, consolidada, validada e testada pela comunidade para um problema recorrente ao longo do desenvolvimento e manutenção do software. Considerando o princípio de encapsulamento, a complexidade de um sistema deve ser isolada quando possível. Em um sistema orientado a objeto, a criação de objetos não é uma tarefa fácil e lida com dois principais problemas: definir qual classe concreta deve criar o objeto, e definir como os objetos se relacionam com outros objetos do sistema. Dessa maneira, os GOF's criacionais apontam soluções padronizadas para esses problemas. Os principais GOF's estruturais são:</p>

* Factory Method;
* Abstract Factory;
* Builder;
* Prototype;
* Singleton;
* Multiton;
* Object Pool;

## Factory Method

#### Definição

<p align="justify">&emsp;&emsp;Quando instâncias de determinados objetos são muito requisitadas por outras classes de forma que a hierarquia de classes desses objetos (que já faz muitos cálculos, possuindo outras responsabilidades e ainda outras partes comportamentais) sofre muitas solicitações de criação de instâncias ficando sobrecarregada e gerando um gargalo, é indicado o uso de um padrão criacional. O padrão Factory Method é um padrão muito útil e muito recorrente que encapsula a hierarquia de classes escolhida para a criação de objetos permitindo delegar a instaciação de objetos para as classes filhas. O Factory Method delega a instaciação a uma outra hierarquia de classes, espelho da hierarquia de classes que está sendo o gargalo, mas dedicada somente a criação de instâncias. Dessa forma, a hierarquia de classes original fica livre para realizar suas outras responsabilidades. Como a intenção é minimizar o gargalo, testes devem ser feitos para verificar se o objetivo foi alcançado.</p>

#### Motivação

<p align="justify">&emsp;&emsp;O Diário da Saúde permite tanto aos pacientes quanto aos profissionais de saúde gerarem relatórios. Esses relatórios possuem informações sobre o paciente e as respostas aos formulários aplicados em seus grupos. Os pacientes podem gerar somente relatórios individuais sobre eles mesmos, e os profissionais de saúde podem gerar relatórios individuais de pacientes pertencentes aos seus grupos de acompanhamento ou um relatório geral sobre um determinado grupo que ele acompanha. Dessa forma, há uma hierarquia de classes para o Relatório responsável pela instanciação de objetos nas classes filhas relatório individual e relatório do grupo, além de outras responsabilidades necessaŕias para a criação do relatórios, como consultas e outras partes comportamentais. Essa hierarquia é constantemente acessada e requisitada para criação de mais de um tipo de relatório pelas classes do Paciente e do Profissional de Saúde representando um possível gargalo para o sistema. O Factory Method, ao criar um espelho dessa hierarquia, delega a instaciação dos relatórios para essa hierarquia espelho que é dedicada somente a criação de instâncias.</p>

## Referência

1. Factory Method - dofactory. Disponível em: <a>https://www.dofactory.com/javascript/design-patterns/factory-method</a>. Acesso em: 25 Outubro 2020.
2. Factory Method Design Pattern - SourceMaking. Disponível em: <a>https://sourcemaking.com/design_patterns/factory_method</a>. Acesso em: 25 Outubro 2020.
