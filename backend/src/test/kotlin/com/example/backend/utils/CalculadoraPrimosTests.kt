package com.example.backend.utils

import kotlin.test.Test
import kotlin.test.assertEquals
import com.example.backend.utils.CalculadoraPrimos.Companion.contarPrimos

class CalculadoraPrimosTest {

    @Test
    fun `deve retornar 0 para n = 0`() {
        val result = contarPrimos(0)
        val expected = 0
        assertEquals(expected, result)
    }

    @Test
    fun `deve retornar 0 para n = 1`() {
        val result = contarPrimos(1)
        val expected = 0
        assertEquals(expected, result)
    }

    @Test
    fun `deve retornar 4 para n = 10`() {
        val result = contarPrimos(10)
        val expected = 4
        assertEquals(expected, result)
    }

    @Test
    fun `deve retornar 25 para n = 100`() {
        val result = contarPrimos(100)
        val expected = 25
        assertEquals(expected, result)
    }

    @Test
    fun `deve retornar 168 para n = 1000`() {
        val result = contarPrimos(1000)
        val expected = 168
        assertEquals(expected, result)
    }
}
