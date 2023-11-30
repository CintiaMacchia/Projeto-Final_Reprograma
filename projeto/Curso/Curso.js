const Aluno = require("../Usuario/Aluno/Aluno.js");
const Empresa = require("../Usuario/Empresa/Empresa.js");
const Professor = require("../Usuario/Professor/Professor.js");

class Curso {
  nomeCurso;
  cargaHoraria;
  qtdVagasDisponiveis;

  cadastrarCurso(nomeCurso, cargaHoraria, qtdVagasDisponiveis) {
    this.nomeCurso = nomeCurso;
    this.cargaHoraria = cargaHoraria;
    this.qtdVagasDisponiveis = qtdVagasDisponiveis;
    this.professoresDoCurso = [];
    this.empresaPatrocinadora = [];
    this.qtdAlunos = 0;

    if (cargaHoraria <= 0) throw new Error("Valor inválido.");

    if (qtdVagasDisponiveis <= 0) throw new Error("Valor inválido.");

    return "Curso cadastrado com sucesso.";
  }

  matricularAluno(aluno, nomeCurso) {
    if (!(aluno instanceof Aluno)) throw new Error("Aluno inválido.");

    if (aluno.listaDeCursosMatriculados.includes(nomeCurso))
      throw new Error("Curso já cadastrado!");

    if (this.qtdVagasDisponiveis <= 0)
      throw new Error("Não há vagas disponíveis para este curso!");

    aluno.listaDeCursosMatriculados.push(nomeCurso);
    this.qtdVagasDisponiveis--;
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
    this.qtdVagasDisponiveis++;
    this.qtdAlunos--;
  }

  calcularFaltas(aluno, totalFaltas) {
    const limiteFaltas = this.cargaHoraria * 0.75;

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

  adicionarPatrocinador(empresa, nomeCurso) {
    if (!(empresa instanceof Empresa)) throw new Error("Empresa inválida.");

    if (empresa.listaCursoPatrocinado.includes(nomeCurso))
      throw new Error("Empresa já cadastrada!");

    empresa.listaCursoPatrocinado.push(nomeCurso);
    this.empresaPatrocinadora.push(empresa.nome);
  }
}

module.exports = Curso;
