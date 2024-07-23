package com.apilearning.rest.Controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController("/sayhello/")
public class Controller {

    @GetMapping({ "/", "hello" })
    public String Greet() {
        return "Hello Murali";
    }

    // @GetMapping("/says/{name}")
    // public String Greets(@PathVariable String name) {
    // return ""
    // }
}



