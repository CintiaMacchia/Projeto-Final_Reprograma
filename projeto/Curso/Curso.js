class Curso {
    nomeCurso;
    cargaHoraria; //passar para privado
    qtdVagasDisponiveis; //passar para privado
  
    qtdAlunosPorCurso = [];
  
    cadastrarCurso(nomeCurso, cargaHoraria, qtdVagasDisponiveis) {
      this.nomeCurso = nomeCurso;
      this.cargaHoraria = cargaHoraria;
      this.qtdVagasDisponiveis = this.qtdVagasDisponiveis;
      this.professoresDoCurso = [];
      this.qtdAlunosPorCurso.push({
        nome: this.nome,
        qtdAlunos: 0,
      });

      if(cargaHoraria <= 0 ) throw new Error("Valor inválido.")
      
      
      if(qtdVagasDisponiveis <= 0) throw new Error("Valor inválido.")
      

      return "Curso cadastrado com sucesso."
    }
  }
  
  module.exports = { Curso };
