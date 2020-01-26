import React from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as cartActions from '../../store/actions/cart';
import api from '../../services/api';
import { format } from '../../util/formartCurrency';

import { ProductList } from '../../styles/Home/style';

class Home extends React.Component {
  state = {
    shoes: [],
  };

  async componentDidMount() {
    const { data } = await api.get('/products');
    const shoes = data.map(shoe => ({
      ...shoe,
      priceFormatted: format(shoe.price),
    }));

    this.setState({ shoes });
  }

  handleShoeToCart = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  render() {
    const { shoes } = this.state;
    const { amount } = this.props;
    return (
      <ProductList>
        {shoes.map(shoe => (
          <li key={shoe.id}>
            <img src={shoe.image} />
            <strong>{shoe.title}</strong>
            <span>{shoe.priceFormatted}</span>
            <button onClick={() => this.handleShoeToCart(shoe.id)}>
              <div>
                <MdShoppingCart size={16} color="#fff" /> {amount[shoe.id] || 0}
              </div>
              <span>Adicionar ao carrinho</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(cartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
