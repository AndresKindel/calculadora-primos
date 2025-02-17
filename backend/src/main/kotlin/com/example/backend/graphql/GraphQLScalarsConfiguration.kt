package com.example.backend.graphql

import org.springframework.context.annotation.Configuration
import org.springframework.graphql.execution.RuntimeWiringConfigurer
import graphql.schema.GraphQLScalarType
import graphql.schema.idl.RuntimeWiring

@Configuration
class GraphQLScalarsConfiguration : RuntimeWiringConfigurer {
    override fun configure(builder: RuntimeWiring.Builder) {
        builder
            .scalar(
                GraphQLScalarType.newScalar()
                    .name("Long")
                    .description("Long type")
                    .coercing(GraphQLLongCoercing())
                    .build()
            )
            .scalar(
                GraphQLScalarType.newScalar()
                    .name("Instant")
                    .description("Instant type")
                    .coercing(GraphQLInstantCoercing())
                    .build()
            )
    }
}
