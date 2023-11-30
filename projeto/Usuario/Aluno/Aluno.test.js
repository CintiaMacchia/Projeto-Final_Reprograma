const  Aluno = require("./Aluno")


describe("Teste da Classe Professor", ()=>{
    let aluno;

    beforeEach(()=>{
        aluno= new Aluno
    })

    test("Verifica se a instância Aluno está sendo criada", () =>{
        expect(aluno instanceof Aluno).toBe(true)
    })

    test("Cadastrar Aluno conm dados Válidos", ()=>{
        expect(aluno.registrarUsuario("Sofia", "13987689945", "sofia@email.com", "92248415036", "b0002")).toBe("Aluno cadastrado")
    })



})