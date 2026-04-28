document.getElementById('calcularBtn').addEventListener('click', function() {
    const salarioBruto = parseFloat(document.getElementById('salarioBruto').value) || 0;
    const dependentes = parseInt(document.getElementById('dependentes').value) || 0;
    
    if (salarioBruto <= 0) {
        alert('Digite um salário válido');
        return;
    }

    // Cálculo Portugal 2025 simplificado
    const segurancaSocial = salarioBruto * 0.11;
    let taxaIRS = 0.14; // Base
    
    // Redução por dependentes
    if (dependentes > 0) taxaIRS -= (dependentes * 0.02);
    if (taxaIRS < 0.05) taxaIRS = 0.05;
    
    const irsRetido = salarioBruto * taxaIRS;
    const salarioLiquido = salarioBruto - segurancaSocial - irsRetido;

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.style.display = 'block';
    resultadoDiv.innerHTML = `
        Salário Bruto: € ${salarioBruto.toFixed(2)}<br>
        Segurança Social (11%): - € ${segurancaSocial.toFixed(2)}<br>
        IRS Retido: - € ${irsRetido.toFixed(2)}<br>
        <strong>Salário Líquido: € ${salarioLiquido.toFixed(2)}</strong>
    `;
});
