// NÃO MEXA AQUI, MATENHA DO JEITO QUE ESTÁ!
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

let divCarros = document.getElementById("carros");

function elementosCarros(marca) {
    let tituloCategoria = document.createElement("h2");
    tituloCategoria.className = "marca";
    tituloCategoria.id = marca;
    tituloCategoria.append(marca);
    divCarros.appendChild(tituloCategoria);

    let divCategoriaCarro = document.createElement("div");
    divCategoriaCarro.className = "categoriaCarro";

    for (let i = 0; i < carros.length; ++i) {
        for (let j = 0; j < carros[i].length; ++j) {
            if (carros[i][j].getMarca() !== marca) {
                continue;
            } else {
                let carro = document.createElement("div");
                carro.className = "carroCatalogo";

                let imgCarro = document.createElement("img");
                imgCarro.src = carros[i][j].getFoto();
                imgCarro.alt = "Foto Carro ";
                let nomeCarro = document.createElement("h3");
                nomeCarro.append(carros[i][j].getNome());
                let dadosCarro = document.createElement("p");
                dadosCarro.innerHTML = (`
                    <b>Marca:</b> ${carros[i][j].getMarca()} <br>
                    <b>Motor:</b> ${carros[i][j].getCilindrada().toFixed(1)} <br>
                    <b>Câmbio:</b> ${carros[i][j].getCambio()} <br>
                    <b>Combustível:</b> ${carros[i][j].getCombustivel()} <br>
                `);
                let precoCarro = document.createElement("p");
                precoCarro.className = "precoCarro";
                precoCarro.append(`R$ ${carros[i][j].getPreco().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
                let botaoComprar = document.createElement("button");
                botaoComprar.className = "botaoComprar";
                botaoComprar.append("Comprar");
                botaoComprar.setAttribute("type", "button");
                botaoComprar.addEventListener("click", function () {
                    // Cria um objeto URLSearchParams para gerenciar os parâmetros
                    const params = new URLSearchParams();
                    params.set('nomeCarro', carros[i][j].getNome()); // Adiciona o primeiro parâmetro

                    // Constrói a URL completa para a página de destino
                    // Certifique-se de que a URL de destino está correta, por exemplo, "pagina_destino.html"
                    const urlDestino = `indexFinancas.html?${params.toString()}`;

                    // Redireciona o navegador para a nova URL
                    window.location.href = urlDestino;
                });

                carro.appendChild(imgCarro);
                carro.appendChild(nomeCarro);
                carro.appendChild(dadosCarro);
                carro.appendChild(precoCarro);
                carro.appendChild(botaoComprar);

                divCategoriaCarro.appendChild(carro);
                divCarros.appendChild(divCategoriaCarro);
            }

        }
    }
}

for (let i = 0; i < carros.length; i++) {
    switch (carros[i][0].getMarca()) {
        case marca.TOYOTA:
            elementosCarros(marca.TOYOTA);
            break;

        case marca.FIAT:
            elementosCarros(marca.FIAT);
            break;

        case marca.FORD:
            elementosCarros(marca.FORD);
            break;

        case marca.HONDA:
            elementosCarros(marca.HONDA);
            break;

        default:
            console.log("Marca não encontrada");
            break;
    }
}