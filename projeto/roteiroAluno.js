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
aluno1.addCurso(curso1);
aluno1.addCurso(curso2);
aluno2.addCurso(curso1);

//Removendo aluno de curso

aluno1.removeCurso(curso2);
// aluno2.removeCurso(curso2);

console.log(curso1.qtdAlunosPorCurso);
console.log(curso2.qtdAlunosPorCurso);

console.log(aluno1);
console.log(aluno2);
