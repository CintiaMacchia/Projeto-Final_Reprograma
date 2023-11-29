class Curso {
    nome;
    cargaHoraria; //passar para privado
    qtdVagas; //passar para privado
  
    qtdAlunosPorCurso = [];
  
    cadastrarCurso(nome, cargaHoraria, qtdVagas) {
      this.nome = nome;
      this.cargaHoraria = cargaHoraria;
      this.qtdVagas = qtdVagas;
      this.professoresDoCurso = [];
      this.qtdAlunosPorCurso.push({
        nome: this.nome,
        qtdAlunos: 0,
      });

      if(cargaHoraria <= 0 ){
        throw new Error("Valor inválido.")
      }
      
      if(qtdVagas <= 0){
        throw new Error("Valor inválido.")
      }

      return "Curso cadastrado com sucesso."
    }
  }
  
  module.exports = { Curso };
