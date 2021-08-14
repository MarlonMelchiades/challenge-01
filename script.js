// ---- code validar campos de numeros ---- //

function somenteNumeros(num) {
  var er = /[^0-9.]/;
  er.lastIndex = 0;
  var campo = num;
  if (er.test(campo.value)) {
    campo.value = "";
  }
}

// ----- code step 1 ----- //

const botaoStep1 = document.querySelector("#botao-step1");

botaoStep1.addEventListener("click", (e) => {
  e.preventDefault();
  const textoResposta1 = document.querySelector("#text-response-step1");
  textoResposta1.innerHTML = '<p class="mt-3 mb-0"> hello, world! </p>';
});

// ----- code step 2 ----- //

const botaoStep2 = document.querySelector("#botao-step2");

botaoStep2.addEventListener("click", (e) => {
  e.preventDefault();
  let inputNome = document.querySelector("#name-step2");
  let nomePessoa = inputNome.value;
  let textoResposta2 = document.querySelector("#text-response-step2");
  if (nomePessoa.length == 0) {
    textoResposta2.innerHTML =
      '<p class="mb-0" style="color: red"> tem informação faltando ai, não? </p>';
  } else {
    textoResposta2.innerHTML =
      '<p class="mt-3 mb-0"> Olá ' +
      nomePessoa +
      ", é um prazer te conhecer!</p>";
    nomePessoa = "";
  }
});

// ----- code step 3 ----- //

const botaoStep3 = document.querySelector("#botao-step3");

botaoStep3.addEventListener("click", (e) => {
  e.preventDefault();
  let inputNomeStep3 = document.querySelector("#name-step3");
  let nomeStep3 = inputNomeStep3.value;
  let dinheiroStep3 = document.querySelector("#dinheiro-step3");
  let dinheiro = dinheiroStep3.value;
  let textoResposta3 = document.querySelector("#text-response-step3");
  if (nomeStep3.length == 0 || dinheiro.length == 0) {
    textoResposta3.innerHTML =
      '<p class="mb-0" style="color: red"> tem informação faltando ai, não? </p>';
    nomeStep3 = "";
    dinheiro = "";
  } else {
    textoResposta3.innerHTML =
      '<p class="mb-0"> Olha ' +
      nomeStep3 +
      ", só R$" +
      dinheiro +
      "? Dá pra ganhar mais! </p>";
    inputNomeStep3.value = "";
    dinheiroStep3.value = "";
  }
});

// ----- code step 4 ----- //

const botaoStep4 = document.querySelector("#botao-step4");

botaoStep4.addEventListener("click", (e) => {
  e.preventDefault();
  let n1Step4 = document.querySelector("#n1-step4");
  let n2Step4 = document.querySelector("#n2-step4");
  let n1 = parseInt(n1Step4.value);
  let n2 = parseInt(n2Step4.value);
  let soma = n1 + n2;
  let textoResposta4 = document.querySelector("#text-response-step4");
  if (n1Step4.value.length == 0 || n2Step4.value.length == 0) {
    textoResposta4.innerHTML =
      '<p class="mb-0" style="color: red"> tem informação faltando ai, não? </p>';
  } else {
    textoResposta4.innerHTML =
      '<p class="mt-3 mb-0"> Essa foi fácil! A soma deu ' + soma + "!</p>";
  }
});

// ----- code step 5 ----- //

const botaoStep5 = document.querySelector("#botao-step5");

botaoStep5.addEventListener("click", (e) => {
  e.preventDefault();
  let nota1Step5 = document.querySelector("#nota1-step5");
  let nota2Step5 = document.querySelector("#nota2-step5");
  let nota1 = parseFloat(nota1Step5.value);
  let nota2 = parseFloat(nota2Step5.value);
  let media = (nota1 + nota2) / 2;
  let textoResposta5 = document.querySelector("#text-response-step5");
  if (nota1Step5.value.length == 0 || nota2Step5.value.length == 0) {
    textoResposta5.innerHTML =
      '<p class="mb-0" style="color: red"> tem informação faltando ai, não? </p>';
  } else {
    textoResposta5.innerHTML =
      '<p class="mt-3 mb-0"> A média desse aluno então vai ser ' +
      media.toFixed(1) +
      ", de nada!</p>";
  }
});

// ----- code step 6 ----- //

const botaoStep6 = document.querySelector("#botao-step6");

botaoStep6.addEventListener("click", (e) => {
  e.preventDefault();
  let numero = document.querySelector("#numero-step6");
  let numeroValor = parseFloat(numero.value);
  let antecessor = numeroValor - 1;
  let sucessor = numeroValor + 1;
  let textoResposta6 = document.querySelector("#text-response-step6");
  if (numero.value.length == 0) {
    textoResposta6.innerHTML =
      '<p class="mb-0" style="color: red"> tem informação faltando ai, não? </p>';
  } else {
    textoResposta6.innerHTML =
      '<p class="mt-3 mb-0"> O antecessor é ' +
      antecessor +
      " e o sucessor é " +
      sucessor +
      "! </p>";
  }
});

