import React from 'react'
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { useProductContext } from '../context/ProductContext';
import { Button } from '../styles/Button';
import CartAmountToggle from './CartAmountToggle';

const AddToCart = () => {

    const { singleProduct } = useProductContext();

    const { id, colors, stock } = singleProduct;

    const [mainColor, setMainColor] = React.useState(colors[0]);
    const [amount, setAmount] = useState(1);

    const setIncrease = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock);
    }

    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    }

    return (
        <Wrapper>
            <div className="colors">
                <div className="color">
                    <p>colors:
                        {colors.map((curColor, index) => {
                            return <button
                                onClick={() => setMainColor(curColor)}
                                key={index}
                                className={colors === curColor ? "btnStyle active" : "btnStyle"}
                                style={{
                                    backgroundColor: curColor
                                }}>
                                {mainColor === curColor ? <FaCheck className='checkStyle' /> : null}
                            </button>
                        })}
                    </p>
                </div>
            </div>

            {/* {amoutn toogle} */}
            <CartAmountToggle
                amount={amount}
                setIncrease={setIncrease}
                setDecrease={setDecrease}
            />
            <NavLink to="/cart">
                <Button>
                    Add To Cart
                </Button>
            </NavLink>
        </Wrapper>
    )
}


const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;
    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }
    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;

export default AddToCart