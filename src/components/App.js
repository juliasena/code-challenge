import React from "react";
import "../components/css/minicart.css";
import ProductProperties from "./ProductProperties";
import freeShiping from "../components/api/free-shiping.json";
// import notFreeShiping from "../components/api/not-free-shiping.json";

const Minicart = () => {
  
  let totalProductsPrice = 0;
  const products = freeShiping.items;

  products.forEach((item) => {
    totalProductsPrice += item.sellingPrice;
  });

  return (
    <div className="container-minicart">
      <header className="header-minicart">
        <p className="title-minicart">Meu carrinho</p>
      </header>
      {products.map((item) => (
        <ProductProperties
          nameProduct={item.name}
          imageUrl={item.imageUrl}
          sellingPrice={item.sellingPrice}
          listPrice={item.listPrice}
        />
      ))}
      <footer className="container-footer">
        <div className="subtotal-freeshipping">
          <div className="container-subtotal">
            <p className="subtotal">Total</p>
            <p className="totalPrice">
              {totalProductsPrice.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>
          {totalProductsPrice >= 10 && (
            <p className="free-shiping">
              Parabéns, sua compra tem frete grátis !
            </p>
          )}
        </div>
        <button className="btn-finish">FINALIZAR COMPRA</button>
      </footer>
    </div>
  );
};

export default Minicart;
