const prompt = require ('prompt-sync')();

  console.log("\n");
  console.log(" +++++++++++++ Cardápio ++++++++++++++ \n");
  console.log("\n");

  console.log("1 - Hambúrguer" );
  console.log("2 - X-Burguer");
  console.log("3 - X-Bacon");
  console.log("4 - X-TudoServidor público");
  console.log("5 - Triplo X-Tudo");
  var pedido = prompt ("Digite o número do seu sanduíche ==>");

  var q = "queijo"
  var a = "alaface"
  var t = "tomate"
  var p = "picles"
  var b ="bacon"
  var c = "cebola"
  var o = "ovo frito"
    
    console.log("Q - Queijo" );
    console.log("A - Alface");
    console.log("T - Tomate");
    console.log("P - Picles");
    console.log("B - Bacon");
    console.log("C - Cebola");
    console.log("O - Ovo frito");

  var complemtento = prompt ("Digite as letras dos complementos que você deseja (EX.: qbat) ==>");

  console.log("você escolheu como complemento:", complemtento);

  console.log("Seu pedido foi:", pedido,"com", complemtento);
