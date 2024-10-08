function table(){

var inputTable = document.getElementById("choix_table").value;
console.log(inputTable)
var inputValueMin = document.getElementById("choix_min").value;
console.log(inputValueMin)
var inputValueMax = document.getElementById("choix_max").value;
console.log(inputValueMax)
var inputValuePas = document.getElementById("choix_pas").value;
console.log(inputValuePas)

document.write(`<p>Voici la table de ${inputTable}</p>`)
for (var variable=inputValueMin;variable<=inputValueMax;variable++)
{
    document.write(`<p> ${inputTable} * ${variable} = ${inputTable*variable} </p>`)
}

}
