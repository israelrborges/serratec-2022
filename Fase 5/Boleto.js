const prompt = require ('prompt-sync')();

  console.log("\n");
  console.log(" +++++++++++++ Boleto ++++++++++++++ \n");
  console.log("\n");

var dataAtual = new Date();
var dia = dataAtual.getDate();
var boleto = prompt ("Digite o número do boleto ==>");
var data = prompt ("Digite a data de pagamento ==>");
  
  console.log("Data de hoje:", dia);
  console.log("Número do boleto:", boleto);
  console.log("Dia de Pagamento:", data);

if (data < 9 && data > 14) {;
    console.log("Desconto na próxima mensalidade?", true);
} else { 
    console.log("Desconto na próxima mensalidade?", false);
} 
