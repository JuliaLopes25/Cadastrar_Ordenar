let alunos = [];
let aprovados = [];
let testegit

// Função para cadastrar um aluno
function cadastrarAluno() {
    const Nome = document.getElementById("nome").value;
    const RA = parseInt(document.getElementById("RA").value);
    const Idade = document.getElementById("Idade").value;
    const Media = document.getElementById("Media").value;
    const Sexo = document.getElementById("sexo").value;

    let situacao = "";
    if (Media >= 6.0) {
        situacao = "Aprovado";
    } else {
        situacao = "Reprovado";
    }

    if (Nome && RA && Idade && Sexo && Media) {
        const aluno = {
            Nome: Nome,
            RA: RA,
            Idade: Idade,
            Media: Media, // Corrigido para "Media" em maiúscula
            Sexo: Sexo,
            Situacao: situacao
        };
        if (aluno.Situacao == "Aprovado") {
            aprovados.push(aluno);
        }
        alunos.push(aluno);

        // Limpa os campos do formulário após o cadastro
        document.getElementById("nome").value = "";
        document.getElementById("RA").value = "";
        document.getElementById("Idade").value = "";
        document.getElementById("Media").value = "";
        document.getElementById("sexo").value = "";
    }
}

// Função para listar todos os alunos
function listarAlunos() {
    const listaAlunos = document.getElementById("alunos");
    listaAlunos.innerHTML = "";

    alunos.forEach((aluno, i) => {
        const li = document.createElement("li");
        li.textContent = ` - Nome: ${aluno.Nome} - RA: ${aluno.RA} - Idade: ${aluno.Idade} - Sexo: ${aluno.Sexo} - Média: ${aluno.Media} - Situação: ${aluno.Situacao}`;
        listaAlunos.appendChild(li);
    });
}

// Função para ordenar os alunos por RA (Registro Acadêmico)
function ordenarAlunosPorRA() {
    const listaAlunos = document.getElementById("alunos");
    listaAlunos.innerHTML = "";
    let swap;
    do {
        swap = false;
        for (let i = 0; i < alunos.length - 1; i++) {
            if (alunos[i].RA < alunos[i + 1].RA) {
                [alunos[i], alunos[i + 1]] = [alunos[i + 1], alunos[i]];
                swap = true;
            }
        }
    } while (swap);

    listarAlunos();
}

// Função para ordenar os alunos por Nome
function ordenarAlunosPorNome() {
    const listaAlunos = document.getElementById("alunos");
    listaAlunos.innerHTML = "";
    let swap;
    do {
        swap = false;
        for (let i = 0; i < alunos.length - 1; i++) {
            if (alunos[i].Nome.localeCompare(alunos[i + 1].Nome) > 0) {
                [alunos[i], alunos[i + 1]] = [alunos[i + 1], alunos[i]];
                swap = true;
            }
        }
    } while (swap);

    listarAlunos();
}

// Função para ordenar os alunos aprovados por Nome
function ordenarAlunosPorNomeAprovados() {
    const listaAlunos = document.getElementById("alunos");
    listaAlunos.innerHTML = "";
    let swap;
    do {
        swap = false;
        for (let i = 0; i < aprovados.length - 1; i++) {
            if (aprovados[i].Nome.localeCompare(aprovados[i + 1].Nome) > 0) {
                [aprovados[i], aprovados[i + 1]] = [aprovados[i + 1], aprovados[i]];
                swap = true;
            }
        }
    } while (swap);

    listarAlunos();
}

// Adiciona event listeners aos botões
document.getElementById("ordenarPorRA").addEventListener("click", ordenarAlunosPorRA);
document.getElementById("cadastrar").addEventListener("click", cadastrarAluno);
document.getElementById("listar").addEventListener("click", listarAlunos);
document.getElementById("ordenarPorNome").addEventListener("click", ordenarAlunosPorNome);
document.getElementById("ordenarPorNomeAprovados").addEventListener("click", ordenarAlunosPorNomeAprovados);
