const Usuario = require("./Usuario");

describe("Teste da Classe Usuário", () => {
  let usuario;

  beforeEach(() => {
    usuario = new Usuario();
  });

  test("Verifica se a instância Usuário está sendo criada", () => {
    expect(usuario instanceof Usuario).toBe(true);
  });

  test("Cadastrar Usuário com dados Válidos", () => {
    expect(
      usuario.registrarUsuario("Maria", "13987689945", "maria@email.com")
    ).toBe("Usuário Cadastrado");
  });

  test("Retorna Erro ao tentar cadastrar usuário com telefone inválido", () => {
    expect(() =>
      usuario.registrarUsuario("Maria", "dvfgdds14", "email@email.com")
    ).toThrow("Telefone inválido");
  });

  test("Retorna erro ao cadastrar Usuário com email inválido", () => {
    expect(() =>
      usuario.registrarUsuario("João", "123456789", "154556")
    ).toThrow("Email inválido");
  });
});
