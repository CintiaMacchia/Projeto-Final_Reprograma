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
        expect(professor.cadastrarUsuario("Luiza", "13987689945", "maria@email.com", "92248415036", "1256")).toBe("Professor cadastrado")
    })

    test("Retorna erro ao tentar cadastrar Professor com CPF inválido", () =>{
        expect(() => professor.cadastrarUsuario("Luiza", "13987689945", "maria@email.com", "92248", "1256")).toThrow("CPF inválido")
    })

    test("Retorna com sucesso o CPF", () => {
        expect(professor.cadastrarUsuario("Luiza", "13987689945", "maria@email.com", "92248415036", "1256")).toBe("Professor cadastrado")
        expect(professor.cpf).toBe("92248415036");
    })
       
    test("Retorna com sucesso ao fazer alteração no CPF", () => {
        const novoCpf = "92248415063";
        professor.cpf = novoCpf;
        expect(professor.cpf).toBe(novoCpf);
    });

})