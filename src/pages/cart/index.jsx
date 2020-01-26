import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from '../../styles/Cart/style';

export default function Cart() {
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
          <tr>
            <td>
              <img src="https://authenticfeet.vteximg.com.br/arquivos/ids/219681-600-600/Tenis-adidas-Superstar-Foundation-Branco.jpg?v=636588638604500000" />
            </td>
            <td>
              <strong>TÊnis novo</strong>
              <span>R$123</span>
            </td>
            <td>
              <div>
                <button>
                  <MdRemoveCircleOutline color="#7159c1" size={20} />
                </button>
                <input type="number" readOnly value={3} />
                <button>
                  <MdAddCircleOutline color="#7159c1" size={20} />
                </button>
              </div>
            </td>
            <td>
              <strong>R$2000</strong>
            </td>
            <td>
              <button>
                <MdDelete color="#7159c1" size={20} />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button>Finalizar pedido</button>
        <Total>
          <span>Total</span>
          <strong>R$1920</strong>
        </Total>
      </footer>
    </Container>
  );
}
