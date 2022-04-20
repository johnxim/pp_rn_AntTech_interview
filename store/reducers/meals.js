import {SET_MEALS } from '../actions/meals';

const initState = {
  mealss: []
};

const mealsReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_MEALS:
      return {
        mealss: action.meals
      };
    default:
      return state;
  }
};

export default mealsReducer;
