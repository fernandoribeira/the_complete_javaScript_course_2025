/* Coding Challenge #1 

Given an array of forecasted maximum temperatures, the thermometer displays a 
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 
days ... 21ºC in 2 days ... 23ºC in 3 days ..." 

Your tasks: 

1. Create a function 'printForecast' which takes in an array 'arr' and logs a 
string like the above to the console. Try it with both test datasets. 

2. Use the problem-solving framework: Understand the problem and break it up 
into sub-problems! 

Test data: 
§ Data 1: [17, 21, 23] 
§ Data 2: [12, 5, -5, 0, 4]

- O que deve ser feito
    Receber uma lista de temperaturas maximas
    Mostrar essas temparaturas no display conforme padrão definido

- Duvidas
    Como estas temperatuas serao fornecidas? Serao um array de tipos Number de temparaturas maximas
    Qual padrao deve ser exibido? Conforme exemplo "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

- Passo a passo
    Receber uma array de temperaturas maximas
    Criar uma funcao 'printForecast' que recebe um array array 'arr'
    Iniciar a construção da string
    Percorrer o array pegando cada temperatura e ir montando a string
    Exibir no console
    Chamar a funcao

*/

const maxTemps = [17, 21, 23];

const printForecast = function (arr) {
    let forecast = "...";
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i];
        forecast += ` ${temp}ºC in ${i + 1} days ...`;
    }
    console.log(forecast);
};

printForecast(maxTemps);
