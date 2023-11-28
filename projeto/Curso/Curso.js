class Curso {
  nome;
  cargaHoraria; //passar para privado
  qtdVagas; //passar para privado

  qtdAlunosPorCurso = [];

  cadastrarCurso(nome, cargaHoraria, qtdVagas) {
    this.nome = nome;
    this.cargaHoraria = cargaHoraria;
    this.qtdVagas = qtdVagas;
    this.listaProfessores = [];
    this.qtdAlunosPorCurso.push({
      nome: this.nome,
      qtdAlunos: 0,
    });
  }
}

module.exports = Curso;
