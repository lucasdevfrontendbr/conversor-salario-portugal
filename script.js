function calcular() {
  const salarioBruto = parseFloat(document.getElementById('salario').value);
  const dependentes = parseInt(document.getElementById('dependentes').value) || 0;
  const resultadoDiv = document.getElementById('resultado');
  
  if (isNaN(salarioBruto) || salarioBruto <= 0) {
    resultadoDiv.innerHTML = 'Digite um salário válido';
    return;
  }

  // 1. DESCONTO SEGURANÇA SOCIAL - 11% em Portugal
  const descontoSS = salarioBruto * 0.11;
  
  // 2. DESCONTO IRS - Cálculo simplificado
  let taxaIRS = 0;
  if (salarioBruto <= 820) taxaIRS = 0;
  else if (salarioBruto <= 1167) taxaIRS = 0.1325;
  else if (salarioBruto <= 1810) taxaIRS = 0.180;
  else if (salarioBruto <= 2510) taxaIRS = 0.225;
  else if (salarioBruto <= 3622) taxaIRS = 0.275;
  else if (salarioBruto <= 5046) taxaIRS = 0.330;
  else if (salarioBruto <= 6778) taxaIRS = 0.375;
  else if (salarioBruto <= 11057) taxaIRS = 0.425;
  else taxaIRS = 0.47;

  // Desconto por dependente: 300€ anuais = 25€ mensais por dependente
  const descontoDependentes = dependentes * 25;
  
  let descontoIRS = (salarioBruto * taxaIRS) - descontoDependentes;
  if (descontoIRS < 0) descontoIRS = 0;

  // 3. TOTAL DE DESCONTOS
  const totalDescontos = descontoSS + descontoIRS;
  
  // 4. SALÁRIO LÍQUIDO
  const salarioLiquido = salarioBruto - totalDescontos;

  // MOSTRA TUDO BONITINHO
  resultadoDiv.innerHTML = `
    <div class="detalhes-calculo">
      <p><span>Salário Bruto:</span> <strong>€ ${salarioBruto.toFixed(2)}</strong></p>
      <p><span>Segurança Social (11%):</span> <strong class="desconto">- € ${descontoSS.toFixed(2)}</strong></p>
      <p><span>IRS Retido:</span> <strong class="desconto">- € ${descontoIRS.toFixed(2)}</strong></p>
      <hr>
      <p class="liquido-final"><span>Salário Líquido:</span> <strong>€ ${salarioLiquido.toFixed(2)}</strong></p>
    </div>
  `;
}
