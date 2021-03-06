import { max as duoMax }     from '@aryth/comparer'
import { Foba }              from '@foba/vector-number'
import { decoCrostab, says } from '@spare/logger'
import { strategies }        from '@valjoux/strategies'
import { iterate }           from '@vect/vector-mapper'
import { Indicator }         from '../src/Indicator'
import { Max }               from '../src/Max'
import { Piler }             from '../src/Piler'

const maxWithThisArg = function (x) { this.max = duoMax(x, this.max) }

const { lapse, result } = strategies({
  repeat: 5E+5,
  candidates: {
    nonSquares: [Foba.nonSquares(12), 12],
    fibonacci: [Foba.fibonacci(16), 16],
    range1: [Foba.range(128), 128],
    range2: [Foba.range(256), 256],
    // range3: [Foba.range(512), 512],
  },
  methods: {
    bench: x => x,
    nativeMath: vec => Math.max.apply(null, vec),
    reduce: vec => vec.reduce((p, n) => p > n ? p : n, vec[0]),
    plain: Max(),
    byPiler: Piler({ pile: (p, n) => duoMax(p, n) }),
    iterate: (vec, l) => {
      const o = { max: vec[0] }
      iterate.call(o, vec, maxWithThisArg, l)
      return o.max
    },
    byIndicator: Indicator({
      init: () => ({ max: 0 }),
      pile: maxWithThisArg,
      pick: o => o.max
    }),
    classic: Max(x => x),
  }
})
lapse |> decoCrostab |> says.lapse
result |> decoCrostab |> says.result
