const { Usuario } = require("../Usuario/Usuario")
const { Curso } = require("../Curso/Curso")

class Empresa extends Usuario{
    #cnpj
    listaCursoPatrocinado

     registrarUsuario(nome, telefone, email, cnpj){
        super.registrarUsuario(nome, telefone, email)
        this.#cnpj = cnpj
        this.listaCursoPatrocinado = []

        const regexCNPJ = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;

        if (!regexCNPJ.test(cnpj)) {
            throw new Error("CNPJ inválido");
          }

        return "Usuário Cadastrado" 
    }

    get cnpj(){
        return this.#cnpj
    }

    set cnpj(novoCnpj){
        return this.#cnpj = novoCnpj
    }

    adicionarCursoPatrocinado(curso){
        if(! curso instanceof Curso){
           throw new Error("Curso inválido.")
        } 

        if(this.listaCursoPatrocinado.includes(curso))
        throw new Error("Curso já cadastrado!")

        return this.listaCursoPatrocinado.push(curso)
        
    }

}


module.exports = { Empresa }