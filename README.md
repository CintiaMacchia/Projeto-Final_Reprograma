<p align="center">
 <img src = "https://github.com/CintiaMacchia/Projeto-Final_Reprograma/assets/89550095/1d59c65c-1931-49ee-af98-4221cd09e8e4" width="50%">
</p>

<p align= "center" width="50%">
![womentech](https://github.com/CintiaMacchia/Projeto-Final_Reprograma/assets/89550095/7516d211-803b-4729-9332-02456e1e708e)
</p>

## Classes

### 1. Usuário

| Parâmetros | Tipo     | Descrição                        |
| :--------- | :------- | :------------------------------- |
| `nome`     | `string` | **Público**. Nome do usuário     |
| `telefone` | `string` | **Privado**. Telefone do usuário |
| `email`    | `string` | **Privado**. Email do usuário    |

### 2. Aluno herda Usuário

| Parâmetros                  | Tipo     | Descrição                                                  |
| :-------------------------- | :------- | :--------------------------------------------------------- |
| `cpf`                       | `string` | **Privado**. CPF do aluno                                  |
| `matricula`                 | `string` | **Público**. Matrícula do aluno                            |
| `listaDeCursosMatriculados` | `array`  | **Público**. Lista de cursos que o alunos está matriculado |

| Métodos            | Descrição                       |
| :----------------- | :------------------------------ |
| `get cpf()`        | Retorna o valor do CPF do aluno |
| `set cpf(novoCpf)` | Altera o valor do CPF do aluno  |

### 3. Professor herda Usuário

| Parâmetros                 | Tipo     | Descrição                                               |
| :------------------------- | :------- | :------------------------------------------------------ |
| `cpf`                      | `string` | **Privado**. CPF do professor                           |
| `matricula`                | `string` | **Público**. Matrícula do professor                     |
| `listaDeCursosMinistrados` | `array`  | **Público**. Lista de cursos ministrados pelo professor |

| Métodos            | Descrição                           |
| :----------------- | :---------------------------------- |
| `get cpf()`        | Retorna o valor do CPF do professor |
| `set cpf(novoCpf)` | Altera o valor do CPF do professor  |

### 4. Empresa herda Usuário

| Parâmetros                 | Tipo     | Descrição                                              |
| :------------------------- | :------- | :----------------------------------------------------- |
| `cnpj`                     | `string` | **Privado**. CNPJ da empresa                           |
| `listaDeCursosPatrocinado` | `array`  | **Público**. Lista de cursos patrocinados pela empresa |

| Métodos              | Descrição                            |
| :------------------- | :----------------------------------- |
| `get cnpj()`         | Retorna o valor do CNPJ do professor |
| `set cnpj(novoCnpj)` | Altera o valor do CNPJ do professor  |

### 5. Curso

| Parâmetros                 | Tipo     | Descrição                                              |
| :------------------------- | :------- | :----------------------------------------------------- |
| `nomeCurso`                | `string` | **Público**. Nome do curso                             |
| `qtdVagasDisponiveis`      | `number` | **Público**. Quantidade de vagas disponíveis           |
| `cargaHoraria`             | `number` | **Público**. Carga horária do curso                    |
| `qtdAlunos`                | `number` | **Público**. Quatidade de alunos matriculados no curso |
| `status`                   | `string` | **Público**. Status do curso                           |
| `professoresDoCurso`       | `array`  | **Público**. Lista de professores do curso             |
| `listaDeCursosPatrocinado` | `array`  | **Público**. Lista de patrocinadores do curso          |
| `listaCursosCadastrados`   | `array`  | **Estático**. Lista total de curso criados             |

| Métodos                                     | Descrição                                                                      |
| :------------------------------------------ | :----------------------------------------------------------------------------- |
| `matricularAluno(aluno, nomeCurso)`         | Adiciona o aluno ao curso                                                      |
| `removerAluno(aluno, nomeCurso)`            | Remove aluno do curso                                                          |
| `calcularFaltas(aluno, totalFaltas)`        | Calcula a quantidade de faltas do aluno de acordo com a carga horária do curso |
| `adicionarProfessor(professor, nomeCurso)`  | Adiciona professor ao curso                                                    |
| `removerProfessor(professor, nomeCurso)`    | Remove o professor do curso                                                    |
| `adicionarPatrocinador(empresa, nomeCurso)` | Adiciona a empresa patrocinadora ao curso                                      |
| `apagarCurso()`                             | Apaga o curso da lista de cursos cadastrados                                   |
| `mudarStatus()`                             | Altera o status do curso                                                       |
