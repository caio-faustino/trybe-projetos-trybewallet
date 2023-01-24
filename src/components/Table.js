import React, { Component } from 'react';

class Table extends Component {
  tableHeaders = ['Descrição', 'Valor', 'Moeda', 'Tag', 'Método de pagamento',
    'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];

  render() {
    return (
      <table>
        {this.tableHeaders.map((header) => <th key={ header }>{header}</th>)}
      </table>
    );
  }
}

export default Table;
