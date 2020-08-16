import React from 'react';
import { ReactComponent as ShoppingIcon} from  '../../assests/shopping-bag.svg'
import './CartIcon.styles.css';

const CartIcon = ({count}) => {
 return (
  <div className="cart-icon">
  <ShoppingIcon className='shopping-icon' />
  <span className="item-count">{count}</span>
  </div>
 )
}

export default CartIcon;