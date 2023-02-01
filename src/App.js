import { Fragment } from 'react';
import Header from './Components/Layout/Header';
import AvailableMeals from './Components/Meals/AvailableMeals';
import MealsSummary from './Components/Meals/MealsSummary';

function App() {
  return (
    <Fragment>
      <Header />
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
}

export default App;
