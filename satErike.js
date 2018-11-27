/**
 * Este arquivo deve ser inserido no sub-diretorio 'node_modules'
 * do diretorio que voce esta executando.
 * 
 * Escrito por Erike Nascimento em November/2018;
 * Baseado no modelo de Fernando Castor de Novembro/2017.
 */
exports.solve = function (fileName) {
    let formula = readFormula(fileName)
    let result = doSolve(formula.clauses, formula.variables)
    return result // Dois campos: isSat e satisfyingAssignment.
}

// Recebe a tarefa atual e devolve a proxima.
function nextAssignment(assignment) {
    let para = false // a fim de parar o loop
    let i = 0; // contador
    // implementado aqui o codigo para produzir a proxima tarefa
    // baseada no 'currentAssignment'.
    while (i < assignment.lenght - 1 && para == false) {
        if (newAssignment[i] == false) {
            newAssignment[i] = true;
            para = true;
        }
        else {
            para = false;
            i++;
        }
    }
    return newAssignment;
}

function doSolve(clauses, assignment) {
    let isSat = false;
    let i = 0; //contador
    while ((!isSat) && i < Math.pow(2, assignment.length)) {
        // deve checar se essa e a ultima tarefa ou nao.
        // essa tarefa satisfaz a formula? caso sim
        // torne isSat true. se não, pegue a proxima tarefa
        // e tente novamente.
        assignment = nextAssignment(assignment)
    }
    let result = { 'isSat': isSat, satisfyingAssignment: null }
    if (isSat) {
        result.satisfyingAssignment = assignment
    }
    return result
}

function readFormula(fileName) {

    // Para ler o arquivo, e possível usar o modulo 'fs'.
    let fs = require('fs');

    // Use a funcao readFileSync ao inves de readFile.
    let lerarquivo = readFileSync(fileName).toString();
    let leitor = lerarquivo.split("/[\r\n]+/");

    // Primeiro, le as linhas de texto do arquivo e so depois 
    // usa as funcoes auxiliares.

    let clauses = readClauses(leitor);
    let variables = readVariables(clauses);

    // Na linha seguinte, leitor e transmitido como um argumento
    // para que a funcao seja capaz de extrair a especificacao
    // do problema.
    let specOk = checkProblemSpecification(text, clauses, variables)

    let result = { 'clauses': [], 'variables': [] }
    if (specOk) {
        result.clauses = clauses
        result.variables = variables
    }
    return result
}

//extrai as clausulas do arquivo e produz um array
function readClauses(leitor) {
    let clauses = [];
    return clauses;
}

// processa as clausulas e identifica todas as variaveis
// e produz como resultado um array.
function readVariables(clauses) {

}

// checa se as clausulas e variaveis batem com a linha de problema
function checkProblemSpecification(leitor, clauses, variables) {

}