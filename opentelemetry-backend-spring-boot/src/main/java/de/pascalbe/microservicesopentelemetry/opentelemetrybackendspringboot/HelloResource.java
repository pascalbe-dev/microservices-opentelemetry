package de.pascalbe.microservicesopentelemetry.opentelemetrybackendspringboot;

public class HelloResource {

  private String text;

  public String getText() {
    return text;
  }

  public void setText(String text) {
    this.text = text;
  }
}
