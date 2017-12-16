const axios = require('axios');
const qs = require('querystring');
const { bittrex } = require('config');

exports.getCandles = async (symbol, interval = '5m') => {
  if (!symbol) throw new Error('Missing symbol');

  // Load candle data
  const query = { marketName: formatSymbol(symbol), tickInterval: translateInterval(interval) };
  const { data } = await axios.get(`${ bittrex.base_urlv2 }/pub/market/getTicks?${ qs.stringify(query) }`);

  // Parse into common format
  return data.result.map(c => {
    return {
      open_time: c.T,
      open: c.O,
      high: c.H,
      low: c.L,
      close: c.C,
      vol: c.V
    };
  });
};

const formatSymbol = symbol => `BTC-${ symbol }`;
const translateInterval = interval => {
  switch (interval) {
    case '1m': return 'oneMin';
    case '5m': return 'fiveMin';
    case '30m': return 'thirtyMin';
    case '1h': return 'hour';
    case '1d': return 'day';
  }
};
