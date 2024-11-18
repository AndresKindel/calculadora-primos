package com.example.backend.resolver

import org.junit.jupiter.api.Test
import kotlin.test.assertEquals

class MutationResolverTest {

    private val mutationResolver = MutationResolver()

    @Test
    fun `deve calcular numeros primos e tempo corretamente`() {
        val inputNumber = 10
        val mockResult = 4

        val input = Input(number = inputNumber)

        val result = mutationResolver.processNumber(input)

        assertEquals(mockResult, result.numeroPrimos)
    }
}
