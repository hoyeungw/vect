import { SimpleObjects } from '@foba/foo'
import { logger } from '@spare/logger'
import { deco } from '@spare/deco'
import { Ob } from 'veho'
import { Chrono } from 'elprimero'
import { CrosTabX, logNeL } from 'xbrief'

class ObjectMapperTest {
  static test () {
    const hasKey = Object.hasOwnProperty
    const fn = x => `'${x}'`
    SimpleObjects |> deco |> logger
    const { lapse, result } = Chrono.strategies({
      repeat: 4E+5,
      paramsList: Ob.mapValues(SimpleObjects, x => [x, fn]),
      funcList: {
        stable: x => x,
        mapper (o, fn, len) {
          const ob = {}, ents = Object.entries(o)
          len = len || ents.length
          for (let i = 0, r; i < len; i++)
            ob[(r = ents[i])[0]] = fn(r[1])
          return ob
        },
        mapper2 (o, fn) {
          const ob = {}
          for (let k in o)
            if (Object.hasOwnProperty.call(o, k)) ob[k] = fn(o[k])
          return ob
        },
        mapper3 (o, fn) {
          const ob = {}
          for (let k in o) ob[k] = fn(o[k])
          return ob
        },
        mapper4 (o, fn) {
          const ob = {}
          const keys = Object.getOwnPropertyNames(o), l = keys.length
          for (let i = 0, k; i < l; i++) {
            ob[k = keys[i]] = fn(o[k])
          }
          return ob
        }
      }
    })
    'lapse' |> console.log
    lapse |> CrosTabX.brief |> logNeL
    'result' |> console.log
    result |> CrosTabX.brief |> logNeL
    'result - specific' |> logNeL
    result.queryCell(result.side[3], 'mapper') |> deco |> logger
    result.queryCell(result.side[3], 'mapper2') |> deco |> logger
    result.queryCell(result.side[3], 'mapper3') |> deco |> logger
    result.queryCell(result.side[3], 'mapper4') |> deco |> logger
  }
}

ObjectMapperTest.test()