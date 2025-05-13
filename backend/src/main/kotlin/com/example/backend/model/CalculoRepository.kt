package com.example.backend.model

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface CalculoRepository : JpaRepository<Calculo, Long>
