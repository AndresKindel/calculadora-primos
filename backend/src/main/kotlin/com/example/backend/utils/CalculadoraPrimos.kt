package com.example.backend.utils

object CalculadoraPrimos {
    fun contarPrimos(n: Int): Long {
        if (n < 2) {
            return 0L
        }

        val ehPrimo = BooleanArray(n + 1) { true }

        for (p in 2..n) {
            if (p.toLong() * p > n) break
            if (ehPrimo[p]) {
                for (i in p * p..n step p) {
                    ehPrimo[i] = false
                }
            }
        }

        return (2..n).count { ehPrimo[it] }.toLong()
    }

    fun <T> contarTempo(block: () -> T): Pair<T, Int> {
            val comeco = System.nanoTime()
            val resultado = block()
            val fim = System.nanoTime()
            val tempoDeCalculo = fim - comeco
            return Pair(resultado, tempoDeCalculo.toInt())
        }
}
