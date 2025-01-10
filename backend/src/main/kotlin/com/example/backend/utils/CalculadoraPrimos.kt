package com.example.backend.utils

object CalculadoraPrimos {
        fun contarPrimos(n: Int): Int {
            if (n < 2) {
                return 0
            }
            val ehPrimo = BooleanArray(n + 1) { true }

            for (p in 2..n) {
                if (p * p > n) break
                if (ehPrimo[p]) {
                    for (i in p * p..n step p) {
                        ehPrimo[i] = false
                    }
                }
            }

            return (2..n).count { ehPrimo[it] }
        }
        fun <T> contarTempo(block: () -> T): Pair<T, Int> {
            val comeco = System.nanoTime()
            val resultado = block()
            val fim = System.nanoTime()
            val tempoDeCalculo = fim - comeco
            return Pair(resultado, tempoDeCalculo.toInt())
        }
}
