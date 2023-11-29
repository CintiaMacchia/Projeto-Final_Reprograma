const Usuario = require("../Usuario.js");

class Aluno extends Usuario {
  #cpf;
  matricula;

  registrarUsuario(nome, telefone, email, cpf, matricula) {
    super.registrarUsuario(nome, telefone, email, cpf, matricula);
    this.#cpf = cpf;
    this.matricula = matricula;
    this.listaDeCursosMatriculados = [];

    const regexCpf =
      /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;

    if (!regexCpf.test(cpf)) {
      throw new Error("CPF inválido");
    }

    return "Aluno cadastrado";
  }

  get cpf() {
    return this.#cpf;
  }

  set cpf(novoCnpj) {
    return (this.#cpf = novoCnpj);
  }
}

module.exports = Aluno;
