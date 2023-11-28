const Curso = require("./Curso/Curso");
const Aluno = require("./Aluno/Aluno");

//Intanciação dos cursos
const curso1 = new Curso();
const curso2 = new Curso();
const curso3 = new Curso();

//Instanciação dos alunos
const aluno1 = new Aluno();
const aluno2 = new Aluno();

//Criação dos cursos
curso1.cadastrarCurso("Frontend", 100, 40);
curso2.cadastrarCurso("Backend", 120, 30);
curso3.cadastrarCurso("Fake", 100, 10);

//Registrando alunos
aluno1.registrarUsuario(
  "João",
  "13987689945",
  "joao@email.com",
  "08575698455",
  "001"
);

aluno2.registrarUsuario(
  "Maria",
  "21987689945",
  "maria@email.com",
  "08575698456",
  "002"
);

//Matriculando alunos nos cursos
aluno1.matricularAluno(curso1);
aluno1.matricularAluno(curso2);
aluno2.matricularAluno(curso1);

//Removendo aluno de curso
aluno1.removerAluno(curso2);
// aluno2.removeCurso(curso2);

//Calcular faltas
console.log(aluno1.calcularFaltas(100, 76));

console.log(curso1);
console.log(curso2);

console.log(aluno1);
console.log(aluno2);
