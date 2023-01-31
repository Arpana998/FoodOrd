import { Fragment } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
    return(
        <Fragment className={classes.button}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>
                Your Cart
            </span>
            <span className={classes.badge}>
                0
            </span>
        </Fragment>
    )
}

export default HeaderCartButton;
