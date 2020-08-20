export const defaultLocale = 'en'
export const fallbackLocale = 'en'

export const locales = [
  { code: 'en', iso: 'en-US', file: 'en.json' },
  // { code: 'ro', iso: 'ro-RO', file: 'ro.json' },
  { code: 'ru', iso: 'ru-RU', file: 'ru.json' },
  { code: 'uz', iso: 'uz-UZ', file: 'uz.json' },
]

export const dateTimeFormats = {
  'en-US': {
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }
  },
  // 'ro-RO': {
  //   short: {
  //     year: 'numeric',
  //     month: 'long',
  //     day: 'numeric'
  //   }
  // },
  'ru-RU': {
    short: {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
  },
  'uz-UZ': {
    short: {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
  }
}

export const numberFormats = {
  'en-US': {
    currency: {
      style: 'currency', currency: 'USD'
    }
  },
  // 'ro-RO': {
  //   currency: {
  //     style: 'currency', currency: 'RON'
  //   }
  // },
  'ru-RU': {
    currency: {
      style: 'currency', currency: 'RUB'
    }
  },
  'uz-UZ': {
    currency: {
      style: 'currency', currency: 'UZS'
    }
  }
}

export default {
  numberFormats,
  dateTimeFormats,
  locales
}