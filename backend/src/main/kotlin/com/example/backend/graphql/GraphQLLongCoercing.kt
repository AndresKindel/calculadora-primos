package com.example.backend.graphql

import java.math.BigDecimal
import java.math.BigInteger
import graphql.language.IntValue
import graphql.language.StringValue
import graphql.schema.Coercing
import graphql.schema.CoercingParseLiteralException
import graphql.schema.CoercingParseValueException
import graphql.schema.CoercingSerializeException

class GraphQLLongCoercing : Coercing<Long, Long> {
    private fun convertImpl(input: Any): Long? {
        when (input) {
            is Long -> {
                return input
            }

            is Number, is String -> {
                val value: BigDecimal
                try {
                    value = BigDecimal(input.toString())
                } catch (e: NumberFormatException) {
                    return null
                }
                return try {
                    value.longValueExact()
                } catch (e: ArithmeticException) {
                    null
                }
            }

            else -> {
                return null
            }
        }
    }

    override fun serialize(input: Any): Long {
        val result = this.convertImpl(input)
            ?: throw CoercingSerializeException(
                "Expected type 'Long' but was '" + typeName(input) + "'."
            )
        return result
    }

    override fun parseValue(input: Any): Long {
        val result = this.convertImpl(input)
            ?: throw CoercingParseValueException(
                "Expected type 'Long' but was '" + typeName(input) + "'."
            )
        return result
    }

    override fun parseLiteral(input: Any): Long {
        if (input is StringValue) {
            try {
                return input.value.toLong()
            } catch (e: NumberFormatException) {
                throw CoercingParseLiteralException("Expected value to be a Long but it was '$input'")
            }
        } else if (input is IntValue) {
            val value = input.value
            if (value < LONG_MIN || value > LONG_MAX) {
                throw CoercingParseLiteralException("Expected value to be in the Long range but it was '$value'")
            }
            return value.toLong()
        }
        throw CoercingParseLiteralException("Expected AST type 'IntValue' or 'StringValue' but was '" + typeName(input) + "'.")
    }

    companion object {
        private val LONG_MAX: BigInteger = BigInteger.valueOf(Long.MAX_VALUE)
        private val LONG_MIN: BigInteger = BigInteger.valueOf(Long.MIN_VALUE)

        fun typeName(input: Any?): String {
            if (input == null) {
                return "null"
            }
            return input.javaClass.simpleName
        }
    }
}
