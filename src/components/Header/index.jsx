import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { connect } from 'react-redux';

import { Container, Cart } from '../../styles/Header/style';
import logo from '../../assets/images/logo.svg';

function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Seu carrinho</strong>
          {cartSize > 0 ? (
            <span>{cartSize} itens</span>
          ) : (
            <span>Carrinho vazio</span>
          )}
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </Container>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
