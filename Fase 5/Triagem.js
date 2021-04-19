const prompt = require('prompt-sync') ();
  
  console.log("\n");
  console.log(" +++++++++++++ Triagem ++++++++++++++ \n");
  console.log("\n");
var nome = prompt ("Digite o nome do paciente ==>");
var vacina = prompt (" O paciente já foi vacinado? (sim ou não) ==>");

if (vacina == "sim"){;
  console.log("Sujeito à infecção?", false);
} else {
  console.log("Sujeito à infecção?", true);
}
