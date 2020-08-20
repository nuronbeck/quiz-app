if (!Array.isArray) {
  Array.isArray = arg =>
    Object.prototype.toString.call(arg) === '[object Array]'
}

export const isArray = Array.isArray
