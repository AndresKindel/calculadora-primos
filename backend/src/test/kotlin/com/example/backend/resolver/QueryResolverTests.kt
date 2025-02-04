package com.example.backend.resolver

import com.example.backend.resolver.model.LimiteContagem
import com.example.backend.utils.CalculadoraPrimos
import io.mockk.every
import io.mockk.mockkObject
import io.mockk.verify
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test

class QueryResolverTest {

    private val queryResolver = QueryResolver()

    @Test
    fun `deve calcular numeros primos e tempo corretamente`() {
        val inputNumber = 10
        val mockResult = 4L

        mockkObject(CalculadoraPrimos)
        every { CalculadoraPrimos.contarPrimos(inputNumber) } returns mockResult

        val result = queryResolver.processarNumero(inputNumber)

        verify(exactly = 1) { CalculadoraPrimos.contarPrimos(inputNumber) }
        assertThat(result.numeroPrimos).isEqualTo(mockResult)
    }
}
