const  Empresa  = require("./Empresa")

describe("Teste da classe Empresa", ()=>{
    let empresa 
    
    beforeEach(()=>{
      empresa  = new Empresa()
    })
  

    test("Testar se a instância está sendo criada corretamente", () => {
        expect(empresa instanceof Empresa).toBe(true)
    })

    test("Cadastrar Empresa com dados válidos", ()=> {
        expect(empresa.cadastrarUsuario("BancoAnalu", "11996584578", "banco@banco.com", "14664891000195")).toBe("Empresa Cadastrada")
    })

    test("Retornar Erro ao cadastrar empresa com cnpj inválido", ()=>{
        expect(()=> empresa.cadastrarUsuario("BancoAnalu", "11996584578", "banco@banco.com", "12345")).toThrow("CNPJ inválido")
    })
})