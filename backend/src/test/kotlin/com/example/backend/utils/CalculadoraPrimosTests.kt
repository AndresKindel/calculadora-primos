package com.example.backend.utils

import org.assertj.core.api.Assertions.assertThat
import com.example.backend.utils.CalculadoraPrimos.contarPrimos
import org.junit.jupiter.params.ParameterizedTest
import org.junit.jupiter.params.provider.Arguments
import org.junit.jupiter.params.provider.MethodSource

class CalculadoraPrimosTest {
    companion object {
        @JvmStatic
        fun valores(): List<Arguments> = listOf(
            Arguments.of(0, 0L),
            Arguments.of(1, 0L),
            Arguments.of(10, 4L),
            Arguments.of(100, 25L),
            Arguments.of(1000, 168L)
        )
    }

    @ParameterizedTest
    @MethodSource("valores")
    fun `deve retornar o numero correto de primos`(n: Int, expected: Long) {
        val result = contarPrimos(n)
        assertThat(expected).isEqualTo(result)
    }

}
