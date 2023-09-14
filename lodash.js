import _ from 'lodash/core'
import merge from 'lodash/merge'
import isArrayLikeObject from 'lodash/isArrayLikeObject'
import isPlainObject from 'lodash/isPlainObject'
import mapKeys from 'lodash/mapKeys'
import mapValues from 'lodash/mapValues'
import camelCase from 'lodash/camelCase'
import findIndex from 'lodash/findIndex'
import throttle from 'lodash/throttle'
import padStart from 'lodash/padStart'
import groupBy from 'lodash/groupBy'
import cloneDeep from 'lodash/cloneDeep'

import createCompounder from 'lodash/_createCompounder'
const snakeCase = createCompounder(function (result, word, index) {
  return result + ((index && !/^\d/.test(word)) ? '_' : '') + word.toLowerCase()
})

_.mixin({
  merge,
  isArrayLikeObject,
  isPlainObject,
  mapKeys,
  mapValues,
  camelCase,
  snakeCase,
  findIndex,
  throttle,
  padStart,
  groupBy,
  cloneDeep
})

const isPromise = v => typeof v.then === 'function'

export function promiseDeep (promises) {
  const deep = (x) => {
    if (x instanceof Array) { return Promise.all(x.map(deep)) }
    if (typeof x === 'function') { return deep(x()) }
    return x
  }
  return deep(promises)
}

function caseDeep (rec, fn, o) {
  if (o !== Object(o)) { return o }
  if (isPromise(o)) { return o.then(rec) }
  if (process.client && o instanceof FormData) {
    const form = new FormData()
    for (const [key, value] of o.entries()) { form.append(fn(key), value) }
    return form
  }
  if (_.isArrayLikeObject(o)) { return _.map(o, rec) }
  if (_.isPlainObject(o)) { return _(o).mapKeys((v, k) => fn(k)).mapValues(rec).value() }
  return o
}

function camelCaseDeep (o) { return caseDeep(camelCaseDeep, _.camelCase, o) }
function snakeCaseDeep (o) { return caseDeep(snakeCaseDeep, _.snakeCase, o) }
_.mixin({ camelCaseDeep, snakeCaseDeep })

export default _
