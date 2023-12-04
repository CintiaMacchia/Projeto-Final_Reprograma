const { Curso }= require("./Curso")
const Aluno = require("../Usuario/Aluno/Aluno")
const Professor = require("../Usuario/Professor/Professor")
const Empresa = require("../Usuario/Empresa/Empresa")

describe("Teste da classe Curso", ()=>{
    let curso
    let aluno 
    let professor
    let empresa
     

    beforeEach(()=>{
     curso = new Curso()
     aluno = new Aluno()
     professor = new Professor()
     empresa = new Empresa()
     curso.apagarCurso()
    })


    test("Testa se a instância está sendo criada corretamante", ()=> {
        expect(curso instanceof Curso).toBe(true)
        
    })

    test("Retorna sucesso ao cadastrar um novo curso", ()=>{
        expect(curso.cadastrarCurso("Front-end", 200, 40)).toBe("Curso cadastrado com sucesso.")
       
    })

    test("retorna erro ao tentar criar um curso com carga horário negativa", ()=>{
        expect(() => curso.cadastrarCurso("Front-end", -200, 40)).toThrow("Valor inválido.")
       
    })

    test("retorna erro ao tentar criar um curso com carga horário igual a zero", ()=>{
        expect(() => curso.cadastrarCurso("Front-end", 0, 40)).toThrow("Valor inválido.")
       
    })

    test("retorna erro ao tentar criar um curso com vaga negativa", ()=>{
        expect(() => curso.cadastrarCurso("Front-end", 200, -40)).toThrow("Valor inválido.")
        
    })

    test("retorna erro ao tentar criar um curso com vaga igual a zero", ()=>{
        expect(() =>curso.cadastrarCurso("Front-end", -200, 0)).toThrow("Valor inválido.")
    })

    test("retorna novo status do curso", ()=>{
        expect(curso.cadastrarCurso("Front-end", 200, 40)).toBe("Curso cadastrado com sucesso.")
        expect(curso.mudarStatus(this.novoStatus)).toBe(this.novoStatus)
    })

    test("Retorna sucesso ao matricular aluno com dados válidos", () =>{
        expect(aluno.cadastrarUsuario("Sofia", "13987689945", "sofia@email.com", "92248415036", "b0002")).toBe("Aluno cadastrado.")
        expect(curso.cadastrarCurso("Front-end", 200, 40)).toBe("Curso cadastrado com sucesso.")
        expect(curso.matricularAluno(aluno, "Front-end")).toBe("Aluno matriculado com sucesso.")
    })

    test("Retorna erro ao tentar matricular aluno inválido", ()=> {
        expect(aluno.cadastrarUsuario("Sofia", "13987689945", "sofia@email.com", "92248415036", "b0002")).toBe("Aluno cadastrado.")
        expect(curso.cadastrarCurso("Front-end", 200, 40)).toBe("Curso cadastrado com sucesso.")
        expect(() => curso.matricularAluno("Maria", "Front-end")).toThrow("Aluno inválido.")
    })

    test("Retorna erro ao tentar matricular curso inválido", ()=> {
        expect(aluno.cadastrarUsuario("Sofia", "13987689945", "sofia@email.com", "92248415036", "b0002")).toBe("Aluno cadastrado.")
        expect(curso.cadastrarCurso("Front-end", 200, 40)).toBe("Curso cadastrado com sucesso.")
        expect(() => curso.matricularAluno(aluno, "Ux")).toThrow("Curso não encontrado.")
    })


    test("Retorna erro ao tentar cadastrar aluno no mesmo curso", () => {
        expect(aluno.cadastrarUsuario("Sofia", "13987689945", "sofia@email.com", "92248415036", "b0002")).toBe("Aluno cadastrado.");
        expect(curso.cadastrarCurso("Front-end", 200, 40)).toBe("Curso cadastrado com sucesso.");
        expect(curso.matricularAluno(aluno, "Front-end")).toBe("Aluno matriculado com sucesso.");
        expect(() => curso.matricularAluno(aluno, "Front-end")).toThrow("Curso já cadastrado!");
      });
      

    test("Retorna erro ao tentar matricular aluno em curso sem vagas", ()=>{
        const aluno2 = new Aluno();
        expect(aluno.cadastrarUsuario("Sofia", "13987689945", "sofia@email.com", "92248415036", "b0002")).toBe("Aluno cadastrado.");
        expect(aluno2.cadastrarUsuario("Maria", "13987689954", "maria@email.com", "92248415063", "b0003")).toBe("Aluno cadastrado.");
        expect(curso.cadastrarCurso("Front-end", 200, 1)).toBe("Curso cadastrado com sucesso.");
        expect(curso.matricularAluno(aluno, "Front-end")).toBe("Aluno matriculado com sucesso.");
        expect(() => curso.matricularAluno(aluno2, "Front-end")).toThrow("Não há vagas disponíveis para este curso!");
    })
    
    test("Retorna sucesso ao tentar remover aluno do curso", ()=> {
        expect(aluno.cadastrarUsuario("Sofia", "13987689945", "sofia@email.com", "92248415036", "b0002")).toBe("Aluno cadastrado.");
        expect(curso.cadastrarCurso("Front-end", 200, 40)).toBe("Curso cadastrado com sucesso.");
        expect(curso.matricularAluno(aluno, "Front-end")).toBe("Aluno matriculado com sucesso.");
        expect(curso.removerAluno(aluno, "Front-end")).toBe("Aluno removido.")
    })

    test("Retorna erro ao tentar remover aluno inválido", () => {
        expect(() => curso.removerAluno({}, "Front-end")).toThrow("Aluno inválido.");
      });

    test("Retorna erro ao tentar remover aluno não matriculado", () => {
        expect(aluno.cadastrarUsuario("Sofia", "13987689945", "sofia@email.com", "92248415036", "b0002")).toBe("Aluno cadastrado.");
        expect(curso.cadastrarCurso("Front-end", 200, 40)).toBe("Curso cadastrado com sucesso.");
        expect(() => curso.removerAluno(aluno, "Front-end")).toThrow("O aluno não está matriculado neste curso!");
      });

      test("Retorna mensagem sucesso quando o aluno não excedeu o limite de faltas", () =>{
        expect(aluno.cadastrarUsuario("Sofia", "13987689945", "sofia@email.com", "92248415036", "b0002")).toBe("Aluno cadastrado.")
        expect(curso.cadastrarCurso("Front-end", 200, 40)).toBe("Curso cadastrado com sucesso.")
        expect(curso.matricularAluno(aluno, "Front-end")).toBe("Aluno matriculado com sucesso.")
        expect(curso.calcularFaltas(aluno, 20)).toBe(`O total de faltas do(a) ${aluno.nome} não excede 75% do total de horas do curso).`)
    })

    test("Retorna mensagem quando o aluno excedeu o limite de faltas", () =>{
        expect(aluno.cadastrarUsuario("Sofia", "13987689945", "sofia@email.com", "92248415036", "b0002")).toBe("Aluno cadastrado.")
        expect(curso.cadastrarCurso("Front-end", 200, 40)).toBe("Curso cadastrado com sucesso.")
        expect(curso.matricularAluno(aluno, "Front-end")).toBe("Aluno matriculado com sucesso.")
        expect(curso.calcularFaltas(aluno, 60)).toBe(`O total de faltas do(a) ${aluno.nome} excede 75% do total de horas do curso).`)
    })

    test("Retorna mensagem de erro para aluno não cadastrado no curso", () => {  
        expect(curso.cadastrarCurso("Front-end", 200, 40)).toBe("Curso cadastrado com sucesso.");
        expect(() => curso.calcularFaltas("Maria", 20)).toThrow("Aluno inválido");
        
    });

    test("Retorna sucesso ao cadastrar Professor no curso", ()=> {
        expect(professor.cadastrarUsuario("Luiza", "13987689945", "maria@email.com", "92248415036", "1256")).toBe("Professor cadastrado")
        expect(curso.cadastrarCurso("Front-end", 200, 40)).toBe("Curso cadastrado com sucesso.")
        expect(curso.adicionarProfessor(professor, "Front-end")).toBe("Professor adicionado com sucesso.")
    })

    test("Retorna mensagem de erro ao tentar adicionar professor invalido", () => {
        expect(professor.cadastrarUsuario("Luiza", "13987689945", "maria@email.com", "92248415036", "1256")).toBe("Professor cadastrado")
        expect(curso.cadastrarCurso("Front-end", 200, 40)).toBe("Curso cadastrado com sucesso.")
        expect(() => curso.adicionarProfessor("Maria", "Front-end")).toThrow("Professor inválido.")
    });

    test("Retorna sucesso ao cadastrar Professor no curso", ()=> {
        expect(professor.cadastrarUsuario("Luiza", "13987689945", "maria@email.com", "92248415036", "1256")).toBe("Professor cadastrado")
        expect(curso.cadastrarCurso("Front-end", 200, 40)).toBe("Curso cadastrado com sucesso.")
        expect(curso.adicionarProfessor(professor, "Front-end")).toBe("Professor adicionado com sucesso.")
        expect(()=> curso.adicionarProfessor(professor, "Front-end")).toThrow("Curso já cadastrado!")
    })

    test("Retorna sucesso ao remover Professor do curso", ()=> {
        expect(professor.cadastrarUsuario("Luiza", "13987689945", "maria@email.com", "92248415036", "1256")).toBe("Professor cadastrado")
        expect(curso.cadastrarCurso("Front-end", 200, 40)).toBe("Curso cadastrado com sucesso.")
        expect(curso.adicionarProfessor(professor, "Front-end")).toBe("Professor adicionado com sucesso.")
        expect(curso.removerProfessor(professor, "Front-end")).toBe("Professor removido com sucesso.")
    })

    test("Retorna erro ao remover Professor do curso", ()=> {
        expect(professor.cadastrarUsuario("Luiza", "13987689945", "maria@email.com", "92248415036", "1256")).toBe("Professor cadastrado")
        expect(curso.cadastrarCurso("Front-end", 200, 40)).toBe("Curso cadastrado com sucesso.")
        expect(curso.adicionarProfessor(professor, "Front-end")).toBe("Professor adicionado com sucesso.")
        expect(() => curso.removerProfessor("Maria", "Front-end")).toThrow("Professor inválido.")
    })

    test("Retorna sucesso ao adiocionar empresa patrocinadora ao curso", ()=> {
        expect(empresa.cadastrarUsuario("BancoAzul", "11996584578", "banco@banco.com", "14664891000195")).toBe("Empresa Cadastrada")
        expect(curso.cadastrarCurso("Front-end", 200, 40)).toBe("Curso cadastrado com sucesso.")
        expect(curso.adicionarPatrocinador(empresa, "Front-end" )).toBe("Empresa patrocinadora adicionada.")
    })

    test("Retorna erro ao adiocionar empresa invalida", ()=> {
        expect(empresa.cadastrarUsuario("BancoAzul", "11996584578", "banco@banco.com", "14664891000195")).toBe("Empresa Cadastrada")
        expect(curso.cadastrarCurso("Front-end", 200, 40)).toBe("Curso cadastrado com sucesso.")
        expect(() => curso.adicionarPatrocinador("Azul", "Front-end" )).toThrow("Empresa inválida.")
    })

    
    test("Retorna erro ao adiocionar empresa patrocinadora ao mesmo curso", ()=> {
        expect(empresa.cadastrarUsuario("BancoAzul", "11996584578", "banco@banco.com", "14664891000195")).toBe("Empresa Cadastrada")
        expect(curso.cadastrarCurso("Front-end", 200, 40)).toBe("Curso cadastrado com sucesso.")
        expect(curso.adicionarPatrocinador(empresa, "Front-end" )).toBe("Empresa patrocinadora adicionada.")
        expect(() => curso.adicionarPatrocinador(empresa, "Front-end" )).toThrow("Empresa já cadastrada!")
    })
})