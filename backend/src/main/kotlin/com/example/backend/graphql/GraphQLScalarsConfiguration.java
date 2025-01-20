package com.example.backend.graphql;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.graphql.execution.RuntimeWiringConfigurer;

import graphql.schema.GraphQLScalarType;

@Configuration
public class GraphQLScalarsConfiguration {

	@Bean
	public GraphQLScalarType graphQLLong() {
		return GraphQLScalarType.newScalar()
				.name("Long").description("Long type").coercing(new GraphQLLongCoercing()).build();
	}

	@Bean
	public GraphQLScalarType graphQLInstant() {
		return GraphQLScalarType.newScalar()
				.name("Instant").description("Instant type").coercing(new GraphQLInstantCoercing()).build();
	}

	@Bean
	public RuntimeWiringConfigurer runtimeWiringConfigurerLong(GraphQLScalarType graphQLLong) {
		return builder -> builder.scalar(graphQLLong);
	}

	@Bean
	public RuntimeWiringConfigurer runtimeWiringConfigurerInstant(GraphQLScalarType graphQLInstant) {
		return builder -> builder.scalar(graphQLInstant);
	}
}
