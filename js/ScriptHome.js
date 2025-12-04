var btnPesquisar = document.querySelector("#btnPesquisar")

// lista de carros disponiveis
var carrosDisponiveis = [
    "Corolla", "Yaris", "Hilux", "RAV4", "Etios", "Camry", "Fortuner", "Argo", "Mobi", "Toro", "Pulse", "Strada", "Cronos", "Fastback", "Fiesta", "EcoSport", "Ranger", "Territory", "Ka", "Mustang", "Edge", "Civic", "CR-V", "Accord", "Fit", "WR-V", "Pilot"
];

// função de pesquisa
btnPesquisar.addEventListener("click", function(event){
    event.preventDefault();
    var inputPesquisa = document.querySelector("#Pesquisa").value.trim();

    // previne pesquisa vazia
    if (inputPesquisa !== ""){ 
        // procura o carro na lista independentemente de maiúsculas ou minúsculas
        var carroEncontrado = carrosDisponiveis.find(carro => 
            carro.toLowerCase() === inputPesquisa.toLowerCase()
        );
        
        if (carroEncontrado) { // == true
            localStorage.setItem("pesquisa", carroEncontrado);
            window.location.href = "indexFinancas.html?nomeCarro=" + encodeURIComponent(carroEncontrado);
        } else {
            window.alert("Carro não encontrado.");
        }
    }
    else{
        window.alert("Campo Vazio");
    }
});

// aciona o botão ao pressionar Enter
window.addEventListener("keypress", function(){
    if(event.keyCode == 13){
        event.preventDefault();
        btnPesquisar.click();
    }
})