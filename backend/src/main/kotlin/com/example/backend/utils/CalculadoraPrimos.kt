package com.example.backend.utils

class CalculadoraPrimos {
    companion object {
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

            var contador = 0
            for (i in 2..n) {
                if (ehPrimo[i]) {
                    contador++
                }
            }
            return contador
        }
    }
}
