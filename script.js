function converter() {
  const ethPrice = 2466.66;
  const valorDesejado = parseFloat(document.getElementById("valorDesejado").value);
  const resultado = document.getElementById("resultado");

  const preçoEmEth = (valorDesejado - (valorDesejado * 0.05)) / ethPrice;

  navigator.clipboard.writeText(preçoEmEth.toFixed(6));
  resultado.innerText = preçoEmEth.toFixed(6);

};