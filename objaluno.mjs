let alunos = [];

function cadastrarAluno() {
    const Nome = document.getElementById("nome").value;
    const RA = document.getElementById("RA").value;
    const Idade = document.getElementById("Idade").value;
    const Media = document.getElementById("Media").value;
    const Sexo = document.getElementById("sexo").value;

    if (Nome && RA && Idade && Sexo && Media) {
        const aluno = {
            Nome: Nome,
            RA: RA,
            Idade: Idade,
            Media: Media, // Corrigido para "Media" em maiúscula
            Sexo: Sexo
        };

        alunos.push(aluno);

        document.getElementById("nome").value = "";
        document.getElementById("RA").value = "";
        document.getElementById("Idade").value = "";
        document.getElementById("Media").value = "";
        document.getElementById("sexo").value = "";

        listarAlunos();
    }
}

function listarAlunos() {
    const listaAlunos = document.getElementById("alunos");
    listaAlunos.innerHTML = "";

    alunos.forEach((aluno, i) => {
        const li = document.createElement("li");
        li.textContent = ` - Nome: ${aluno.Nome} - RA: ${aluno.RA} - Idade: ${aluno.Idade} - Sexo: ${aluno.Sexo} - Média: ${aluno.Media}`; // Corrigido para "Média" em maiúscula
        listaAlunos.appendChild(li);
    });
}

document.getElementById("cadastrar").addEventListener("click", cadastrarAluno);
