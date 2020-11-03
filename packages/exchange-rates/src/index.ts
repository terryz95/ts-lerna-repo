import axios from 'axios'
import dayjs from 'dayjs'
import { mul } from '@terryz95/arithmetic'

const API = 'https://api.ratesapi.io/api/latest'
interface APIRes {
  base: BASE
  rates: {
    [key in BASE]: number
  }
  date: string
}

enum BASE {
  GBP = 'GBP',
  HKD = 'HKD',
  IDR = 'IDR',
  ILS = 'ILS',
  DKK = 'DKK',
  INR = 'INR',
  CHF = 'CHF',
  MXN = 'MXN',
  CZK = 'CZK',
  SGD = 'SGD',
  THB = 'THB',
  HRK = 'HRK',
  MYR = 'MYR',
  NOK = 'NOK',
  CNY = 'CNY',
  BGN = 'BGN',
  PHP = 'PHP',
  SEK = 'SEK',
  PLN = 'PLN',
  ZAR = 'ZAR',
  CAD = 'CAD',
  ISK = 'ISK',
  BRL = 'BRL',
  RON = 'RON',
  NZD = 'NZD',
  TRY = 'TRY',
  JPY = 'JPY',
  RUB = 'RUB',
  KRW = 'KRW',
  USD = 'USD',
  HUF = 'HUF',
  AUD = 'AUD',
  EUR = 'EUR',
}

let result: APIRes | null = null

export default async function (
  num: number,
  symbols: BASE = BASE.USD,
  base: BASE = BASE.CNY
) {
  if (symbols === base) {
    return num
  }
  try {
    if (
      !result ||
      dayjs(result.date).add(1, 'day').format('YYYY-MM-DD') <
        dayjs().format('YYYY-MM-DD')
    ) {
      result = (await axios.get(`${API}?base=${base}&symbols=${symbols}`)).data
    }
    const { rates } = result!
    return rates[symbols] ? mul(num, rates[symbols]) : num
  } catch (e) {
    throw new Error(`utils/exchange-rates: Rates Api Get Error`)
  }
}
