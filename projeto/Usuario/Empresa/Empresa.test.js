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
    });

    test("Retorna com sucesso o CNPJ", () => {
        expect(empresa.cadastrarUsuario("BancoAnalu", "11996584578", "banco@banco.com", "14664891000195")).toBe("Empresa Cadastrada")
        expect(empresa.cnpj).toBe("14664891000195");
    });

    test("Retorna com sucesso ao fazer alteração no CNPJ", () => {
        const novoCnpj = "30143417000174";
        empresa.cnpj = novoCnpj;
        expect(empresa.cnpj).toBe(novoCnpj);
    });
})