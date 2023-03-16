import React from "react";
import styled from "styled-components";
import FilterProduct from "./component/FilterProduct";
import ProductList from "./component/ProductList";
import Sort from "./component/Sort";
const Products = () => {
  return <Wrapper>
    <div className="container grid grid-filter-column">
      <div>
        <FilterProduct />
      </div>
      <section className="product-view--short">
        <div className="sort-filter">
          <Sort />
        </div>
        <div className="main-product">
          <ProductList />
        </div>
      </section>
    </div>
  </Wrapper>;
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
