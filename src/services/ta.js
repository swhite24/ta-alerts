const talib = require('talib');

exports.mfi = async candles => {
  const { open_time, open, high, low, close, volume } = getGroups(candles);
  const res = await execute({
    name: 'MFI',
    startIdx: 0,
    endIdx: open.length - 1,
    high,
    low,
    close,
    volume,
    optInTimePeriod: 14
  });
  return res.result.outReal.map((mfi, i) => ({ mfi, time: new Date(open_time[res.begIndex + i]) }));
};

exports.heikenashi = candles => {
  return candles.map((candle, i) => {
    const prev = candles[i - 1] || { ha_close: candle.close, ha_open: candle.open };
    candle.ha_close = (candle.open + candle.high + candle.low + candle.close) / 4;
    candle.ha_open = (prev.ha_open + prev.ha_close) / 2;
    candle.ha_high = Math.max(candle.high, candle.ha_open, candle.ha_close);
    candle.ha_low = Math.min(candle.low, candle.ha_open, candle.ha_close);
    candle.ha_fill = candle.ha_close < candle.ha_open ? 'red' : 'green';
    candle.fill = candle.close < candle.open ? 'red' : 'green';
    return candle;
  });
};

const getGroups = candles => ({
  open_time: candles.map(c => c.open_time),
  open: candles.map(c => c.open),
  high: candles.map(c => c.high),
  close: candles.map(c => c.close),
  low: candles.map(c => c.low),
  volume: candles.map(c => c.vol)
});

const execute = opts => new Promise((resolve, reject) => {
  talib.execute(opts, (err, result) => {
    if (err) return reject(err);
    return resolve(result);
  });
});
