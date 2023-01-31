import { Fragment } from "react";
import MealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeal</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={MealsImage} alt="A table full of delecious Food"/>
            </div>
        </Fragment>
    )
}

export default Header;