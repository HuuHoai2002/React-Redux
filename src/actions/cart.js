export const addToCart = (cart) => {
  return {
    type: "ADD_TO_CART",
    payload: cart,
  };
};

export const removeFromCart = (cart) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: cart,
  };
};
