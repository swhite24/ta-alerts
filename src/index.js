const config = require('config');
const binance = require('./services/binance');
const bittrex = require('./services/bittrex');
const ta = require('./services/ta');

const exec = async (symbols, loader) => {
  for (let i = 0, len = symbols.length; i < len; i++) {
    const symbol = symbols[i];
    const candles = ta.heikenashi(await loader(symbol));
    const mfis = await ta.mfi(candles);

    const mfi = mfis[mfis.length - 1];
    const candle = candles[candles.length - 1];
    if (mfi.mfi <= 25) {
      console.log(`
Potential Buy: ${ symbol }
Last Price: ${ candle.close }
Last Candle: ${ candle.fill }
MFI: ${ mfi.mfi }
Last HA Candle: ${ candle.ha_fill }\n\n
`);
    }
  }
};

exec(config.bittrex.symbols, bittrex.getCandles)
  .then(() => exec(config.binance.symbols, binance.getCandles));
