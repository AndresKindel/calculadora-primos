package com.example.backend.model

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.Table
import java.time.LocalDate

@Entity
@Table(name = "calculo")
data class Calculo(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null,

    @Column(name = "input")
    val input: Int,

    @Column(name = "numero_primos")
    val numeroPrimos: Long,

    @Column(name = "tempo_de_calculo")
    val tempoDeCalculo: Int,

    @Column(name = "data")
    val data: LocalDate
)
