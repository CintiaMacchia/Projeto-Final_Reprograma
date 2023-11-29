const { Curso }= require("./Curso")

describe("Teste da classe Curso", ()=>{
    let curso  

    beforeEach(()=>{
     curso = new Curso()
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
})