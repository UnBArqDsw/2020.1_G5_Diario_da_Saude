# GOF's Comportamentais
## Versionamento
| Data | Versão | Descrição | Autor(es) |
|:----:|:------:|:---------:|:---------:|
| 22/10/2020 | 0.1 | Criação do Documento | [Murilo Loiola](https://github.com/murilo-dan) |
| 26/10/2020 | 0.2 | Adição da Introdução | [Ian Rocha](https://github.com/IanPSRocha) |
| 26/10/2020 | 0.2 | Adição do Template Method | [Ian Rocha](https://github.com/IanPSRocha) |
| 26/10/2020 | 0.3 | Remoção do Template Method e adição do Observer | [Ian Rocha](https://github.com/IanPSRocha), [André Goretti](https://github.com/Agoretti) |
| 26/10/2020 | 0.4 | Adicionando Hyperlinks | [Ian Rocha](https://github.com/IanPSRocha), [André Goretti](https://github.com/Agoretti) |

## Introdução

<p align="justify">&emsp;&emsp;Padrões de projeto comportamentais
auxiliam bastante quando é necessário utilizar vários algoritmos diferentes cada um para algum contexto. Permitem, nesse caso, usar mecanismos/recursos para facilitar tanto a incorporação de novos algoritmos para novos contextos quanto a seleção de qual algoritmo usar
dado um contexto. Auxiliam também alterando o tempo de execução que certo algoritmo tenha. Os principais GOF's estruturais são:</p>

* Command;
* Iterator;
* Mediator;
* Observer;
* State;
* Strategy;
* Template Method;
* Visitor;
* Memento;
* Chain Of Responsability;

<p align="justify">&emsp;&emsp;A seguir, estão descritos somente os padrões aplicados no projeto, escolhidos pelo grupo quanto a contribuição que a aplicação do padrão traria para o desenvolvimento do projeto.</p>

## Observer

#### Definição
<p align="justify">&emsp;&emsp;O padrão Observer oferece um modelo no qual os objetos tem um evento e são notificados quando o evento ocorre. Esse padrão é a base da programação orientada a eventos, incluindo JavaScript. O padrão Observer facilita um bom design orientado a objetos e promove uma fácil integração. O paradigma de eventos e do manipulador de eventos em JavaScript é a manifestação do Observer.</p>

#### Aplicação no Projeto
<p align="justify">&emsp;&emsp;A aplicação Diário da Saúde é completamente feita em javascript, linguagem que mais se beneficia do padrão comportamental Observer. Precisamos mudar as views de acordo com o usuário estar ou não logado, e caso esteje logado, identificar qual usuário.</p>

#### Hyperlinks

* [Observer - Subject](https://github.com/UnBArqDsw/2020.1_G5_Diario_da_Saude/blob/master/mobile/DiarioSaude/src/contexts/auth.tsx)
* [Observer - Controller](https://github.com/UnBArqDsw/2020.1_G5_Diario_da_Saude/blob/master/mobile/DiarioSaude/src/routes/index.tsx)

## Referências

Observer - dofactory. Disponível em: https://www.dofactory.com/javascript/design-patterns/observer. Acesso em: 26 Outubro 2020.
Observer Design Pattern. Disponível em: https://sourcemaking.com/design_patterns/observer. Acesso em: 26 Outubro 2020.
