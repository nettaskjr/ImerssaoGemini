function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o valor digitado pelo usuário no campo de pesquisa e converte para minúsculas
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

    // Verifica se o campo de pesquisa está vazio
    if (!campoPesquisa) {
        // Exibe uma mensagem de erro caso o campo esteja vazio
        section.innerHTML = "<p>Campo vazio, favor digitar um dado para pesquisa</p>";
        return; // Interrompe a função
    }

    // Inicializa variáveis para armazenar os resultados e os valores a serem comparados
    let resultados = "";
    let nome = "";
    let descricao = "";
    let tags = "";

    // Itera sobre os dados e busca por correspondências
    for (let dado of dados) {
        nome = dado.nome.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        // Verifica se o termo de pesquisa está presente no nome, descrição ou tags
        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Constrói o HTML para cada resultado encontrado
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="${dado.link}" target="_blank">${dado.nome}</a>
                    </h2>
                    <p class="descricao-meta">
                        ${dado.descricao}
                    </p>
                </div>
            `;
        }
    }

    // Verifica se algum resultado foi encontrado
    if (!resultados) {
        // Exibe uma mensagem informando que nenhum resultado foi encontrado
        resultados = "<p>Nenhum resultado foi encontrado</p>";
    }

    // Atualiza o conteúdo da seção de resultados com os resultados encontrados
    section.innerHTML = resultados;
}