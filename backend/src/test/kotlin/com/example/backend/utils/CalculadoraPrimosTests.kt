package com.example.backend.utils

import kotlin.test.assertEquals
import com.example.backend.utils.CalculadoraPrimos.contarPrimos
import org.junit.jupiter.params.ParameterizedTest
import org.junit.jupiter.params.provider.Arguments
import org.junit.jupiter.params.provider.MethodSource
import org.junit.jupiter.params.provider.ValueSource

class CalculadoraPrimosTest {
    companion object {
        @JvmStatic
        fun valores(): List<Arguments> = listOf(
            Arguments.of(0, 0),
            Arguments.of(1, 0),
            Arguments.of(10, 4),
            Arguments.of(100, 25),
            Arguments.of(1000, 168)
        )
    }

    @ParameterizedTest
    @MethodSource("valores")
    fun `deve retornar o número correto de primos`(n: Int, expected: Int) {
        val result = contarPrimos(n)
        assertEquals(expected, result)
    }

}
