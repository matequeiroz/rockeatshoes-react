import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as cartActions from '../../store/actions/cart';
import { format } from '../../util/formartCurrency';

import { Container, ProductTable, Total } from '../../styles/Cart/style';

function Cart({ cart, removeProduct, decrement, increment, total }) {
  function decrementAmount(id) {
    decrement(id);
  }

  function incrementAmount(id) {
    increment(id);
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>Produto</th>
            <th>Qtd</th>
            <th>Subtotal</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map(shoe => (
            <tr>
              <td>
                <img src={shoe.image} />
              </td>
              <td>
                <strong>{shoe.title}</strong>
                <span>{shoe.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button onClick={() => decrementAmount(shoe.id)}>
                    <MdRemoveCircleOutline color="#7159c1" size={20} />
                  </button>
                  <input type="number" readOnly value={shoe.amount} />
                  <button onClick={() => incrementAmount(shoe.id)}>
                    <MdAddCircleOutline color="#7159c1" size={20} />
                  </button>
                </div>
              </td>
              <td>
                <strong>{shoe.subtotal}</strong>
              </td>
              <td>
                <button>
                  <MdDelete
                    color="#7159c1"
                    size={20}
                    onClick={() => removeProduct(shoe.id)}
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button>Finalizar pedido</button>
        <Total>
          <span>Total</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(item => ({
    ...item,
    subtotal: format(item.price * item.amount),
  })),
  total: format(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(cartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
