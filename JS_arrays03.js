// REVISANDO CALLBACKS

// const nomes = ["Ana", "Ju", "Leo", "Paulo"];

// //SO FUNCIONA SE VOCE BOTAS UMA FUNÇÃO COMO PARAMETRO, VOCE PODE BOTAR O INDICE ALI ENTRE COLCHETES, MAIS É OPICIONAL 
// nomes.forEach(imprimeNomes)

// function imprimeNomes(nome){
//     console.log(nome)
// }

// const notas = [10, 9, 8, 7, 6]; 

// const notasAtualizadas = notas.map( nota => nota == 10? nota : ++nota);
// //O MAP PODE SOMAR E AINDA RETORNAR COM UM ARRAY
// //ELE JOGA FORA UMA ARRAY ATUALIZADA

// console.log(notasAtualizadas);

//PADRONIZANDO NOMES

// let nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

// const nomesAtualizados = nomes.map(nome => nome.toUpperCase());

// console.log(nomesAtualizados);

//FILTRAR POR NOTA

// const nomes = ["Ana", "Marcos", "Maria", "Mauro"];
// const notas = [7, 4.5, 8, 7.5];

// const reprovados = nomes.filter( (aluno,indice) => notas[indice] < 5 );
// console.log(`Reprovados: ${reprovados}`);
//FILTER FUNCIONA NO METODO DE VERDADEIRO OU FALSO 

// DESAFIO FINAL DO CURSO
//MEDIA DOS ALUNOS DAS 3 SALAS

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPyton = [7, 3.5, 8, 9.5];

function mediaSala(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acum, atual) => atual + acum,0)
    return somaDasNotas/notasDaSala.length
}

console.log(`Media da sala de JS ${salaJS}`);
console.log(`Media da sala de Java ${salaJava}`);
console.log(`Media da sala de Pyton ${salaPyton}`);

