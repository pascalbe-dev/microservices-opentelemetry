package de.pascalbe.microservicesopentelemetry.opentelemetrybackendspringboot;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class HelloController {

  @RequestMapping("/")
  public HelloResource getHello() {
    HelloResource resource = new HelloResource();
    resource.setText("result");
    if (Math.random() < 0.5) {
      throw new RuntimeException("Does not work.");
    }
    return resource;
  }

}

