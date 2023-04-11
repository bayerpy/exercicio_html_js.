const form = document.getElementById('form-val');
const resultado = document.getElementById('resultado');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const campoA = parseInt(document.getElementById('campo-a').value);
  const campoB = parseInt(document.getElementById('campo-b').value);
  
  if (campoB > campoA) {
    resultado.innerHTML = 'Formulário válido.';
  } else {
    resultado.innerHTML = 'Formulário inválido.';
  }
});
