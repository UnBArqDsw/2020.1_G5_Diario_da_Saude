<p align="center">
    <img src="docs/img/logo.png" alt="Logo">
</p>

# Diário da Saúde

**Número do Grupo**: 05<br>
**Código da Disciplina**: FGA0208-T01<br>

## Alunos
|Matrícula | Aluno |
| -- | -- |
| 16/0112028  |  André Goretti |
| 17/0103471  | Gabriel Marques Tiveron |
| 16/0007780  | Gustavo Barbosa Carvalho |
| 16/0124778 | Ian Pereira de Sousa Rocha |
| 17/0163571 | Murilo Loiola Dantas |
| 15/0064535 | Rodrigo Dadamos Lopes da Silva |

## Sobre
O **Diário da Saúde** é uma aplicação que busca auxiliar Unidades Básicas de Saúde (UBS) que possuam grupos de risco (diabéticos, hipertensos, etc). A aplicação permite que os profissionais da unidade possam acompanhar a condição do paciente à distância, através de medições realizadas de casa pelo próprio paciente.

## Screenshots

Segue abaixo 4 exemplos de telas da aplicação desenvolvida.

### Tela inicial
![tela_inicial](docs/img/tela_inicial.jpg)

### Tela de cadastro
![tela_lista_de_grupos](docs/img/tela_de_cadastro.jpg)

### Tela de listagem dos grupos
![tela_de_cadastro](docs/img/tela_lista_de_grupos.jpg)

### Tela do questinário de pressão arterial
![tela_pergunta_sobre_pressao](docs/img/tela_pergunta_sobre_pressao.jpg)


## Instalação
**Linguagens**: JavaScript, TypeScript<br>
**Tecnologias**: NODE.js, React Native, Docker<br>
Com o Docker e o docker-compose instalados, execute os comandos:

```bash
./setenv.sh
docker-compose up --build
```

## Uso
No desenvolvimento, para executar a aplicação front, instale e abra o aplicativo Expo e aponte a câmera para o QR Code que apareceu no terminal.
Acesse o Mongo-Express em http://localhost:8081

## Vídeo

[![Vídeo de apresentação](https://img.youtube.com/vi/Y92U26Ayby4/0.jpg)](https://www.youtube.com/watch?v=Y92U26Ayby4)
