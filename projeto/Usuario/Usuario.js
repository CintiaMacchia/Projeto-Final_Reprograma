class Usuario{
    nome
    #telefone
    #email   

    cadastrarUsuario(nome, telefone, email){
        this.nome = nome;
        this.#telefone = telefone;
        this.#email= email;

        
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const regexTelefone = /^\d{11}$/;
        
       if (!regexEmail.test(email)) {
           throw new Error("Email inválido");
          
        }

        if (!regexTelefone.test(telefone)) {
            throw new Error("Telefone inválido");
        }

          
            return "Usuário Cadastrado"  
    }

    get telefone(){
        return this.#telefone
    }

    set telefone(novoTelefone){
        return this.#telefone = novoTelefone
    }

    get email(){
        return this.#email
    }

    set email(novoEmail){
        return this.#email = novoEmail
    }
}

module.exports = { Usuario }