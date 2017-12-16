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

Potential Buy: ETC
Last Price: 0.00174238
Last Candle: green
MFI: 20.79368872026678
Last HA Candle: red


Potential Buy: LTC
Last Price: 0.01501004
Last Candle: red
MFI: 23.83428457541785
Last HA Candle: red


Potential Buy: MCO
Last Price: 0.00077085
Last Candle: green
MFI: 23.532239972731734
Last HA Candle: red


Potential Buy: OMG
Last Price: 0.00072204
Last Candle: green
MFI: 11.338307165486947
Last HA Candle: red


Potential Buy: STRAT
Last Price: 0.00053299
Last Candle: green
MFI: 20.443104183323847
Last HA Candle: red


Potential Buy: XVG
Last Price: 0.00000197
Last Candle: red
MFI: 24.561072658774176
Last HA Candle: red

```
