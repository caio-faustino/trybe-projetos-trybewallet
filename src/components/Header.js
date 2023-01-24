import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  sumTotalExpenses = () => {
    const { expenses } = this.props;
    if (!expenses.length) {
      return '0';
    }
    const expensesSum = expenses.reduce(
      (total, expense) => total + expense

        .exchangeRates[expense.currency].ask * expense.value,
      0,
    );
    return expensesSum.toFixed(2);
  };

  render() {
    const { email } = this.props;
    return (
      <header>
        <p data-testid="header-currency-field">BRL</p>
        <p data-testid="total-field">{this.sumTotalExpenses()}</p>
        <p data-testid="email-field">{email}</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(Object).isRequired,
};

export default connect(mapStateToProps)(Header);
