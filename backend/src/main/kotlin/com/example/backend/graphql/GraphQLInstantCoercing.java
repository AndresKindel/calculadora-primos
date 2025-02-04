package com.example.backend.graphql;

import java.math.BigInteger;
import java.time.Instant;

import graphql.language.IntValue;
import graphql.schema.Coercing;

public class GraphQLInstantCoercing implements Coercing<Instant, Long> {

	@Override
	public Long serialize(Object input) {
		if (input instanceof Instant) {
			return ((Instant) input).toEpochMilli();
		}
		return null;
	}

	@Override
	public Instant parseValue(Object input) {
		if (input instanceof Long) {
			return Instant.ofEpochMilli((Long) input);
		}
		return null;
	}

	@Override
	public Instant parseLiteral(Object input) {
		if (!(input instanceof IntValue)) {
			return null;
		}

		BigInteger instant = ((IntValue) input).getValue();
		return this.parseValue(instant.longValueExact());
	}
}
