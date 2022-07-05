const form = document.querySelector('#formulario');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputPeso = document.querySelector('#peso');
  const inputAltura = document.querySelector('#altura');
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);
  imc = calculaIMC(peso, altura);
  setIMC(imc);
  
});

const setIMC = (imc) => {

  if (imc < 18.5) {
    setResultado('Seu IMC é ' + imc + '\n' +' e você está abaixo do peso');
  }
  else if (imc < 25 && imc >= 18.5) {
    setResultado('Seu IMC é ' + imc + '\n' +' e você está no peso ideal');
  }
  else if (imc < 30 && imc >= 25) {
    setResultado('Seu IMC é ' + imc + '\n' + 'e você está com sobrepeso');
  }
  else if (imc < 35 && imc >= 30) {
    setResultado('Seu IMC é ' + imc + '\n' + 'e você está com Obesidade Grau I');
  }
  else if (imc < 40 && imc >= 35) { 
    setResultado('Seu IMC é ' + imc + '\n' +'e você está com Obesidade Grau II'); 
  }
  else if (imc >= 40) {
    setResultado('Seu IMC é ' + imc + '\n' + 'e você está com Obesidade Grau III');
  }
  return 0;
}


const calculaIMC = (peso, altura) => {
  const imc = peso / (altura * altura);
  return imc.toFixed(2);
};

const criaP = (texto) => {
  const p = document.createElement('p');
  //p.classList.add(classe);
  p.innerHTML = texto;
  return p;
};

const setResultado = (msg) => {
  console.log(msg);
  const resultado = document.querySelector('#resultado');
  const texto = msg;
  resultado.innerHTML = ''; // Limpia el resultado
  const p = criaP(texto)
  resultado.appendChild(p); // Agrega el p al resultado
};


