# GRASP's
## Versionamento
| Data | Versão | Descrição | Autor(es) |
|:----:|:------:|:---------:|:---------:|
| 22/10/2020 | 0.1 | Criação do Documento | [Murilo Loiola](https://github.com/murilo-dan) |
| 22/10/2020 | 0.2 | Adição do tópico Introdução | [Murilo Loiola](https://github.com/murilo-dan) |
| 26/10/2020 | 0.3 | Adição de hyperlink para Factory Method | [Murilo Loiola](https://github.com/murilo-dan) |
| 26/10/2020 | 0.4 | Adição do Especialista | [Rodrigo Dadamos](https://github.com/Rdadamos) |
| 26/10/2020 | 0.5 | Consertando hyperlinks | [Murilo Loiola](https://github.com/murilo-dan) |

## Introdução

<p align="justify">&emsp;&emsp;O <b>GRASP</b> (Padrões de Software para Atribuição de Responsabilidades Gerais, em tradução livre) consiste de diretrizes que ajudam na atribuição de responsabilidades para classes e objetos em <i>design</i> orientado a objeto. O GRASP é constituído por nove padrões ou princípios, sendo eles:</p>

* Especialista;
* Criador;
* Controladora;
* Indireção;
* Baixo acoplamento;
* Polimorfismo;
* Alta Coesão;
* Fabricação própria;
* Variações Protegidas;

## Creator

<p align="justify">&emsp;&emsp;A criação de objetos é uma das atividades mais comuns em um sistema orientado a objetos. Consequentemente, é útil ter um princípio geral para a atribuição de responsabilidades de criação. Sendo essas responsabilidades bem atribuídas, o projeto apresentará acoplamento baixo, mais clareza, encapsulamento e reutilização.</br>&emsp;&emsp;Dessa forma, o padrão Criador busca determinar quem deve ser responsável pela criação de uma nova instância de uma classe. No projeto, o princípio Creator pode ser observado nas relações de composição Grupo-Formulário e Formulário-Questão. Nestas relações, a primeira classe, que é composta pela segunda e portanto não pode existir sem ela, é responsável por instanciar objetos da segunda classe, conforme observado no <a href="https://unbarqdsw.github.io/2020.1_G5_Diario_da_Saude/diagrama_de_classes/">Diagrama de Classes</a>.</p>

## Especialista

<p align="justify">&emsp;&emsp;Quando temos uma relação de composição (todo-parte) entre duas entidades, o padrão criador atribui a responsabilidade de instanciação de partes para a classe todo. Assim, a classe todo é especialista em termos de criação de suas partes. Isso se justifica pois, na relação de composição o todo não existe sem suas partes sendo responsável por intanciar suas partes ao ser ele mesmo instanciado. Ao aplicar o GRASP Criador, o Especialista também foi aplicado no sentido em que o Criador é um Especialista na criação de instâncias.</p>

<p align="justify">&emsp;&emsp;O GRASP Especialista é um padrão que preocupa-se em atribuir responsabilidades para a entidade mais especialista em um dado aspecto do sistema, não apenas na criação de instâncias. Devemos perguntar quem é a melhor entidade para realizar para realizar determinada responsabilidade recorrente no sistema.</p>

<p align="justify">&emsp;&emsp;No Diário da Saúde, podemos observar no <a href="https://unbarqdsw.github.io/2020.1_G5_Diario_da_Saude/diagrama_de_classes/">Diagrama de Classes</a> uma relação de todo-parte entre as classes Grupo e Forms, sendo essa uma relação de composição, pois os formulários compõem os grupos de acompanhamento que não podem existir sem esses formulários, já que a intenção dos grupos é acompanhar o estado de saúde dos pacientes que respondem seus respectivos formulários para indicar sua condição naquele dia.</p>

## Referência

1. Craig, L. <b>Utilizando UML e Padrões</b>. Grupo A, 2011. 9788577800476. Disponível em: <a>https://integrada.minhabiblioteca.com.br/#/books/9788577800476/</a>. Acesso em: 22 Outubro 2020.
2. GRASP (object-oriented-design) - Wikipedia. Disponível em: <a>https://en.wikipedia.org/wiki/GRASP_(object-oriented_design)</a>. Aceesso em: 22 Outubro 2020.
