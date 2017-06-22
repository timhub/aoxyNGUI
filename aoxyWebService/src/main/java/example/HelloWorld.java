package example;

import org.springframework.web.bind.annotation.*;

import java.util.Date;

/**
 * Created by yangz on 2017-1-24.
 */
@RestController
@RequestMapping("/services")
@CrossOrigin(origins = "*")
public class HelloWorld {

  @RequestMapping(value = "/hello", method = RequestMethod.GET)
  public HelloBean sayHelloWordFrom(@RequestParam(value = "str", defaultValue = "hello") String from) {
    String result = "Hello, world, from " + from;

    System.out.println(result + " " + new Date());
    return new HelloBean(result);
  }
}
