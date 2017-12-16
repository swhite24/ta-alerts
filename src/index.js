const config = require('config');
const binance = require('./services/binance');
const bittrex = require('./services/bittrex');
const ta = require('./services/ta');

const exec = (symbols, loader) =>
  symbols.reduce((chain, symbol) =>
    chain
      .then(() => loader(symbol))
      .then(candles => ta.mfi(candles))
      .then(mfis => console.log(`${ symbol } mfi: `, mfis[mfis.length - 1]))
    , Promise.resolve());

exec(config.bittrex.symbols, bittrex.getCandles)
  .then(() => exec(config.binance.symbols, binance.getCandles));
