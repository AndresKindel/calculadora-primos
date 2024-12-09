package com.example.backend.utils

import kotlin.test.assertEquals
import com.example.backend.utils.CalculadoraPrimos.contarPrimos
import org.junit.jupiter.params.ParameterizedTest
import org.junit.jupiter.params.provider.ValueSource

class CalculadoraPrimosTest {
    @ParameterizedTest
    @ValueSource(ints = [0, 1, 10, 100, 1000])
    fun `deve retornar o número correto de primos`(n: Int) {
        val expected = when (n) {
            0 -> 0
            1 -> 0
            10 -> 4
            100 -> 25
            1000 -> 168
            else -> throw IllegalArgumentException("Valor invalido")
        }

        val result = contarPrimos(n)
        assertEquals(expected, result)
    }
}
