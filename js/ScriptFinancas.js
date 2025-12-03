const marca = {
    TOYOTA: "Toyota",
    FIAT: "Fiat",
    FORD: "Ford",
    HONDA: "Honda"
};

const tipoCambio = {
    MANUAL: "Manual",
    AUTOMATICO: "Automático"
};

const tipoCombustivel = {
    GASOLINA: "Gasolina",
    ETANOL: "Etanol",
    ELETRICO: "Elétrico",
    HIBRIDO: "Híbrido",
    FLEX: "Gasolina/Etanol"
};

class Carro {
    nome = "";
    marca = marca;
    cilindrada = 0.0;
    cambio = tipoCambio;
    combustivel = tipoCombustivel;
    preco = 0.0;
    foto = "";
    constructor(nome, marcas, cilindrada, tipoCambio, tipoCombustivel, preco, foto) {
        this.nome = nome;
        this.marca = marcas;
        this.cilindrada = cilindrada;
        this.cambio = tipoCambio;
        this.combustivel = tipoCombustivel;
        this.preco = preco;
        this.foto = foto;
    }
    getNome() { return this.nome; }
    getMarca() { return this.marca }
    getCilindrada() { return this.cilindrada; }
    getCambio() { return this.cambio; }
    getCombustivel() { return this.combustivel; }
    getPreco() { return this.preco; }
    getFoto() { return this.foto; }
}
const carrosToyota = [
    new Carro("Corolla", marca.TOYOTA, 1.8, tipoCambio.AUTOMATICO, tipoCombustivel.FLEX, 115000, "../img/corolla.webp"),
    new Carro("Yaris", marca.TOYOTA, 1.5, tipoCambio.AUTOMATICO, tipoCombustivel.FLEX, 85000, "../img/yaris.webp"),
    new Carro("Hilux", marca.TOYOTA, 2.8, tipoCambio.AUTOMATICO, tipoCombustivel.GASOLINA, 280000, "../img/hilux.webp"),
    new Carro("RAV4", marca.TOYOTA, 2.5, tipoCambio.AUTOMATICO, tipoCombustivel.HIBRIDO, 195000, "../img/rav4.webp"),
    new Carro("Etios", marca.TOYOTA, 1.5, tipoCambio.MANUAL, tipoCombustivel.FLEX, 75000, "../img/etios.webp"),
    new Carro("Camry", marca.TOYOTA, 2.5, tipoCambio.AUTOMATICO, tipoCombustivel.HIBRIDO, 245000, "../img/camry.webp"),
    new Carro("Fortuner", marca.TOYOTA, 2.8, tipoCambio.AUTOMATICO, tipoCombustivel.GASOLINA, 320000, "../img/fortuner.webp"),
];
const carrosFiat = [
    new Carro("Argo", marca.FIAT, 1.0, tipoCambio.MANUAL, tipoCombustivel.FLEX, 65000, "../img/argo.webp"),
    new Carro("Mobi", marca.FIAT, 1.0, tipoCambio.MANUAL, tipoCombustivel.FLEX, 60000, "../img/mobi.webp"),
    new Carro("Toro", marca.FIAT, 2.0, tipoCambio.AUTOMATICO, tipoCombustivel.GASOLINA, 165000, "../img/toro.webp"),
    new Carro("Pulse", marca.FIAT, 1.3, tipoCambio.AUTOMATICO, tipoCombustivel.FLEX, 125000, "../img/pulse.webp"),
    new Carro("Strada", marca.FIAT, 1.4, tipoCambio.MANUAL, tipoCombustivel.FLEX, 105000, "../img/strada.webp"),
    new Carro("Cronos", marca.FIAT, 1.3, tipoCambio.AUTOMATICO, tipoCombustivel.FLEX, 95000, "../img/cronos.webp"),
    new Carro("Fastback", marca.FIAT, 1.3, tipoCambio.AUTOMATICO, tipoCombustivel.FLEX, 135000, "../img/fastback.webp"),
];
const carrosFord = [
    new Carro("Fiesta", marca.FORD, 1.5, tipoCambio.MANUAL, tipoCombustivel.GASOLINA, 85000, "../img/fiesta.webp"),
    new Carro("EcoSport", marca.FORD, 1.5, tipoCambio.AUTOMATICO, tipoCombustivel.FLEX, 125000, "../img/ecosport.webp"),
    new Carro("Ranger", marca.FORD, 2.0, tipoCambio.AUTOMATICO, tipoCombustivel.GASOLINA, 185000, "../img/ranger.webp"),
    new Carro("Territory", marca.FORD, 1.5, tipoCambio.AUTOMATICO, tipoCombustivel.GASOLINA, 145000, "../img/territory.webp"),
    new Carro("Ka", marca.FORD, 1.0, tipoCambio.MANUAL, tipoCombustivel.FLEX, 55000, "../img/ka.webp"),
    new Carro("Mustang", marca.FORD, 5.0, tipoCambio.AUTOMATICO, tipoCombustivel.GASOLINA, 425000, "../img/mustang.webp"),
    new Carro("Edge", marca.FORD, 2.0, tipoCambio.AUTOMATICO, tipoCombustivel.GASOLINA, 225000, "../img/edge.webp"),
];
const carrosHonda = [
    new Carro("Civic", marca.HONDA, 2.0, tipoCambio.AUTOMATICO, tipoCombustivel.GASOLINA, 155000, "../img/civic.webp"),
    new Carro("CR-V", marca.HONDA, 1.5, tipoCambio.AUTOMATICO, tipoCombustivel.GASOLINA, 185000, "../img/crv.webp"),
    new Carro("Accord", marca.HONDA, 2.0, tipoCambio.AUTOMATICO, tipoCombustivel.GASOLINA, 210000, "../img/accord.webp"),
    new Carro("Fit", marca.HONDA, 1.5, tipoCambio.AUTOMATICO, tipoCombustivel.FLEX, 95000, "../img/fit.webp"),
    new Carro("WR-V", marca.HONDA, 1.5, tipoCambio.AUTOMATICO, tipoCombustivel.FLEX, 135000, "../img/wrv.webp"),
    new Carro("Pilot", marca.HONDA, 3.5, tipoCambio.AUTOMATICO, tipoCombustivel.GASOLINA, 280000, "../img/pilot.webp"),
];

