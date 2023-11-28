const { Usuario } = require("../Usuario/Usuario")

class Empresa extends Usuario{
    #cnpj

     registrarUsuario(nome, telefone, email, cnpj){
        super.registrarUsuario(nome, telefone, email)
        this.#cnpj = cnpj

        const regexCNPJ = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;

        if (!regexCNPJ.test(cnpj)) {
            throw new Error("CNPJ inválido");
          }

        return "Usuário Cadastrado" 
    }
}


module.exports = { Empresa }