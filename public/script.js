const catalogo = [
    {
        id: 1,
        titulo: "O Senhor dos Anéis",
        tipo: "filme",
        ano: 2001,
        generos: ["fantasia", "aventura"],
        nota: 9.4,
        assistido: true
    },
    {
        id: 2,
        titulo: "Stranger Things",
        tipo: "serie",
        ano: 2016,
        generos: ["ficção científica", "terror"],
        nota: 8.9,
        assistido: true
    },
    {
        id: 3,
        titulo: "Homem-Aranha",
        tipo: "filme",
        ano: 2002,
        generos: ["ação"],
        nota: 7.9,
        assistido: false
    },
    {
        id: 4,
        titulo: "Round 6",
        tipo: "serie",
        ano: 2021,
        generos: ["suspense", "drama"],
        nota: 8.7,
        assistido: true
    },
    {
        id: 5,
        titulo: "Toy Story",
        tipo: "filme",
        ano: 1995,
        generos: ["animação"],
        nota: 8.5,
        assistido: false
    },
    {
        id: 6,
        titulo: "The Witcher",
        tipo: "serie",
        ano: 2019,
        generos: ["fantasia"],
        nota: 8.2,
        assistido: false
    }
];

console.log("=".repeat(50));
console.log("CATALOGO COMPLETO:");
console.log(catalogo);

console.log("\n" + "=".repeat(50));
console.log("ACESSANDO DADOS ESPECIFICOS:");
console.log("Primeiro titulo:", catalogo[0].titulo);
console.log("Ano do ultimo item:", catalogo[catalogo.length - 1].ano);

if (catalogo[2].generos.length > 1) {
    console.log("Segundo genero do terceiro item:", catalogo[2].generos[1]);
} else {
    console.log("O terceiro item possui apenas um genero.");
}

console.log("\n" + "=".repeat(50));
console.log("LISTAGEM DOS TITULOS:");
catalogo.forEach(function(item) {
    console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});

const titulosEmCaixaAlta = catalogo.map(function(item) {
    return item.titulo.toUpperCase();
});
console.log("\n" + "=".repeat(50));
console.log("TITULOS EM CAIXA ALTA:");
console.log(titulosEmCaixaAlta);

const naoAssistidos = catalogo.filter(function(item) {
    return item.assistido === false;
});
console.log("\n" + "=".repeat(50));
console.log("QUANTIDADE DE NAO ASSISTIDOS:");
console.log(naoAssistidos.length);

const itemNotaAlta = catalogo.find(function(item) {
    return item.nota >= 9;
});
console.log("\n" + "=".repeat(50));
if (itemNotaAlta) {
    console.log("PRIMEIRO ITEM COM NOTA >= 9:");
    console.log(`${itemNotaAlta.titulo} - Nota: ${itemNotaAlta.nota}`);
} else {
    console.log("Nenhum item com nota maior ou igual a 9.");
}

const somaNotas = catalogo.reduce(function(acumulador, item) {
    return acumulador + item.nota;
}, 0);
const mediaGeral = somaNotas / catalogo.length;

const assistidos = catalogo.filter(function(item) {
    return item.assistido;
});
const somaAssistidos = assistidos.reduce(function(acumulador, item) {
    return acumulador + item.nota;
}, 0);
const mediaAssistidos = somaAssistidos / assistidos.length;

console.log("\n" + "=".repeat(50));
console.log("CALCULO DAS MEDIAS:");
console.log(`Media geral: ${mediaGeral.toFixed(2)}`);
console.log(`Media dos assistidos: ${mediaAssistidos.toFixed(2)}`);

const existeAntes2000 = catalogo.some(function(item) {
    return item.ano < 2000;
});
const todosTemGenero = catalogo.every(function(item) {
    return item.generos.length > 0;
});

console.log("\n" + "=".repeat(50));
console.log("CHECAGENS:");
console.log(`Existe item antes de 2000? ${existeAntes2000}`);
console.log(`Todos possuem pelo menos 1 genero? ${todosTemGenero}`);

const quantidadeFilmes = catalogo.filter(function(item) {
    return item.tipo === "filme";
}).length;

const quantidadeSeries = catalogo.filter(function(item) {
    return item.tipo === "serie";
}).length;

const ranking = [...catalogo];
ranking.sort(function(a, b) {
    return b.nota - a.nota;
});
const top3 = ranking.slice(0, 3);

const output = document.getElementById("output");

let html = '<div style="padding: 10px;">';
html += '<h2 style="color: #120d5b; margin-bottom: 15px;">RESUMO DO CATALOGO</h2>';
html += '<hr>';
html += '<p><span class="highlight">Total de itens:</span> ' + catalogo.length + '</p>';
html += '<p><span class="highlight">Filmes:</span> ' + quantidadeFilmes + ' | <span class="highlight">Series:</span> ' + quantidadeSeries + '</p>';
html += '<p><span class="highlight">Nao assistidos:</span> ' + naoAssistidos.length + '</p>';
html += '<p><span class="highlight">Media geral:</span> ' + mediaGeral.toFixed(2) + '</p>';
html += '<hr>';
html += '<h3 style="color: #120d5b; margin: 15px 0 10px 0;">TOP 3 MELHORES NOTAS</h3>';
html += '<ul style="list-style: none; padding-left: 0;">';

for (let i = 0; i < top3.length; i++) {
    html += '<li style="margin: 8px 0; padding: 5px; border-left: 3px solid #120d5b;">';
    html += top3[i].titulo + ' - <span class="highlight">Nota ' + top3[i].nota + '</span>';
    html += '</li>';
}

html += '</ul>';
html += '<hr>';
html += '<p style="font-size: 11px; color: #666; margin-top: 10px;">Verifique o console para mais detalhes</p>';
html += '</div>';

output.innerHTML = html;

console.log("\n" + "=".repeat(50));
console.log("TODAS AS OPERACOES FORAM EXECUTADAS COM SUCESSO!");
console.log("=".repeat(50));