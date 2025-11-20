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
    new Carro("Corolla", marca.TOYOTA, 1.8, tipoCambio.AUTOMATICO, tipoCombustivel.FLEX, 115000, "../img/corolla.jpg"),
    new Carro("Yaris", marca.TOYOTA, 1.5, tipoCambio.AUTOMATICO, tipoCombustivel.FLEX, 85000, "../img/yaris.jpg"),
    new Carro("Hilux", marca.TOYOTA, 2.8, tipoCambio.AUTOMATICO, tipoCombustivel.GASOLINA, 280000, "../img/hilux.jpg"),
    new Carro("RAV4", marca.TOYOTA, 2.5, tipoCambio.AUTOMATICO, tipoCombustivel.HIBRIDO, 195000, "img/rav4.jpg"),
    new Carro("Etios", marca.TOYOTA, 1.5, tipoCambio.MANUAL, tipoCombustivel.FLEX, 75000, "../img/etios.jpg"),
    new Carro("Camry", marca.TOYOTA, 2.5, tipoCambio.AUTOMATICO, tipoCombustivel.HIBRIDO, 245000, "../img/camry.jpg"),
    new Carro("Fortuner", marca.TOYOTA, 2.8, tipoCambio.AUTOMATICO, tipoCombustivel.GASOLINA, 320000, "../img/fortuner.jpg"),
];
const carrosFiat = [
    new Carro("Argo", marca.FIAT, 1.0, tipoCambio.MANUAL, tipoCombustivel.FLEX, 65000, "../img/argo.jpg"),
    new Carro("Mobi", marca.FIAT, 1.0, tipoCambio.MANUAL, tipoCombustivel.FLEX, 60000, "../img/mobi.jpg"),
    new Carro("Toro", marca.FIAT, 2.0, tipoCambio.AUTOMATICO, tipoCombustivel.GASOLINA, 165000, "../img/toro.jpg"),
    new Carro("Pulse", marca.FIAT, 1.3, tipoCambio.AUTOMATICO, tipoCombustivel.FLEX, 125000, "../img/pulse.jpg"),
    new Carro("Strada", marca.FIAT, 1.4, tipoCambio.MANUAL, tipoCombustivel.FLEX, 105000, "../img/strada.jpg"),
    new Carro("Cronos", marca.FIAT, 1.3, tipoCambio.AUTOMATICO, tipoCombustivel.FLEX, 95000, "../img/cronos.jpg"),
    new Carro("Fastback", marca.FIAT, 1.3, tipoCambio.AUTOMATICO, tipoCombustivel.FLEX, 135000, "../img/fastback.jpg"),
];
const carrosFord = [
    new Carro("Fiesta", marca.FORD, 1.5, tipoCambio.MANUAL, tipoCombustivel.GASOLINA, 85000, "../img/fiesta.jpg"),
    new Carro("EcoSport", marca.FORD, 1.5, tipoCambio.AUTOMATICO, tipoCombustivel.FLEX, 125000, "../img/ecosport.jpg"),
    new Carro("Ranger", marca.FORD, 2.0, tipoCambio.AUTOMATICO, tipoCombustivel.GASOLINA, 185000, "../img/ranger.jpg"),
    new Carro("Territory", marca.FORD, 1.5, tipoCambio.AUTOMATICO, tipoCombustivel.GASOLINA, 145000, "../img/territory.jpg"),
    new Carro("Ka", marca.FORD, 1.0, tipoCambio.MANUAL, tipoCombustivel.FLEX, 55000, "../img/ka.jpg"),
    new Carro("Mustang", marca.FORD, 5.0, tipoCambio.AUTOMATICO, tipoCombustivel.GASOLINA, 425000, "../img/mustang.jpg"),
    new Carro("Edge", marca.FORD, 2.0, tipoCambio.AUTOMATICO, tipoCombustivel.GASOLINA, 225000, "../img/edge.jpg"),
];
const carrosHonda = [
    new Carro("HB20", marca.HONDA, 1.0, tipoCambio.MANUAL, tipoCombustivel.FLEX, 75000, "../img/hb20.jpg"),
    new Carro("Civic", marca.HONDA, 2.0, tipoCambio.AUTOMATICO, tipoCombustivel.GASOLINA, 155000, "../img/civic.jpg"),
    new Carro("CR-V", marca.HONDA, 1.5, tipoCambio.AUTOMATICO, tipoCombustivel.GASOLINA, 185000, "../img/crv.jpg"),
    new Carro("Accord", marca.HONDA, 2.0, tipoCambio.AUTOMATICO, tipoCombustivel.GASOLINA, 210000, "img/accord.jpg"),
    new Carro("Fit", marca.HONDA, 1.5, tipoCambio.AUTOMATICO, tipoCombustivel.FLEX, 95000, "../img/fit.jpg"),
    new Carro("WR-V", marca.HONDA, 1.5, tipoCambio.AUTOMATICO, tipoCombustivel.FLEX, 135000, "../img/wrv.jpg"),
    new Carro("Pilot", marca.HONDA, 3.5, tipoCambio.AUTOMATICO, tipoCombustivel.GASOLINA, 280000, "../img/pilot.jpg"),
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
                let marcaCarro = document.createElement("p");
                marcaCarro.append(carros[i][j].getMarca());
                let cilindradaCarro = document.createElement("p");
                cilindradaCarro.append(carros[i][j].getCilindrada());
                let cambioCarro = document.createElement("p");
                cambioCarro.append(carros[i][j].getCambio());
                let combustivelCarro = document.createElement("p");
                combustivelCarro.append(carros[i][j].getCombustivel());
                let precoCarro = document.createElement("p");
                precoCarro.className = "precoCarro";
                precoCarro.append(`R$ ${carros[i][j].getPreco().toFixed(2)}`);

                carro.appendChild(imgCarro);
                carro.appendChild(nomeCarro);
                carro.appendChild(marcaCarro);
                carro.appendChild(cilindradaCarro);
                carro.appendChild(cambioCarro);
                carro.appendChild(combustivelCarro);
                carro.appendChild(precoCarro);

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