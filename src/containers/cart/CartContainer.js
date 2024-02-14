import React, { useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import CartHeader from "../headers/common/cart-header";
import CartContext from "../../providers/cart";
import { Media } from "reactstrap";
// import { CurrencyContext } from "../../helpers/Currency/CurrencyContext";

const CartContainer = ({ icon }) => {
  const context = useContext(CartContext);
  // const currContext = useContext(CurrencyContext);
  const symbol = "£";//currContext.state.symbol;
  const cartList = context.state;
  const total = context.cartTotal;

  return (
    <Fragment>
      <li className="onhover-div mobile-cart">
        <div className="cart-qty-cls">{cartList.length}</div>
        <Link to={`/page/account/cart`}>
          <div href={null}>
            <Media src={icon} className="img-fluid" alt="" />
            <i className="fa fa-shopping-cart"></i>
          </div>
        </Link>
        <ul className="show-div shopping-cart">
          {cartList.map((item, index) => (
            <CartHeader key={index} item={item} total={total} symbol={symbol} />
          ))}
          {cartList.length > 0 ? (
            <div>
              <li>
                <div className="total">
                  <h5>
                    subtotal :{" "}
                    <span>
                      {symbol}
                      {total}
                    </span>
                  </h5>
                </div>
              </li>
              <li>
                <div className="buttons view-cart">
                  <Link to={`/page/account/cart`}>
                    {/* <a> */}
                    view cart
                    {/* </a> */}
                  </Link>
                  <Link to={`/page/account/checkout`} className="checkout">
                    {/* <a > */}
                    checkout
                    {/* </a> */}
                  </Link>
                </div>
              </li>
            </div>
          ) : (
            <li>
              <h5>Your cart is currently empty.</h5>
            </li>
          )}
        </ul>
      </li>
    </Fragment>
  );
};

export default CartContainer;