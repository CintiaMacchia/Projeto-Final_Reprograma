
const  Usuario  = require("./Usuario")


describe("Teste da Classe Usuário", ()=>{
    let usuario;

    beforeEach(()=>{
        usuario = new Usuario
    })

    test("Verifica se a instância Usuário está sendo criada", ()=>{
        expect(usuario instanceof Usuario).toBe(true)
    })

    test("Cadastrar Usuário com dados Válidos", ()=>{
        expect(usuario.cadastrarUsuario("Mariana", "13987689945", "maria@email.com")).toBe("Usuário Cadastrado")
    })

    test("Retorna Erro ao tentar cadastrar usuário com telefone inválido", ()=> {
        expect(()=> usuario.cadastrarUsuario("Maria", "dvfgdds14", "email@email.com")).toThrow("Telefone inválido") 
    })

    test("Lançar erro ao cadastrar Usuário com email inválido", () => {
        expect(() => usuario.cadastrarUsuario("João", "123456789", "154556")).toThrow("Email inválido");
    });

    test("Retorna com sucesso o numero de telefone criado", () => {
        usuario.cadastrarUsuario("João", "11987654321", "joao@email.com");
        expect(usuario.telefone).toBe("11987654321");
    });

    test("Retorna com sucesso ao alterar numero de telefone", () => {
        const novoTelefone = "11999995248";
        usuario.telefone = novoTelefone;
        expect(usuario.telefone).toBe(novoTelefone);
    });

    test("Retorna com sucesso o email criado", () => {
        usuario.cadastrarUsuario("João", "11987654321", "joao@email.com");
        expect(usuario.email).toBe("joao@email.com");
    });

    test("Retorna com sucesso ao alterar email", () => {
        const novoEmail = "joao2@email.com";
        usuario.email = novoEmail;
        expect(usuario.email).toBe(novoEmail);
    });
})