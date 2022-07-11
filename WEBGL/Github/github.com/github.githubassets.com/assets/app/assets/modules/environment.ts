// Failbot needs to load first so we get errors from system lite.
import './github/failbot-error'

// Browser polyfills
import 'request-idle-polyfill'
import 'smoothscroll-polyfill'
import 'user-select-contain-polyfill'

import './system-lite'

// Required for Chrome <= 72, Safari <= 12.1
if (!Object.fromEntries) {
  Object.fromEntries = function fromEntries<V extends unknown>(entries: IterableIterator<[string | number, V]>) {
    const obj: Record<string | number | symbol, V> = {}
    // This must not use array destructuring, as that invokes `Symbol.iterator` which is not to-spec
    for (const record of entries) obj[record[0]] = record[1]
    return obj
  }
}
