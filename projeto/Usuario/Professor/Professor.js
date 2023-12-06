const  Usuario  = require("../Usuario");

class Professor extends Usuario {
  #cpf;
  matricula;

  cadastrarUsuario(nome, telefone, email, cpf, matricula) {
    super.cadastrarUsuario(nome, telefone, email);
    this.#cpf = cpf;
    this.matricula = matricula;
    this.listaDeCursosMinistrados = [];

    const regexCpf =
      /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;

    if (!regexCpf.test(cpf)) {
      throw new Error("CPF inválido");
    }

    return "Professor cadastrado";
  }

  get cpf() {
    return this.#cpf;
  }

  set cpf(novoCnpj) {
    return (this.#cpf = novoCnpj);
  }
}

module.exports = Professor;