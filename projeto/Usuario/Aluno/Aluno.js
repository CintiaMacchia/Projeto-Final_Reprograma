const { Usuario }  = require("../Usuario")

class Aluno extends Usuario {
    #cpf;
    matricula;
  
    cadastrarUsuario(nome, telefone, email, cpf, matricula) {
      super.cadastrarUsuario(nome, telefone, email);
      this.#cpf = cpf;
      this.matricula = matricula;
      this.listaDeCursosMatriculados = [];
  
      const regexCpf =
        /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;
  
      if (!regexCpf.test(cpf)) {
        throw new Error("CPF inválido");
      }
  
      return "Aluno cadastrado.";
    }
  
    get cpf() {
      return this.#cpf;
    }
  
    set cpf(novoCnpj) {
      return (this.#cpf = novoCnpj);
    }
  }
  
  module.exports = Aluno;