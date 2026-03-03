let p = document.getElementById("peso");
let a = document.getElementById("altura");
let res = document.getElementById("res");

function CalcularIMC() {
  let categoria = "";
  const peso = parseFloat(p.value);
  const alt = parseFloat(a.value);
  const altura = alt / 100;
  if (isNaN(peso) || isNaN(altura)) {
    alert("[ERROR] Digite um valor válido");
    return;
  }
  let imc = peso / altura ** 2;
      if (imc < 18.5) {
        categoria = "Baixo peso";
      } else {
        if (imc < 25) {
          categoria = "Peso adequado!";
        } else {
          if (imc < 30) {
            categoria = "Sobrepeso";
          } else {
            if (imc < 35) {
              categoria = "Obesidade(grau I)";
            } else {
              if (imc < 40) {
                categoria = "Obesidade(grau II)";
              } else {
                if (imc > 40) categoria = "Obesidade(grau III)";
              }
            }
          }
        }
      }

  res.innerHTML =
    "Seu IMC é " + imc.toFixed(2) + " <br/>Sua categoria: " + categoria;
}
