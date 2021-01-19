#!/usr/bin/env bash

# build backend project
mvn -f ./opentelemetry-backend-spring-boot clean package
# copy output to dist folder
cp ./opentelemetry-backend-spring-boot/target/*.jar ./dist/app.jar

# download java instrumentation
export OTEL_INSTRUMENTATION_JAR="https://github.com/open-telemetry/opentelemetry-java-instrumentation/releases/download/v0.13.0/opentelemetry-javaagent-all.jar"
wget $OTEL_INSTRUMENTATION_JAR -O ./dist/instrumentation.jar

# export directly to jaeger
export OTEL_EXPORTER=jaeger
export OTEL_EXPORTER_JAEGER_SERVICE_NAME=opentelemetry-backend

# set propagation specification
export OTEL_PROPAGATORS=b3

# start application
java -javaagent:./dist/instrumentation.jar \
     -jar ./dist/app.jar
