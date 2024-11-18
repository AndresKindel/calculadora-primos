package com.example.backend.resolver

import com.example.backend.utils.CalculadoraPrimos.Companion.contarPrimos
import org.springframework.graphql.data.method.annotation.MutationMapping
import org.springframework.stereotype.Controller

data class Input(val number: Int)
data class Result(val numeroPrimos: Int, val tempoDeCalculo: Int)

@Controller
class MutationResolver() {

    @MutationMapping
    fun processNumber(input: Input): Result {
        val startTime = System.currentTimeMillis()
        val numerosPrimos = contarPrimos(input.number)
        val endTime = System.currentTimeMillis()
        val tempoDeCalculo = endTime - startTime

        return Result(numeroPrimos = numerosPrimos, tempoDeCalculo = tempoDeCalculo.toInt())
    }

}
