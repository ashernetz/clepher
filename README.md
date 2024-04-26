# Api Documentation

## Information

> [API Information](https://www.alphavantage.co/documentation/#)

> [Alpha Ventage Interface Api](https://github.com/zackurben/alphavantage)

> API Key: RIBXT3XYLI69PC0Q  
> API KEY: 329DKQXX4JMERPWT  
> AX2W5080PGJULBPX

## Usage

> Everything works in promises

```sh
// Simple examples
alpha.data.intraday(`msft`).then((data) => {
  console.log(data);
});

alpha.forex.rate('btc', 'usd').then((data) => {
  console.log(data);
});

alpha.crypto.daily('btc', 'usd').then((data) => {
  console.log(data);
});

alpha.technical.sma(`msft`, `daily`, 60, `close`).then((data) => {
  console.log(data);
});

alpha.experimental('CRYPTO_INTRADAY', { symbol: 'ETH', market: 'USD', interval: '5min' })).then((data) => {
  console.log(data);
});
```

## Data

```sh
alpha.data.intraday(symbol, outputsize, datatype, interval);
alpha.data.daily(symbol, outputsize, datatype, interval);
alpha.data.daily_adjusted(symbol, outputsize, datatype, interval);
alpha.data.weekly(symbol, outputsize, datatype, interval);
alpha.data.weekly_adjusted(symbol, outputsize, datatype, interval);
alpha.data.monthly(symbol, outputsize, datatype, interval);
alpha.data.monthly_adjusted(symbol, outputsize, datatype, interval);
alpha.data.quote(symbol, outputsize, datatype, interval);
alpha.data.search(keywords);
```

## Forex

```sh
alpha.forex.rate(from_currency, to_currency);
```

## Crypto

```sh
alpha.crypto.daily(symbol, market);
alpha.crypto.weekly(symbol, market);
alpha.crypto.monthly(symbol, market);
```

## technicals

```sh
alpha.technical.sma(symbol, interval, time_period, series_type);
alpha.technical.ema(symbol, interval, time_period, series_type);
alpha.technical.wma(symbol, interval, time_period, series_type);
alpha.technical.dema(symbol, interval, time_period, series_type);
alpha.technical.tema(symbol, interval, time_period, series_type);
alpha.technical.trima(symbol, interval, time_period, series_type);
alpha.technical.kama(symbol, interval, time_period, series_type);
alpha.technical.mama(symbol, interval, series_type, fastlimit, slowlimit);
alpha.technical.t3(symbol, interval, time_period, series_type);
alpha.technical.macd(symbol, interval, series_type, fastperiod, slowperiod, signalperiod);
alpha.technical.macdext(
  symbol,
  interval,
  series_type,
  fastperiod,
  slowperiod,
  signalperiod,
  fastmatype,
  slowmatype,
  signalmatype
);
alpha.technical.stoch(symbol, interval, fastkperiod, slowkperiod, slowdperiod, slowkmatype, slowdmatype);
alpha.technical.stochf(symbol, interval, fastkperiod, fastdperiod, fastdmatype);
alpha.technical.rsi(symbol, interval, time_period, series_type);
alpha.technical.stochrsi(symbol, interval, time_period, series_type, fastkperiod, slowdperiod, fastdmatype);
alpha.technical.willr(symbol, interval, time_period);
alpha.technical.adx(symbol, interval, time_period);
alpha.technical.adxr(symbol, interval, time_period);
alpha.technical.apo(symbol, interval, series_type, fastperiod, slowperiod, matype);
alpha.technical.ppo(symbol, interval, series_type, fastperiod, slowperiod, matype);
alpha.technical.mom(symbol, interval, time_period, series_type);
alpha.technical.bop(symbol, interval);
alpha.technical.cci(symbol, interval, time_period);
alpha.technical.cmo(symbol, interval, time_period, series_type);
alpha.technical.roc(symbol, interval, time_period, series_type);
alpha.technical.rocr(symbol, interval, time_period, series_type);
alpha.technical.aroon(symbol, interval, time_period);
alpha.technical.aroonosc(symbol, interval, time_period);
alpha.technical.mfi(symbol, interval, time_period);
alpha.technical.trix(symbol, interval, time_period, series_type);
alpha.technical.ultosc(symbol, interval, timeperiod1, timeperiod2, timeperiod3);
alpha.technical.dx(symbol, interval, time_period);
alpha.technical.minus_di(symbol, interval, time_period);
alpha.technical.plus_di(symbol, interval, time_period);
alpha.technical.minus_dm(symbol, interval, time_period);
alpha.technical.plus_dm(symbol, interval, time_period);
alpha.technical.bbands(symbol, interval, time_period, series_type, nbdevup, nbdevdn);
alpha.technical.midpoint(symbol, interval, time_period, series_type);
alpha.technical.midprice(symbol, interval, time_period);
alpha.technical.sar(symbol, interval, acceleration, maximum);
alpha.technical.trange(symbol, interval);
alpha.technical.atr(symbol, interval, time_period);
alpha.technical.natr(symbol, interval, time_period);
alpha.technical.ad(symbol, interval);
alpha.technical.adosc(symbol, interval, fastperiod, slowperiod);
alpha.technical.obv(symbol, interval);
alpha.technical.ht_trendline(symbol, interval, series_type);
alpha.technical.ht_sine(symbol, interval, series_type);
alpha.technical.ht_trendmode(symbol, interval, series_type);
alpha.technical.ht_dcperiod(symbol, interval, series_type);
alpha.technical.ht_dcphase(symbol, interval, series_type);
alpha.technical
```
