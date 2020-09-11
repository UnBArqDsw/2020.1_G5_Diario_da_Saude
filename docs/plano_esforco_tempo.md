# Plano de Análise de Esforço e Tempo

## Versionamento

| Data | Versão | Descrição | Autor(es) |
|----| ---- | ------- | ------- |
| 03/09/2020 | 0.1 | Construção do documento a partir do template recomendado<sup>[1]</sup> | [Murilo Loiola](https://github.com/murilo-dan) |

## Introdução

<p align="justify">&emsp;&emsp;Neste documento serão abordadas técnicas utilizadas para a medição de custos de fabricação de software, onde esses custos representam o valor dos insumos utilizados na fabricação de um determinado produto. Segundo Fenton e Pfleeger (1997), uma estimativa é uma avaliação de probabilidade. Uma estimativa só é útil se for razoavelmente precisa.</p>

<p align="justify">&emsp;&emsp;Estimativas são necessárias nas fases iniciais do ciclo de vida de cada projeto, pois há uma necessidade de apresentar propostas apropriadas de negócio e administrar corretamente os recursos ao longo do mesmo. O uso de técnicas formais de estimativa pode dobrar a probabilidade do projeto de software ser concluído com sucesso, conforme indicaram as pesquisas de Roetzheim (2000b).</p>

<p align="justify">&emsp;&emsp;Para a estimativa do custo, será levado em consideração apenas o ciclo de produção do software e não o ciclo de vida por completo, que poderia envolver questões como distribuição, atendimento ao cliente, garantia, propaganda, retirada de mercado etc. Geralmente os custos são subdivididos em <strong>Custos de Matéria-Prima</strong>, <strong>Custos de Mão-de-Obra Direta</strong> e <strong>Custos Indiretos de Fabricação</strong>. O modelo utilizado para a realização dessas estimativas será feito utilizando o método COCOMO (COnstructive COst MOdel).</p>

## Modelo de Custo Construtivo (Constructive Cost Model - COCOMO)

<p align="justify">&emsp;&emsp;COCOMO ou Modelo de Custo Construtivo, é um modelo de estimativa do tempo e esforço de desenvolvimento de um software. Criado por Barry Boehm, é baseado no estudo de sessenta e três projetos. Os programas examinaram de 2.000 a 100.000 linhas de código em linguagens de programação de Assembly a PL/I. Pelo fato dessa metodologia ter utilizado várias linguagens de programação para criar as deduções, constantes e atributos para cada situação, esse método pode ser considerado generalista e útil para quase todos os projetos de software. O COCOMO pode ser divido em três implementações, a depender do tipo de software que será desenvolvido e qual o grau de confiabilidade a que se quer chegar na estimativa de um projeto. São eles:</p>

* <p align="justify"><strong>COCOMO Básico (Basic):</strong> computa o esforço e o custo de desenvolvimento considerando uma estimativa do tamanho do programa (em LOC ou contagem do número de linhas de código).</p>
* <p align="justify"><strong>COCOMO Intermediário (Intermediate):</strong> computa o esforço e o custo de desenvolvimento considerando uma estimativa do tamanho do programa e um conjunto de direcionadores de custo (avaliações subjetivas do produto, do hardware, do pessoal e dos atributos do projeto).</p>
* <p align="justify"><strong>COCOMO Detalhado (Detailed):</strong> além das características do COCOMO intermediário, inclui uma avaliação do impacto dos direcionadores de custo sobre cada etapa do desenvolvimento.</p>

<p align="justify">&emsp;&emsp;<strong>O modelo COCOMO pode ser aplicado em três classes de projetos:</strong></p>

* <p align="justify"><strong>Modo Orgânico:</strong> projetos simples, relativamente pequenos, com conjuntos de requisitos não tão rígidos, com equipes pequenas e experientes.</p>
* <p align="justify"><strong>Modo Semidestacado:</strong> projetos intermediários (em tamanho e complexidade), com alguns requisitos rígidos e outros não tão rígidos, com níveis mistos de experiência nas equipes.</p>
* <p align="justify"><strong>Modo Embutido:</strong> projetos com conjunto rígido de restrições operacionais, tanto de hardware, quanto de software.</p>

<p align="justify">&emsp;&emsp;Dado as características do software que será desenvolvido, sendo ele um aplicativo para facilitar o acompanhamento (por parte do médico) de grupos de paciente com doenças crônicas, o projeto se encaixa na classe de <strong>Semidestacado</strong>, pois ele exige certos requisitos rígidos, como confiabilidade na identificação dos dados corretos dos médicos e pacientes, garantia de que os pacientes estarão vinculados ao médico correto, entre outros requisitos que não são considerados triviais. Além disso, o projeto será desenvolvido por uma equipe composta de vários alunos que não fazem parte de uma equipe fixa e que possuem níveis mistos de experiência tanto nas questões tecnológicas quanto no entendimento dos processos de atendimento aos grupos citados.</p>

## COCOMO Intermediário

<p align="justify">&emsp;&emsp;De acordo com as caracteristicas do prjeto a ser densenvolvido, torna-se necessário o uso de uma implementação mais avançada que o <strong>COCOMO Básico</strong>, mas que também não tenha que lidar com variáveis muito complexas, como no <strong>COCOMO Detalhado</strong> que faz uso de multiplicadores sensiveis à fase do projeto ou hierarquia do produto(Nível de Módulo, Nível de Subsistema e Nível de Sistema). Assim sendo, a implementação intermediária, que considera atributos de esforços além de oferecer maior simplicidade quando comparada com o <strong>COCOMO Detalhado</strong>, foi considerada a melhor escolha.</p>

<p align="justify">&emsp;&emsp;Neste modelo, o <strong>COCOMO Básico</strong> é ampliado com a finalidade de levar em consideração um conjunto de atributos direcionadores do custo que são agrupados em quatro categorias:</p>

* **Atributos do produto:**
    * confiabilidade exigida do software;
    * tamanho do banco de dados;
    * complexidade do produto.
* **Atributos do hardware:**
    * restrições ao tempo de execução;
    * restrições de memória;
    * volatilidade do ambiente de máquina virtual;
    * tempo de *turnaround* (tempo para completar o ciclo) exigido.
* **Atributos de pessoal:**
    * capacidade do analista;
    * experiência em aplicações;
    * capacidade do programador;
    * experiência em máquina virtual;
    * experiência com a linguagem de programação.
* **Atributos de projeto:**
    * uso de práticas modernas de programação.
    * uso de ferramentas de software;
    * cronograma exigido de desenvolvimento.

<p align="justify">&emsp;&emsp;Cada um desses atributos deve ser classificado de acordo com uma escala que varia de “muito baixo” a “extremamente elevado” (em importância e valor). A partir desta classificação determina-se o Multiplicador de Esforço (considerando a Tabela publicada por Boehm (1981)). O produto de todos os resultados de Multiplicadores de Esforços é chamado de Fator de Ajustamento de Esforço.</p>

<table style="text-align:center">
    <thead>
        <tr bgcolor="black" style="color:white">
            <th style="text-align:center">Direcionadores de Custo</th>
            <th style="text-align:center">Muito Baixo</th>
            <th style="text-align:center">Baixo</th>
            <th style="text-align:center">Normal</th>
            <th style="text-align:center">Elevado</th>
            <th style="text-align:center">Muito Elevado</th>
            <th style="text-align:center">Extremamente Elevado</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td bgcolor="#9ea0a3" colspan="7" style="color:white">ATRIBUTOS DO PRODUTO</td>
        </tr>
        <tr>
            <td>Confiabilidade exigida do software</td>
            <td>0.75</td>
            <td>0.88</td>
            <td>1.00</td>
            <td>1.15</td>
            <td>1.40</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Tamanho do banco de dados</td>
            <td>-</td>
            <td>0.94</td>
            <td>1.00</td>
            <td>1.08</td>
            <td>1.16</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Complexidade do produto</td>
            <td>0.70</td>
            <td>0.85</td>
            <td>1.00</td>
            <td>1.15</td>
            <td>1.30</td>
            <td>1.65</td>
        </tr>
        <tr>
            <td bgcolor="#9ea0a3" colspan="7" style="color:white">ATRIBUTOS DO HARDWARE</td>
        </tr>
        <tr>
            <td>Restrições ao tempo de execução</td>
            <td>-</td>
            <td>-</td>
            <td>1.00</td>
            <td>1.11</td>
            <td>1.30</td>
            <td>1.66</td>
        </tr>
        <tr>
            <td>Restrições de memória</td>
            <td>-</td>
            <td>-</td>
            <td>1.00</td>
            <td>1.06</td>
            <td>1.21</td>
            <td>1.56</td>
        </tr>
        <tr>
            <td>Volatilidade do ambiente de máquina</td>
            <td>-</td>
            <td>0.87</td>
            <td>1.00</td>
            <td>1.15</td>
            <td>1.30</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Tempo de turnaround (tempo para completar o ciclo) exigido</td>
            <td>-</td>
            <td>0.87</td>
            <td>1.00</td>
            <td>1.07</td>
            <td>1.15</td>
            <td>-</td>
        </tr>
        <tr>
            <td bgcolor="#9ea0a3" colspan="7" style="color:white">ATRIBUTOS DE PESSOAL</td>
        </tr>
        <tr>
            <td>Capacidade do analista</td>
            <td>1.46</td>
            <td>1.19</td>
            <td>1.00</td>
            <td>0.86</td>
            <td>0.71</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Experiência em aplicações</td>
            <td>1.29</td>
            <td>1.13</td>
            <td>1.00</td>
            <td>0.91</td>
            <td>0.82</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Capacidade do programador</td>
            <td>1.42</td>
            <td>1.17</td>
            <td>1.00</td>
            <td>0.86</td>
            <td>0.70</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Experiência em Máquina Virtual</td>
            <td>1.21</td>
            <td>1.10</td>
            <td>1.00</td>
            <td>0.90</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Experiência com a linguagem de programação</td>
            <td>1.14</td>
            <td>1.07</td>
            <td>1.00</td>
            <td>0.95</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td bgcolor="#9ea0a3" colspan="7" style="color:white">ATRIBUTO DE PROJETO</td>
        </tr>
        <tr>
            <td>Uso de práticas modernas de programação</td>
            <td>1.24</td>
            <td>1.10</td>
            <td>1.00</td>
            <td>0.91</td>
            <td>0.82</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Uso de ferramentas de software</td>
            <td>1.24</td>
            <td>1.10</td>
            <td>1.00</td>
            <td>0.91</td>
            <td>0.83</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Cronograma exigido de desenvolvimento</td>
            <td>1.23</td>
            <td>1.08</td>
            <td>1.00</td>
            <td>1.04</td>
            <td>1.10</td>
            <td>-</td>
        </tr>
    </tbody>
</table>

### Cálculo da Estimativa do Esforço

<p align="justify">&emsp;&emsp;O resultado do esforço representa o valor de <strong>Pessoas/Mês</strong>. O modelo COCOMO Intermediário usa a seguinte equação para a estimativa do esforço:</p>

&emsp;&emsp;<code>E = a x S<sup>b</sup> x fae</code>

onde:

* **E:** é o esforço aplicado (em pessoas/mês).
* **S:** é o número (estimado) de linhas de código para o projeto (em milhares).
* **a:** é um coeficiente fornecido pela Tabela.
* **b:** é um expoente fornecido pela Tabela.
* **fae:** é o Fator de Ajustamento do Esforço (multiplicação de cada um dos Multiplicadores de Esforço fornecidos pela Tabela).

<p align="justify">&emsp;&emsp;Tabela para os valores dos coeficientes "a" e "b" de acordo com o tipo do projeto, a mesma tabela utilizada no COCOMO básico:</p>

<table style="text-align:center">
<thead>
<tr>
<th style="text-align:center">Projeto de Software</th>
<th style="text-align:center">a</th>
<th style="text-align:center">b</th>
<th style="text-align:center">c</th>
<th style="text-align:center">d</th>
</tr>
</thead>
<tbody>
<tr>
<td>Orgânico</td>
<td>2.40</td>
<td>1.05</td>
<td>2.50</td>
<td>0.38</td>
</tr>
<tr>
<td>Semidestacado</td>
<td>3.00</td>
<td>1.12</td>
<td>2.50</td>
<td>0.35</td>
</tr>
<tr>
<td>Embutido</td>
<td>3.60</td>
<td>1.20</td>
<td>2.50</td>
<td>0.32</td>
</tr>
</tbody>
</table>

<p align="justify">&emsp;&emsp;Como dito na introdução, nosso projeto é do tipo Semidestacado, portanto os valores serão <strong>a = 3.00</strong> e <strong>b = 1.12</strong>.</p>

### Cálculo da Estimativa do Tempo

<p align="justify">&emsp;&emsp;Representa a <strong>quantidade de meses prevista para a conclusão do projeto:</strong></p>

&emsp;&emsp;<code>T = c x E<sup>d</sup></code>

onde:

* **T:** é o tempo de desenvolvimento (em meses cronológicos).
* **E:** é o esforço aplicado (em pessoas/mês).
* **c:** é um coeficiente fornecido pela Tabela.
* **d:** é um expoente fornecido pela Tabela.

## Resultados

### Estimativa de Quantidade de Linhas de Código:

<p align="justify">&emsp;&emsp;O projeto não é trivial e, portanto, o número de linhas de código foi estipulado na casa dos milhares. Levando em consideração o uso de frameworks e padronização de código, a linguagem de programação que será utilizada no backend (JavaScript - Node) e o framework que será utilizado no frontend (React Native), o grupo fez uma estimativa inicial de que a aplicação deve alcançar pelo menos 2.500 linhas de código.</p>

<p align="justify">&emsp;&emsp;Os módulos necessários para o desenvolvimento da aplicação ainda serão estruturados através do levantamento de requisitos. Dessa forma, o grupo estipulou somente o número de linhas de código geral do projeto, como mencionado acima. Espera-se que conforme a estrutura do projeto torne-se mais clara, a estimativa seja refeita com mais precisão.</p>

### Estimativa de Esforço

&emsp;&emsp;Para 2,5 Kloc:

&emsp;&emsp;<code>E = a x S<sup>b</sup> x fae</code></br>
&emsp;&emsp;<code>E = 3,0 x 2,5<sup>1,12</sup> x 0,84</code></br>
&emsp;&emsp;<code>E = 7,03 pessoas/mês</code>

<p align="justify">&emsp;&emsp;Pesos atribuídos a cada atributo através de uma reunião em grupo para a convergência em cada esforço de cada atributo:</p>

<table style="text-align:center">
    <thead>
        <tr bgcolor="black" style="color:white">
            <th style="text-align:center">Direcionadores de Custo</th>
            <th style="text-align:center">Muito Baixo</th>
            <th style="text-align:center">Baixo</th>
            <th style="text-align:center">Normal</th>
            <th style="text-align:center">Elevado</th>
            <th style="text-align:center">Muito Elevado</th>
            <th style="text-align:center">Extremamente Elevado</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td bgcolor="#9ea0a3" colspan="7" style="color:white">ATRIBUTOS DO PRODUTO</td>
        </tr>
        <tr>
            <td>Confiabilidade exigida do software</td>
            <td>0.75</td>
            <td>0.88</td>
            <td bgcolor="#1980b0">1.00</td>
            <td>1.15</td>
            <td>1.40</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Tamanho do banco de dados</td>
            <td>-</td>
            <td bgcolor="#1980b0">0.94</td>
            <td>1.00</td>
            <td>1.08</td>
            <td>1.16</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Complexidade do produto</td>
            <td>0.70</td>
            <td bgcolor="#1980b0">0.85</td>
            <td>1.00</td>
            <td>1.15</td>
            <td>1.30</td>
            <td>1.65</td>
        </tr>
        <tr>
            <td bgcolor="#9ea0a3" colspan="7" style="color:white">ATRIBUTOS DO HARDWARE</td>
        </tr>
        <tr>
            <td>Restrições ao tempo de execução</td>
            <td>-</td>
            <td>-</td>
            <td bgcolor="#1980b0">1.00</td>
            <td>1.11</td>
            <td>1.30</td>
            <td>1.66</td>
        </tr>
        <tr>
            <td>Restrições de memória</td>
            <td>-</td>
            <td>-</td>
            <td bgcolor="#1980b0">1.00</td>
            <td>1.06</td>
            <td>1.21</td>
            <td>1.56</td>
        </tr>
        <tr>
            <td>Volatilidade do ambiente de máquina</td>
            <td>-</td>
            <td bgcolor="#1980b0">0.87</td>
            <td>1.00</td>
            <td>1.15</td>
            <td>1.30</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Tempo de turnaround (tempo para completar o ciclo) exigido</td>
            <td>-</td>
            <td>0.87</td>
            <td bgcolor="#1980b0">1.00</td>
            <td>1.07</td>
            <td>1.15</td>
            <td>-</td>
        </tr>
        <tr>
            <td bgcolor="#9ea0a3" colspan="7" style="color:white">ATRIBUTOS DE PESSOAL</td>
        </tr>
        <tr>
            <td>Capacidade do analista</td>
            <td>1.46</td>
            <td>1.19</td>
            <td bgcolor="#1980b0">1.00</td>
            <td>0.86</td>
            <td>0.71</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Experiência em aplicações</td>
            <td>1.29</td>
            <td>1.13</td>
            <td bgcolor="#1980b0">1.00</td>
            <td>0.91</td>
            <td>0.82</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Capacidade do programador</td>
            <td>1.42</td>
            <td>1.17</td>
            <td bgcolor="#1980b0">1.00</td>
            <td>0.86</td>
            <td>0.70</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Experiência em Máquina Virtual</td>
            <td>1.21</td>
            <td bgcolor="#1980b0">1.10</td>
            <td>1.00</td>
            <td>0.90</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Experiência com a linguagem de programação</td>
            <td>1.14</td>
            <td>1.07</td>
            <td bgcolor="#1980b0">1.00</td>
            <td>0.95</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td bgcolor="#9ea0a3" colspan="7" style="color:white">ATRIBUTO DE PROJETO</td>
        </tr>
        <tr>
            <td>Uso de práticas modernas de programação</td>
            <td>1.24</td>
            <td>1.10</td>
            <td bgcolor="#1980b0">1.00</td>
            <td>0.91</td>
            <td>0.82</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Uso de ferramentas de software</td>
            <td>1.24</td>
            <td>1.10</td>
            <td bgcolor="#1980b0">1.00</td>
            <td>0.91</td>
            <td>0.83</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Cronograma exigido de desenvolvimento</td>
            <td>1.23</td>
            <td>1.08</td>
            <td>1.00</td>
            <td>1.04</td>
            <td bgcolor="#1980b0">1.10</td>
            <td>-</td>
        </tr>
    </tbody>
</table>

### Estimativa de Tempo

Para 2,5 Kloc:

&emsp;&emsp;<code>T = c x E<sup>d</sup></code></br>
&emsp;&emsp;<code>T = 2,50 x 7,03<sup>0,35</sup></code></br>
&emsp;&emsp;<code>T = 4,95 meses</code>

## Referências

1. ^ Arquitetura e Desenho de Software 2019.2 - Grupo "A Monitoria", artefato - <a href="https://2019-2-arquitetura-desenho.github.io/wiki/dinamica_seminario_I/estimativas_de_custo/">Estimativas de Custo</a>;
2. Meller, Maristela Corrêa. **Modelos Para Estimar Custos De Software: Estudo Comparativo Com Softwares De Pequeno Porte.**     2002. Disponível em: <a href="https://repositorio.ufsc.br/xmlui/handle/123456789/82351">https://repositorio.ufsc.br/xmlui/handle/123456789/82351</a>;