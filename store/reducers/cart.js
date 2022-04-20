import { ADD_TO_CART, PLUS_ITEM, MINUS_ITEM } from '../actions/cart';
import Cart from '../../models/cart';

const initState = {
  items: {},
  totalAmount: 0,
  quantityt: 0
};

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedMeals = action.meal;
      // console.log(addedMeals);
      const mealPrice = addedMeals.price;
      const mealName = addedMeals.name;

      let updatedOrNewCartItem;
      if (state.items[addedMeals.id]) {
        // already have in the cart = cộng thêm
        updatedOrNewCartItem = new Cart(
          state.items[addedMeals.id].quantity + 1,
          mealName,
          mealPrice,
          state.items[addedMeals.id].sum + mealPrice
        );
      } else {
        updatedOrNewCartItem = new Cart(1, mealName, mealPrice, mealPrice);
      }
      // state.quantityt++;
      return {
        ...state,
        items: { ...state.items, [addedMeals.id]: updatedOrNewCartItem },
        totalAmount: state.totalAmount + mealPrice,
        quantityt: state.quantityt + 1
      };
    case MINUS_ITEM:
      const mealToMinus = action.meal
      let updatedCartItems;
      if (state.items[mealToMinus.prodId].quantity > 1) {
        // console.log(state.items);
        // need to reduce it, not erase it
        const updatedCartItem = new Cart(
          state.items[mealToMinus.prodId].quantity - 1,
          state.items[mealToMinus.prodId].prodName,
          mealToMinus.prodPrice,
          state.items[mealToMinus.prodId].sum - mealToMinus.prodPrice
        );
        updatedCartItems = { ...state.items, [mealToMinus.prodId]: updatedCartItem };
      } else {
        updatedCartItems = { ...state.items };
        delete updatedCartItems[mealToMinus.prodId];
      }
      return {
        ...state,
        items: updatedCartItems,
        totalAmount: state.totalAmount - mealToMinus.prodPrice,
        quantityt: state.quantityt - 1
      };
    case PLUS_ITEM:
      const mealToPlus = action.meal
      const updatedCartItem = new Cart(
        state.items[mealToPlus.prodId].quantity + 1,
        state.items[mealToPlus.prodId].prodName,
        mealToPlus.prodPrice,
        state.items[mealToPlus.prodId].sum + mealToPlus.prodPrice
      );
      return {
        ...state,
        items: { ...state.items, [mealToPlus.prodId]: updatedCartItem },
        totalAmount: state.totalAmount + mealToPlus.prodPrice,
        quantityt: state.quantityt + 1
      };
      // return {
      //   ...state,/////
      //   items: {
      //     ...state.items, [mealToPlus.prodId]: {
      //       ...state.items[mealToPlus.prodId].prodName,
      //       ...state.items[mealToPlus.prodId].prodPrice,
      //       state.items[mealToPlus.prodId].quantity: state.items[mealToPlus.prodId].quantity + 1,
      //       state.items[mealToPlus.prodId].sum: state.items[mealToPlus.prodId].sum + mealToPlus.prodPrice
      //     }
      //   },
      //   totalAmount: state.totalAmount + mealToPlus.prodPrice,
      //   quantityt: state.quantityt + 1
      // };
    default:
      return state;
  }
};
