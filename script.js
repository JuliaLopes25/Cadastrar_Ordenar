// Defina um array para armazenar os dados dos alunos
let alunos = [];

// Função para cadastrar um novo aluno
function cadastrarAluno() {
    const nome = document.getElementById("nome_sobrenome").value;
    const matricula = document.getElementById("matricula").value;
    const curso = document.getElementById("curso").value;

    if (nome && matricula && curso) {
        const aluno = {
            nome: nome,
            matricula: matricula,
            curso: curso,
        };

        alunos.push(aluno);

        // Limpe os campos de entrada
        document.getElementById("nome").value = "";
        document.getElementById("matricula").value = "";
        document.getElementById("curso").value = "";

        listarAlunos();
    }
}

// Função para listar todos os alunos cadastrados
function listarAlunos() {
    const listaAlunos = document.getElementById("alunos");
    listaAlunos.innerHTML = "";

    alunos.forEach((aluno, index) => {
        const li = document.createElement("li");
        li.textContent = `#${index + 1} - Nome: ${aluno.nome}, Matrícula: ${aluno.matricula}, Curso: ${aluno.curso}`;
        listaAlunos.appendChild(li);
    });
}

// Adicione um ouvinte de evento para o botão "Cadastrar"
document.getElementById("cadastrar").addEventListener("click", cadastrarAluno);
