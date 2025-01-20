package com.example.backend.graphql;

import java.math.BigDecimal;
import java.math.BigInteger;

import graphql.language.IntValue;
import graphql.language.StringValue;
import graphql.schema.Coercing;
import graphql.schema.CoercingParseLiteralException;
import graphql.schema.CoercingParseValueException;
import graphql.schema.CoercingSerializeException;

public class GraphQLLongCoercing implements Coercing<Long, Long> {

	private static final BigInteger LONG_MAX = BigInteger.valueOf(Long.MAX_VALUE);
	private static final BigInteger LONG_MIN = BigInteger.valueOf(Long.MIN_VALUE);

	private Long convertImpl(Object input) {
		if (input instanceof Long) {
			return (Long) input;
		} else if (input instanceof Number || input instanceof String) {
			BigDecimal value;
			try {
				value = new BigDecimal(input.toString());
			} catch (NumberFormatException e) {
				return null;
			}
			try {
				return value.longValueExact();
			} catch (ArithmeticException e) {
				return null;
			}
		} else {
			return null;
		}

	}

	@Override
	public Long serialize(Object input) {
		Long result = this.convertImpl(input);
		if (result == null) {
			throw new CoercingSerializeException(
					"Expected type 'Long' but was '" + typeName(input) + "'."
			);
		}
		return result;
	}

	@Override
	public Long parseValue(Object input) {
		Long result = this.convertImpl(input);
		if (result == null) {
			throw new CoercingParseValueException(
					"Expected type 'Long' but was '" + typeName(input) + "'."
			);
		}
		return result;
	}

	@Override
	public Long parseLiteral(Object input) {
		if (input instanceof StringValue) {
			try {
				return Long.parseLong(((StringValue) input).getValue());
			} catch (NumberFormatException e) {
				throw new CoercingParseLiteralException("Expected value to be a Long but it was '" + input + "'");
			}
		} else if (input instanceof IntValue) {
			BigInteger value = ((IntValue) input).getValue();
			if (value.compareTo(LONG_MIN) < 0 || value.compareTo(LONG_MAX) > 0) {
				throw new CoercingParseLiteralException("Expected value to be in the Long range but it was '" + value.toString() + "'");
			}
			return value.longValue();
		}
		throw new CoercingParseLiteralException("Expected AST type 'IntValue' or 'StringValue' but was '" + typeName(input) + "'.");
	}

	static String typeName(Object input) {
		if (input == null) {
			return "null";
		}
		return input.getClass().getSimpleName();
	}
}
