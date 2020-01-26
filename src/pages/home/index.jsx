import React from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as homeActions from '../../store/actions/home';
import { ProductList } from '../../styles/Home/style';
import api from '../../services/api';
import { format } from '../../util/formartCurrency';

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

  handleShoeToCart = product => {
    const { addToCart } = this.props;

    addToCart(product);
  };

  render() {
    const { shoes } = this.state;

    return (
      <ProductList>
        {shoes.map(shoe => (
          <li key={shoe.id}>
            <img src={shoe.image} />
            <strong>{shoe.title}</strong>
            <span>{shoe.priceFormatted}</span>
            <button onClick={() => this.handleShoeToCart(shoe)}>
              <div>
                <MdShoppingCart size={16} color="#fff" /> 1
              </div>
              <span>Adicionar ao carrinho</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(homeActions, dispatch);

export default connect(null, mapDispatchToProps)(Home);
