const { Usuario } = require("../Usuario")
// const { Curso } = require("../../Curso/Curso")

class Empresa extends Usuario{
    #cnpj
    
     cadastrarUsuario(nome, telefone, email, cnpj){
        super.cadastrarUsuario(nome, telefone, email)
        this.#cnpj = cnpj
        this.listaCursoPatrocinado = []
 
        const regexCNPJ = /^\d{2}(\.?\d{3}){2}\/?\d{4}-?\d{2}$/;

        if (!regexCNPJ.test(cnpj)) {
            throw new Error("CNPJ inválido");
        }

        return "Empresa Cadastrada" 
    }

    get cnpj(){
        return this.#cnpj
    }

    set cnpj(novoCnpj){
        return this.#cnpj = novoCnpj
    }
    
}


    module.exports =  Empresa 