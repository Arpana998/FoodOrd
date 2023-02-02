import { Fragment, useState } from 'react';

import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';

function App() {

  const[cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const handleCartHandler = () => {
    setCartIsShown(false)
  }
  return (
    <Fragment>
      { cartIsShown && <Cart onClose={handleCartHandler}/>}
      <Header onCartShown={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;