const marcas = ["Toyota", "Fiat", "Ford", "Honda"];

const tiposCambio = ["Manual", "Automático"];

const tiposCombustivel = [
    "Gasolina",
    "Etanol",
    "Gasolina/Etanol",
    "Elétrico",
    "Híbrido"
];

const cilindradas = [
    "1.0",
    "1.3",
    "1.4",
    "1.8",
    "2.0",
    "2.5",
    "2.8",
];


class Carro {
    nome = "";
    marca = marcas;
    cilindrada = 0.0;
    cambio = tiposCambio;
    combustivel = tiposCombustivel;
    preco = 0.0;
    foto = "";
    constructor(nome, marca, cilindrada, cambio, combustivel, preco, foto) {
        this.nome = nome;
        this.marca = marca;
        this.cilindrada = cilindrada;
        this.cambio = cambio;
        this.combustivel = combustivel;
        this.preco = preco;
        this.foto = foto;
    }
    getNome() { return this.nome; }
    getMarca() { return this.marca; }
    getCilindrada() { return this.cilindrada; }
    getCambio() { return this.cambio; }
    getCombustivel() { return this.combustivel; }
    getPreco() { return this.preco; }
    getFoto() { return this.foto; }
}

function popularSelect(lista, select) {
    lista.forEach(item => {
        const opção = document.createElement("option");
        opção.value = item;
        opção.textContent = item;
        select.appendChild(opção);
    });
}

function validarEntrada(input) {
    if (input.value.trim() === "") {
        input.style.border = "2px solid red";
        input.style.backgroundColor = "#ffdddd";
        return false;
    } else {
        return true;
    }
}

function estaCadastrado(carroCriado) {
    const temDadosCarro = carroCriado.getNome() !== "" && carroCriado.getMarca() !== "" &&
        carroCriado.getCilindrada() !== 0.0 && carroCriado.getCambio() !== "" &&
        carroCriado.getCombustivel() !== "" && carroCriado.getPreco() !== 0.0;
    if (temDadosCarro) {
        return true;
    }
    return false;
}

function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function informacoesCarro(carroCriado) {
    const sectionCarroCadastrado = document.querySelector(".carro-cadastrado");
    const divCarroInfo = document.createElement("div");
    divCarroInfo.className = "carro-info";
    const fotoCarro = document.createElement("img");
    const infoVendedor = document.createElement("p");
    const infoCarro = document.createElement("p");

    fotoCarro.src = carroCriado.getFoto();
    fotoCarro.alt = `Foto do carro ${carroCriado.getNome()}`;
    infoVendedor.textContent = `Vendedor: ${username.value} | Email: ${email.value} | Telefone: ${telefone.value}`;
    infoCarro.innerHTML =
        `
            Nome do carro: ${carroCriado.getNome()} <br>
            Marca: ${carroCriado.getMarca()} <br>
            Motor: ${carroCriado.getCilindrada()} <br>
            Câmbio: ${carroCriado.getCambio()} <br>
            Combustível: ${carroCriado.getCombustivel()} <br>
            Preço: R$ ${carroCriado.getPreco().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} <br>
        `;

    const titulo = document.createElement("h2");
    titulo.textContent = "Carro Cadastrado";
    divCarroInfo.appendChild(titulo);
    divCarroInfo.appendChild(fotoCarro);
    divCarroInfo.appendChild(infoVendedor);
    divCarroInfo.appendChild(infoCarro);
    sectionCarroCadastrado.appendChild(divCarroInfo);   
}

const form = document.getElementById("form");

const username = document.getElementById("username");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");

const nomeCarro = document.getElementById("nome-carro");
const selectMarca = document.getElementById("marca-carro");
const selectCilindrada = document.getElementById("cilindrada-carro");
const selectCambio = document.getElementById("select-cambio");
const selectCombustivel = document.getElementById("select-combustivel");
const precoCarro = document.getElementById("preco-carro");
const fotoCarro = document.getElementById("foto-carro");

popularSelect(marcas, selectMarca);
popularSelect(tiposCambio, selectCambio);
popularSelect(tiposCombustivel, selectCombustivel);
popularSelect(cilindradas, selectCilindrada);

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let usuarioOk = validarEntrada(username);
    let emailOk = validarEntrada(email);
    let telefoneOk = validarEntrada(telefone);

    if (usuarioOk && emailOk && telefoneOk) {

        const carroCriado = new Carro(
            nomeCarro.value,
            selectMarca.value,
            selectCilindrada.value,
            selectCambio.value,
            selectCombustivel.value,
            precoCarro.value,
            fotoCarro.value
        );

        if (!estaCadastrado(carroCriado)) {
            alert("Por favor, preencha todos os campos do carro corretamente.");
            return;
        }

        informacoesCarro(carroCriado);

        form.reset();
    }
});