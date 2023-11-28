const Usuario = require("../Usuario/Usuario.js");

class Aluno extends Usuario {
  #cpf;
  matricula;

  registrarUsuario(nome, telefone, email, cpf, matricula) {
    super.registrarUsuario(nome, telefone, email, cpf, matricula);
    this.#cpf = cpf;
    this.matricula = matricula;
    this.cursosMatriculados = [];
  }

  addCurso(nomeDoCurso) {
    return this.cursosMatriculados.push(nomeDoCurso);
  }

  removeCurso(nomeDoCurso) {
    this.cursosMatriculados = this.cursosMatriculados.filter(
      (curso) => curso !== nomeDoCurso
    );

    return this.cursosMatriculados;
  }

  calcularFaltas(totalHorasCurso, totalFaltas) {
    const limiteFaltas = totalHorasCurso * 0.75;

    if (totalFaltas > limiteFaltas)
      throw new Error("Aluno reprovado por ter faltas superior a 75% do curso");

    return "Aluno aprovado";
  }
}

const aluno1 = new Aluno();

aluno1.registrarUsuario(
  "João",
  "13987689945",
  "joao@email.com",
  "08575698455",
  "001"
);

aluno1.addCurso("Frontend");
aluno1.addCurso("Backend");
aluno1.removeCurso("Frontend");

console.log(aluno1);
