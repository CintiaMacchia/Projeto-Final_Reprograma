const Aluno = require("../Usuario/Aluno/Aluno")
const Professor = require("../Usuario/Professor/Professor")
const Empresa = require("../Usuario/Empresa/Empresa")

class Curso {
    nomeCurso;
    cargaHoraria; //passar para privado
    qtdVagasDisponiveis; //passar para privado
    static listaCursosCadastrados = []

    cadastrarCurso(nomeCurso, cargaHoraria, qtdVagasDisponiveis) {
      this.nomeCurso = nomeCurso;
      this.cargaHoraria = cargaHoraria;
      this.qtdVagasDisponiveis = qtdVagasDisponiveis;
      this.professoresDoCurso = [];
      this.empresaPatrocinadora = []
      this.qtdAlunos = 0


      Curso.listaCursosCadastrados.push(this)

      if(cargaHoraria <= 0 ) throw new Error("Valor inválido.")
      
      
      if(qtdVagasDisponiveis <= 0) throw new Error("Valor inválido.")
     
      return "Curso cadastrado com sucesso."
    }

    apagarListaDeCursos(){
      let i = Curso.listaCursosCadastrados.indexOf(this);
      Curso.listaCursosCadastrados.splice
      (i, 1)
  }

    matricularAluno(aluno, nomeCurso) {
      if (!(aluno instanceof Aluno)) throw new Error("Aluno inválido.");

      const cursoCadastrado = Curso.listaCursosCadastrados.find(curso => curso.nomeCurso === nomeCurso)
     
      if(! cursoCadastrado) throw new Error("Curso não encontrado.")
      

      if (aluno.listaDeCursosMatriculados.includes(nomeCurso))
        throw new Error("Curso já cadastrado!");
  
  
       if (cursoCadastrado.qtdVagasDisponiveis <= 0)
       throw new Error("Não há vagas disponíveis para este curso!");
  
      aluno.listaDeCursosMatriculados.push(nomeCurso);
      this.qtdVagasDisponiveis--;
      this.qtdAlunos++;

      return "Aluno matriculado com sucesso."
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

      return "Aluno removido."
    }

    calcularFaltas(aluno, totalFaltas) {
      if (!(aluno instanceof Aluno)) throw new Error("Aluno inválido.");
      
      const limiteFaltas = this.cargaHoraria * 0.25;
  
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

      return "Professor adicionado com sucesso."
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

      return "Professor removido com sucesso."
    }
    
    adicionarPatrocinador(empresa, nomeCurso) {
      if (!(empresa instanceof Empresa)) throw new Error("Empresa inválida.");
  
      if (empresa.listaCursoPatrocinado.includes(nomeCurso))
        throw new Error("Empresa já cadastrada!");
  
      empresa.listaCursoPatrocinado.push(nomeCurso);
      this.empresaPatrocinadora.push(empresa.nome);

      return "Empresa patrocinadora adicionada."
    }
  
  }
  
  module.exports = { Curso };


  // const curso1 = new Curso()
  // curso1.cadastrarCurso("Front-end", 200, 25)

  // // curso1.apagarListaDeCursos()
 
  // const professor = new Professor()
  // professor.cadastrarUsuario("Maria", "13974588585", "maria@email.com", "22245674589", "12546")
  // console.log(professor)
 
  // curso1.adicionarProfessor(professor, "Front-end")
  // console.log(curso1)
  // console.log("Lista de cursos ministrados após remoção:", professor.listaDeCursosMinistrados);
  // curso1.removerProfessor(professor, "Front-end")
  // console.log("Lista de professores do curso após remoção:", this.professoresDoCurso);