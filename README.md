<p align="center">
 <img src = "https://github.com/CintiaMacchia/Projeto-Final_Reprograma/assets/89550095/1d59c65c-1931-49ee-af98-4221cd09e8e4" width="50%">
</p>


![womentech](https://github.com/CintiaMacchia/Projeto-Final_Reprograma/assets/89550095/7516d211-803b-4729-9332-02456e1e708e)

**Descrição do Projeto:**  Projeto final Imersão JavaScript – Reprograma.

### Equipe:
- [Verônica Paranhos](https://github.com/veronicaparanhos)
- [Cintia Macchia](https://github.com/CintiaMacchia)

### Problema

     Diante de desafios marcantes, a presença de lacunas de gênero e o impacto do etarismo feminino no setor tecnológico são questões cruciais a serem abordadas. No âmbito profissional, as mulheres com mais de 40 anos enfrentam dificuldades significativas, seja na recolocação no mercado de trabalho ou na realização de transições de carreira. Essa realidade ressalta a importância de iniciativas que não apenas abordem a desigualdade de gênero, mas também ofereçam soluções tangíveis para empoderar economicamente as mulheres nessa faixa etária. Ao enfrentar esses problemas de maneira integrada, é possível construir caminhos mais inclusivos e proporcionar oportunidades de desenvolvimento que catalisem o potencial profissional das mulheres, promovendo, assim, uma transformação positiva no panorama laboral.

### Objetivo Principal:
     O objetivo principal é estabelecer uma plataforma abrangente e eficaz para a formação e encaminhamento de mulheres com mais de 40 anos para o dinâmico mercado de tecnologia. Buscamos não apenas preencher a lacuna de gênero e combater o etarismo nesse setor, mas também promover a inclusão e empoderamento econômico dessas mulheres. A meta é oferecer programas educacionais personalizados que capacitam as participantes com habilidades técnicas relevantes, ao mesmo tempo em que abordam especificamente os desafios associados à recolocação profissional e à transição de carreira. . Ao finalizar o programa, nosso objetivo é não apenas equipar as participantes com as ferramentas necessárias para prosperar na indústria tecnológica, mas também orientá-las para oportunidades concretas de emprego, contribuindo assim para a construção de um ambiente mais diversificado e inclusivo no mercado de trabalho em tecnologia.

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
