const Usuario = require("../Usuario");

class Empresa extends Usuario {
  #cnpj;
  listaCursoPatrocinado;

  registrarUsuario(nome, telefone, email, cnpj) {
    super.registrarUsuario(nome, telefone, email);
    this.#cnpj = cnpj;
    this.listaCursoPatrocinado = [];

    const regexCNPJ = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
    if (!regexCNPJ.test(cnpj)) {
      throw new Error("CNPJ inválido");
    }

    return "Empresa cadastrada";
  }

  get cnpj() {
    return this.#cnpj;
  }

  set cnpj(novoCnpj) {
    return (this.#cnpj = novoCnpj);
  }
}

module.exports = Empresa;
