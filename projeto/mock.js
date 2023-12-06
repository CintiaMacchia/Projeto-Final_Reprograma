const Curso = require("./Curso/Curso.js");
const Aluno = require("./Usuario/Aluno/Aluno.js");
const Empresa = require("./Usuario/Empresa/Empresa.js");
const Professor = require("./Usuario/Professor/Professor.js");

//instanciação de curso
const cursoFront = new Curso();
const cursoBack = new Curso();

//instanciação de alunos
const aluno1 = new Aluno();
const aluno2 = new Aluno();

//instanciação de professor
const professor1 = new Professor();
const professor2 = new Professor();

//instanciação de empresa
const empresa1 = new Empresa();
const empresa2 = new Empresa();

//cadastrar curso
cursoFront.cadastrarCurso("Frontend", 100, 40);
cursoBack.cadastrarCurso("Backend", 120, 30);

//cadastrar aluno
aluno1.cadastrarUsuario(
  "João",
  "13987689945",
  "joao@email.com",
  "08575698455",
  "a001"
);

aluno2.cadastrarUsuario(
  "Maria",
  "21987689945",
  "maria@email.com",
  "08575698456",
  "a002"
);

//cadastrar professor
professor1.cadastrarUsuario(
  "Analu",
  "11987689945",
  "analu@reprograma.com",
  "79142232040",
  "p001"
);

professor2.cadastrarUsuario(
  "Lua",
  "27987689914",
  "luara@reprograma.com",
  "50230281001",
  "p002"
);

//cadastrar empresa
empresa1.cadastrarUsuario(
  "Google",
  "11987689922",
  "google@gmail.com",
  "33295346000113"
);

empresa2.cadastrarUsuario(
  "Microsoft",
  "11925689928",
  "ms@outlook.com",
  "97729312000172"
);

cursoBack.adicionarPatrocinador(empresa1, "Backend");
cursoFront.adicionarPatrocinador(empresa2, "Frontend");

cursoBack.adicionarProfessor(professor1, "Backend");
cursoBack.adicionarProfessor(professor2, "Backend");
cursoFront.adicionarProfessor(professor2, "Frontend");
cursoBack.removerProfessor(professor2, "Backend");

cursoFront.matricularAluno(aluno1, "Frontend");
cursoBack.matricularAluno(aluno1, "Backend");
cursoFront.matricularAluno(aluno2, "Frontend");
cursoBack.matricularAluno(aluno2, "Backend");
// cursoBack.matricularAluno(aluno2, "Backend");
cursoBack.removerAluno(aluno2, "Backend");

console.log(cursoFront.calcularFaltas(aluno2, 76));

console.log(aluno1);
console.log(aluno2);
console.log("*********************************");

console.log(professor1);
console.log(professor2);
console.log("*********************************");

console.log(cursoFront);
console.log(cursoBack);
console.log("*********************************");

console.log(empresa1);
console.log(empresa2);
console.log("*********************************");

console.log(Curso.listaCursosCadastrados);
cursoBack.apagarCurso();

cursoFront.mudarStatus("Em andamento");
console.log(Curso.listaCursosCadastrados);