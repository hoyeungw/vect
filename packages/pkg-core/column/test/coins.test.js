import { logger } from '@spare/logger'
import { deco } from '@spare/deco'
import { CrosXMatricesRobust, makeEmbedded } from '@foba/foo'
import { coins } from '../function/coins'
import { xr } from '@spare/xr'
import { strategies } from '@valjoux/strategies'
import {decoCrostab} from '@spare/logger'
import { isMatrix } from '../function/isMatrix'

// CrosXMatricesRobust |> deco |> logger
//
// for (let [k, m] of Object.entries(CrosXMatricesRobust))
//   xr(k).coins(m |> coins) |> logger

export function CoinsTest () {
  const { lapse, result } = strategies({
    repeat: 3E+6,
    candidates: CrosXMatricesRobust |> makeEmbedded,
    methods: {
      stable: x => x && x.length,
      coins,
      dev: mx => Array.isArray(mx) && Array.isArray(mx[0]) ? mx[0].map((_, i) => i) : [],
      edge: mx => isMatrix(mx) ? Object.keys(mx[0]) : [],
    }
  })
  'lapse' |> console.log
  lapse |> decoCrostab |> console.log
  '' |> console.log
  'result' |> console.log
  result |> decoCrostab |> console.log

}

CoinsTest()
