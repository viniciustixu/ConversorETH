window.onload = function () {
  const ethPriceStored = localStorage.getItem('valorAtualETH');
  if (ethPriceStored) {
    document.getElementById('valorAtualETH').value = ethPriceStored;
  }

  document.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      converter();
    }
  });

};

function converter() {
  const valorAtualETH = parseFloat(document.getElementById('valorAtualETH').value);
  const valorDesejado = parseFloat(document.getElementById("valorDesejado").value);
  const resultado = document.getElementById("resultado");

  if (!valorAtualETH || !valorDesejado) {
    alert("Por favor, insira os valores corretamente.");
    return;
  }


  localStorage.setItem('valorAtualETH', valorAtualETH);

  const preçoEmEth = (valorDesejado - (valorDesejado * 0.05)) / valorAtualETH;

  navigator.clipboard.writeText(preçoEmEth.toFixed(6));
  resultado.innerText = preçoEmEth.toFixed(6);
}
