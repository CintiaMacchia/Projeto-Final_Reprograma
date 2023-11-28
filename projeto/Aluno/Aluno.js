const Curso = require("../Curso/Curso.js");
const Usuario = require("../Usuario/Usuario.js");

class Aluno extends Usuario {
  #cpf;
  matricula;

  registrarUsuario(nome, telefone, email, cpf, matricula) {
    super.registrarUsuario(nome, telefone, email, cpf, matricula);
    this.#cpf = cpf;
    this.matricula = matricula;
    this.listaDeCursos = [];
  }

  get cpf() {
    return this.#cpf;
  }

  addCurso(curso) {
    if (!(curso instanceof Curso)) throw new Error("Curso inválido.");

    if (this.listaDeCursos.includes(curso))
      throw new Error("Curso já cadastrado!");

    if (curso.qtdVagas <= 0)
      throw new Error("Não há vagas disponíveis para este curso!");

    this.listaDeCursos.push(curso);
    curso.qtdVagas--;

    Aluno.somarAlunosPorCurso(curso);

    return this.listaDeCursos;
  }

  removeCurso(curso) {
    if (!(curso instanceof Curso)) throw new Error("Curso inválido.");

    const cursoIndex = this.listaDeCursos.indexOf(curso);
    if (cursoIndex === -1)
      throw new Error("O aluno não está matriculado neste curso!");

    this.listaDeCursos = this.listaDeCursos.filter(
      (cursoInfo) => cursoInfo !== curso
    );
    curso.qtdVagas++;

    Aluno.diminuirAlunosPorCurso(curso);
    return this.listaDeCursos;
  }

  calcularFaltas(totalHorasCurso, totalFaltas) {
    const limiteFaltas = totalHorasCurso * 0.75;

    if (totalFaltas > limiteFaltas)
      throw new Error(
        "Aluno reprovado por quantidade de faltas superior a 75% da carga horário do curso."
      );

    return "Aluno aprovado.";
  }

  static somarAlunosPorCurso(curso) {
    const cursoEncontrado = curso.qtdAlunosPorCurso.find(
      (cursoInfo) => cursoInfo.nome === curso.nome
    );

    if (cursoEncontrado) cursoEncontrado.qtdAlunos++;
  }

  static diminuirAlunosPorCurso(curso) {
    const cursoEncontrado = curso.qtdAlunosPorCurso.find(
      (cursoInfo) => cursoInfo.nome === curso.nome
    );

    if (cursoEncontrado) cursoEncontrado.qtdAlunos--;
  }
}

module.exports = Aluno;
