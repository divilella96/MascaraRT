document.getElementById('inputCodigo').addEventListener('input', function () {
  const input = this.value.replace(/\D/g, ''); // Remove tudo que não é número
  const regex = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{4})(\d{4})(\d{4})$/;

  // Formatar o código
  if (regex.test(input)) {
    const formatted = input.replace(regex, '$1 $2-$3-$4 $5:$6 $7 $8 $9');
    document.getElementById('codigoFormatado').textContent = formatted;

    // Gerar código de barras
    JsBarcode("#barcode", input, {
      format: "CODE128",
      lineColor: "#000",
      width: 2,
      height: 50,
      displayValue: false, // Não exibe o texto abaixo do código de barras
    });
  } else {
    document.getElementById('codigoFormatado').textContent = 'Formato inválido ou incompleto.';
    document.getElementById('barcode').innerHTML = ''; // Limpa o código de barras
  }
});