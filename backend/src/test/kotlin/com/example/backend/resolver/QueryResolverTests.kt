package com.example.backend.resolver

import com.example.backend.resolver.model.LimiteContagem
import com.example.backend.utils.CalculadoraPrimos
import io.mockk.every
import io.mockk.mockkObject
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test

class QueryResolverTest {

    private val queryResolver = QueryResolver()

    @Test
    fun `deve calcular numeros primos e tempo corretamente`() {
        val inputNumber = 10
        val mockResult = 4

        mockkObject(CalculadoraPrimos)
        every { CalculadoraPrimos.contarPrimos(inputNumber) } returns mockResult

        val input = LimiteContagem(numero = inputNumber)

        val result = queryResolver.processarNumero(input)

        assertThat(result.numeroPrimos).isEqualTo(mockResult)
    }
}
