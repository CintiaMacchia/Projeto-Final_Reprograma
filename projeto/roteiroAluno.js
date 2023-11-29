const Curso = require("./Curso/Curso.js");
const Aluno = require("./Usuario/Aluno/Aluno.js");
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

//cadastrar curso
cursoFront.cadastrarCurso("Frontend", 100, 40);
cursoBack.cadastrarCurso("Backend", 120, 30);

//registrar usuário
aluno1.registrarUsuario(
  "João",
  "13987689945",
  "joao@email.com",
  "08575698455",
  "a001"
);

aluno2.registrarUsuario(
  "Maria",
  "21987689945",
  "maria@email.com",
  "08575698456",
  "a002"
);

//registrar professor
professor1.registrarUsuario(
  "Analu",
  "11987689945",
  "analu@reprograma.com",
  "79142232040",
  "p001"
);

professor2.registrarUsuario(
  "Lua",
  "27987689914",
  "luara@reprograma.com",
  "50230281001",
  "p002"
);

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

console.log(cursoBack.calcularFaltas(aluno2, 100, 76));

console.log(aluno1);
console.log(aluno2);
console.log("*********************************");

console.log(professor1);
console.log(professor2);
console.log("*********************************");

console.log(cursoFront);
console.log(cursoBack);
