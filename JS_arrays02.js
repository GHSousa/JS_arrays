// ALTERANDO OS ARREYS

const nomes = [ 'Joao', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinicius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

const sala1 = nomes.slice(0, nomes.length/2)
const sala2 = nomes.slice(nomes.length/2)

console.log(`Alunos da sala 1: ${sala1}`);
console.log(`Alunos da sala 2: ${sala2}`);

//ATUALIZANDO LISTAS


// Remova Ana e caio
// Adicione o Rodrigo no lugar

const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

listaDeChamada.splice(1,2,'Rodrigo');
//O splice remove os itens em partes.
// 1 criterio é aonde ele começa. No caso no indice 1
// 2 criterio é quantos itens vamos remover. No caso 2
// 3 criterio é colocarmos o que vai no lugar. No caso Rodrigo. Pode ficar vazio se n quiser adicionar nada. 
    ////listaDeChamada.splice[2, 0, 'Rodrigo'];
    //// Nesse caso aqui, vamos até o indice 2, não deletamos nada, e adicionamos o rodrigo alí


console.log(`Lista de chamada: ${listaDeChamada}`);

//JUNTANDO TURMAS

const salaPyton = ['Joao', 'Juliana', 'Ana'];
const salaJS = ['Caio', 'Lara', 'Marjorie'];

const salasUnificadas = salaPyton.concat(salaJS);
//o .concat unifica uma const com a outra, voce só precisa adicionar a outra como parametro
//Importante avisar que ele não mexe na variavel original. Sendo necessario criar uma nova
console.log(salasUnificadas);

//LISTA DE DUAS DIMENSOES

// const pessoas = ['João', 'Ana', 'Caio', 'Lara'];
// const mediaDasPessoas = [10, 7, 9, 6];

// let listaDeNotasEAlunos = [pessoas, mediaDasPessoas];
// // Isso é uma lista em 2 dimenções. e esta juntando sem somar as 2


// //                  o Primeiro array é referente a variavel listaDeNotas, sendo o indice 0 dela a variavel Pessoas
// //                  o Segundo array é referente a variavel escolhida no primeiro array, sendo o indice escolhido dentro dele mesmo. 
// console.log(`${listaDeNotasEAlunos[0][0]}, a sua media é ${listaDeNotasEAlunos}[1][0]`)
// // Aqui da pra chamar as pessoas da respectiva lista, no exemplo acima chamamos o indice 0, sendo pessoa + nota

// //BUSCANDO NA LISTA

const listaDePessoas = ['João', 'Ana', 'Caio', 'Lara'];
const mediaDasNotas = [10, 7, 9, 6];

let pessoasENotas = [listaDePessoas, mediaDasNotas];

const exibeNomeNota = (nomeDoAluno) => {
    if (pessoasENotas[0].includes(nomeDoAluno)){
        let indice = pessoasENotas[0].indexOf(nomeDoAluno)
        return pessoasENotas[0][indice] + 'sua media é ' + pessoasENotas[1][indice]
    } else {
        return 'Aluno não cadastrado'
    }
}
 console.log(exibeNomeNota("Ana"))

 // MUITA COISA PRA EXPLICAR, AGORA TA FICANDO BOM 
 // 1 ARROW FUNCTION PRA EXERCITAR ISSO.
 // 2 PARAMETRO DEFINIDO COMO nomeDoAluno 
 // 3 .includes AQUI SERVE PARA INCLUIR O nomeDoAluno COMO PARAMETRO. RETORNA UM VERDADEIRO OU FALSO
 // 4 A VARIAVEL indice PARA SALVAR QUE: CASO O PARAMETRO EXISTA DENTRO DESSA ARRAY
 // 5 .indexOf RETORNA O NUMERO DE INDICE QUE O PARAMETRO ESTA DENTRO DO ARRAY. NO EXEMPLO ACIMA É O INDICE 3 QUE FICA ARMAZENADO NA VARIAVEL
 // 6 AI ELA RETORNA A pessoasENotas NO INDICE [0] + A VARIAVEL INDICE QUE É 3
 // 7 AI ELA FAZ A MESMA COISA NO FINAL PEGANDO O INDICE [1] E A VARIAVEL INDICE QUE É 3. 
 // PARECE MAIS DIFICIL QUE É, NO GERAL É UMA LIGAÇÃO DE PONTOS
 







