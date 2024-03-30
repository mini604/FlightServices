import React, { useState } from 'react';
import currencyExchangeRates from '../data/currencyExchangeRates.json';

const CurrencyConverter = ({ baseCurrency, amount }) => {

  const styles = {
    container: {
      margin: 0,
      padding: 0,
      fontFamily: 'Arial, sans-serif',
      fontSize: '16px',
      lineHeight: '1.5',
    },
    input: {
      width: '50px',
      padding: '5px',
      marginRight: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '16px',
    },
    select: {
      padding: '5px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '16px',
      cursor: 'pointer',
    },
  };

  const [targetCurrency, setTargetCurrency] = useState('EUR');

  const handleChange = (event) => {
    setTargetCurrency(event.target.value);
  };

  const convertCurrency = () => {
    const exchangeRate = currencyExchangeRates[baseCurrency][targetCurrency];
    const convertedAmount = amount * exchangeRate;
    return convertedAmount.toFixed(2);
  };

  return (
    <div>
      <h4>Currency Converter</h4>
      <p style={styles.container}>
      <input type="number" value={amount} readOnly style={styles.input} />
      <select value={targetCurrency} onChange={handleChange} style={styles.select}>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="USD">USD</option>
        <option value="CAD">CAD</option>
        <option value="IPY">IPY</option>
        <option value="CNY">CNY</option>
        
      </select>
      = {convertCurrency()} {targetCurrency}
    </p>
    </div>
  );
};

export default CurrencyConverter;
