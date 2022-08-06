import React from "react";

const ProductProperties = ({nameProduct, imageUrl, sellingPrice, listPrice}) => {
  return (
    <div className="container">
      <div className="container-img">
        <img src={imageUrl} width="150px" height="150px" alt="logo produto" />
      </div>
      <div className="container-properties">
        <p className="brandName">{nameProduct}</p>
        <p className="listPrice">
          {listPrice.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <p className="sellingPrice">
          {sellingPrice.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
    </div>
  );
};
export default ProductProperties;
