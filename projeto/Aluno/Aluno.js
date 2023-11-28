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

  matricularAluno(curso) {
    if (!(curso instanceof Curso)) throw new Error("Curso inválido.");

    if (this.listaDeCursos.includes(curso))
      throw new Error("Curso já cadastrado!");

    if (curso.qtdVagas <= 0)
      throw new Error("Não há vagas disponíveis para este curso!");

    this.listaDeCursos.push(curso);
    curso.qtdVagas--;

    Aluno.incrementarAlunoPorCurso(curso);

    return this.listaDeCursos;
  }

  removerAluno(curso) {
    if (!(curso instanceof Curso)) throw new Error("Curso inválido.");

    const cursoIndex = this.listaDeCursos.indexOf(curso);
    if (cursoIndex === -1)
      throw new Error("O aluno não está matriculado neste curso!");

    this.listaDeCursos = this.listaDeCursos.filter(
      (cursoInfo) => cursoInfo !== curso
    );
    curso.qtdVagas++;

    Aluno.decrementarAlunoPorCurso(curso);
    return this.listaDeCursos;
  }

  calcularFaltas(totalHorasCurso, totalFaltas) {
    const limiteFaltas = totalHorasCurso * 0.75;

    const totalFaltasDoAluno =
      totalFaltas > limiteFaltas
        ? "O total de faltas do aluno excede 75% do total de horas do curso)."
        : "O total de faltas do aluno não excede 75% do total de horas do curso).";

    return totalFaltasDoAluno;
  }

  static incrementarAlunoPorCurso(curso) {
    const cursoEncontrado = curso.qtdAlunosPorCurso.find(
      (cursoInfo) => cursoInfo.nome === curso.nome
    );

    if (cursoEncontrado) cursoEncontrado.qtdAlunos++;
  }

  static decrementarAlunoPorCurso(curso) {
    const cursoEncontrado = curso.qtdAlunosPorCurso.find(
      (cursoInfo) => cursoInfo.nome === curso.nome
    );

    if (cursoEncontrado) cursoEncontrado.qtdAlunos--;
  }
}

module.exports = Aluno;
