import { Usuario } from "./Usuario.js"


describe("Teste da Classe Usuário", ()=>{
    let usuario;

    beforeEach(()=>{
        usuario = new Usuario
    })

    test("Verifica se a instância Usuário está sendo criada", ()=>{
        expect(usuario instanceof Usuario).toBe(true)
    })

    test("Cadastrar Usuário com dados Válidos", ()=>{
        expect(usuario.registrar("Maria", "13987689945", "email@email.com")).toBe("Usuário cadastrado")
    })

    test("Retorna erro ao cadastrar usuário com dados inválidos", ()=>{
        expect(()=> usuario.registrar("Maria", "abcder", "email@email.com")).toThrow("Erro no cadastro, dados inválidos")
    })

})