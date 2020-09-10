# METODOLOGIA

## Versionamento
| Data | Versão | Descrição | Autores |
| :---: | :---: | :---: | :---: |
| 09/09/2020 | 0.1 | Criação do documento |  [Gustavo Carvalho](https://github.com/gustavocarvalho1002), [Murilo Loiola](https://github.com/murilo-dan), [Rodrigo Dadamos](https://github.com/Rdadamos) |


## Introdução

<p align="justify">&emsp;&emsp;O objetivo desse documento é detalhar e formalizar as metodologias usadas no desenvolvimento do Diário da Saúde. As metodologias aplicadas no escopo da elaboração do projeto incluem:</p>

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

<p align="justify">&emsp;&emsp;A metodologia Scrum é uma metodologia ágil utilizada no planejamento e gerenciamento. Nessa metodologia é utilizado um artefato chamado *Product Backlog* que lista as funcionalidades ou tarefas que serão implementadas. O projeto é dividido em ciclos chamados de *Sprint*. No começo de cada sprint é realizado o *Sprint Planning Meeting* onde são definidas as funcionalidades que devem ser desenvolvidas nessa sprint. As tarefas alocadas em um Sprint são transferidas do Product Backlog para o *Sprint Backlog*.</p>

<p align="justify">&emsp;&emsp;No término de uma sprint é realizado uma *Sprint Review Meeting* onde são apresenta as funcionalidades implementadas nessa sprint. Então é feito o planejamento da próxima Sprint e o ciclo recomeça.</p>


### Kanban

<p align="justify">&emsp;&emsp;Um quadro kanban é uma ferramenta ágil de gerenciamento de projeto projetada para ajudar a visualizar o trabalho, limitar o trabalho em andamento e maximizar a eficiência. Os quadros Kanban usam **cartões**, **colunas**  para ajudar as equipes de tecnologia e serviço a se comprometerem com a quantidade certa de trabalho e realizá-la!</p>


### Extreme Programming (XP)

<p align="justify">&emsp;&emsp;Extreme Programming (XP) é uma estrutura ágil de desenvolvimento de software que visa produzir software de alta qualidade e maior qualidade de vida para a equipe de desenvolvimento. XP é a mais específica das estruturas ágeis em relação às práticas de engenharia apropriadas para o desenvolvimento de software.</p>

Algumas das práticas:
 * Programação em pares: duas pessoas trabalhando com UMA máquina onde um codifica, e o outro critica ou dá sugestões.  
 * Coding stantard: Padrão de códificação para toda equipe.
 * Integração contínua: Todo código deve ser integrado diariamente e todos testes devem passar antes e depois da integração. Se algum problema é encontra do ele deve ser corrigido imediatamente.
 * Semana de 40 horas: O XP preconiza que não se pode trabalhar horas extras por mais de uma semana, pois trabalho extra é sintoma de que algo está errado. Devemos manter um ritmo sustentável.

### Lean

<p align="justify">&emsp;&emsp;&emsp;&emsp;A metodologia Lean foca na agregação de valor e, portanto, busca reduzir os custos ao cortar atividades desnecessárias. Assim sendo, os princípios do Lean tendem a buscar otimização do processo de desenvolvimento.</p>

* Princípios escolhidos

    * Especificar valor do ponto de vista do cliente final:
    
         <p align="justify"> Determinar o valor do produto a partir do ponto de vista do cliente ajuda o grupo de desenvolvimento a verificar se o que foi produzido até o momento atende às necessidades do usuário. Utilizar esse princípio ao longo do desenvolvimento permite observar de que forma as funcionalidades implementadas impactam na experiência do usuário. Dessa forma, esse princípio ajuda na otimização do desenvolvimento ao destacar aquilo que realmente adiciona valor ao produto.</p>

    * Identificar os passos do processo produtivo, eliminando etapas que não acrescentam valor:

      <p align="justify">Ao analisar o processo produtivo continuamente, é possível identificar quais etapas consomem mais recursos/tempo e que não oferecem retorno adequado. Ao identificar e eliminar essas etapas, sobra mais tempo para focar nas partes que realmente adicionam valor ao produto, melhorando o resultado final. Esse princípio é especialmente importante pelo fato de que as otimizações realizadas são mantidas ao longo do projeto, intensificando a produção.</p>

    * Permitir que as etapas que adicionam valor sejam realizadas em sequência rápida, gerando um workflow contínuo:

      <p align="justify">Esse princípio ajuda a manter o projeto em um processo de melhoria contínua. Para uma boa aplicação desse princípio é importante que o grupo mantenha uma comunicação fluída, para que todos saibam como está o progresso do projeto a todo momento.</p>


## Metodologias de gerência

### Burndown
 
<p align="justify">&emsp;&emsp;Burndown é uma ferramenta para coletar os dados do projeto, levando em consideração o trabalho que deve ser feito relativo ao tempo do projeto. Usar um gráfico burndown é um meio de ver quanto trabalho resta e quanto tempo há para fazê-lo. É uma representação gráfica, oferecendo em uma imagem o que mil palavras podem não ser capazes de comunicar com tanta clareza.</p>


### Velocity

<p align="justify">&emsp;&emsp;Velocity é uma medida da quantidade de trabalho que um time pode realizar durante uma única Sprint e é a métrica chave no Scrum. O velocity é calculado no final da Sprint somando os pontos de todas as <a href="./backlog.md">histórias de usuário</a> totalmente concluídas.</p>

### Quadro de Conhecimento

<p align="justify">&emsp;&emsp;
Quadro de conhecimento é uma ferramenta utilizada para reunir em um só lugar informações sobre as habilidades e conhecimentos dos membros envolvidos no projeto. Este artefato visual lista as tecnologias utilizadas em formato de colunas, o nome dos membros e a pontuação de cada um referente a tópico. 
O quadro de conhecimento é um ótimo indicador para definir treinamentos e até mesmo alocação dos indíviduos dentro do projeto com base em suas habilidades. 
</p>

## Aplicação de metodologias dentro do projeto

Buscando uma maior flexibilidade, desempenho e adaptação a rotina da matéria e dos alunos, foi discutido em (reunião)[./ata_1.md] uma utilização híbrida de metodologias, onde as seguintes foram escolhidas: 

* Scrum
* Extreme Programming
* Kanban
* Lean

### Scrum no Projeto

Foram adotados os seguintes aspectos do scrum:

* Sprints(duração de 7 dias)

* Product Backlog 

* Sprint Backlog 

* Sprint Review

* Sprint Planning 

### Kanban no projeto

O quadro kanban será constituido pelas seguintes colunas:

* Product Backlog:Funcionalidades, correções, mudanças e qualquer outras atividade que o time realizará para poder entregar o produto;
* Em progresso: Atividades em que o time está trabalhando no momento;
* Feito: Atividades que já foram finalizadas, revisadas e aceitas pelo time.

### XP no projeto

 * Programação em pares  
 * Coding stantard
 * Integração contínua

### Lean no projeto

## Ferramentas utilizadas

* Comunicação:
   
    * Teams
    * Telegram    

* Organizacional e gerência:
    
    * ZenHub: Utilizada para quadros kanbam, burndown, velocity.
    * Google sheets: Utilizado para quadro de conhecimento
    * PokerPlanning: Utilizado para pontuação das histórias de usuário. 

