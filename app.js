function criarListaDeIngredientes(ingredientes){
    let lista = "<ul>";
    ingredientes.forEach(ingredientes => {
        lista += `<li>${ingredientes.quantidade || ""} ${ingredientes.nome}</li>`;
    });
    lista += "</ul>"
    return lista;
}

function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if(campoPesquisa == ""){
        section.innerHTML = `<p>Receita não encontrada</p>`
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    for (let dado of dados){
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        let pegandoInformacaoTitulo = titulo.includes(campoPesquisa);
        let pegandoInformacaoDescricao = descricao.includes(campoPesquisa);
        let pegandoInformacaoTags = tags.includes(campoPesquisa)
        if(pegandoInformacaoTitulo || pegandoInformacaoDescricao || pegandoInformacaoTags){
            //Cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <p>Ingredientes:</p>
                ${criarListaDeIngredientes(dado.ingredientes)}
                <h3>Passo a Passo</h3>
                <p>${dado.passo}</p>
            </div>
            `;
        }
    };
    // Verifica se algum resultado foi encontrado
    //if(resultados === "") é a mesma coisa
    if (!resultados) {
        section.innerHTML = `<p>Receita não encontrada</p>`;
    } else {
        section.innerHTML = resultados;
    }
}


