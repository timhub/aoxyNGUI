package example;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by yangz on 2017-1-24.
 */
@RestController
@RequestMapping("/services")
public class HelloWorld {

  @RequestMapping(value = "/hello", method = RequestMethod.GET)
  public HelloBean sayHelloWordFrom(@RequestParam(value = "str", defaultValue = "hello") String from) {
    String result = "Hello, world, from " + from;

    System.out.println(result);
    return new HelloBean(result);
  }
}
