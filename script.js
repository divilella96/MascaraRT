document.getElementById('inputCodigo').addEventListener('input', function () {
  const input = this.value.replace(/\D/g, ''); // Remove tudo que não é número
  const regex = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{4})(\d{4})(\d{4})$/;

  if (regex.test(input)) {
    const formatted = input.replace(regex, '$1 $2-$3-$4 $5:$6 $7 $8 $9');
    document.getElementById('codigoFormatado').textContent = formatted;
  } else {
    document.getElementById('codigoFormatado').textContent = 'Formato inválido ou incompleto.';
  }
});
