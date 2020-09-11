# Backlog do Produto

## Versionamento
| Data | Versão | Descrição | Autor |
| ----- | -------| -----------| -----|
| 10/09/2020 | 0.1 | Criação do Backlog do Produto | [Ian Rocha](https://github.com/IanPSRocha) |
| 11/09/2020 | 0.2 | Formatação da Planilha | [Ian Rocha](https://github.com/IanPSRocha) |
| 11/09/2020 | 0.3 | Adicionando Critérios de Aceitação e Rastreabilidade por US  | [Ian Rocha](https://github.com/IanPSRocha) |

## Introdução
<p align="justify">&emsp;&emsp;Em termos gerais, o Product Backlog é uma listagem de todos os afazeres pendentes no projeto. Ele substitui o modelo tradicional de especificação de artefatos. Cada elemento da listagem é elicitado por meio de interação da equipe de desenvolvimento com o cliente, podendo ser apenas um representante, o que torna os elementos levantados muito arbitrários; ou podendo ser uma equipe representante do cliente, representando as diversas áreas que utilizarão o produto.

## Backlog

[![backlog](./img/backlog.png)](./img/backlog.png)

### EP01: Cadastro
#### US01: Fazer cadastro à plataforma
##### Origem: [Brainstorm](./brainstorm.md)
Eu, como um usuário, desejo fazer cadastro à plataforma para que eu consiga utilizar o serviço
##### Critérios de Aceitação:
- Deve apresentar o botão de cadastro na Landing
- Deve diferenciar o cadastro de profissional da saúde e do paciente
- Deve possuir os seguintes campos para o paciente:
    - Nome
    - Senha
    - CPF
    - Data de Nascimento
    - Sexo
- Deve possuir os seguintes campos para o profissional da saúde:
    - Nome
    - Senha
    - CPF
    - Cargo
    - UBS
- Deve armazenar os dados no banco de dados

### EP02: Login
#### US02: Fazer login na plataforma
##### Origem: [Brainstorm](./brainstorm.md)
Eu, como um usuário, desejo fazer login à plataforma para que eu consiga utilizar o serviço
##### Critérios de Aceitação:
- Deve apresentar o botão de login na Landing
- Deve apresentar os seguintes campos para o usuário logar:
    - CPF
    - Senha
- Deve fazer a verificação dos dados com o banco de dados
- Apresentar mensagem de erro caso os dados não estejam corretos
- Efetuar o login caso tudo esteja correto

#### US03: Armazenar as credenciais
##### Origem: [Brainstorm](./brainstorm.md)
Eu, como um usuário, desejo ter minhas credenciais armazenads para que eu consiga efetuar o login automaticamente nas próximas vezes
##### Critérios de Aceitação:
- Armazenar as credenciais em Cache no celular do usuário

### EP03: Perfil de Usuário
#### US04: Armazenar foto de perfil
##### Origem: [Brainstorm](./brainstorm.md)
Eu, como um usuário, desejo ter minha foto de perfil armazenada para que eu consiga reconher e ser reconhecido mais facilmente dentro da aplicação
##### Critérios de Aceitação:
- Possuir um Campo extra no cadastro e edição de perfil somente para foto
- Receber fotos exclusivamente da galeria do celular do usuário
- Armazenar a foto no banco de dados

#### US05: Atualizar dados
##### Origem: [Brainstorm](./brainstorm.md)
Eu, como um usuário, desejo atualizar meus dados para que eu consiga sempre manter meu perfil atualizado
##### Critérios de Aceitação:
- Botão para editar o perfil quando o usuário estiver logado
- Atualizar os dados no banco de dados

#### US06: Excluir meu Perfil
##### Origem: [Introspecção](./introspeccao.md)
Eu como um usuário, desejo remover meu perfil para que eu consiga retirar meus dados da aplicação
##### Critérios de Aceitação:
- Botão para usuário remover conta na página de perfil
- Botão de confirmação para remover a conta
- Retirar os dados do usuário do banco de dados

### EP04: Grupo
#### US06: Criar grupo
##### Origem: [Brainstorm](./brainstorm.md)
Eu, como um profissional da saúde, desejo criar grupos para que eu consiga gerenciar meus pacientes
##### Critérios de Aceitação:
- Botão para criar grupos na Home do profissional da saúde
- Deve possuir os seguintes campos:
    - Nome do Grupo
    - UBS
- Associar o grupo à algum quadro clínico
- Armazenar as informações do grupo no banco de dados

#### US07: Adicionar pacientes ao grupo
##### Origem: [Brainstorm](./brainstorm.md)
Eu, como profissional da saúde, desejo adicionar pacientes ao grupo para que eu consiga gerenciar meus pacientes
##### Critérios de Aceitação:
- Botão de adicionar pacientes na página do grupo
- Adicionar pelo CPF do paciente
- Adicionar o grupo na Home do paciente

#### US08: Adicionar outro profissional da saúde ao grupo
##### Origem: [Brainstorm](./brainstorm.md)
Eu, como profissional da saúde, desejo adicionar outros profissionais da saúde ao grupo para que eu consiga distribuir os cuidados e responsabilidades
##### Critérios de Aceitação:
- Botão para adicionar outros profissionais ao grupo
- Adicionar pelo CPF do profissional
- Adicionar o grupo na Home do outro profissional

#### US09: Remover pacientes do grupo
##### Origem: [Brainstorm](./brainstorm.md)
Eu, como profissional da saúde, desejo remover pacientes do grupo para que eu consiga manter somente os pacientes necessários
##### Critérios de Aceitação:
- Botão para remover o paciente do grupo
- Botão para confirmar a remoção
- Remover o grupo na Home do paciente
- Remover a relação do paciente com o grupo no banco de dados

#### US10: Visualizar pacientes do grupo
##### Origem: [Brainstorm](./brainstorm.md)
Eu, como profissional da saúde, desejo visualizar quais são os pacientes participantes do grupo para que eu consiga ter facilidade em gerenciar meus pacientes
##### Critérios de Aceitação:
- Lista de pacientes na página do grupo
- Mostrar nome de cada paciente

#### US11: Realizar uma chamada de pacientes
##### Origem: [Questionário](./questionario.md)
Eu, como profissional da saúde, desejo realizar uma chamada de pacientes por grupo para que eu consiga controlar a participação dos pacientes nos encontros presenciais
##### Critérios de Aceitação:
- Botão para começar a chamada
- Botão para marcar se a presença está confirmada ou não
- Armazenar informações da chamada no banco de dados

### EP05: Questionário
#### US12: Questionário específico para cada quadro clínico
##### Origem: [Brainstorm](./brainstorm.md)
Eu, como profissional da saúde, desejo fornecer um questionário que seja coerente com cada quadro clínico/grupo para que consiga manter o controle da saúde dos meus pacientes
##### Critérios de Aceitação:
- Lista de questionários específicos
- Validação de cada questionário por um profissional da saúde

#### US13: Associar um questionário ao grupo
##### Origem: [Brainstorm](./brainstorm.md)
Eu, como profissional da saúde, desejo associar um questionário ao grupo para que eu consiga ver como anda a saúde dos meus pacientes
##### Critérios de Aceitação:
- Botão para associar um questionário ao grupo
- Listar todos os questionários disponíveis
- Impedir a adição de pacientes ao grupo caso não exista questionário associado

#### US14: Não responder ao mesmo questionário mais de 1 vez por dia
##### Origem: [Brainstorm](./brainstorm.md)
Eu, como paciente, desejo não responder ao questionário correspondente do grupo mais de uma vez por dia, para que eu consiga não poluir os dados
##### Critérios de Aceitação:
- Bloquear o botão de responder o questionário caso ele ja tenha sido respondido
- Adicionar timer no botão para que ele reinicie e aceite novas respostas após 00h

#### US15: Aba de atividade física no questionário
##### Origem: [Questionário](./questionario.md)
Eu, como profissional da saúde, desejo visualizar uma aba de atividade física por questionário para que eu consiga saber se meus pacientes estão sedentários ou não
##### Critérios de Aceitação:
- Perguntar ao paciente:
    - Quantas vezes por semana ele pratica exercício físico
    - Quais exercícios ele faz
    - Duração de cada exercício por dia

### EP06: Relatório
#### US16: Relatório geral por grupo
##### Origem: [Brainstorm](./brainstorm.md)
Eu, como profissional da saúde, desejo visualizar os dados dos pacientes de maneira geral por forma de um relatório para que eu consiga entender como anda a saúde do grupo todo
##### Critérios de Aceitação:
- Gerar relatório geral do grupo com base nas respostas de cada questionário
- Botão para visualizar relatório
- Armazenar um relatório geral por grupo no banco de dados

#### US17: Relatório específico do paciente
##### Origem: [Brainstorm](./brainstorm.md)
Eu, como profissional da saúde, desejo visualizar os dados de um único paciente da minha escolha para que eu consiga saber de maneira mais específica como anda a saúde dele
##### Critérios de Aceitação:
- Gerar relatório de cada paciente com base nas respectivas respostas ao questionário
- Botão para visualizar relatório específico do paciente
- Armazenar um relatório por grupo para cada paciente no banco de dados

#### US18: Exportar dados dos Relatórios
##### Origem: [Questionário](./questionario.md)
Eu, como profissional da saúde, desejo exportar os dados obtidos dos relatórios para que eu consiga salvar em outro lugar de minha preferência
##### Critérios de Aceitação:
- Botão para exportar relatório geral do grupo
- Botão para exportar relatório específico de cada paciente
- Disponibilizar exportação no formato PDF

#### US19: Relatórios personalizados criados após processo de Machine Learning
##### Origem: [Questionário](./questionario.md)
Eu, como profissional da saúde, desejo visualizar relatórios que foram criados após Machine Learning para que eu consiga ver informações mais precisas sobre a saúde dos meus pacientes
##### Critérios de Aceitação:
- Machine Learning capaz de:
    - Aprender com base nos relatórios ja respondidos
    - Entender padrões de respostas
    - Fornecer relatórios mais precisos

### EP07: Notificação
#### US20: Notificação sobre consultas, remédios e orientações
##### Origem: [Questionário](./questionario.md)
Eu, como paciente, desejo receber notificações sobre minhas consultas, remédios a serem tomados e orientações médicos para que eu consiga seguir de maneira correta a instrução do profissional da saúde
##### Critérios de Aceitação:
- Permitir que o profissional da saúde personalize uma ou mais notificação de acordo com cada paciente
- Botão para o profissional criar/personalizar uma notificação
- Botão para o profissional excluir uma notificação
- Botão para o paciente ativar/desativar uma notificação

#### US21: Notificações personalizadas
##### Origem: [Questionário](./questionario.md)
Eu, como profissional da saúde, desejo enviar notificações com base nas respostas dos meus pacientes em seus questionários para que eu consiga automatizar certas mensagens de alerta
##### Critérios de Aceitação:
- Botão para o profissional ativar notificações para cada resposta
- Fornecer uma lista de respostas que podem ativar a notificação

#### US22: Notificação por Questionário
##### Origem: [Brainstorm](./brainstorm.md)
Eu, como paciente, desejo receber uma notificação cada vez que for necessário que eu responda meu questionário para que eu consiga me lembrar de respondê-lo frequentemente
##### Critérios de Aceitação:
- Botão para o paciente ativar/desativar notificações de questionário
- Enviar notificação no horário escolhido pelo paciente
- Permitir personalização do horário da notificação pelo usuário

### EP08: Controle de pacientes
#### US23: Lista de pacientes prioritários
##### Origem: [Brainstorm](./brainstorm.md)
Eu, como profissional da saúde, desejo visualizar uma lista de pacientes prioritários por grupo para que eu consiga dar atenção primeiro a quem mais precisa
##### Critérios de Aceitação:
- Gerar uma lista de pacientes com base nas respostas de cada questionário
- Botão para visualizar a lista na página do grupo
- Atualizar a lista sempre que receber uma nova resposta de questionário

#### US24: Exames dos pacientes
##### Origem: [Questionário](./questionario.md)
Eu, como profissional da saúde, desejo ter controle sobre os exames e seus resultados dos meus pacientes para que eu consiga dar uma atendimento melhor e mais específico.
##### Critérios de Aceitação:
- Botão para adicionar exames a serem feitos na página de detalhes de cada paciente
- Botão para visualizar resultados de exames já feitos na página de detalhes de cada paciente

#### US25: Buscar pacientes que se ausentarem
##### Origem: [Questionário](./questionario.md)
Eu, como profissional da saúde, desejo poder buscar por grupo os pacientes que se ausentarem nas reuniões presenciais ou não responderam seus questionários recentemente para que eu consiga entrar em contato com eles
##### Critérios de Aceitação:
- Botão para informar pacientes que não responderam o questionário recentemente na página do grupo
- Botão para visualizar a chamada realizada no encontro presencial
- Resgatar a chamada no banco de dados
- Marcar pacientes que não estiveram na chamada

#### US26: Medicações a serem tomadas diariamente
##### Origem: [Questionário](./questionario.md)
Eu, como paciente, desejo poder visualizar quais foram os medicamentos prescritos pelo profissional da saúde para que eu consiga lembrar sempre que eu precisar
##### Critérios de Aceitação:
- Botão para o profissional da saúde adicionar os medicamentos prescritos
- Armazenar os medicamentos no banco de dados
- Botão para o paciente visualizar os medicamentos

#### US27: Aplicação WEB
##### Origem: [Brainstorm](./brainstorm.md)
Eu, como profissional da saúde, desejo ter acesso a todos os dados por meio da WEB, para que eu consiga vê-los de maneira maior e mais clara.
##### Critérios de Aceitação:
- Versão web tem que ser responsiva
- Permitir acesso somente aos profissionais da saúde
- Ter todas as funcionalidades já listadas para os profissionais

### EP09: FAQ
#### US28: Local para dúvidas e sugestões
##### Origem: [Questionário](./questionario.md)
Eu, como paciente, desejo ter uma página na qual eu possa poder anotar minhas dúvidas e sugestões para que eu consiga esclarecer algum assunto que não tinha ficado claro
##### Critérios de Aceitação:
- Botão na SideBar para acessar a página
- Campo para paciente escolher entre dúvida ou sugestão
- Campo para paciente falar qual é sua dúvida/sugestão
- Enviar dúvida/sugestão para os profissionais na UBS

#### US29: Aba de dúvidas frequentes
##### Origem: [Brainstorm](./brainstorm.md)
Eu, como paciente, desejo visualizar uma página com as dúvidas mais frequentes de outros pacientes para que eu consiga ver se minha própria dúvida ja foi respondida
##### Critérios de Aceitação:
- Botão na SideBar para acessar a página
- Página contendo as dúvidas mais frequentes e suas respostas
- Validação de um profissional para cada resposta

### EP10: Usabilidde
