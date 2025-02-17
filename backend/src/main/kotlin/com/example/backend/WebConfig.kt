package com.example.backend

import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer

@Configuration
class WebConfig : WebMvcConfigurer {
    override fun addCorsMappings(registry: CorsRegistry) {
        registry.addMapping("/graphql")
            .allowedOrigins("http://localhost:3000")
            .allowedMethods("POST")
            .allowedHeaders("*")
    }
}
