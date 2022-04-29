// Tạo 1 reducer

const initialState = {
  list: [],
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const newList = [...state.list];
      newList.push(action.payload);
      return {
        list: newList,
      };
    }
    case "REMOVE_FROM_CART": {
      const newList = [...state.list];
      const filterCart = newList.filter(
        (cart) => cart.id !== action.payload.id
      );
      return {
        list: filterCart,
      };
    }
    default:
      return state;
  }
};
export default cartReducer;
