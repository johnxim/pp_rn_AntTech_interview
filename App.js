import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import { StyleSheet, Text, View } from 'react-native';
import MainNavigator from './navigation/MealsNavigatorr';
import mealsReducer from './store/reducers/meals';
import cartReducer from './store/reducers/cart';


const rootReducer = combineReducers({
  meals: mealsReducer,
  cart: cartReducer
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
