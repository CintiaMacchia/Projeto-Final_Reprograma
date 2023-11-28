const Empresa = require("./Empresa")

describe("Teste da classe Empresa", ()=>{
    let empresa = new Empresa()

    test("Testar se a instância está sendo criada corretamente", () => {
        expect(empresa instanceof Empresa).toBe(true)
    })

    test("Cadastrar Empresa com dados válidos", ()=> {
        expect(empresa.registrarUsuario("BancoAnalu", "11996584578", "banco@banco", "14664891000195").toBe("Usuário Cadastrado"))
    })

    test("Retornar Erro ao cadastrar empresa com cnpj inválido", ()=>{
        expect(()=> empresa.registrarUsuario("BancoAnalu", "11996584578", "banco@banco", "não cnpj")).toThrow("Dados Inválidos")
    })
})