# Metodologia

## Versionamento
| Data | Versão | Descrição | Autores |
| :---: | :---: | :---: | :---: |
| 09/09/2020 | 0.1 | Criação do documento |  [Gustavo Carvalho](https://github.com/gustavocarvalho1002), [Murilo Loiola](https://github.com/murilo-dan), [Rodrigo Dadamos](https://github.com/Rdadamos) |
| 11/09/2020 | 1.0 | Adicionando tópico Lean no projeto e revisando documento | [Murilo Loiola](https://github.com/murilo-dan) |
| 28/09/2020 | 1.1 | Adicionando referência | [Gabriel Tiveron](https://github.com/GabrielTiveron) |

## Introdução

<p align="justify">&emsp;&emsp;O objetivo deste documento é detalhar e formalizar as metodologias que serão utilizadas no desenvolvimento do Diário da Saúde. As metodologias aplicadas no escopo da elaboração do projeto incluem:</p>

* Scrum;
* Kanban;
* Extreme Programming;
* Lean;
* Reuniões;
* Quadro de conhecimento;
* Burndown;
* Velocity;
* entre outros;

## Metodologias de desenvolvimento

### Scrum

<p align="justify">&emsp;&emsp;A metodologia Scrum é uma metodologia ágil utilizada no planejamento e gerenciamento. O Scrum faz uso de um artefato chamado <em>Product Backlog</em> que lista as funcionalidades ou tarefas que serão implementadas. O projeto é dividido em ciclos chamados de <em>Sprint</em>. No começo de cada sprint é realizado o <em>Sprint Planning Meeting</em> onde são definidas as funcionalidades que devem ser desenvolvidas nessa sprint. As tarefas alocadas em um Sprint são transferidas do Product Backlog para o <em>Sprint Backlog</em>.</p>

<p align="justify">&emsp;&emsp;No término de uma sprint é realizado uma <em>Sprint Review Meeting</em> onde são apresentadas as funcionalidades implementadas nessa sprint. Então é feito o planejamento da próxima Sprint e o ciclo recomeça.</p>

### Kanban

<p align="justify">&emsp;&emsp;Um quadro kanban é uma ferramenta ágil de gerenciamento de projeto pensada para ajudar a visualizar o trabalho, limitar o trabalho em andamento e maximizar a eficiência. Os quadros Kanban usam <strong>cartões</strong> e <strong>colunas</strong>  para ajudar as equipes de tecnologia e serviço a se comprometerem com a quantidade certa de trabalho e realizá-la.</p>

### Extreme Programming (XP)

<p align="justify">&emsp;&emsp;Extreme Programming (XP) é uma estrutura ágil de desenvolvimento de software que visa produzir software de alta qualidade e maior qualidade de vida para a equipe de desenvolvimento. XP é a mais específica das estruturas ágeis em relação às práticas de engenharia apropriadas para o desenvolvimento de software.</p>

Algumas das práticas:

 * <p align="justify">Programação em pares: duas pessoas trabalhando com UMA máquina onde um codifica e o outro critica ou dá sugestões.</p>
 * <p align="justify">Coding stantard: Padrão de códificação para toda equipe.</p>
 * <p align="justify">Integração contínua: Todo código deve ser integrado diariamente e todos testes devem passar antes e depois da integração. Se algum problema é encontrado ele deve ser corrigido imediatamente.</p>
 * <p align="justify">Semana de 40 horas: O XP preconiza que não se pode trabalhar horas extras por mais de uma semana, pois trabalho extra é sintoma de que algo está errado. Devemos manter um ritmo sustentável.</p>

### Lean

<p align="justify">&emsp;&emsp;A metodologia Lean foca na agregação de valor e, portanto, busca reduzir os custos ao cortar atividades desnecessárias. Assim sendo, os princípios do Lean tendem a buscar otimização do processo de desenvolvimento. Alguns princípios do Lean são:</p>

<strong>Ver o todo:</strong>
    
<p align="justify">&emsp;&emsp;Determinar o valor do produto a partir do ponto de vista do cliente, isto é, observar o produto como unidade final e não apenas como módulos, ajuda o grupo de desenvolvimento a verificar se o que foi produzido até o momento atende às necessidades do usuário. Utilizar esse princípio ao longo do desenvolvimento permite observar de que forma as funcionalidades implementadas impactam no produto final. Dessa forma, esse princípio ajuda na otimização do desenvolvimento ao destacar aquilo que realmente adiciona valor ao produto.</p>

<strong>Eliminar desperdício:</strong>

<p align="justify">&emsp;&emsp;Ao analisar o processo produtivo continuamente, é possível identificar quais etapas consomem mais recursos/tempo e que não oferecem retorno adequado. Ao identificar e eliminar essas etapas, sobra mais tempo para focar nas partes que realmente adicionam valor ao produto, melhorando o resultado final. Esse princípio é especialmente importante pelo fato de que as otimizações realizadas são mantidas ao longo do projeto, intensificando a produção.</p>

<strong>Fortalecer o time:</strong>

<p align="justify">&emsp;&emsp;Esse princípio ajuda a manter o projeto em um processo de melhoria contínua. Para uma boa aplicação desse princípio é importante que o grupo mantenha uma comunicação fluída, para que todos saibam como está o progresso do projeto a todo momento.</p>

## Metodologias de gerência

### Burndown
 
<p align="justify">&emsp;&emsp;Burndown é uma ferramenta para coletar os dados do projeto, levando em consideração o trabalho que deve ser feito relativo ao tempo do projeto. Usar um gráfico burndown é um meio de ver quanto trabalho resta e quanto tempo há para fazê-lo. É uma representação gráfica, oferecendo clareza de interpretação e entendimento.</p>

### Velocity

<p align="justify">&emsp;&emsp;Velocity é uma medida da quantidade de trabalho que um time pode realizar durante uma única Sprint e é a métrica chave no Scrum. O velocity é calculado no final da Sprint somando os pontos de todas as <a href="https://unbarqdsw.github.io/2020.1_G5_Diario_da_Saude/backlog_produto/">histórias de usuário</a> totalmente concluídas.</p>

### Quadro de Conhecimento

<p align="justify">&emsp;&emsp;Quadro de conhecimento é uma ferramenta utilizada para reunir em um só lugar informações sobre as habilidades e conhecimentos dos membros envolvidos no projeto. Este artefato visual lista as tecnologias utilizadas em formato de colunas, o nome dos membros e a pontuação de cada um referente a tópico. 
O quadro de conhecimento é um ótimo indicador para definir treinamentos e até mesmo alocação dos indíviduos dentro do projeto com base em suas habilidades. 
</p>

## Aplicação de metodologias dentro do projeto

<p align="justify">&emsp;&emsp;Buscando maior flexibilidade, desempenho e adaptação, foi discutido e decidido pelo grupo durante uma <a href="https://unbarqdsw.github.io/2020.1_G5_Diario_da_Saude/ata_1/">reunião</a> uma utilização híbrida de metodologias, sendo escolhidas as seguintes:</p>

* Scrum
* Extreme Programming
* Kanban
* Lean

### Scrum no Projeto

Foram adotados os seguintes aspectos do scrum:

* Sprints (duração de 7 dias)

* Product Backlog 

* Sprint Backlog 

* Sprint Review

* Sprint Planning 

### Kanban no projeto

O quadro kanban será constituido pelas seguintes colunas:

* Product Backlog: funcionalidades, correções, mudanças e quaisquer outras atividades que o time realizará para poder entregar o produto;
* Em progresso: atividades em que o time está trabalhando no momento;
* Feito: atividades que já foram finalizadas, revisadas e aceitas pelo time.

### XP no projeto

 * Programação em pares  
 * Coding stantard
 * Integração contínua

### Lean no projeto

<p align="justify">&emsp;&emsp;Uma vez que o Lean não se trata exatamente de uma metodologia, mas sim de uma base que pode ser aplicada a diferentes metodologias (como o Scrum, por exemplo), a utilização do Lean se dará de forma mais implícita durante o desenvolvimento.</br>&emsp;&emsp;Durante as etapas de Sprint Review e Sprint Planning, por exemplo, o grupo dará atenção especial na análise da produção de cada dupla de programação (XP), observando se é possível fortalecer o time ou eliminar desperdício através do gerenciamento adequado dos membros.</br>&emsp;&emsp;Dessa forma, o Lean será utilizado no projeto como uma guia geral, ajudando na tomada de decisões que beneficiarão o desenvolvimento.</p>

## Ferramentas utilizadas

* Comunicação:
   
    * Teams
    * Telegram    

* Organizacional e gerência:
    
    * ZenHub: utilizado para quadros kanbam, burndown, velocity.
    * Google sheets: utilizado para quadro de conhecimento
    * PokerPlanning: utilizado para pontuação das histórias de usuário. 

## Referências

* Scrum, A Better Way Of Building Products. Disponível em: [https://www.scrum.org/resources/what-is-scrum](https://www.scrum.org/resources/what-is-scrum). Acesso em: 28 de set. 2020.
* Kanban, Explained for Beginners. Disponível em: [https://kanbanize.com/kanban-resources/getting-started/what-is-kanban](https://kanbanize.com/kanban-resources/getting-started/what-is-kanban). Acesso em: 28 de set. 2020.
* Introdução ao Extreme Programing. Disponível em: [https://www.devmedia.com.br/introducao-ao-extreme-programming-xp/29249](https://www.devmedia.com.br/introducao-ao-extreme-programming-xp/29249). Acesso em: 28 de set. 2020.
