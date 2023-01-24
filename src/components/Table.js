import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpense, getInfoEdit } from '../redux/actions';

class Table extends Component {
  tableHeaders = [
    { name: 'Tag', key: 'tag' },
    { name: 'Descrição', key: 'description' },
    { name: 'Valor', key: 'value' },
    { name: 'Moeda', key: 'currency' },
    { name: 'Método de pagamento', key: 'method' },
    { name: 'Moeda de conversão', key: 'conversionCoin' },
    { name: 'Câmbio utilizado', key: 'ask' },
    { name: 'Valor convertido', key: 'convertedValue' },
    { name: 'Editar/Excluir', key: 'buttons' },
  ];

  newObjExpenses = (expenses) => {
    const expsNew = expenses.map((expense) => ({
      ...expense,
      currency: expense.exchangeRates[expense.currency].name,
      conversionCoin: 'Real',
      value: Number(expense.value).toFixed(2),
      ask: Number(expense.exchangeRates[expense.currency].ask).toFixed(2),
      convertedValue: this.valueConvertExc(expense.exchangeRates, expense),
    }));
    return expsNew;
  };

  deleteSelectedExpense = (expense) => {
    const { dispatch } = this.props;
    console.log(expense);
    dispatch(deleteExpense(expense.id));
  };

  expsSelectedEdit = (expense) => {
    const { dispatch } = this.props;
    dispatch(getInfoEdit(true, expense.id));
  };

  valueConvertExc = (exchange, expense) => {
    const valueTranform = Number(expense.value);
    const excTransform = Number(exchange[expense.currency].ask);
    const valueConvert = (excTransform * valueTranform).toFixed(2);
    return valueConvert;
  };

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            {this.tableHeaders.map((header) => (
              <th key={ header.name }>{header.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {expenses.length === 0
            ? <tr><td><p>Não existem despesas para exibir.</p></td></tr>
            : this.newObjExpenses(expenses).map((expense) => (
              <tr key={ expense.id }>
                {this.tableHeaders.map((header, hIndex) => (header.key !== 'buttons' ? (
                  <td key={ hIndex }>{expense[header.key]}</td>
                ) : (
                  <td key={ hIndex }>
                    <button
                      onClick={ () => this.expsSelectedEdit(expense) }
                      data-testid="edit-btn"
                      type="button"
                    >
                      Editar
                    </button>
                    <button
                      onClick={ () => this.deleteSelectedExpense(expense) }
                      data-testid="delete-btn"
                      type="button"
                    >
                      Excluir
                    </button>
                  </td>
                )))}
              </tr>
            ))}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(Object).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
