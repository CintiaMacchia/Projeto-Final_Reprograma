const  Professor  = require("./Professor")


describe("Teste da Classe Professor", ()=>{
    let professor;

    beforeEach(()=>{
        professor = new Professor
    })

    test("Verifica se a instância Professor está sendo criada", () =>{
        expect(professor instanceof Professor).toBe(true)
    })

    test("Cadastrar Professor conm dados Válidos", ()=>{
        expect(professor.registrarUsuario("Luiza", "13987689945", "maria@email.com", "92248415036", "1256")).toBe("Professor cadastrado")
    })



})