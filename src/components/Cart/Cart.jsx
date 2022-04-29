import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addToCart } from "../../actions/cart";

const CartStyles = styled.div`
  .form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: start;
  }
  .label {
    display: inline-block;
    min-width: 250px;
  }
  .input {
    padding: 10px 25px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    outline: none;
    border-radius: 8px;
    font-size: 18px;
    font-weight: 500;
    :focus {
      border: 1px solid #2cccff;
    }
  }
  button {
    padding: 10px 50px;
    font-size: 16px;
    font-weight: 500;
    margin-right: auto;
    background-color: #2cccff;
    border: none;
    outline: none;
    border-radius: 8px;
    font-weight: 500;
    color: white;
  }
`;

const CartItemStyles = styled.div`
  h1 {
    font-size: 25px;
    font-weight: 500;
    color: #ff6651;
  }
  .cart-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .cart-image {
    width: 100%;
    height: 250px;
    border-radius: 8px;
  }
  .cart-name {
    font-size: 18px;
    font-weight: 500;
  }
  .list-cart {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
  }

  @media screen and (max-width: 768px) {
    .list-cart {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 10px;
    }
  }
`;

const randomId = (max) => {
  return Math.trunc(Math.random() * max);
};
const getImageUrl = (e) => {
  const file = e.target.files[0];
  file.preview = URL.createObjectURL(file);
  return file.preview;
};
const Cart = () => {
  const cartList = useSelector((state) => state.cart.list);
  console.log(cartList);
  const dispatch = useDispatch();

  const [cartInfo, setCartInfo] = useState({
    id: randomId(1000),
    name: "",
    image: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addToCart(cartInfo));
    setCartInfo({ id: randomId(1000), name: "", image: "" });
  };
  return (
    <CartStyles>
      <form action="" className="form">
        <div>
          <label htmlFor="name" className="label">
            Tên sản phẩm:
          </label>
          <input
            type="text"
            className="input"
            value={cartInfo.name}
            onChange={(e) => setCartInfo({ ...cartInfo, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="id" className="label">
            Hình ảnh sản phẩm:
          </label>
          <input
            type="file"
            className="input"
            onChange={(e) =>
              setCartInfo({ ...cartInfo, image: getImageUrl(e) })
            }
          />
        </div>
        <button onClick={(e) => handleClick(e)}>Thêm</button>
      </form>
      <CartItemStyles>
        {cartList.length > 0 ? (
          <h1>Những sản phẩm đã thêm vào giỏ hàng:</h1>
        ) : (
          <h1>Chưa có sản phẩm nào trong giỏ hàng:</h1>
        )}
        <div className="list-cart">
          {cartList.length > 0 &&
            cartList.map((cart) => (
              <div className="cart-list" key={cart.id}>
                <img src={`${cart.image}`} alt="" className="cart-image" />
                <span className="cart-name">{cart.name}</span>
              </div>
            ))}
        </div>
      </CartItemStyles>
    </CartStyles>
  );
};

export default Cart;

//Nghiêm Hữu Hoài ố
