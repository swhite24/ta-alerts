const axios = require('axios');
const qs = require('querystring');
const { binance } = require('config');

exports.getCandles = async (symbol, interval = '5m') => {
  if (!symbol) throw new Error('Missing symbol');

  // Load candle data
  const query = { symbol: formatSymbol(symbol), interval };
  const { data } = await axios.get(`${ binance.base_url }/api/v1/klines?${ qs.stringify(query) }`);

  // Parse into common format
  return data.map(d => {
    const [ open_time, open, high, low, close, vol, close_time] = d;
    return {
      open_time,
      open: +open,
      high: +high,
      low: +low,
      close: +close,
      vol: +vol,
      close_time
    };
  });
};

const formatSymbol = symbol => `${symbol}BTC`;
