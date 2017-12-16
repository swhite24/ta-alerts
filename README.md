# ta-alerts

Very early.

Loads [MFI](https://en.wikipedia.org/wiki/Money_flow_index) for list of cryptos from bittrex / binance.  Values <= 25 are potential buys when scalping BTC.  Can be paired with [Heikin-Ashi Candlesticks](http://stockcharts.com/school/doku.php?id=chart_school:chart_analysis:heikin_ashi) for good results.

## Setup

```
npm install
```

## Run

```
npm test
```

Example output:

```
swhite@C02SW1V5GTFM:ta-alerts$ npm test

> ta-alerts@1.0.0 test /Users/swhite/src/personal/ta-alerts
> node src/index.js

ADA mfi:  { mfi: 77.63196593277829, time: 2017-12-16T10:05:00.000Z }
ARDR mfi:  { mfi: 65.9680004458022, time: 2017-12-16T10:05:00.000Z }
ARK mfi:  { mfi: 38.747395254296016, time: 2017-12-16T10:05:00.000Z }
CVC mfi:  { mfi: 50.16012056058615, time: 2017-12-16T10:05:00.000Z }
DASH mfi:  { mfi: 24.87593887926979, time: 2017-12-16T10:05:00.000Z }
EMC2 mfi:  { mfi: 64.47829913286148, time: 2017-12-16T10:05:00.000Z }
ETC mfi:  { mfi: 44.78798415182087, time: 2017-12-16T10:05:00.000Z }
ETH mfi:  { mfi: 36.18702436855762, time: 2017-12-16T10:05:00.000Z }
LSK mfi:  { mfi: 44.168995708222, time: 2017-12-16T10:05:00.000Z }
LTC mfi:  { mfi: 37.368730160057254, time: 2017-12-16T10:05:00.000Z }
MANA mfi:  { mfi: 50.76595602385283, time: 2017-12-16T10:05:00.000Z }
MCO mfi:  { mfi: 65.7534058521394, time: 2017-12-16T10:05:00.000Z }
MONA mfi:  { mfi: 74.48156911042365, time: 2017-12-16T10:05:00.000Z }
NEO mfi:  { mfi: 22.733000874046226, time: 2017-12-16T10:05:00.000Z }
NXT mfi:  { mfi: 43.53777562509222, time: 2017-12-16T10:05:00.000Z }
OMG mfi:  { mfi: 52.768560437762076, time: 2017-12-16T10:05:00.000Z }
PAY mfi:  { mfi: 72.19200793939594, time: 2017-12-16T10:05:00.000Z }
POWR mfi:  { mfi: 53.884085871180055, time: 2017-12-16T10:05:00.000Z }
QTUM mfi:  { mfi: 49.106671468776256, time: 2017-12-16T10:05:00.000Z }
SALT mfi:  { mfi: 31.695006485137988, time: 2017-12-16T10:05:00.000Z }
STEEM mfi:  { mfi: 71.87400116906025, time: 2017-12-16T10:05:00.000Z }
STRAT mfi:  { mfi: 38.206412489290024, time: 2017-12-16T10:05:00.000Z }
VTC mfi:  { mfi: 56.4105687815935, time: 2017-12-16T10:05:00.000Z }
WAVES mfi:  { mfi: 68.97701524057508, time: 2017-12-16T10:05:00.000Z }
XEM mfi:  { mfi: 42.08275774749721, time: 2017-12-16T10:05:00.000Z }
XLM mfi:  { mfi: 63.498252001908874, time: 2017-12-16T10:05:00.000Z }
XMR mfi:  { mfi: 41.13252326012081, time: 2017-12-16T10:05:00.000Z }
XRP mfi:  { mfi: 40.01851353488724, time: 2017-12-16T10:05:00.000Z }
XVG mfi:  { mfi: 57.72285589725112, time: 2017-12-16T10:05:00.000Z }
ZEC mfi:  { mfi: 26.605546723574285, time: 2017-12-16T10:05:00.000Z }
IOTA mfi:  { mfi: 22.972698234990688, time: 2017-12-16T05:10:00.000Z }
EOS mfi:  { mfi: 24.95576621603276, time: 2017-12-16T05:10:00.000Z }
SUB mfi:  { mfi: 49.22620453983169, time: 2017-12-16T05:10:00.000Z }
TRX mfi:  { mfi: 74.31069339017895, time: 2017-12-16T05:10:00.000Z }
WABI mfi:  { mfi: 36.240912110289244, time: 2017-12-16T05:10:00.000Z }
```
