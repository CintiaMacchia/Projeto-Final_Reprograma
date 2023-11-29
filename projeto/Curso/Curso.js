const Aluno = require("../Usuario/Aluno/Aluno.js");
const Professor = require("../Usuario/Professor/Professor.js");

class Curso {
  nomeCurso;
  cargaHoraria;
  qtdVagas;

  cadastrarCurso(nomeCurso, cargaHoraria, qtdVagas) {
    this.nomeCurso = nomeCurso;
    this.cargaHoraria = cargaHoraria;
    this.qtdVagas = qtdVagas;
    this.professoresDoCurso = [];
    this.empresaPatrocinadora = [];
    this.qtdAlunos = 0;
  }

  matricularAluno(aluno, nomeCurso) {
    if (!(aluno instanceof Aluno)) throw new Error("Aluno inválido.");

    if (aluno.listaDeCursosMatriculados.includes(nomeCurso))
      throw new Error("Curso já cadastrado!");

    if (this.qtdVagas <= 0)
      throw new Error("Não há vagas disponíveis para este curso!");

    aluno.listaDeCursosMatriculados.push(nomeCurso);
    this.qtdVagas--;
    this.qtdAlunos++;
  }

  removerAluno(aluno, nomeCurso) {
    if (!(aluno instanceof Aluno)) throw new Error("Aluno inválido.");

    const cursoIndex = aluno.listaDeCursosMatriculados.indexOf(nomeCurso);
    if (cursoIndex === -1)
      throw new Error("O aluno não está matriculado neste curso!");

    aluno.listaDeCursosMatriculados = aluno.listaDeCursosMatriculados.filter(
      (cursoInfo) => cursoInfo !== nomeCurso
    );
    this.qtdVagas++;
    this.qtdAlunos--;
  }

  calcularFaltas(aluno, totalHorasCurso, totalFaltas) {
    const limiteFaltas = totalHorasCurso * 0.75;

    const totalFaltasDoAluno =
      totalFaltas > limiteFaltas
        ? `O total de faltas do(a) ${aluno.nome} excede 75% do total de horas do curso).`
        : `O total de faltas do(a) ${aluno.nome} não excede 75% do total de horas do curso).`;

    return totalFaltasDoAluno;
  }

  adicionarProfessor(professor, nomeCurso) {
    if (!(professor instanceof Professor))
      throw new Error("Professor inválido.");

    if (professor.listaDeCursosMinistrados.includes(nomeCurso))
      throw new Error("Curso já cadastrado!");

    professor.listaDeCursosMinistrados.push(nomeCurso);
    this.professoresDoCurso.push(professor.nome);
  }

  removerProfessor(professor, nomeCurso) {
    if (!(professor instanceof Professor))
      throw new Error("Professor inválido.");

    professor.listaDeCursosMinistrados =
      professor.listaDeCursosMinistrados.filter(
        (cursoInfo) => cursoInfo !== nomeCurso
      );

    this.professoresDoCurso = this.professoresDoCurso.filter(
      (profInfo) => profInfo !== professor.nome
    );
  }
}

module.exports = Curso;
