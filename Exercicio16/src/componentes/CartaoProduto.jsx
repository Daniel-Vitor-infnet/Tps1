import './CartaoProduto.css';

function CartaoProduto({ nome, descricao, preco, imagem }) {
  return (
    <div className="cartao-produto">
      <img src={imagem} alt={nome} className="imagem-produto" />
      <h2>{nome}</h2>
      <p>{descricao}</p>
      <p className="preco-produto">{preco}</p>
    </div>
  );
}

export default CartaoProduto;
