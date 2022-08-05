import "../components/css/minicart.css";
import freeShiping from "../components/api/free-shiping.json";
// import notFreeShiping from "../components/api/not-free-shiping.json"
import React from "react";

const Minicart = () => {

  const products = freeShiping.items;

  const productProperties = products.map((item) => {
    return (
      <div className="container">
        <div className="container-img">
          <img src={item.imageUrl} width="50px" height="50px" alt="logo produto" />
        </div>
        <div className="container-properties">
          <p className="brandName">{item.name}</p>
          <p className="listPrice">{item.listPrice.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}</p>
          <p className="sellingPrice">{item.sellingPrice.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}</p>
        </div>
      </div>
    );
  });

  let totalProductsPrice = 0;

  products.forEach((item) => {
    totalProductsPrice += item.sellingPrice;
  });

  return (
    <div className="container-minicart">
      <header className="header-minicart">
        <p className="title-minicart">Meu carrinho</p>
      </header>
      <main>{productProperties}</main>
      <footer className="container-footer">
        <div className="subtotal-freeshipping">
          <div className="container-subtotal">
            <p className="subtotal">Total</p>
            <p className="totalPrice">{totalProductsPrice.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}</p>
          </div>
          {totalProductsPrice >= 10 && (
            <p className="free-shiping">
              Parabéns, sua compra tem frete grátis !
            </p>
          )}
        </div>
        <button className="btn-finish">Finalizar compra</button>
      </footer>
    </div>
  );
}

export default Minicart;
