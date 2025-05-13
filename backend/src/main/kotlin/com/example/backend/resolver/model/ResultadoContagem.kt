package com.example.backend.resolver.model

import java.time.Instant

data class ResultadoContagem(val numeroPrimos: Long, val tempoDeCalculo: Int, val dataDoCalculo: Instant)
