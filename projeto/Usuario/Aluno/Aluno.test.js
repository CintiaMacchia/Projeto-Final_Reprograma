const  Aluno = require("./Aluno")


describe("Teste da Classe Professor", ()=>{
    let aluno;

    beforeEach(()=>{
        aluno= new Aluno
    })

    test("Verifica se a instância Aluno está sendo criada", () =>{
        expect(aluno instanceof Aluno).toBe(true)
    })

    test("Cadastrar Aluno com dados Válidos", ()=>{
        expect(aluno.cadastrarUsuario("Sofia", "13987689945", "sofia@email.com", "92248415036", "b0002")).toBe("Aluno cadastrado.")
    })

    test("Retorna erro ao cadastrar aluno com CFP inválidos", ()=>{
        expect(() =>aluno.cadastrarUsuario("Sofia", "13987689945", "sofia@email.com", "1254", "b0002")).toThrow("CPF inválido")
    })

    test("Retorna com sucesso o CPF", () => {
        aluno.cadastrarUsuario("Sofia", "13987689945", "sofia@email.com", "92248415036", "b0002");
        expect(aluno.cpf).toBe("92248415036");
    });

    test("Retorna com sucesso ao fazer alteração no CPF", () => {
        const novoCpf = "92248415063";
        aluno.cpf = novoCpf;
        expect(aluno.cpf).toBe(novoCpf);
    });
})