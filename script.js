function calcularSalario() {
    const salarioBruto = parseFloat(document.getElementById('salarioBruto').value);
    const dependentes = parseInt(document.getElementById('dependentes').value) || 0;
    const resultadoDiv = document.getElementById('resultado');

    if (isNaN(salarioBruto) || salarioBruto <= 0) {
        alert('Digite um salário válido!');
        return;
    }

    const taxaSS = 0.11;
    const descontoSS = salarioBruto * taxaSS;
    
    let taxaIRS = 0.145;
    if (salarioBruto > 2000) taxaIRS = 0.185;
    if (salarioBruto > 3000) taxaIRS = 0.25;
    
    taxaIRS -= dependentes * 0.005;
    if (taxaIRS < 0) taxaIRS = 0;
    
    const descontoIRS = salarioBruto * taxaIRS;
    const salarioLiquido = salarioBruto - descontoSS - descontoIRS;

    resultadoDiv.style.display = 'block';
    resultadoDiv.innerHTML = `
        <p><strong>Salário Bruto:</strong> €${salarioBruto.toFixed(2)}</p>
        <p><strong>Desconto SS (11%):</strong> -€${descontoSS.toFixed(2)}</p>
        <p><strong>Desconto IRS (${(taxaIRS*100).toFixed(1)}%):</strong> -€${descontoIRS.toFixed(2)}</p>
        <p><strong>Dependentes:</strong> ${dependentes}</p>
        <hr style="margin: 10px 0;">
        <p style="font-size: 22px; color: #046A38;"><strong>Salário Líquido: €${salarioLiquido.toFixed(2)}</strong></p>
    `;
}