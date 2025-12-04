var btnPesquisar = document.querySelector("#btnPesquisar")

btnPesquisar.addEventListener("click", function(event){
    event.preventDefault();
    var inputPesquisa = document.querySelector("#Pesquisa").value;
    if (inputPesquisa !== ""){
        localStorage.setItem("pesquisa", inputPesquisa);
        if (localStorage.getItem("pesquisa") !== null){
            window.location.href = "indexFinancas.html?nomeCarro=" + inputPesquisa;
        }
        else {
            console.log("Não existe esse carro no catalogo")
        }
    }
    else{
        console.log("Campo Vazio");
    }
})

window.addEventListener("keypress", function(){
    if(event.keyCode == 13){
        event.preventDefault();
        btnPesquisar.click();
    }
})