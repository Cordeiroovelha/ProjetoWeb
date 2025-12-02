var btnPesquisar = document.querySelector("#btnPesquisar")

btnPesquisar.addEventListener("onclick", function(event){
    event.preventDefault();
    var inputPesquisa = document.querySelector("#Pesquisa").value;
    if (inputPesquisa !== ""){
        localStorage.setItem("pesquisa", inputPesquisa);
        if (localStorage.getItem("pesquisa") !== null){
            window.location.href = "html/ScriptCatalogo.html#" + inputPesquisa;
    }
    else
        console.log("Campo Vazio");
})