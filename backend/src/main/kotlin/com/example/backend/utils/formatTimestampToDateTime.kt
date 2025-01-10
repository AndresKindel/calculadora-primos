package com.example.backend.utils

import java.time.Instant
import java.time.LocalDateTime
import java.time.ZoneId.*
import java.time.format.DateTimeFormatter

fun formatTimestampToDateTime(timestamp: Long): String {
    val dateTime = LocalDateTime.ofInstant(Instant.ofEpochMilli(timestamp), systemDefault())
    val formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss")
    return dateTime.format(formatter)
}
