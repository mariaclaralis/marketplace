let carrinho = [];

const produtos = document.querySelectorAll('.add-to-cart');
const carrinhoLista = document.getElementById('carrinho-lista');
const totalSpan = document.getElementById('total');
const btnCheckout = document.getElementById('checkout');

// Adicionando produtos ao carrinho
produtos.forEach((botao) => {
    botao.addEventListener('click', () => {
        const id = botao.getAttribute('data-id');
        const nome = botao.getAttribute('data-name');
        const preco = parseFloat(botao.getAttribute('data-price'));

        // Adiciona o produto ao carrinho
        carrinho.push({ id, nome, preco });
        atualizarCarrinho();
    });
});

// Atualizando o carrinho e total
function atualizarCarrinho() {
    carrinhoLista.innerHTML = '';
    let total = 0;

    carrinho.forEach((item) => {
        const divProduto = document.createElement('div');
        divProduto.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        carrinhoLista.appendChild(divProduto);

        total += item.preco;
    });

    totalSpan.textContent = total.toFixed(2);
}

// Finalizando a compra
btnCheckout.addEventListener('click', () => {
    alert('Compra finalizada!');
    carrinho = [];
    atualizarCarrinho();
});
