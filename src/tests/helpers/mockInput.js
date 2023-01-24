const mockInput = [
  {
    id: 0,
    method: 'Cartão de crédito',
    tag: 'Trabalho',
    currency: 'USD',
    value: '12',
    description: 'Loren',
    exchangeRates: {
      USDT: {
        code: 'USD',
        codein: 'BRLT',
        name: 'Dólar Americano/Real Brasileiro Turismo',
        high: '5.37',
        low: '5.29',
        varBid: '-0.01',
        pctChange: '-0.19',
        bid: '5.19',
        ask: '5.51',
        timestamp: '1671123360',
        create_date: '2022-12-15 13:56:00',
      },
      CAD: {
        code: 'CAD',
        codein: 'BRL',
        name: 'Dólar Canadense/Real Brasileiro',
        high: '3.9252',
        low: '3.884',
        varBid: '0.0028',
        pctChange: '0.07',
        bid: '3.8973',
        ask: '3.8984',
        timestamp: '1671124545',
        create_date: '2022-12-15 14:15:41',
      },
      GBP: {
        code: 'GBP',
        codein: 'BRL',
        name: 'Libra Esterlina/Real Brasileiro',
        high: '6.5886',
        low: '6.4823',
        varBid: '-0.0736',
        pctChange: '-1.12',
        bid: '6.4813',
        ask: '6.4848',
        timestamp: '1671124545',
        create_date: '2022-12-15 14:15:45',
      },
      ARS: {
        code: 'ARS',
        codein: 'BRL',
        name: 'Peso Argentino/Real Brasileiro',
        high: '0.031',
        low: '0.0307',
        varBid: '0.0002',
        pctChange: '0.65',
        bid: '0.0309',
        ask: '0.0309',
        timestamp: '1671124544',
        create_date: '2022-12-15 14:16:44',
      },
      USD: {
        code: 'USD',
        codein: 'BRL',
        name: 'Dólar Americano/Real Brasileiro',
        high: '5.3471',
        low: '5.2792',
        varBid: '0.0449',
        pctChange: '0.85',
        bid: '5.323',
        ask: '5.3241',
        timestamp: '1671124545',
        create_date: '2022-12-15 14:14:45',
      },
      BTC: {
        code: 'BTC',
        codein: 'BRL',
        name: 'Bitcoin/Real Brasileiro',
        high: '97',
        low: '92.442',
        varBid: '-3042',
        pctChange: '-3.19',
        bid: '92.442',
        ask: '92.442',
        timestamp: '1671123433',
        create_date: '2022-12-15 13:57:13',
      },
      CHF: {
        code: 'CHF',
        codein: 'BRL',
        name: 'Franco Suíço/Real Brasileiro',
        high: '5.7748',
        low: '5.6729',
        varBid: '0.0099',
        pctChange: '0.17',
        bid: '5.7154',
        ask: '5.7216',
        timestamp: '1671124544',
        create_date: '2022-12-15 14:15:44',
      },
      AUD: {
        code: 'AUD',
        codein: 'BRL',
        name: 'Dólar Australiano/Real Brasileiro',
        high: '3.6268',
        low: '3.5576',
        varBid: '-0.0652',
        pctChange: '-1.8',
        bid: '3.5559',
        ask: '3.5593',
        timestamp: '1671124544',
        create_date: '2022-12-15 14:15:44',
      },
      LTC: {
        code: 'LTC',
        codein: 'BRL',
        name: 'Litecoin/Real Brasileiro',
        high: '409.57',
        low: '388.69',
        varBid: '-17.67',
        pctChange: '-4.33',
        bid: '390.84',
        ask: '390.84',
        timestamp: '1671123536',
        create_date: '2022-12-15 13:58:56',
      },
      EUR: {
        code: 'EUR',
        codein: 'BRL',
        name: 'Euro/Real Brasileiro',
        high: '5.7231',
        low: '5.5991',
        varBid: '0.0018',
        pctChange: '0.03',
        bid: '5.6392',
        ask: '5.6419',
        timestamp: '1671124545',
        create_date: '2022-12-15 14:15:45',
      },
      JPY: {
        code: 'JPY',
        codein: 'BRL',
        name: 'Iene Japonês/Real Brasileiro',
        high: '0.03916',
        low: '0.03856',
        varBid: '-0.0004',
        pctChange: '-1.03',
        bid: '0.03857',
        ask: '0.03859',
        timestamp: '1671124544',
        create_date: '2022-12-15 14:15:46',
      },
      XRP: {
        code: 'XRP',
        codein: 'BRL',
        name: 'XRP/Real Brasileiro',
        high: '2.08',
        low: '2',
        varBid: '-0.04',
        pctChange: '-1.78',
        bid: '2.02',
        ask: '2.03',
        timestamp: '1671123414',
        create_date: '2022-12-15 13:56:54',
      },
      DOGE: {
        code: 'DOGE',
        codein: 'BRL',
        name: 'Dogecoin/Real Brasileiro',
        high: '0.488072',
        low: '0.456602',
        varBid: '-0.02290501',
        pctChange: '-4.72',
        bid: '0.462582',
        ask: '0.462582',
        timestamp: '1671124501',
        create_date: '2022-12-15 14:15:01',
      },
      CNY: {
        code: 'CNY',
        codein: 'BRL',
        name: 'Yuan Chinês/Real Brasileiro',
        high: '0.7666',
        low: '0.7565',
        varBid: '0.0004',
        pctChange: '0.06',
        bid: '0.7632',
        ask: '0.7635',
        timestamp: '1671124505',
        create_date: '2022-12-15 14:15:05',
      },
      ILS: {
        code: 'ILS',
        codein: 'BRL',
        name: 'Novo Shekel Israelense/Real Brasileiro',
        high: '1.5603',
        low: '1.5342',
        varBid: '-0.017',
        pctChange: '-1.09',
        bid: '1.5438',
        ask: '1.5445',
        timestamp: '1671124508',
        create_date: '2022-12-15 14:15:08',
      },
      ETH: {
        code: 'ETH',
        codein: 'BRL',
        name: 'Ethereum/Real Brasileiro',
        high: '7.13832',
        low: '6.72001',
        varBid: '-311',
        pctChange: '-4.41',
        bid: '6.73322',
        ask: '6.74',
        timestamp: '1671123534',
        create_date: '2022-12-15 13:58:54',
      },
    },
  },
  {
    id: 1,
    method: 'Cartão de débito',
    tag: 'Transporte',
    currency: 'EUR',
    value: '150',
    description: 'Ipsun',
    exchangeRates: {
      USDT: {
        code: 'USD',
        codein: 'BRLT',
        name: 'Dólar Americano/Real Brasileiro Turismo',
        high: '5.37',
        low: '5.29',
        varBid: '-0.03',
        pctChange: '-0.56',
        bid: '5.17',
        ask: '5.49',
        timestamp: '1671126540',
        create_date: '2022-12-15 14:49:00',
      },
      USD: {
        code: 'USD',
        codein: 'BRL',
        name: 'Dólar Americano/Real Brasileiro',
        high: '5.3471',
        low: '5.2792',
        varBid: '0.0273',
        pctChange: '0.52',
        bid: '5.305',
        ask: '5.307',
        timestamp: '1671126700',
        create_date: '2022-12-15 14:51:40',
      },
      CAD: {
        code: 'CAD',
        codein: 'BRL',
        name: 'Dólar Canadense/Real Brasileiro',
        high: '3.9252',
        low: '3.8693',
        varBid: '-0.0088',
        pctChange: '-0.23',
        bid: '3.8852',
        ask: '3.8873',
        timestamp: '1671126699',
        create_date: '2022-12-15 14:50:39',
      },
      LTC: {
        code: 'LTC',
        codein: 'BRL',
        name: 'Litecoin/Real Brasileiro',
        high: '409.57',
        low: '388',
        varBid: '-18.47',
        pctChange: '-4.54',
        bid: '388',
        ask: '388.92',
        timestamp: '1671126663',
        create_date: '2022-12-15 14:51:03',
      },
      EUR: {
        code: 'EUR',
        codein: 'BRL',
        name: 'Euro/Real Brasileiro',
        high: '5.7231',
        low: '5.5991',
        varBid: '-0.0131',
        pctChange: '-0.23',
        bid: '5.6226',
        ask: '5.6285',
        timestamp: '1671126704',
        create_date: '2022-12-15 14:51:44',
      },
      GBP: {
        code: 'GBP',
        codein: 'BRL',
        name: 'Libra Esterlina/Real Brasileiro',
        high: '6.5886',
        low: '6.4384',
        varBid: '-0.0984',
        pctChange: '-1.5',
        bid: '6.4551',
        ask: '6.4615',
        timestamp: '1671126704',
        create_date: '2022-12-15 14:51:45',
      },
      ARS: {
        code: 'ARS',
        codein: 'BRL',
        name: 'Peso Argentino/Real Brasileiro',
        high: '0.031',
        low: '0.0306',
        varBid: '0.0001',
        pctChange: '0.33',
        bid: '0.0308',
        ask: '0.0308',
        timestamp: '1671126699',
        create_date: '2022-12-15 14:51:39',
      },
      BTC: {
        code: 'BTC',
        codein: 'BRL',
        name: 'Bitcoin/Real Brasileiro',
        high: '97',
        low: '92.16',
        varBid: '-3449',
        pctChange: '-3.6',
        bid: '92.328',
        ask: '92.461',
        timestamp: '1671126704',
        create_date: '2022-12-15 14:51:43',
      },
      JPY: {
        code: 'JPY',
        codein: 'BRL',
        name: 'Iene Japonês/Real Brasileiro',
        high: '0.03916',
        low: '0.03831',
        varBid: '-0.0005',
        pctChange: '-1.28',
        bid: '0.03841',
        ask: '0.03847',
        timestamp: '1671126704',
        create_date: '2022-12-15 14:51:44',
      },
      CHF: {
        code: 'CHF',
        codein: 'BRL',
        name: 'Franco Suíço/Real Brasileiro',
        high: '5.7748',
        low: '5.6729',
        varBid: '-0.0068',
        pctChange: '-0.12',
        bid: '5.6992',
        ask: '5.7044',
        timestamp: '1671126699',
        create_date: '2022-12-15 14:51:39',
      },
      AUD: {
        code: 'AUD',
        codein: 'BRL',
        name: 'Dólar Australiano/Real Brasileiro',
        high: '3.6268',
        low: '3.5373',
        varBid: '-0.0744',
        pctChange: '-2.06',
        bid: '3.5477',
        ask: '3.549',
        timestamp: '1671126700',
        create_date: '2022-12-15 14:51:40',
      },
      CNY: {
        code: 'CNY',
        codein: 'BRL',
        name: 'Yuan Chinês/Real Brasileiro',
        high: '0.7666',
        low: '0.7565',
        varBid: '-0.0057',
        pctChange: '-0.74',
        bid: '0.7605',
        ask: '0.7607',
        timestamp: '1671126664',
        create_date: '2022-12-15 14:51:04',
      },
      XRP: {
        code: 'XRP',
        codein: 'BRL',
        name: 'XRP/Real Brasileiro',
        high: '2.08',
        low: '2',
        varBid: '-0.04',
        pctChange: '-2.04',
        bid: '2.02',
        ask: '2.03',
        timestamp: '1671126693',
        create_date: '2022-12-15 14:51:33',
      },
      DOGE: {
        code: 'DOGE',
        codein: 'BRL',
        name: 'Dogecoin/Real Brasileiro',
        high: '0.488072',
        low: '0.456602',
        varBid: '-0.02746601',
        pctChange: '-5.66',
        bid: '0.458021',
        ask: '0.458021',
        timestamp: '1671126491',
        create_date: '2022-12-15 14:48:11',
      },
      ILS: {
        code: 'ILS',
        codein: 'BRL',
        name: 'Novo Shekel Israelense/Real Brasileiro',
        high: '1.5603',
        low: '1.5332',
        varBid: '-0.0291',
        pctChange: '-1.85',
        bid: '1.5391',
        ask: '1.5395',
        timestamp: '1671126666',
        create_date: '2022-12-15 14:51:06',
      },
      ETH: {
        code: 'ETH',
        codein: 'BRL',
        name: 'Ethereum/Real Brasileiro',
        high: '7.13832',
        low: '6.72001',
        varBid: '-337.7',
        pctChange: '-4.77',
        bid: '6.73799',
        ask: '6.74',
        timestamp: '1671126636',
        create_date: '2022-12-15 14:50:36',
      },
    },
  },
];

export default mockInput;
