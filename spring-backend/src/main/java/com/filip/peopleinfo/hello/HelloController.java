package com.filip.peopleinfo.hello;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping(path = "api/v1/hello")
public class HelloController
{
    @Autowired
    private HelloService helloService;

    @RequestMapping("/hello-world")
    public List<Hello> getHelloWorld(){
        return helloService.getHello();
    }

}
