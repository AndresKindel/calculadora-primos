package com.example.backend.resolver

import com.example.backend.resolver.model.LimiteContagem
import com.example.backend.resolver.model.ResultadoContagem
import com.example.backend.utils.CalculadoraPrimos.contarPrimos
import com.example.backend.utils.CalculadoraPrimos.contarTempo
import com.example.backend.utils.formatTimestampToDateTime
import org.springframework.graphql.data.method.annotation.Argument
import org.springframework.graphql.data.method.annotation.QueryMapping
import org.springframework.stereotype.Controller

@Controller
class QueryResolver {

    @QueryMapping
    fun processarNumero(@Argument input: LimiteContagem): ResultadoContagem {
        val resultado = contarTempo { contarPrimos(input.numero) }

        return ResultadoContagem(numeroPrimos = resultado.first, tempoDeCalculo = resultado.second, dataDoCalculo = formatTimestampToDateTime(System.currentTimeMillis()))
    }

}
