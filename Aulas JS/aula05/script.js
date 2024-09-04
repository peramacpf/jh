let itens = [];

let cad_lista = document.getElementById('cad_lista');
document.addEventListener('submit', function(event) {
    event.preventDefault();

    let nomes = document.getElementById('nomes').value;
    let array_nomes = nomes.split(',').map(function(nome){
        return nome.trim();
    });
    
    itens = itens.concat(array_nomes);

    document.getElementById("nomes").value = null;
    document.getElementById("gerar").style.display = "inline-block";
    alert(itens);
});

let btn_gerar = document.getElementById("gerar");

btn_gerar.onclick = function() {
    
    document.getElementById("lista").innerHTML = "";

    let ul = document.createElement("ul");

    for (let i = 0; i < itens.length; i++) {

        let li = document.createElement("li");
        li.textContent = itens[i];
        ul.appendChild(li);

    }

    document.getElementById("lista").appendChild(ul);


}