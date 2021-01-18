# MICROSERVICES OPENTELEMETRY

> A sample repo to play with metrics, logging, traces in a microservice architecture.

## Setup

1. Start required infrastructure

- `docker-compose up -d`

2. Start UI

- `npm run start --prefix opentelemetry-ui -- --open`

3. Start Backend

- `./startBackend.sh`

3. Checkout Telemetry data

- [Jaeger UI for traces](http://localhost:16686/search)
