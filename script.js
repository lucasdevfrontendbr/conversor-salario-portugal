document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btnCalcular').addEventListener('click', calcular);
});

function calcular() {
    const salario = parseFloat(document.getElementById('salario').value);
    const dependentes = parseInt(document.getElementById('dependentes').value) || 0;
    
    if (!salario || salario <= 0) {
        alert('Insira um salário válido');
        return;
    }
    
    const ss = salario * 0.11;
    const deducaoDependente = dependentes * 50;
    const irs = (salario * 0.145) - deducaoDependente;
    const liquido = salario - ss - irs;
    
    const resultDiv = document.getElementById('resultado');
    resultDiv.innerHTML = `
        <strong>> RESULTADO:</strong><br>
        > Bruto: €${salario.toFixed(2)}<br>
        > Seg. Social 11%: -€${ss.toFixed(2)}<br>
        > IRS: -€${irs.toFixed(2)}<br>
        > <strong>Líquido: €${liquido.toFixed(2)}</strong>
    `;
    resultDiv.style.display = 'block';
}
