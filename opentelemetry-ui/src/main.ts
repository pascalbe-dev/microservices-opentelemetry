import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as api from '@opentelemetry/api';
import { CollectorTraceExporter } from '@opentelemetry/exporter-collector';
import { XMLHttpRequestInstrumentation } from '@opentelemetry/instrumentation-xml-http-request';
import { JaegerHttpTracePropagator } from '@opentelemetry/propagator-jaeger';
import { SimpleSpanProcessor } from '@opentelemetry/tracing';
import { WebTracerProvider } from '@opentelemetry/web';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

api.propagation.setGlobalPropagator(new JaegerHttpTracePropagator());

//  init tracing
const provider = new WebTracerProvider({
  plugins: [
    new XMLHttpRequestInstrumentation({
      propagateTraceHeaderCorsUrls: ['http://localhost:8080'],
    }),
  ],
});
//  define exporter
const exporter = new CollectorTraceExporter({
  serviceName: 'opentelemetry-ui',
});
provider.addSpanProcessor(new SimpleSpanProcessor(exporter));

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
