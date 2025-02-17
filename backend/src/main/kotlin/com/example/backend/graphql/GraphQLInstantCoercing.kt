package com.example.backend.graphql

import java.time.Instant
import graphql.language.IntValue
import graphql.schema.Coercing

class GraphQLInstantCoercing : Coercing<Instant?, Long?> {
    override fun serialize(input: Any): Long? {
        if (input is Instant) {
            return input.toEpochMilli()
        }
        return null
    }

    override fun parseValue(input: Any): Instant? {
        if (input is Long) {
            return Instant.ofEpochMilli(input)
        }
        return null
    }

    override fun parseLiteral(input: Any): Instant? {
        if (input !is IntValue) {
            return null
        }

        val instant = input.value
        return this.parseValue(instant.longValueExact())
    }
}
