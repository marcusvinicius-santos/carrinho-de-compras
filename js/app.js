let totalGeral;
limpar();

function adicionar() {
  let produto = document.getElementById('produto').value;
  let nomeProduto = produto.split('-')[0];
  let valorProduto = produto.split('R$')[1];
  let quantidadeProduto = document.getElementById('quantidade').value;

  let subtotal = quantidadeProduto * valorProduto;
  let carrinho = document.getElementById('lista-produtos');

  carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos" id="lista-produtos">
    <section class="carrinho__produtos__produto">
      <span class="texto-azul">${quantidadeProduto}x</span> ${nomeProduto} <span class="texto-azul">R$ ${valorProduto}</span>
    </section>`

  totalGeral = totalGeral + subtotal;
  let campoTotal = document.getElementById('valor-total');
  campoTotal.textContent = `R$ ${totalGeral}`;
  quantidade = document.getElementById('quantidade').value = 0;
}

function limpar() {
  totalGeral = 0;
  document.getElementById('lista-produtos').innerHTML = '';
  document.getElementById('valor-total').textContent = 'R$ 0';
}