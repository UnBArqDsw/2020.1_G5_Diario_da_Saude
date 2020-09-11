# Brainstorm
## Versionamento
| Data | Versão | Descrição | Autores |
| :---: | :---: | :---: | :---: |
| 04/09/2020 | 0.1 | Criação do documento | [André Goretti](https://github.com/AGoretti), [Gabriel Tiveron](https://github.com/GabrielTiveron), [Gustavo Carvalho](https://github.com/gustavocarvalho1002), [Ian Rocha](https://github.com/IanPSRocha), [Murilo Loiola](https://github.com/murilo-dan), [Rodrigo Dadamos](https://github.com/Rdadamos) |
| 06/09/2020 | 0.2 | Formatação e algumas correções ortográficas | [Murilo Loiola](https://github.com/murilo-dan) |
| 06/09/2020 | 1.0 | Levantando Requisitos do Brainstorm | [Ian Rocha](https://github.com/IanPSRocha), [André Goretti](https://github.com/AGoretti), [Gustavo Carvalho](https://github.com/gustavocarvalho1002)|

Observação: este artefato foi elaborado durante a realização do <a href="https://unbarqdsw.github.io/2020.1_G5_Diario_da_Saude/design_sprint/">Design Sprint</a>.

## Introdução
<p align="justify">&emsp;&emsp;O brainstorming ou tempestade de ideias, mais que uma técnica de dinâmica de grupo, é uma atividade desenvolvida para explorar a potencialidade criativa de um indivíduo ou de um grupo colocando-a a serviço de objetivos pré-determinados.</p><p align="justify">&emsp;&emsp;A técnica propõe que o grupo se reúna e utilize a diversidade de pensamentos e experiências para gerar soluções inovadoras, sugerindo qualquer pensamento ou ideia que vier à mente a respeito do tema tratado. Com isso, espera-se reunir o maior número possível de ideias, visões, propostas e possibilidades que levem a um denominador comum e eficaz para solucionar problemas e entraves que impedem um projeto de seguir adiante.</p>

| BRAINSTORM | |
| --- | --- |
| Data | 10/09/2020 |
| Local | Remoto - MS Teams |
| Objetivo | Armazenar o máximo de ideias chaves para o levantamento de requisitos da aplicação |
| Descrição | Todos os membro do grupo se reuniram e discutiram ideias sobre o tema. O tempo estipulado para a duração do brainstorm foi de 30 minutos inicialmente, respeitando o [Design Sprint](https://unbarqdsw.github.io/2020.1_G5_Diario_da_Saude/#design_sprint/). No entanto, logo percebeu-se que esse tempo não seria suficiente e o grupo decidiu por não limitar a duração. |

## Participantes</h3>
<ul>
  <li>André Goretti (AG);</li>
  <li>Gabriel Tiveron (GT);</li>
  <li>Gustavo Carvalho (GC);</li>
  <li>Ian Rocha (IR);</li>
  <li>Murilo Loiola (ML);</li>
  <li>Rodrigo Dadamos (RD);</li>
</ul>
Abaixo segue uma transcrição das principais ideias levantadas por cada integrante durante a reunião.</br></br>
<ul>
    <li><p align="justify"><strong>AG</strong>: O médico pode gerar um relatório do grupo para saber a condição geral dos pacientes. 
    Seria interessante ter um lista de prioridades levando em considereção os aspectos dos pacientes. 
    O aplicativo poderia ter uma aba de FAQ (Perguntas/Dúvidas Frequentes).
    Poderíamos fazer tanto um app quanto um aplicativo web.</p></li> 
    <li><p align="justify"><strong>GT</strong>: O questionário deve ser padrão, levando em consideração a condição enfrentada pelo grupo. 
    Um grupo pode ter vários administradores, para facilitar o gerenciamento do mesmo.
    Para o crud do profissional: nome, cargo, CPF, UBS que ele trabalha, foto(opcional).
    </p></li> 
    <li><p align="justify"><strong>GC</strong>: Nosso meio de indentificar todos, incluindo os profissionais, pode ser  o CPF. 
    Um paciente pode participar de vários grupos e um grupo pode ter mais de um profissional como administrador ou responsável. 
    O responsável ao criar o grupo deve definir o padrão de questionario para aquele grupo.</p></li> 
    <li><p align="justify"><strong>IR</strong>: O aplicativo tem que salvar as informações do paciente. O sistema deve ter níveis de login para separar as funcionalidades para cada usuário. Paciente deve receber uma notificação de lembrete para responder o questionário.</p></li> 
    <li><p align="justify"><strong>ML</strong>:
    Profissional da UBS que controla a entrada e saída de um membro no grupo.
    Deve ser possível gerar relatorio individual de cada paciente a partir dos dados coletados.
    O paciente só vai poder responder a um questionário por dia para cada grupo em que estiver.</p></li> 
    <li><p align="justify"><strong>RD</strong>: Devemos manter só as informações necessárias do paciente, sem guardar informações sensíveis como endereço. Acho que só CPF, nome, nascimento, sexo e foto(opcional, assim como o profissional).</p></li> 
</ul>

## Requisitos Elicitados
### Requisitos Funcionais
| Código | Descrição | Prioridade |
| -- | -- | -- |
| RF01 | Tanto profissional quanto médico podem criar conta de usuário | Must |
| RF02 | Usuário pode atualizar seus dados | Should |
| RF03 | Usuário deve logar utilizando CPF e senha | Must |
| RF04 | Profissionais da saúde podem criar grupos | Must |
| RF05 | Profissional da saúde pode adicionar pacientes ao grupo pelo CPF | Must |
| RF06 | Profissional da saúde pode adicionar outro profissional como administrador do grupo | Should |
| RF07 | Profissional da saúde pode remover pacientes do grupo | Must |
| RF08 | Profissional da saúde pode visualizar os pacientes do grupo | Must |
| RF09 | Aplicativo deve fornecer um questionário específico para cada quadro clínico | Must |
| RF10 | Profissional da saúde tem que associar um questionário ao grupo | Must |
| RF11 | O médico pode visualizar um relátorio do grupo | Must |
| RF12 | O médico pode visualizar um relátorio específico do paciente | Must |
| RF13 | Aplicativo deve fornecer uma lista de pacientes prioritários por grupo de acordo com seus quadros clínicos | Must |
| RF14 | Aplicativo deve armazenar as credenciais do paciente para não precisar repetir o login | Could |
| RF15 | Aplicativo deve enviar notificações para os pacientes responderem o questionário| Should |
| RF16 | Paciente não pode responder o mesmo questionário mais de uma vez no dia| Must |


### Requisitos Não Funcionais
| Código | Descrição | Prioridade |
| -- | -- | -- |
| RNF01 | Ter uma aba de FAQ (Dúvidas Frequentes) | Could |
| RNF02 | Ter uma versão WEB | Would |
| RNF03 | O aplicativo pode armazenar uma foto por perfil de usuário | Could |