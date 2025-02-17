package com.example.backend.resolver

import com.example.backend.resolver.model.ResultadoContagem
import com.example.backend.utils.CalculadoraPrimos.contarPrimos
import com.example.backend.utils.CalculadoraPrimos.contarTempo
import org.springframework.graphql.data.method.annotation.Argument
import org.springframework.graphql.data.method.annotation.QueryMapping
import org.springframework.stereotype.Controller
import java.time.Instant

@Controller
class QueryResolver {

    @QueryMapping
    fun processarNumero(@Argument limiteContagem: Int): ResultadoContagem {
        val resultado = contarTempo { contarPrimos(limiteContagem) }

        return ResultadoContagem(numeroPrimos = resultado.first, tempoDeCalculo = resultado.second, dataDoCalculo = Instant.now())
    }

}
