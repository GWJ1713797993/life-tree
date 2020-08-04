/**
 * 判断对象的所有值是否有空的
 * @param {Object} object //需要验证的字段
 * @param {Array} ignore  //忽略的字段
 * @return { Object || Boolean } 返回false  或  为空的key跟value
 */
export function isObjEmpty(object, ignore = []) {
  let result = false
  if (typeof object !== 'object' || typeof ignore !== 'object') {
    return result
  }

  for (const key in object) {
    if (isIgnore(key, ignore)) {
      continue
    } else {
      if (isEmpty(object[key])) {
        result = {
          key: key,
          value: object[key]
        }
        break
      }
    }
  }
  return result
}

/**
 * 判断数组是否存在某个值
 * @param {Object} str
 * @param {Object} array
 * @return {Boolean} 存在返回true 否则返回false
 */
export function isIgnore(str, array) {
  const arr = JSON.stringify(array)
  return arr.search(str) !== -1
}

/**
 * 判断是否为空
 * @param {Object} v
 * @return {Boolean} 空返回true 否则返回false
 */
export function isEmpty(v) {
  switch (typeof v) {
    case 'undefined':
      return true
    case 'string':
      if (v.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length === 0) return true
      break
    case 'boolean':
      if (!v) return true
      break
    case 'number':
      // if (0 === v || isNaN(v)) return true;
      if (isNaN(v)) return true
      break
    case 'object':
      if (v === null || v.length === 0) return true
      for (var i in v) {
        return false
      }
      return true
  }
  return false
}

/* *
 * 深拷贝
 * @param { Object | Number } object 需要拷贝的对象
 */
export const deepCopy = (object) => {
  return JSON.parse(JSON.stringify(object))
}

/**
 * 简单的手机号验证
 * @param {Number} v
 */
export function isMobile(v) {
  // 验证手机号是否为1开头
  // 第二位在1-9之间
  // 11位数
  const reg = new RegExp(/^(1[1-9]\d{9}$)/)
  return reg.test(v)
}
