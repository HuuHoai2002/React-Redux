import { combineReducers } from "redux";
import cartReducer from "./cart";
import hobbyReducer from "./hobby";

// Tạo rootReducer để gom tất cả các reducer có trong app thành object có thể truy cập thông qua useSelector
const rootReducer = combineReducers({
  hobby: hobbyReducer,
  cart: cartReducer,
});
export default rootReducer;