// ----- code step 7 ----- //

const botaoStep7 = document.querySelector("#botao-step7");

botaoStep7.addEventListener("click", (e) => {
  e.preventDefault();
  let numero = document.querySelector("#numero-step7");
  let numeroValor = parseFloat(numero.value);
  let dobroStep7 = numeroValor * 2;
  let tercaStep7 = numeroValor / 3;
  let textoResposta7 = document.querySelector("#text-response-step7");
  if (numero.value.length == 0) {
    textoResposta7.innerHTML =
      '<p class="mb-0" style="color: red"> tem informação faltando ai, não? </p>';
  } else {
    textoResposta7.innerHTML =
      '<p class="mt-3 mb-0"> O dobro então de ' +
      numeroValor +
      " é " +
      dobroStep7 +
      " e a terça parte é " +
      tercaStep7 +
      "! </p>";
  }
});

// ----- code step 8 ----- //

const botaoStep8 = document.querySelector("#botao-step8");

botaoStep8.addEventListener("click", (e) => {
  e.preventDefault();
  let numero = document.querySelector("#numero-step8");
  let numeroM = parseFloat(numero.value);
  let numeroKm = numeroM / 1000;
  let numeroHm = numeroM / 100;
  let numeroDam = numeroM / 10;
  let numeroDm = numeroM * 10;
  let numeroCm = numeroM * 10000;
  let numeroMm = numeroM * 100000;
  let textoResposta8 = document.querySelector("#text-response-step8");
  if (numero.value.length == 0) {
    textoResposta8.innerHTML =
      '<p class="mb-0" style="color: red"> tem informação faltando ai, não? </p>';
  } else {
    textoResposta8.innerHTML =
    "<p> A distância de " +
    numeroM +
    "m corresponde a:</p>" +
    "<ul>" +
    '<li class="me-4">' +
    numeroKm +
    "Km </li>" +
    '<li class="me-4">' +
    numeroHm +
    "Hm</li>" +
    '<li class="me-4">' +
    numeroDam +
    "Dam</li>" +
    '<li class="me-4">' +
    numeroDm +
    "dm</li>" +
    '<li class="me-4">' +
    numeroCm +
    "cm</li>" +
    '<li class="me-4">' +
    numeroMm +
    "mm</li>" +
    "</ul>";
  }
});

// ----- code step 9 ----- //

const botaoStep9 = document.querySelector("#botao-step9");

botaoStep9.addEventListener("click", (e) => {
  e.preventDefault();
  let quantia = document.querySelector("#numero-step9");
  let quantiaReais = parseFloat(quantia.value);
  let textoResposta9 = document.querySelector("#text-response-step9");
  let url = "https://economia.awesomeapi.com.br/last/USD-BRL";
  let request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.onload = function () {
    if (request.readyState == 4 && request.status == 200) {
      const resposta = JSON.parse(request.responseText);
      const valores = resposta.USDBRL;
      if (quantia.value.length == 0) {
        textoResposta9.innerHTML =
          '<p class="mb-0" style="color: red"> tem informação faltando ai, não? </p>';
      } else {
        let cotacaoDolar = parseFloat(valores.low);
        let calculoCotacao = quantiaReais / cotacaoDolar;
        let quantiaFormatada = quantiaReais.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        });
        let formatoDolarPraReal = cotacaoDolar.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        });
        let formatoInputPraDolar = calculoCotacao.toLocaleString("en", {
          style: "currency",
          currency: "USD",
        });
        textoResposta9.innerHTML =
          '<p class="mt-3 mb-0"> A cotação do dólar atualmente está a ' +
          formatoDolarPraReal +
          ". </br> Então " +
          quantiaFormatada +
          " em dólares, seria de " +
          formatoInputPraDolar +
          "!</p>";
        quantia.value = "";
      }
    }
  };
  request.onerror = function () {
    console.log("Erro:" + request);
  };
  request.send();
});

// ----- code step 10 ----- //

const botaoStep10 = document.querySelector("#botao-step10");

botaoStep10.addEventListener("click", (e) => {
  e.preventDefault();
  let inputAltura = document.querySelector("#altura-step10");
  let inputLargura = document.querySelector("#largura-step10");
  let altura = parseFloat(inputAltura.value);
  let largura = parseFloat(inputLargura.value);
  let metroQuadrado = altura * largura;
  let litrosParaParede = metroQuadrado / 2;
  let textoResposta10 = document.querySelector("#text-response-step10");
  if (inputAltura.value.length == 0 || inputLargura.value.length == 0) {
    textoResposta10.innerHTML =
      '<p class="mb-0" style="color: red"> tem informação faltando ai, não? </p>';
  } else {
    textoResposta10.innerHTML =
      '<p class="mt-3 mb-0"> Você vai precisar de ' +
      litrosParaParede +
      "L de tinta pra pintar " +
      metroQuadrado +
      "m², beleza?</p>";
  }
});