const carros = [carrosToyota, carrosFiat, carrosFord, carrosHonda];

// Cria um objeto URLSearchParams com base na string de consulta da URL atual
const urlParams = new URLSearchParams(window.location.search);

// Obtém o valor do parâmetro 'nome'
const nomeCarro = urlParams.get('nomeCarro');

console.log("Nome do carro selecionado para financiamento:", nomeCarro);

// Função para encontrar o carro pelo nome
function encontrarCarroPorNome(nome) {
    for (let i = 0; i < carros.length; i++) {
        for (let j = 0; j < carros[i].length; j++) {
            if (carros[i][j].getNome() === nome) {
                document.getElementById('fotoCarro').src = carros[i][j].getFoto();
                return carros[i][j];
            }
        }
    }
    return null;
}

// Função para formatar valores monetários em reais (R$)
function formatoMoeda(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Exibe o nome e preço do carro selecionado na página
const carroSelecionado = encontrarCarroPorNome(nomeCarro);
if (carroSelecionado) {
    document.querySelector('.nomeCarro').textContent = carroSelecionado.getNome();
    document.querySelector('.marcaCarro').textContent = carroSelecionado.getMarca();
    document.querySelector('.precoCarro').textContent = formatoMoeda(carroSelecionado.getPreco());
} else {
    document.querySelector('.nomeCarro').textContent = "Carro não encontrado";
    document.querySelector('.marcaCarro').textContent = "-";
    document.querySelector('.precoCarro').textContent = "-";
}

function jurosBaseadoValorEntradaEMeses(valorCarro, valorEntrada, meses) {
    const percentualEntrada = (valorEntrada / valorCarro) * 100;
    if (percentualEntrada >= 60 && meses <= 36) {
        return 0; // 0% ao mês
    } else if (percentualEntrada >= 60 && meses > 36) {
        return 0.75; // 0,75% ao mês
    } else if (percentualEntrada >= 50 && percentualEntrada < 60 && meses <= 48) {
        return 1.5; // 1,5% ao mês
    } else if (percentualEntrada >= 50 && percentualEntrada < 60 && meses > 48) {
        return 2.5; // 2,5% ao mês  
    } else if (percentualEntrada >= 25 && percentualEntrada < 50) {
        return 3; // 3% ao mês
    } else {
        return 6; // 6% ao mês
    }
}

function calcularFinanciamento() {
    const valorCarro = parseFloat(encontrarCarroPorNome(nomeCarro).getPreco());
    const valorEntrada = parseFloat(document.getElementById('valorEntrada').value);
    const prazoMeses = parseInt(document.getElementById('prazoMeses').value);
    const taxaJuros = jurosBaseadoValorEntradaEMeses(valorCarro, valorEntrada, prazoMeses);

    if (isNaN(valorCarro) || isNaN(valorEntrada) || isNaN(prazoMeses) || isNaN(taxaJuros) || prazoMeses <= 0 || valorEntrada > valorCarro) {
        document.getElementById('resultado').innerHTML = '<h2>Resultado:</h2><p style="color: red;">Por favor, insira valores válidos. O valor da entrada não pode ser maior que o valor do carro.</p>';
        return;
    }

    const valorFinanciado = valorCarro - valorEntrada;
    const i = taxaJuros / 100;
    let parcelaMensal = 0;

    if (i > 0) {
        const fator = Math.pow((1 + i), prazoMeses);
        parcelaMensal = (valorFinanciado * i * fator) / (fator - 1);
    } else {
        parcelaMensal = valorFinanciado / prazoMeses;
    }

    const totalJuros = (parcelaMensal * prazoMeses) - valorFinanciado;
    const totalPagar = valorEntrada + valorFinanciado + totalJuros;

    document.getElementById('resultado').innerHTML = `
        <h2>Resultado do Financiamento:</h2>
        <p>Valor Financiado: <strong>${formatoMoeda(valorFinanciado)}</strong></p>
        <p>Parcela Mensal (Tabela Price): <strong>${formatoMoeda(parcelaMensal)}</strong></p>
        <p>Número de Parcelas: <strong>${prazoMeses}</strong></p>
        <p>Total de Juros Pagos: <strong>${formatoMoeda(totalJuros)}</strong></p>
        <p>Custo Total Final (Entrada + Parcelas): <strong>${formatoMoeda(totalPagar)}</strong></p>
    `;
}

function mudarTaxa() {
    const valorCarro = parseFloat(encontrarCarroPorNome(nomeCarro).getPreco());
    const valorEntrada = parseFloat(document.getElementById('valorEntrada').value);
    const prazoMeses = parseInt(document.getElementById('prazoMeses').value);
    const taxaJuros = jurosBaseadoValorEntradaEMeses(valorCarro, valorEntrada, prazoMeses);
    let spanJuros = document.getElementById('juros');
    if (isNaN(taxaJuros)) {
        spanJuros.textContent = `--`;
        return;
    } else
        spanJuros.textContent = `${taxaJuros.toFixed(2)}% ao mês`;
}