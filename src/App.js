import logo from './logo.svg';
import './App.css';

import store from './redux/store/store'
import {Provider} from 'react-redux'

import CakeContainer from './components/cakeContainer'
import CoffeeContainer from './components/CoffeeContainer'
import IceCreamContainer from './components/IceCreamContainer'
import ItemContainer from './components/ItemContainer'

function App() {
  return (
    <Provider store={store}>
      <CakeContainer />
      <ItemContainer 
          itemType = "iceCream"
      />
      <ItemContainer 
          itemType = "coffee"
      />
    </Provider>
  );
}

export default App;
