package org.example.simplewebapp.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @RequestMapping ("/")
    /*@ResponseBody use this if you dont use @RestController*/
    public String greet(){
        return "Hello Gayashan!";
    }
    @RequestMapping ("/about")
    public String about(){
        return "This is a simple web application using Spring Boot.";
    }
}
