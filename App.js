import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';

import ShopNavigator from './navigation/ShopNavigator';

export default function App() {
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
